import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { OllamaEmbeddings } from '@langchain/ollama'
import { Pinecone } from '@pinecone-database/pinecone'
import fs from 'fs/promises'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'

async function ingestDocs() {
  // Initialize Pinecone
  const pinecone = new Pinecone({
    apiKey: process.env.PINECONE_API_KEY
  })
  const index = pinecone.Index(process.env.PINECONE_INDEX_NAME)

  // Initialize Ollama embeddings
  const embeddings = new OllamaEmbeddings({
    model: process.env.OLLAMA_EMBEDDING_MODEL
  })

  // Clone or access React docs (adjust path as needed)
  const docsPath = './content/learn' // Ensure this path matches your local React documentation repository
  const files = await fs.readdir(docsPath)

  // Process markdown files
  const processor = unified().use(remarkParse).use(remarkStringify)
  const documents = []

  for (const file of files) {
    if (file.endsWith('.md')) {
      const content = await fs.readFile(path.join(docsPath, file), 'utf-8')
      const tree = processor.parse(content)
      const text = processor.stringify(tree)
      documents.push({ text, metadata: { source: file } })
    }
  }

  // Split documents
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 1000,
    chunkOverlap: 200
  })
  const chunks = await splitter.createDocuments(
    documents.map((doc) => doc.text),
    documents.map((doc) => doc.metadata)
  )

  // Generate and store embeddings
  for (const chunk of chunks) {
    const embedding = await embeddings.embedQuery(chunk.pageContent)

    // Clean metadata to only include simple values that Pinecone accepts
    const cleanMetadata = {
      source: chunk.metadata.source || 'unknown',
      text: chunk.pageContent
    }

    await index.upsert([
      {
        id: `${cleanMetadata.source}-${Math.random().toString(36).slice(2)}`,
        values: embedding,
        metadata: cleanMetadata
      }
    ])
  }

  console.log('Ingestion complete!')
}

ingestDocs().catch(console.error)

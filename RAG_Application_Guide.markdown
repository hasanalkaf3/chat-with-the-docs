# Building a Retrieval-Augmented Generation (RAG) Application with Next.js

( <https://grok.com/chat/d006b550-f215-4b88-ac17-7e701e0e994a> )

This guide outlines how to build a production-ready RAG application using Next.js, LangChain, Pinecone, and Ollama, as specified. The application, named "Chat with Your Favorite Tech Documentation," allows users to ask questions about React documentation, with answers generated based solely on that content. The tech stack includes Next.js with the app router, LangChain for AI orchestration, Pinecone as the vector database, and Ollama’s `nomic-embed-text:latest` and `llama3.2:latest` models for embeddings and language processing, respectively.

## Overview

Retrieval-Augmented Generation (RAG) combines document retrieval with generative AI to provide accurate, context-specific answers. In this project:

- **React Documentation**: The source content, ingested from the React GitHub repository.
- **Pinecone**: Stores document embeddings for efficient similarity searches.
- **Ollama**: Generates embeddings and answers using specified models.
- **LangChain**: Orchestrates the retrieval and generation process.
- **Next.js**: Provides the frontend interface and backend API for user interaction.

The application will feature a chat interface where users can input questions, and the system will retrieve relevant documentation segments to generate precise answers.

## Prerequisites

Before starting, ensure you have:

- Node.js (version 18.17 or higher, as required by Next.js 15).
- A Pinecone account and API key ([Pinecone Documentation](https://docs.pinecone.io)).
- Ollama installed locally with `nomic-embed-text:latest` and `llama3.2:latest` models pulled ([Ollama Documentation](https://ollama.ai/docs)).
- Git installed to clone the React documentation repository.
- Basic familiarity with JavaScript, React, and Next.js.

## Step-by-Step Implementation

### 1. Set Up the Next.js Project

Create a new Next.js project using the latest stable version (likely 15.3.5, based on recent npm data from July 2025). The app router is required for modern routing.

```bash
npx create-next-app@latest my-rag-app
```

During setup, select:

- **TypeScript**: Yes, for type safety.
- **ESLint**: Yes, for code quality.
- **App Router**: Yes, to use the `app` directory.
- **Tailwind CSS**: Optional, but recommended for styling the chat interface.

This creates a project with the `app` directory for file-based routing. Verify the setup by running:

```bash
cd my-rag-app
npm run dev
```

Access the app at `http://localhost:3000`.

### 2. Install Dependencies

Install the necessary packages for LangChain, Pinecone, and document processing. Run:

```bash
npm install @langchain/core @langchain/ollama @pinecone-database/pinecone langchain
```

Additional utilities may include:

- `remark` and `unified` for markdown processing.
- `cheerio` if web scraping is needed (optional, as we’ll use markdown files).

Example `package.json` dependencies:

```json
{
  "dependencies": {
    "@langchain/core": "latest",
    "@langchain/ollama": "latest",
    "@pinecone-database/pinecone": "latest",
    "langchain": "latest",
    "next": "15.3.5",
    "react": "^19",
    "react-dom": "^19",
    "remark": "latest",
    "unified": "latest"
  }
}
```

### 3. Configure Ollama

Install Ollama on your local machine or server following the official instructions ([Ollama Documentation](https://ollama.ai/docs)). Pull the required models:

```bash
ollama pull nomic-embed-text:latest
ollama pull llama3.2:latest
```

Ensure Ollama is running locally (default port: 11434). In production, consider running Ollama on a dedicated server with sufficient resources, as it may be computationally intensive.

### 4. Set Up Pinecone

Sign up for a Pinecone account and create a new index:

- **Index Name**: `react-docs`.
- **Dimensions**: Match the output of `nomic-embed-text:latest` (typically 768; verify by generating a sample embedding).
- **Metric**: Cosine similarity for text similarity searches.

Obtain your Pinecone API key and environment from the dashboard. Store them in a `.env.local` file in your Next.js project:

```env
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_ENVIRONMENT=your-pinecone-environment
```

### 5. Ingest React Documentation

Create a script to ingest the React documentation from its GitHub repository ([React Documentation Repository](https://github.com/reactjs/react.dev)).

#### Script Setup

Create a `scripts/ingest.js` file to handle document ingestion. This script will:

- Clone the React documentation repository.
- Process markdown files to extract text.
- Split text into chunks.
- Generate embeddings using Ollama.
- Store embeddings in Pinecone.

#### Sample Ingestion Script

Below is a sample script to perform these tasks. Adjust paths and configurations as needed.

```javascript
// scripts/ingest.js
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter'
import { OllamaEmbeddings } from '@langchain/ollama'
import { PineconeClient } from '@pinecone-database/pinecone'
import fs from 'fs/promises'
import path from 'path'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'

async function ingestDocs() {
  // Initialize Pinecone
  const pinecone = new PineconeClient()
  await pinecone.init({
    apiKey: process.env.PINECONE_API_KEY,
    environment: process.env.PINECONE_ENVIRONMENT
  })
  const index = pinecone.Index('react-docs')

  // Initialize Ollama embeddings
  const embeddings = new OllamaEmbeddings({
    model: 'nomic-embed-text:latest',
    baseUrl: 'http://localhost:11434'
  })

  // Clone or access React docs (simplified; in practice, clone via git)
  const docsPath = './react-docs/src/content' // Adjust path after cloning
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
    await index.upsert([
      {
        id: `${chunk.metadata.source}-${Math.random().toString(36).slice(2)}`,
        values: embedding,
        metadata: chunk.metadata
      }
    ])
  }

  console.log('Ingestion complete!')
}

ingestDocs().catch(console.error)
```

Run the script:

```bash
node scripts/ingest.js
```

**Notes:**

- Clone the React repository manually or automate it using a library like `simple-git`.
- Adjust the `docsPath` to match the repository structure.
- Verify the embedding dimensions before creating the Pinecone index.
- This is a one-time operation; in production, consider automating updates to the documentation.

### 6. Implement the Chat API

Create an API route in Next.js to handle user queries. The route will:

- Receive a question via POST request.
- Generate an embedding for the question.
- Retrieve relevant document chunks from Pinecone.
- Generate an answer using Ollama’s language model.
- Return the answer to the client.

#### API Route Code

Create `app/api/chat/route.js`:

```javascript
// app/api/chat/route.js
import { NextResponse } from 'next/server'
import { OllamaEmbeddings, OllamaChatModel } from '@langchain/ollama'
import { PineconeClient } from '@pinecone-database/pinecone'
import { ChatPromptTemplate } from '@langchain/core/prompts'

export async function POST(request) {
  try {
    const { question } = await request.json()
    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    // Initialize Pinecone
    const pinecone = new PineconeClient()
    await pinecone.init({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT
    })
    const index = pinecone.Index('react-docs')

    // Initialize Ollama embeddings
    const embeddings = new OllamaEmbeddings({
      model: 'nomic-embed-text:latest',
      baseUrl: 'http://localhost:11434'
    })

    // Generate query embedding
    const queryEmbedding = await embeddings.embedQuery(question)

    // Retrieve relevant documents
    const queryResponse = await index.query({
      vector: queryEmbedding,
      topK: 3,
      includeMetadata: true
    })

    const docs = queryResponse.matches.map((match) => match.metadata.text)

    // Initialize Ollama chat model
    const chatModel = new OllamaChatModel({
      model: 'llama3.2:latest',
      baseUrl: 'http://localhost:11434',
      temperature: 0
    })

    // Create prompt
    const prompt = ChatPromptTemplate.fromTemplate(`
      Answer the question based only on the provided documentation. If the answer is not in the documentation, say so.
      Question: {question}
      Documentation: {docs}
    `)

    // Generate answer
    const response = await chatModel.invoke(
      await prompt.format({ question, docs: docs.join('\n') })
    )

    return NextResponse.json({ answer: response })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

**Notes:**

- The `topK: 3` retrieves the top 3 relevant documents; adjust as needed.
- The prompt ensures answers are based only on the documentation.
- Error handling ensures robustness.

### 7. Build the Frontend Chat Interface

Create a chat interface in the `app` directory. The interface will include an input field for questions and a display area for conversation history.

#### Frontend Code

Create `app/page.tsx`:

```typescript
// app/page.tsx
'use client'

import { useState } from 'react'

interface Message {
  role: 'user' | 'bot'
  content: string
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = { role: 'user', content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input })
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error)

      const botMessage: Message = { role: 'bot', content: data.answer }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        role: 'bot',
        content: 'Sorry, something went wrong. Please try again.'
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Chat with React Documentation</h1>
      <div className="border rounded-lg p-4 h-96 overflow-y-auto mb-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-2 ${
              msg.role === 'user' ? 'text-right' : 'text-left'
            }`}
          >
            <span
              className={`inline-block p-2 rounded-lg ${
                msg.role === 'user' ? 'bg-blue-100' : 'bg-gray-100'
              }`}
            >
              {msg.content}
            </span>
          </div>
        ))}
        {loading && <div className="text-center">Loading...</div>}
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question about React..."
          className="flex-1 p-2 border rounded-lg"
          disabled={loading}
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg"
          disabled={loading}
        >
          Send
        </button>
      </form>
    </div>
  )
}
```

**Notes:**

- Uses Tailwind CSS for styling (if enabled during setup).
- Maintains conversation history in state.
- Displays loading states and error messages for better UX.

### 8. Production Readiness

To ensure the application is production-ready:

- **Error Handling**: Implemented in the API and frontend to handle failures gracefully.
- **Security**: Store API keys in `.env.local` and ensure they’re not exposed in client-side code. For production, set environment variables on the hosting platform (e.g., Vercel).
- **Performance**: Limit the number of retrieved documents (`topK`) and optimize chunk sizes for ingestion.
- **Deployment**:
  - **Next.js**: Deploy to Vercel for seamless hosting ([Vercel Documentation](https://vercel.com/docs)).
  - **Ollama**: Run on a dedicated server (e.g., AWS EC2) with sufficient GPU/CPU resources. Configure the Next.js app to connect to this server’s Ollama API.
  - **Pinecone**: Use the production tier if needed for scalability.
- **Monitoring**: Consider integrating LangSmith for tracing and debugging, as suggested in LangChain tutorials ([LangSmith Documentation](https://smith.langchain.com)).

### 9. Testing and Validation

- **Ingestion**: Run the ingestion script and verify that vectors are stored in Pinecone via the dashboard.
- **API**: Test the `/api/chat` endpoint with sample questions using tools like Postman.
- **Frontend**: Verify the chat interface displays questions and answers correctly, with proper handling of loading and error states.
- **Accuracy**: Ask questions like “What is useState in React?” and ensure answers are based on the documentation.

### 10. Optional Enhancements

- **Chat History**: Implement conversation context using LangChain’s memory features, as outlined in the QA with chat history tutorial ([LangChain QA Tutorial](https://js.langchain.com/docs/tutorials/qa_chat_history)).
- **Streaming Responses**: Update the API to stream answers for a more interactive experience.
- **Documentation Updates**: Automate periodic ingestion to keep the documentation current.

## Resources

The following resources were instrumental in planning this implementation:

- [LangChain RAG Tutorial](https://js.langchain.com/docs/tutorials/rag): Guides on building RAG applications.
- [LangChain Next.js Template](https://github.com/langchain-ai/langchain-nextjs-template): A starter template for inspiration.
- [Next.js Documentation](https://nextjs.org/docs): Details on app router and API routes.
- [Pinecone Documentation](https://docs.pinecone.io): Instructions for vector database setup.
- [Ollama Documentation](https://ollama.ai/docs): Model setup and API usage.
- [React Documentation Repository](https://github.com/reactjs/react.dev): Source for documentation content.

## Conclusion

By following these steps, you can build a production-ready RAG application that allows users to interact with React documentation via a chatbot. The application leverages Next.js for a robust frontend and backend, LangChain for AI orchestration, Pinecone for efficient document retrieval, and Ollama for advanced embeddings and language processing. With proper error handling, secure configurations, and a user-friendly interface, the application meets the requirements for a valuable, non-lambda AI product.

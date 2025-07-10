import { NextResponse } from 'next/server'
import { OllamaEmbeddings, ChatOllama } from '@langchain/ollama'
import { Pinecone } from '@pinecone-database/pinecone'
import { ChatPromptTemplate } from '@langchain/core/prompts'

export async function POST(request: Request) {
  try {
    const { question } = await request.json()
    if (!question) {
      return NextResponse.json(
        { error: 'Question is required' },
        { status: 400 }
      )
    }

    // Initialize Pinecone
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY!
    })
    const index = pinecone.Index(process.env.PINECONE_INDEX_NAME!)

    // Initialize Ollama embeddings
    const embeddings = new OllamaEmbeddings({
      model: process.env.OLLAMA_EMBEDDING_MODEL!
    })

    // Generate query embedding
    const queryEmbedding = await embeddings.embedQuery(question)

    // Retrieve relevant documents
    const queryResponse = await index.query({
      vector: queryEmbedding,
      topK: 3,
      includeMetadata: true
    })

    // Log query response for debugging
    console.log('Query response:', JSON.stringify(queryResponse, null, 2))

    // Retrieve text content
    const docs = queryResponse.matches.map((match) => {
      if (!match.metadata?.text) {
        console.error(`No text found in metadata for ID: ${match.id}`)
        return ''
      }
      return match.metadata.text
    })

    // Initialize Ollama chat model
    const chatModel = new ChatOllama({
      model: process.env.OLLAMA_CHAT_MODEL!,
      temperature: 0
    })

    // Create prompt
    const prompt = ChatPromptTemplate.fromTemplate(`
      Use the following pieces of context to answer the question at the end. If you don't know the answer, just say that you don't know, don't try to make up an answer.

      Context:
      {context}

      Question: {question}
    `)

    const formattedPrompt = await prompt.format({
      question,
      context: docs.join('\n\n\n')
    })

    console.log('Formatted prompt:', formattedPrompt)

    // Generate answer
    const response = await chatModel.invoke(formattedPrompt)

    // Extract just the text content from the response
    const answerText =
      typeof response.content === 'string'
        ? response.content
        : response.content?.toString() || 'No answer generated'

    return NextResponse.json({ answer: answerText })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

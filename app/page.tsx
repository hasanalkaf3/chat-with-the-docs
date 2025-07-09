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
                msg.role === 'user' ? 'bg-blue-700' : 'bg-gray-700'
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

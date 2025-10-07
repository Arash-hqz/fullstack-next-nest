"use client"
import { useState } from "react"
import { Send, ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation"

export default function ChatPage() {
  const [messages, setMessages] = useState<{ from: "user" | "support"; text: string }[]>([])
  const [input, setInput] = useState("")
  const router = useRouter()

  const handleSend = () => {
    if (!input.trim()) return
    const newMessage = { from: "user", text: input }
    setMessages((prev) => [...prev, newMessage])
    setInput("")
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "support", text: "پیام شما دریافت شد ✅" }])
    }, 1000)
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <div className="flex items-center gap-3 bg-red-600 text-white p-4">
        <button onClick={() => router.back()}>
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h2 className="text-lg font-semibold">پشتیبانی آنلاین</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-2 rounded-lg text-sm max-w-[75%] ${
              msg.from === "user"
                ? "ml-auto bg-red-100 text-gray-800"
                : "mr-auto bg-gray-200 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="p-3 border-t flex items-center gap-2 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="پیام خود را بنویسید..."
          className="flex-1 border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          onClick={handleSend}
          className="bg-red-600 text-white rounded-lg p-2 hover:bg-red-700 transition"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

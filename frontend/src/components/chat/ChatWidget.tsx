"use client"
import { useState } from "react"
import { X, Send } from "lucide-react"

interface ChatWidgetProps {
  onClose: () => void
}

export function ChatWidget({ onClose }: ChatWidgetProps) {
  const [messages, setMessages] = useState<{ from: "user" | "support"; text: string }[]>([])
  const [input, setInput] = useState("")

  const handleSend = () => {
    if (!input.trim()) return

    const newMessage = { from: "user", text: input }
    setMessages((prev) => [...prev, newMessage])
    setInput("")

    // اینجا بعداً API رو صدا می‌زنیم → مثلا fetch("/api/chat", { method: "POST", body: JSON.stringify(newMessage) })
    setTimeout(() => {
      setMessages((prev) => [...prev, { from: "support", text: "پیام شما دریافت شد ✅" }])
    }, 1000)
  }

  return (
    <div className="fixed bottom-24 right-6 w-80 h-96 bg-white shadow-2xl rounded-xl flex flex-col overflow-hidden z-50">
      {/* Header */}
      <div className="flex items-center justify-between bg-red-600 text-white p-3">
        <h3 className="font-semibold">پشتیبانی آنلاین</h3>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-3 space-y-2">
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
      <div className="p-3 border-t flex items-center gap-2">
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

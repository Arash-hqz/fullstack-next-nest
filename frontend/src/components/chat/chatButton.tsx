"use client"
import { MessageCircle } from "lucide-react"
import { useState } from "react"
import { ChatWidget } from "./ChatWidget"
import { useMediaQuery } from "react-responsive"
import { useRouter } from "next/navigation"

export function ChatButton() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 1024 }) // تبلت و موبایل
  const router = useRouter()

  const handleClick = () => {
    if (isMobile) {
      router.push("/chat") // ببر به صفحه جدا برای موبایل
    } else {
      setOpen(!open) // باز/بسته شدن پنجره پاپ‌آپ در دسکتاپ
    }
  }

  return (
    <>
      <button
        onClick={handleClick}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-red-600 text-white shadow-lg flex items-center justify-center hover:bg-red-700 transition-colors z-50"
      >
        <MessageCircle className="w-7 h-7" />
      </button>

      {open && !isMobile && <ChatWidget onClose={() => setOpen(false)} />}
    </>
  )
}

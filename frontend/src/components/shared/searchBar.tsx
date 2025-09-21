"use client"

import { useEffect, useRef, useState } from "react"
import { Search } from "lucide-react"

export function SearchBar() {
  const [expanded, setExpanded] = useState(false)
  const [locked, setLocked] = useState(false) // یعنی با کلیک باز شده
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<string[]>([])
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // بستن خودکار بعد 3 دقیقه
  useEffect(() => {
    if (expanded) {
      if (timerRef.current) clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => {
        setExpanded(false)
        setLocked(false)
      }, 3 * 60 * 1000) // 3 دقیقه
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [expanded])

  // بستن با کلیک بیرون
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setExpanded(false)
        setLocked(false)
      }
    }
    if (expanded) {
      document.addEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [expanded])

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (query.trim() !== "") {
        setResults([
          `نتیجه اول برای "${query}"`,
          `نتیجه دوم برای "${query}"`,
        ])
      }
      setQuery("")
      setExpanded(false)
      setLocked(false)
    }
  }

  return (
    <div dir="rtl" ref={containerRef} className="flex flex-col items-center gap-4 pt-1.5">
      {/* سرچ بار */}
      <div
        className={`flex items-center transition-all duration-300 border rounded-full overflow-hidden cursor-pointer
          ${
            expanded
              ? "w-[200px] h-8 border-red-500 px-3"
              : "w-8 h-8 border-gray-400 justify-center"
          }
        `}
        onMouseEnter={() => {
          if (!locked) setExpanded(true)
        }}
        onMouseLeave={() => {
          if (!locked) setExpanded(false)
        }}
        onClick={() => {
          setExpanded(true)
          setLocked(true)
        }}
      >
        {expanded ? (
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            placeholder="جستجو..."
            className="flex-1 outline-none text-sm px-2"
          />
        ) : (
          <Search className="text-gray-600 h-5" />
        )}
      </div>

      {/* نتایج سرچ */}
      {results.length > 0 && (
        <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-3 text-sm">
          <p className="font-semibold mb-2">نتایج:</p>
          <ul className="space-y-1">
            {results.map((res, i) => (
              <li key={i} className="text-gray-700">
                {res}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

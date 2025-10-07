import React, { useEffect, useState } from 'react'
import { AdminLayout } from '@/components/admin/Layout'
import { adminApi } from '@/services/adminApi'
import Link from 'next/link'

export default function AdminArticles() {
  return (
    <AdminLayout>
      <ArticlesContent />
    </AdminLayout>
  )
}

function ArticlesContent() {
  const [items, setItems] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    adminApi.list('articles').then((r) => { setItems(r.data); setLoading(false) })
  }, [])

  if (loading) return <div>در حال بارگذاری...</div>

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">مقالات</h2>
        <Link href="/admin/articles/new" className="px-4 py-2 bg-red-600 text-white rounded">مقاله جدید</Link>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
        <table className="w-full table-auto">
          <thead>
            <tr className="text-sm text-gray-500">
              <th className="text-right p-2">عنوان</th>
              <th className="p-2">وضعیت</th>
              <th className="p-2">عملیات</th>
            </tr>
          </thead>
          <tbody>
            {items.map((it) => (
              <tr key={it.id} className="border-t">
                <td className="p-2 text-right">{it.title}</td>
                <td className="p-2">{it.status}</td>
                <td className="p-2">
                  <div className="flex gap-2">
                    <Link href={`/admin/articles/${it.id}`} className="px-3 py-1 bg-gray-100 rounded">View</Link>
                    <button className="px-3 py-1 bg-yellow-100 rounded">Edit</button>
                    <button className="px-3 py-1 bg-red-100 rounded">Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
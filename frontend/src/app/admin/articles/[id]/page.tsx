'use client';
import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../../../components/layout/admin/layout'
import { adminApi } from '../../../services/adminApi'
import { useRouter } from 'next/navigation'

export default function AdminArticleDetail({ params }: { params: { id: string } }) {
  const [item, setItem] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    adminApi.get('articles', params.id).then((r) => { setItem(r.data); setLoading(false) })
  }, [params.id])

  if (loading) return <div>در حال بارگذاری...</div>

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">ویرایش/نمایش مقاله</h1>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow">
          <div className="mb-4"><strong>عنوان:</strong> {item.title}</div>
          <div className="mb-4"><strong>متن:</strong> {item.description}</div>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-yellow-500 text-white rounded">ذخیره</button>
            <button className="px-4 py-2 bg-red-500 text-white rounded" onClick={() => router.push('/admin/articles')}>بازگشت</button>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}

'use client';

import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../../components/layout/admin/layout'
import { adminApi } from '../../services/adminApi'
import Link from 'next/link'

export default function AdminProducts() {
  const [items, setItems] = useState<any[]>([])
  useEffect(() => { adminApi.list('products').then((r)=>setItems(r.data)) }, [])

  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">محصولات</h2>
          <Link href="/admin/products/new" className="px-4 py-2 bg-red-600 text-white rounded">محصول جدید</Link>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
          <ul className="space-y-3">
            {items.map(it=> (
              <li key={it.id} className="flex items-center justify-between border-b py-2">
                <div>{it.title}</div>
                <div className="flex gap-2">
                  <Link href={`/admin/products/${it.id}`} className="px-3 py-1 bg-gray-100 rounded">View</Link>
                  <button className="px-3 py-1 bg-yellow-100 rounded">Edit</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminLayout>
  )
}

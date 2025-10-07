'use client';
import React from 'react'
import { AdminLayout } from '../../../components/layout/admin/layout'

export default function AdminProjects() {
  return (
    <AdminLayout>
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">پروژه‌ها</h2>
          <button className="px-4 py-2 bg-red-600 text-white rounded">پروژه جدید</button>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
          <p className="text-gray-500">لیست پروژه‌ها اینجا نمایش داده می‌شود (mock)</p>
        </div>
      </div>
    </AdminLayout>
  )
}
'use client';

import React, { useEffect, useState } from 'react'
import { AdminLayout } from '../../../components/layout/admin/layout'
import { adminApi } from '../../services/adminApi'

export default function AdminUsers() {
  const [users, setUsers] = useState<any[]>([])
  useEffect(()=>{ adminApi.list('users').then(r=>setUsers(r.data)) },[])

  return (
    <AdminLayout>
      <div>
        <h2 className="text-xl font-bold mb-4">کاربران</h2>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow">
          <table className="w-full table-auto">
            <thead><tr className="text-sm text-gray-500"><th className="p-2">نام</th><th className="p-2">عملیات</th></tr></thead>
            <tbody>
              {users.map(u=> (
                <tr key={u.id} className="border-t"><td className="p-2">{u.name || u.email}</td><td className="p-2"><button className="px-3 py-1 bg-yellow-100 rounded">Edit</button></td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  )
}
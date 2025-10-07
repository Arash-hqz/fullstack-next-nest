import axios from 'axios'

const BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001'

export const adminApi = {
  // get stats for dashboard
  async getStats() {
    // replace with: return axios.get(`${BASE}/admin/stats`)
    return Promise.resolve({ data: { users: 124, projects: 12, revenue: 124500000 } })
  },

  // list items with pagination
  async list(resource: 'articles'|'products'|'projects'|'users', page = 1) {
    // replace with real API call
    const fake = {
      articles: [{ id: 'a1', title: 'نمونه مقاله ۱', status: 'draft' }],
      products: [{ id: 'p1', title: 'ژنراتور ۵۰۰KW' }],
      projects: [{ id: 'pr1', title: 'نیروگاه سیکل ترکیبی' }],
      users: [{ id: 'u1', name: 'علی' }],
    }
    return Promise.resolve({ data: fake[resource] })
  },

  async get(resource: string, id: string) {
    // placeholder
    return Promise.resolve({ data: { id, title: `${resource} ${id}`, description: 'توضیحات نمونه' } })
  },

  async create(resource: string, payload: any) {
    // POST to server
    // return axios.post(`${BASE}/${resource}`, payload)
    console.log('create', resource, payload)
    return Promise.resolve({ data: { ok: true } })
  },

  async update(resource: string, id: string, payload: any) {
    console.log('update', resource, id, payload)
    return Promise.resolve({ data: { ok: true } })
  },

  async remove(resource: string, id: string) {
    console.log('remove', resource, id)
    return Promise.resolve({ data: { ok: true } })
  },
}
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { list, remove, seedIfEmpty } from '../../services/newsService'

export default function ManageNews() {
  const [rows, setRows] = useState([])
  const [page, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const limit = 10

  const refresh = (p = page) => {
    seedIfEmpty()
    const { items, total: t } = list({ page: p, limit })
    setRows(items)
    setTotal(t)
  }

  useEffect(() => {
    refresh(1)
  }, [])
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Manage News</h1>
        <Link to="/admin/news/add" className="px-4 py-2 bg-yellow-500 text-black rounded-lg font-semibold hover:bg-yellow-400">Add News</Link>
      </div>

      <div className="bg-white rounded-xl shadow overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-neutral-50">
            <tr>
              <th className="text-left px-4 py-3">Title</th>
              <th className="text-left px-4 py-3">Category</th>
              <th className="text-left px-4 py-3">Date</th>
              <th className="text-left px-4 py-3">Author</th>
              <th className="text-left px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className="border-t hover:bg-neutral-50">
                <td className="px-4 py-3 font-medium">{r.title}</td>
                <td className="px-4 py-3">{r.category}</td>
                <td className="px-4 py-3">{r.date}</td>
                <td className="px-4 py-3">{r.author}</td>
                <td className="px-4 py-3 space-x-2">
                  <Link to={`/admin/news/${r.id}/edit`} className="px-3 py-1 rounded border hover:bg-neutral-100">Edit</Link>
                  <button onClick={() => { remove(r.id); refresh() }} className="px-3 py-1 rounded border text-red-600 hover:bg-red-50">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm">
        <span>Page 1 of 1</span>
        <div className="space-x-2">
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            disabled={page <= 1}
            onClick={() => { const np = Math.max(1, page - 1); setPage(np); refresh(np) }}
          >Prev</button>
          <button
            className="px-3 py-1 rounded border disabled:opacity-50"
            disabled={page * limit >= total}
            onClick={() => { const np = page + 1; setPage(np); refresh(np) }}
          >Next</button>
        </div>
      </div>
    </div>
  )
}



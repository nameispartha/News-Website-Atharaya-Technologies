import React, { useMemo, useState } from 'react'
import { create } from '../../services/newsService'
import { useNavigate } from 'react-router-dom'

export default function AddNews() {
  const navigate = useNavigate()
  const categories = useMemo(() => ([
    'Live TV', 'Latest', 'World', 'India', 'Business',
    'Entertainment', 'Sports', 'Opinions', 'Videos', 'Photos',
    'Webstory', 'TV Show', 'Lifestyle', 'Science', 'Tech'
  ]), [])

  const categoryToSubcategories = {
    Entertainment: ['Hollywood', 'Bollywood'],
    Sports: ['Football', 'Cricket'],
  }

  const [selectedCategory, setSelectedCategory] = useState('')
  const [selectedSubcategory, setSelectedSubcategory] = useState('')

  const availableSubcategories = categoryToSubcategories[selectedCategory] || []

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Add News</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const form = e.currentTarget
          const data = {
            title: form.title.value,
            image: form.image.files?.[0]?.name || '',
            category: selectedCategory,
            subcategory: selectedSubcategory,
            author: form.author.value,
            date: form.date.value,
            content: form.content.value,
          }
          create(data)
          navigate('/admin/news')
        }}
        className="bg-white rounded-xl shadow p-4 grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Title</label>
          <input name="title" type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-500" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Image</label>
          <input name="image" type="file" className="w-full border rounded-lg px-3 py-2" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Category</label>
          <select
            className="w-full border rounded-lg px-3 py-2"
            value={selectedCategory}
            onChange={(e) => { setSelectedCategory(e.target.value); setSelectedSubcategory('') }}
          >
            <option value="" disabled>Select a category</option>
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Subcategory</label>
          <select
            className="w-full border rounded-lg px-3 py-2 disabled:bg-neutral-100"
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            disabled={availableSubcategories.length === 0}
          >
            {availableSubcategories.length === 0 ? (
              <option value="">No subcategories</option>
            ) : (
              <>
                <option value="" disabled>Select a subcategory</option>
                {availableSubcategories.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </>
            )}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input name="author" type="text" className="w-full border rounded-lg px-3 py-2" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Date</label>
          <input name="date" type="date" className="w-full border rounded-lg px-3 py-2" required />
        </div>

        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea name="content" rows="8" className="w-full border rounded-lg px-3 py-2" required />
        </div>

        <div className="col-span-1 md:col-span-2 flex items-center justify-end gap-2">
          <button type="button" onClick={() => navigate('/admin/news')} className="px-4 py-2 rounded border">Cancel</button>
          <button type="submit" className="px-4 py-2 rounded bg-yellow-500 text-black font-semibold hover:bg-yellow-400">Save</button>
        </div>
      </form>
    </div>
  )
}



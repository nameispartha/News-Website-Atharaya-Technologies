const STORAGE_KEY = 'wion_news_items'

function readAll() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : []
  } catch (_) {
    return []
  }
}

function writeAll(items) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
}

export function seedIfEmpty() {
  const items = readAll()
  if (items.length === 0) {
    const seeded = [
      { id: 101, title: 'Global markets rally as inflation cools', category: 'Business', subcategory: '', date: '2025-09-01', author: 'Editor', content: '...', image: '' },
      { id: 102, title: 'Mars rover sends new high-res images', category: 'Science', subcategory: '', date: '2025-09-01', author: 'Science Desk', content: '...', image: '' },
      { id: 103, title: 'India clinches series with dramatic finish', category: 'Sports', subcategory: 'Cricket', date: '2025-08-30', author: 'Sports Desk', content: '...', image: '' },
    ]
    writeAll(seeded)
  }
}

export function list({ page = 1, limit = 10 } = {}) {
  const items = readAll().sort((a, b) => (b.date || '').localeCompare(a.date || ''))
  const start = (page - 1) * limit
  const slice = items.slice(start, start + limit)
  return { items: slice, total: items.length, page, limit }
}

export function getById(id) {
  return readAll().find((x) => String(x.id) === String(id)) || null
}

export function create(data) {
  const items = readAll()
  const id = Date.now()
  items.unshift({ id, ...data })
  writeAll(items)
  return id
}

export function update(id, data) {
  const items = readAll()
  const idx = items.findIndex((x) => String(x.id) === String(id))
  if (idx !== -1) {
    items[idx] = { ...items[idx], ...data }
    writeAll(items)
    return true
  }
  return false
}

export function remove(id) {
  const items = readAll()
  writeAll(items.filter((x) => String(x.id) !== String(id)))
}

export function stats() {
  const items = readAll()
  const total = items.length
  const categories = new Set(items.map((x) => x.category)).size
  const authors = new Set(items.map((x) => x.author)).size
  const latest = items.slice(0, 5)
  return { total, categories, authors, latest }
}



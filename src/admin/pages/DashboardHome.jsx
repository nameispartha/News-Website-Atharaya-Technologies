import React, { useEffect, useState } from 'react'
import { FiFileText, FiTag, FiUsers, FiTrendingUp, FiClock, FiPlusCircle } from 'react-icons/fi'
import { seedIfEmpty, stats } from '../../services/newsService'

export default function DashboardHome() {
  const [data, setData] = useState({ total: 0, categories: 0, authors: 0, latest: [] })
  useEffect(() => {
    seedIfEmpty()
    setData(stats())
  }, [])
  const kpis = [
    {
      label: 'Total News',
      value: String(data.total),
      icon: FiFileText,
      gradient: 'from-yellow-500 to-yellow-600',
    },
    {
      label: 'Categories',
      value: String(data.categories),
      icon: FiTag,
      gradient: 'from-indigo-500 to-indigo-600',
    },
    {
      label: 'Authors',
      value: String(data.authors),
      icon: FiUsers,
      gradient: 'from-emerald-500 to-emerald-600',
    },
  ]

  const latest = data.latest.map((x) => ({ title: x.title, category: x.category, time: x.date }))

  return (
    <div className="space-y-8">
      {/* Top bar */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-sm text-neutral-500">Overview of your newsroom performance</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black text-white hover:bg-neutral-800">
            <FiPlusCircle className="w-4 h-4" />
            New Article
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {kpis.map((kpi, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-5 relative overflow-hidden">
            <div className={`absolute -right-6 -top-6 w-24 h-24 rounded-full bg-gradient-to-br ${kpi.gradient} opacity-20`} />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-neutral-500">{kpi.label}</p>
                <p className="text-3xl font-extrabold mt-1">{kpi.value}</p>
              </div>
              <div className={`p-3 rounded-xl text-white bg-gradient-to-br ${kpi.gradient} shadow-lg`}>
                <kpi.icon className="w-6 h-6" />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-emerald-600 text-sm font-medium">
              <FiTrendingUp className="w-4 h-4" /> +4% this week
            </div>
          </div>
        ))}
      </div>

      {/* Middle grid: Performance + Latest */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Performance */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Performance</h2>
            <span className="text-xs text-neutral-500">Last 7 days</span>
          </div>
          {/* Simple bar chart placeholder */}
          <div className="h-48 flex items-end gap-3">
            {[40, 55, 30, 70, 65, 50, 80].map((h, i) => (
              <div key={i} className="flex-1">
                <div className="bg-yellow-500 rounded-t-md" style={{ height: `${h}%` }} />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2 text-sm text-neutral-500">
            <FiClock className="w-4 h-4" /> Updated a minute ago
          </div>
        </div>

        {/* Latest Published */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-100 p-5">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-lg font-semibold">Latest Published</h2>
            <button className="text-sm text-yellow-700 hover:underline">View all</button>
          </div>
          <ul className="divide-y">
            {latest.map((item, idx) => (
              <li key={idx} className="py-3 flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-neutral-200 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{item.title}</p>
                  <p className="text-xs text-neutral-500 mt-1">{item.category} • {item.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}



import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { FiMenu, FiX, FiHome, FiPlusCircle, FiList, FiLogOut } from 'react-icons/fi'
import { useAuth } from '../../context/AuthContext'

export default function AdminLayout() {
  const [open, setOpen] = useState(false)
  const { logout } = useAuth()
  const { pathname } = useLocation()

  const NavItem = ({ to, icon: Icon, label }) => (
    <Link
      to={to}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-neutral-800 transition-colors ${
        pathname === to ? 'bg-neutral-800 text-yellow-400' : 'text-white'
      }`}
      onClick={() => setOpen(false)}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{label}</span>
    </Link>
  )

  return (
    <div className="min-h-screen bg-neutral-100">
      <div className="lg:hidden sticky top-0 z-30 bg-black text-white flex items-center justify-between px-4 py-3 shadow">
        <span className="font-bold">Admin Panel</span>
        <button onClick={() => setOpen(!open)} className="p-2 rounded hover:bg-neutral-800">
          {open ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
        </button>
      </div>

      <div className="flex">
        <aside className={`fixed lg:sticky lg:top-0 inset-y-0 left-0 w-72 h-screen lg:h-screen bg-black p-4 space-y-3 transform transition-transform duration-300 z-40 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}>
          <div className="hidden lg:flex items-center gap-2 px-2 py-1">
            <div className="w-8 h-8 bg-wionYellow rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="text-white text-xl font-bold">WION Admin</span>
          </div>
          <nav className="mt-2 space-y-1">
            <NavItem to="/admin" icon={FiHome} label="Dashboard" />
            <NavItem to="/admin/news/add" icon={FiPlusCircle} label="Add News" />
            <NavItem to="/admin/news" icon={FiList} label="Manage News" />
            <button onClick={logout} className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-white hover:bg-neutral-800">
              <FiLogOut className="w-5 h-5" />
              <span className="font-medium">Logout</span>
            </button>
          </nav>
        </aside>

        <main className="flex-1 w-full p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}



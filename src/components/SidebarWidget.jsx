import React from 'react'

export default function SidebarWidget({ title }) {
  return (
    <div className="border border-neutral-200 bg-white">
      <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">{title}</div>
      <div className="aspect-[4/3] bg-neutral-200">
        <img src="https://picsum.photos/640/480" className="w-full h-full object-cover" alt="ad" />
      </div>
    </div>
  )
}




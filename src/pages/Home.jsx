import React from 'react'
import LatestNews from '../components/LatestNews.jsx'
import SidebarWidget from '../components/SidebarWidget.jsx'
import AdBanner from '../components/AdBanner.jsx'

export default function Home() {
  return (
    <div className="content-wrap">
      <main className="container-page grid grid-cols-1 lg:grid-cols-3 gap-6">
        <LatestNews />

        <aside className="space-y-4">
          <SidebarWidget title="You May Like" />
          <SidebarWidget title="Advertisement" />
          <SidebarWidget title="More from" />
          <SidebarWidget title="Advertisement" />
        </aside>
      </main>
      <AdBanner />
    </div>
  )
}




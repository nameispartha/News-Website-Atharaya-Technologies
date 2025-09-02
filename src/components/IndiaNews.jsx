import React from 'react'
import { Link } from 'react-router-dom'

function SmallCard({ seed }) {
  return (
    <article className="flex flex-col">
      <img src={`https://picsum.photos/seed/india-${seed}/420/260`} alt="thumb" className="w-full h-40 object-cover" />
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">India story headline placeholder matching layout</h3>
      <span className="mt-1 text-[11px] text-neutral-500">1 hr ago · India</span>
    </article>
  )
}

function RightListItem({ seed }) {
  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <img src={`https://picsum.photos/seed/inr-${seed}/88/66`} className="w-[88px] h-[66px] object-cover" alt="thumb" />
      <a className="text-[12px] leading-4 hover:text-yellow-700 line-clamp-3" href="#">Short India sidebar headline item</a>
    </div>
  )
}

export default function IndiaNews() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / India
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h2 className="text-lg font-semibold">India News</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <img src={`https://picsum.photos/seed/india-hero/1000/560`} className="w-full h-auto object-cover" alt="hero" />
            <h3 className="mt-3 text-[18px] font-semibold leading-6">Another cloudburst hits Uttarakhand, Tehri Garhwal district receives heavy rain</h3>
          </div>
          <aside className="space-y-3">
            <img src={`https://picsum.photos/seed/ad-india/360/90`} alt="ad" className="w-full h-auto object-cover border" />
            {Array.from({ length: 5 }).map((_, i) => (
              <RightListItem seed={i + 1} key={i} />
            ))}
          </aside>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SmallCard seed={`row1-${i}`} key={i} />
          ))}
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <img key={i} src={`https://picsum.photos/seed/in-yml-${i}/540/320`} className="w-full h-48 object-cover" alt="yml" />
            ))}
          </div>
        </div>

        <div className="mt-8">
          <img src={`https://picsum.photos/seed/in-promo/1100/280`} className="w-full object-cover" alt="promo" />
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
            <img src={`https://picsum.photos/seed/in-feature-1/600/360`} className="w-full h-full object-cover" alt="feature" />
            <img src={`https://picsum.photos/seed/in-feature-2/600/360`} className="w-full h-full object-cover" alt="feature" />
          </div>
          <aside>
            {Array.from({ length: 5 }).map((_, i) => (
              <RightListItem seed={`r2-${i}`} key={i} />
            ))}
          </aside>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <SmallCard seed={`grid-${i}`} key={i} />
          ))}
        </div>

        <div className="mt-10">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <img key={`yml2-${i}`} src={`https://picsum.photos/seed/in-yml2-${i}/540/320`} className="w-full h-48 object-cover" alt="yml" />
            ))}
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <SmallCard seed={`bottom-${i}`} key={`b-${i}`} />
          ))}
        </div>

        <div className="mt-6 flex justify-center items-center">
          <img src={`https://picsum.photos/seed/in-pagination/1100/90`} alt="bottom-ad" className="w-full object-cover" />
        </div>
        <div className="mt-4 flex justify-center gap-2 text-sm">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </section>
  )
}




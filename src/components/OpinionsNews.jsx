import React from 'react'
import { Link } from 'react-router-dom'

function SmallCard({ seed, title, date, category }) {
  return (
    <article className="flex flex-col">
      <img src={`https://picsum.photos/seed/opinions-${seed}/420/260`} alt="thumb" className="w-full h-40 object-cover" />
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <span className="mt-1 text-[11px] text-neutral-500">{date} | {category}</span>
    </article>
  )
}

function RightListItem({ seed, title, date, category }) {
  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <img src={`https://picsum.photos/seed/or-${seed}/88/66`} className="w-[88px] h-[66px] object-cover" alt="thumb" />
      <div className="min-w-0">
        <a className="text-[12px] leading-4 hover:text-yellow-700 line-clamp-3" href="#">{title}</a>
        <span className="text-[11px] text-neutral-500 block mt-1">{date} | {category}</span>
      </div>
    </div>
  )
}

function AdCard({ seed, title }) {
  return (
    <div className="flex flex-col">
      <img src={`https://picsum.photos/seed/ad-opinions-${seed}/540/320`} alt="ad" className="w-full h-48 object-cover" />
      <h3 className="mt-2 text-[13px] leading-4 font-semibold">{title}</h3>
    </div>
  )
}

export default function OpinionsNews() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Opinions & Blogs
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h2 className="text-lg font-semibold">Opinions</h2>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <img src={`https://picsum.photos/seed/jet-engine/1000/560`} className="w-full h-auto object-cover" alt="jet engine" />
            <h3 className="mt-3 text-[18px] font-semibold leading-6">Why India still can't build its own jet engine - even after 40 years</h3>
            <span className="mt-2 text-sm text-neutral-600">Aug 27 | Opinions & Blogs</span>
          </div>
          <aside className="space-y-3">
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img src={`https://picsum.photos/seed/ad-sidebar-1/640/480`} className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>
            <div className="space-y-2">
              <RightListItem seed={1} title="Scourge of dowry in India—How 'log kya kahenge?' ensures the practice never ends" date="Aug 28" category="Opinions & Blogs" />
              <RightListItem seed={2} title="Online Gaming: PM Modi's Push for Esports Rooted in Ethical Entertainment" date="Aug 25" category="Opinions & Blogs" />
              <RightListItem seed={3} title="When Mysore's young maharaja made India fly: Forgotten hero of our aviation story" date="Aug 25" category="Opinions & Blogs" />
              <RightListItem seed={4} title="Trump's treatment of India draws fire from US foreign policy experts" date="Aug 21" category="Opinions & Blogs" />
            </div>
          </aside>
        </div>

        {/* First "You May Like" Section - 4 columns */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SmallCard seed={1} title="'Slapping Democracy'? Global politics of ATTACKS that deface humane civility" date="Aug 20" category="Opinions & Blogs" />
            <SmallCard seed={2} title="Trump juggles a Putin call, European doubts, and Zelenskyy's hopes for a deal" date="Aug 19" category="Opinions & Blogs" />
            <SmallCard seed={3} title="War or peace - at Alaska and beyond" date="Aug 17" category="Opinions & Blogs" />
            <SmallCard seed={4} title="Cars are getting electric! Are e-buses the next big leap?" date="Aug 17" category="Opinions & Blogs" />
          </div>
        </div>

        {/* First Ad Section - 3 columns */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdCard seed={1} title="Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from ₹1.54 crore*" />
            <AdCard seed={2} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre EMI till 2027" />
            <AdCard seed={3} title="Well-ventilated 3BHK homes at 1.79 Cr* by Abhee Aaria" />
          </div>
        </div>

        {/* "Pursuing Peace" Section - 5 columns including video */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">Pursuing Peace</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <SmallCard seed={5} title="Alaska without a deal: The Trump-Putin summit and the war that won't end" date="Aug 16" category="Opinions & Blogs" />
            <SmallCard seed={6} title="Nuke threat from US soil: Why Asim Munir's threats imperil South Asian stability" date="Aug 14" category="Opinions & Blogs" />
            <SmallCard seed={7} title="Forging strategic ties: How India-Australia army cooperation shapes Indo-Pacific" date="Aug 12" category="Opinions & Blogs" />
            <SmallCard seed={8} title="Banning books is like banning the right to breathe. It never works. Here's why!" date="Aug 11" category="Opinions & Blogs" />
            <div className="relative">
              <img src={`https://picsum.photos/seed/trump-musk/420/260`} className="w-full h-40 object-cover" alt="video" />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-80 rounded-full p-4">
                  <svg className="w-8 h-8 text-neutral-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              <span className="text-[10px] text-neutral-500 block mt-1">Powered by VDO.AI</span>
            </div>
          </div>
        </div>

        {/* Second Main Article Section */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <img src={`https://picsum.photos/seed/asim-munir/1000/560`} className="w-full h-auto object-cover" alt="Asim Munir" />
            <h3 className="mt-3 text-[18px] font-semibold leading-6">A Theatre of Fear: Why Pakistan Army Chief Asim Munir's 'Half the World' gambit finds an unimpressed audience in India.</h3>
            <span className="mt-2 text-sm text-neutral-600">Aug 11 | Opinions & Blogs</span>
          </div>
          <aside className="space-y-2">
            <RightListItem seed={5} title="Will KL Rahul's resilience reward him a place in the Indian squad for Asia Cup?" date="Aug 06" category="Opinions & Blogs" />
            <RightListItem seed={6} title="The dangerous virality: How social media fuels misinformation in times of war" date="Aug 06" category="Opinions & Blogs" />
            <RightListItem seed={7} title="Can US afford trade war with India amid evolving geopolitics? S realities here" date="Aug 06" category="Opinions & Blogs" />
            <RightListItem seed={8} title="US-India trade at a crossroads: An expert's take on tariffs and diplomacy" date="Aug 06" category="World" />
          </aside>
        </div>

        {/* Second "You May Like" Section - 4 columns */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <SmallCard seed={9} title="American oil hunt in Pakistan may serve as cover for US military presence" date="Aug 04" category="Opinions & Blogs" />
            <SmallCard seed={10} title="Apache vs Prachand: Strategic helicopter competition reshaping modern warfare" date="Aug 04" category="Opinions & Blogs" />
            <SmallCard seed={11} title="US-Indian tariff wrangling show limits of Trump's art of the deal" date="Aug 04" category="Opinions & Blogs" />
            <SmallCard seed={12} title="Trump's tariff barrage on India: Navigating the storm" date="Aug 01" category="Opinions & Blogs" />
          </div>
        </div>

        {/* Second Ad Section - 3 columns */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdCard seed={4} title="3 BHK airy homes at Abhee Aaria at 1.79 Cr* near Gunjur Lake" />
            <AdCard seed={5} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹81.42 Lacs* | No Pre EMI till Possession" />
            <AdCard seed={6} title="'Swing is King': Mr. Hemant's Strategy Finally Explained in Free Session" />
          </div>
        </div>

        {/* Bottom Articles - 2 columns */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <SmallCard seed={13} title="Quake rocks Russia, ripples reach US: will climate change end geopolitical wars?" date="Jul 31" category="Opinions & Blogs" />
          <SmallCard seed={14} title="AI's already reshaping entertainment, education, and politics, but are we ready?" date="Jul 29" category="Opinions & Blogs" />
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2 text-sm">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </section>
  )
}

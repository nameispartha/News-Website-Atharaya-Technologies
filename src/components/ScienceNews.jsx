import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard({ seed, title, date, category, iconNumber = null, insetImage = null }) {
  return (
    <article className="flex flex-col">
      <div className="relative">
        <img 
          src={`https://picsum.photos/400/250?random=${seed}`} 
          alt="thumb" 
          className="w-full h-40 object-cover"
          onError={(e) => {
            e.target.src = `https://dummyimage.com/400x250/cccccc/666666&text=Science+${seed}`;
          }}
        />
        {insetImage && (
          <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
            <img 
              src={insetImage} 
              alt="inset" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        {iconNumber && (
          <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
            <span className="text-white text-xs font-bold">{iconNumber.toString().padStart(2, '0')}</span>
          </div>
        )}
      </div>
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <span className="mt-1 text-[11px] text-neutral-500">{date} | {category}</span>
    </article>
  )
}

function AdCard({ seed, title, buttonText = "Learn More" }) {
  return (
    <div className="flex flex-col">
      <img 
        src={`https://picsum.photos/400/250?random=${seed + 100}`} 
        alt="ad" 
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.target.src = `https://dummyimage.com/400x250/cccccc/666666&text=Ad+${seed}`;
        }}
      />
      <h3 className="mt-2 text-[13px] leading-4 font-semibold line-clamp-2">{title}</h3>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 w-fit">
        {buttonText}
      </button>
    </div>
  )
}

function RealEstateAd({ seed, title, buttonText = "Learn More" }) {
  return (
    <div className="flex flex-col">
      <img 
        src={`https://picsum.photos/400/250?random=${seed + 200}`} 
        alt="real estate" 
        className="w-full h-40 object-cover"
        onError={(e) => {
          e.target.src = `https://dummyimage.com/400x250/cccccc/666666&text=Real+Estate+${seed}`;
        }}
      />
      <h3 className="mt-2 text-[13px] leading-4 font-semibold line-clamp-2">{title}</h3>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 w-fit">
        {buttonText}
      </button>
    </div>
  )
}

function SidebarItem({ seed, title, date, category }) {
  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <div className="w-[88px] h-[66px]">
        <img 
          src={`https://picsum.photos/88/66?random=${seed + 300}`} 
          className="w-full h-full object-cover" 
          alt="thumb"
          onError={(e) => {
            e.target.src = `https://dummyimage.com/88x66/cccccc/666666&text=Sidebar+${seed}`;
          }}
        />
      </div>
      <div className="min-w-0">
        <a className="text-[12px] leading-4 hover:text-yellow-700 line-clamp-3" href="#">{title}</a>
        <span className="text-[11px] text-neutral-500 block mt-1">{date} | {category}</span>
      </div>
    </div>
  )
}

function LargeAdBanner() {
  return (
    <div className="w-full">
      <img 
        src="https://picsum.photos/1200/300?random=999" 
        alt="Large Ad Banner" 
        className="w-full h-auto object-cover"
        onError={(e) => {
          e.target.src = "https://dummyimage.com/1200x300/cccccc/666666&text=Large+Ad+Banner";
        }}
      />
      <p className="mt-2 text-sm text-neutral-600">India faces the challenge of navigating a tangle of regional and global issues while safeguarding its...</p>
    </div>
  )
}

export default function ScienceNews() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Science
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
            <h2 className="text-lg font-semibold">Science</h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Article - Blood Red Moon */}
            <div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/1000/560?random=1" 
                  alt="Blood Red Moon" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "https://dummyimage.com/1000x560/cccccc/666666&text=Blood+Red+Moon";
                  }}
                />
                <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
                  <span className="text-white text-xs font-bold">06</span>
                </div>
              </div>
              <h3 className="mt-3 text-[18px] font-semibold leading-6">Blood 'red' Moon for 82 minutes - Why the Moon will turn an eerie dark red in September | Details</h3>
            </div>

            {/* Article Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={2} title="Scientists stumble upon 8,500-year-old Stone Age world deep inside the sea" date="Aug 27" category="Trending" />
              <ArticleCard seed={3} title="Musk's Starship achieves success: SpaceX rocket completes 10th test flight" date="Aug 27" category="World" insetImage="https://picsum.photos/32/32?random=elon" />
              <ArticleCard seed={4} title="Interstellar journey on a budget: Scientist wants humans to intercept 31/ATLAS" date="Aug 26" category="Trending" />
            </div>

            {/* Fourth Article Aligned with Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div></div>
              <div></div>
              <ArticleCard seed={5} title="Global Space Economy: Top countries with highest space budget in 2025" date="Aug 25" category="Photos" iconNumber={5} />
            </div>

            {/* You May Like Section 1 - Real Estate Ads */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd seed={1} title="Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from ₹1.54 crore*" buttonText="Learn More" />
                <RealEstateAd seed={2} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre EMI till 2027" buttonText="Learn More" />
                <RealEstateAd seed={3} title="Ecocity Phase 2 Pre-Launch at ₹4500/Sq.ft" buttonText="Get Quote" />
              </div>
            </div>

            {/* More Articles - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={6} title="Avi Loeb says 31/ATLAS could be millions of times bigger than 21/Borisov" date="Aug 25" category="Trending" />
              <ArticleCard seed={7} title="140 billion times than Earth: PROOF that ancient universe was awash with water" date="Aug 25" category="Photos" iconNumber={7} />
              <ArticleCard seed={8} title="249 radio signals slam Earth in minutes: Deep-space eruption puzzles scientists" date="Aug 25" category="Trending" />
            </div>

            {/* Fourth Article Aligned with Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div></div>
              <div></div>
              <ArticleCard seed={9} title="WOW! Signal was faster and stronger: New details revealed about mysterious wave" date="Aug 25" category="Science" />
            </div>

            {/* Large Advertisement Banner */}
            <div>
              <LargeAdBanner />
            </div>

            {/* Elon Musk Starship Article */}
            <div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/1000/560?random=10" 
                  alt="Elon Musk Starship" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "https://dummyimage.com/1000x560/cccccc/666666&text=Elon+Musk+Starship";
                  }}
                />
                <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                  <img 
                    src="https://picsum.photos/32/32?random=elon2" 
                    alt="Elon Musk" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="mt-3 text-[18px] font-semibold leading-6">Elon Musk's Starship grounded again: SpaceX scraps Texas launch for second time in 2 days</h3>
              <span className="mt-2 text-sm text-neutral-600">Aug 25 | World</span>
            </div>

            {/* More Articles - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={11} title="Indian space dream soars: ISRO air drop test success marks Gaganyaan milestone" date="Aug 25" category="Science" />
              <ArticleCard seed={12} title="Is Musk's dream rocket cursed? Space X scrubs megarocket Starship's 10th test" date="Aug 25" category="Science" insetImage="https://picsum.photos/32/32?random=elon3" />
              <ArticleCard seed={13} title="Alien attack in Nov? Scientists warn mysterious object hurtling towards Earth" date="Aug 24" category="Trending" />
            </div>

            {/* Fourth Article Aligned with Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div></div>
              <div></div>
              <ArticleCard seed={14} title="Most mysterious objects in the universe that still baffle scientists" date="Aug 23" category="Photos" iconNumber={11} />
            </div>

            {/* You May Like Section 2 - Mixed Ads */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AdCard seed={1} title="शेयर बाज़ार की सबसे धमाकेदार Strategy - No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!" buttonText="Learn More" />
                <AdCard seed={2} title="Dark Side of Quantum Computers A Lucking Threat to National Security. Quantum Cryptography Blog - QNu Labo" />
                <AdCard seed={3} title="Swing is King: Mr. Hemant's Strategy Finally Explained in Free Session" buttonText="Learn More" />
              </div>
            </div>

            {/* Bottom Article Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={15} title="Most beautiful Galaxies ever captured by NASA telescopes: See pics" date="Aug 23" category="Photos" iconNumber={8} />
              <ArticleCard seed={16} title="Study of over 1,000 rattlesnakes throws results confirming human-linked fears" date="Aug 22" category="Trending" />
              <ArticleCard seed={17} title="National Space Day: Notable achievements of Indian Space Research Organisation" date="Aug 23" category="Photos" iconNumber={7} />
            </div>

            {/* Fourth Article Aligned with Sidebar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div></div>
              <div></div>
              <ArticleCard seed={18} title="Move aside Mars, Ceres was once hot and alive and hosted life" date="Aug 23" category="Science" />
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-3">
            {/* Top Advertisement */}
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
            </div>

            {/* Trending News List - Top */}
            <div className="space-y-2">
              <SidebarItem seed={1} title="NASA confirms 180-foot asteroid racing at 39,205 mph to fly past Earth on..." date="Aug 28" category="Science" />
              <SidebarItem seed={2} title="Top 5 mysterious places on Earth where magnetic compasses fail to work" date="Aug 28" category="Trending" />
              <SidebarItem seed={3} title="Scientists claim to have solve the mystrey of Bermuda Triangle with this theory" date="Aug 27" category="Trending" />
              <SidebarItem seed={4} title="Largest body of water ever found is not present on Earth, but..." date="Aug 27" category="Science" />
            </div>

            {/* Middle Advertisement */}
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
            </div>

            {/* Trending News/Ads - Middle */}
            <div className="space-y-2">
              <SidebarItem seed={5} title="Lab-grown kidney survives 34 weeks, Israeli hospital seeks funding from China" date="Aug 25" category="Science" />
              <SidebarItem seed={6} title="When Mysore' young maharaja made India fly. Forgotten hero of our aviation story" date="Aug 25" category="Opinions & Blogs" />
              <SidebarItem seed={7} title="Wake-up call for humanity: Scientist says he wants 31/ATLAS to be alien ship" date="Aug 25" category="Trending" />
            </div>
          </aside>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2 text-sm">
          <button className="px-3 py-1 border rounded bg-wionYellow text-white">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </section>
  )
}


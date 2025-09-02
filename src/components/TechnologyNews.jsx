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
            e.target.src = `https://dummyimage.com/400x250/cccccc/666666&text=Tech+${seed}`;
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
          <div className="absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
            <span className="text-white text-xs font-bold">{iconNumber}</span>
          </div>
        )}
      </div>
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <span className="mt-1 text-[11px] text-neutral-500">{date} | {category}</span>
    </article>
  )
}

function AdCard({ seed, title, source, buttonText = "Learn More" }) {
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
      <span className="mt-1 text-[11px] text-neutral-500">{source}</span>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 w-fit">
        {buttonText}
      </button>
    </div>
  )
}

function RealEstateAd({ seed, title, source, buttonText = "Learn More" }) {
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
      <span className="mt-1 text-[11px] text-neutral-500">{source}</span>
      <button className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 w-fit">
        {buttonText}
      </button>
    </div>
  )
}

function SidebarItem({ seed, title, date, category, iconNumber = null }) {
  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <div className="w-[88px] h-[66px] relative">
        <img 
          src={`https://picsum.photos/88/66?random=${seed + 300}`} 
          className="w-full h-full object-cover" 
          alt="thumb"
          onError={(e) => {
            e.target.src = `https://dummyimage.com/88x66/cccccc/666666&text=Sidebar+${seed}`;
          }}
        />
        {iconNumber && (
          <div className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
            <span className="text-white text-xs font-bold">{iconNumber}</span>
          </div>
        )}
      </div>
      <div className="min-w-0">
        <a className="text-[12px] leading-4 hover:text-yellow-700 line-clamp-3" href="#">{title}</a>
        <span className="text-[11px] text-neutral-500 block mt-1">{date} | {category}</span>
      </div>
    </div>
  )
}

function VideoPlayer() {
  return (
    <div className="w-full">
      <div className="relative bg-gray-900 aspect-video flex items-center justify-center">
        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
          <div className="w-0 h-0 border-l-[12px] border-l-white border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
        </div>
        <div className="absolute top-2 left-2 text-xs text-white bg-black bg-opacity-50 px-2 py-1 rounded">
          Promoted by VDO.AI
        </div>
      </div>
      <h3 className="mt-2 text-sm font-semibold">India's Foreign Policy in 2025</h3>
    </div>
  )
}

export default function TechnologyNews() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Technology
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
            <h2 className="text-lg font-semibold">Technology</h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Article - Tesla Cybercab vs Waymo */}
            <div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/1000/560?random=1" 
                  alt="Tesla Cybercab vs Waymo" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "https://dummyimage.com/1000x560/cccccc/666666&text=Tesla+Cybercab+vs+Waymo";
                  }}
                />
              </div>
              <h3 className="mt-3 text-[18px] font-semibold leading-6">Tesla cybercab vs Waymo: Who will win the us robotaxi race?</h3>
              <span className="mt-2 text-sm text-neutral-600">Aug 29 | Technology</span>
            </div>

            {/* Article Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={2} title="AI has human rights? These advocacy groups think sentient AI can have 'feelings'" date="Aug 27" category="Trending" />
              <ArticleCard seed={3} title="Dream11 lost 95 pc revenue due to online gaming ban. Will it lay off staff?" date="Aug 26" category="Sports" />
              <ArticleCard seed={4} title="Global Space Economy: Top countries with highest space budget in 2025" date="Aug 26" category="Photos" iconNumber={5} />
            </div>

            {/* You May Like Section 1 - Real Estate Ads */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd seed={1} title="Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from ₹11.54 crore*" source="Sattva Lumina" buttonText="Get Quote" />
                <RealEstateAd seed={2} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre EMI till 2027" source="Sowparnika Rhythm of Rain" buttonText="Learn More" />
                <AdCard seed={3} title="No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!" source="Trade Wise" buttonText="Learn More" />
              </div>
            </div>

            {/* More Articles - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={5} title="Game-changer? Ukraine's Long Neptune missile revealed - what we know so far" date="Aug 26" category="World" />
              <ArticleCard seed={6} title="Elon Musk's Starship grounded again: SpaceX scraps launch for second day" date="Aug 26" category="World" />
              <ArticleCard seed={7} title="Intel's spectacular fall from rock star to ruins: What went wrong for chip firm?" date="Aug 25" category="World" />
            </div>

            {/* Video Player Section */}
            <div>
              <VideoPlayer />
            </div>

            {/* Hero Article - Alien Attack */}
            <div>
              <div className="relative">
                <img 
                  src="https://picsum.photos/1000/560?random=8" 
                  alt="Alien Attack" 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.src = "https://dummyimage.com/1000x560/cccccc/666666&text=Alien+Attack";
                  }}
                />
              </div>
              <h3 className="mt-3 text-[18px] font-semibold leading-6">Alien attack in November? Harvard scientists warn mysterious object hurtling towards Earth</h3>
              <span className="mt-2 text-sm text-neutral-600">Aug 24 | Trending</span>
            </div>

            {/* More Articles - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={9} title="Can AI solve Ukraine war? I asked five chatbots the same question and..." date="Aug 22" category="World" />
              <ArticleCard seed={10} title="AI APOCALYPSE coming soon? Who will survive when bubble bursts?" date="Aug 22" category="Trending" />
              <ArticleCard seed={11} title="AI won't replace pharma scientists but it will redefine their work! Here's why" date="Aug 22" category="Technology" />
            </div>

            {/* You May Like Section 2 - Mixed Ads */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd seed={4} title="Ecocity Phase 2 Pre-Launch at ₹4500/Sq.ft" source="SPA Group Bangalore" buttonText="Get Quote" />
                <RealEstateAd seed={5} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹81.42 Lacs* | No Pre EMI till Possession" source="Sowparnika Euphoria In The East" buttonText="Learn More" />
                <AdCard seed={6} title="Swing is King: Mr. Hemant's Strategy Finally Explained in Free Session" source="Trade Wise" buttonText="Learn More" />
              </div>
            </div>

            {/* Bottom Article Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard seed={12} title="What's apple planning with the iPhone 17? Here's what the leaks suggest" date="Aug 19" category="Technology" />
              <ArticleCard seed={13} title="Guy claims he used AI to publish 1500 books and earn $3million" date="Aug 19" category="World" />
              <ArticleCard seed={14} title="Deep research API: Ex-Twitter CEO Parag Agrawal launches new AI startup" date="Aug 18" category="Technology" />
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
              <SidebarItem seed={1} title="Volkswagen extends Amazon Web Services deal for 5 years to cut costs using AI" date="Aug 28" category="Technology" />
              <SidebarItem seed={2} title="Nvidia CEO says AI boom is just starting, predicts multi-trillion dollar growth" date="Aug 28" category="Technology" />
              <SidebarItem seed={3} title="Nvidia profits surge, but China's H20 chip remains unsold" date="Aug 28" category="Technology" />
              <SidebarItem seed={4} title="Chinese city, home of DeepSeek, makes AI mandatory in schools" date="Aug 27" category="Trending" />
              <SidebarItem seed={5} title="5 countries with most robot workers - Check which country tops list" date="Aug 26" category="Photos" iconNumber={5} />
              <SidebarItem seed={6} title="Nvidia, Intel deals with US govt: Is Trump admin sneakily nationalising firms?" date="Aug 23" category="World" />
              <SidebarItem seed={7} title="AI Doomers' sure of doomsday scenario say humanity only has a few years left" date="Aug 23" category="Trending" />
              <SidebarItem seed={8} title="When dreams touch the sky: National Space Day and India's unstoppable spirit" date="Aug 23" category="Science" />
              <SidebarItem seed={9} title="Submarine vs tsunamis- SHOCKING truth about surviving nature's deadliest waves" date="Aug 22" category="Photos" iconNumber={3} />
              <SidebarItem seed={10} title="Can AI track your online spending better than you can?" date="Aug 18" category="Technology" />
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


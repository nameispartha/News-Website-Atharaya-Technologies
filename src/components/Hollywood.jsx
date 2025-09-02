import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function ArticleCard({ image, title, timestamp, category, hasNumberedIcon = false, iconNumber = null }) {
  return (
    <article className="flex flex-col">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover bg-neutral-200"
        />
        {hasNumberedIcon && iconNumber && (
          <div className="absolute top-2 right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">{iconNumber}</span>
          </div>
        )}
      </div>
      <h3 className="mt-3 text-[16px] leading-5 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <div className="flex items-center gap-2 mt-2 text-sm text-neutral-600">
        <span>{timestamp}</span>
        <span>•</span>
        <span className="text-yellow-600 font-medium">{category}</span>
      </div>
    </article>
  )
}

function SidebarArticle({ image, title, timestamp, category }) {
  return (
    <div className="flex gap-3 py-3 border-b border-neutral-200 last:border-0">
      <div className="w-28 h-28 shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover bg-neutral-200" />
      </div>
      <div className="min-w-0">
        <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">{title}</h4>
        <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
          <span>{timestamp}</span>
          <span>•</span>
          <span className="text-yellow-600">{category}</span>
        </div>
      </div>
    </div>
  )
}

function RealEstateAd({ image, title, details, company, buttonText, buttonColor = "bg-blue-600" }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-full h-32 object-cover bg-neutral-200" />
      <div className="mt-2 text-center">
        <h4 className="text-[14px] font-semibold leading-4 line-clamp-2">{title}</h4>
        <p className="text-[12px] text-neutral-600 mt-1">{details}</p>
        <p className="text-[12px] text-neutral-500 mt-1">{company}</p>
        <button className={`mt-2 px-4 py-1 text-white text-xs rounded ${buttonColor} hover:opacity-90`}>
          {buttonText}
        </button>
      </div>
    </div>
  )
}

export default function Hollywood() {
  return (
    <section className="content-wrap">
      <div className="container-page">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Hollywood
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h1 className="text-[28px] font-bold">Hollywood</h1>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area - 3 Columns */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Hero Article */}
            <article className="flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <img 
                  src="https://picsum.photos/seed/batman-dark/600/400" 
                  alt="Batman in dark setting"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
                <img 
                  src="https://picsum.photos/seed/alan-ritchson-beard/600/400" 
                  alt="Alan Ritchson with beard"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Reacher star Alan Ritchson confirms he spoke to James Gunn about playing DCU's Batman
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 29</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Hollywood</span>
              </div>
            </article>

            {/* Top Right Sidebar - Mobile View */}
            <div className="lg:hidden">
              <div className="border border-neutral-200 bg-white mb-4">
                <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
                <div className="aspect-[3/2] bg-neutral-200">
                  <img src="https://picsum.photos/seed/ad-hollywood-top/640/480" className="w-full h-full object-cover" alt="ad" />
                </div>
              </div>
              <div className="space-y-3">
                <SidebarArticle 
                  image="https://picsum.photos/seed/kpop-demon-hunters/112/112"
                  title="KPop Demon Hunters' Golden bags VMA Song of the Summer nomination"
                  timestamp="1 hr ago"
                  category="Hollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/timothy-spall-beard/112/112"
                  title="HBO's Harry Potter reboot defended by original actor Timothy Spall"
                  timestamp="2 hrs ago"
                  category="Hollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/harry-potter-director/112/112"
                  title="Harry Potter director strongly reacts to reboot of franchise, says They are..."
                  timestamp="Aug 29"
                  category="Hollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/bruce-willis-emma/112/112"
                  title="Bruce Willis' health update: Actor living separately, wife Emma Heming reveals"
                  timestamp="Aug 29"
                  category="Hollywood"
                />
              </div>
            </div>

            {/* First Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/twilight-saga-embrace/400/300"
                title="The Twilight Saga back to be back in theatres! Know when will it release"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/george-clooney-suit/400/300"
                title="George Clooney pulls out from Venice Film Festival due to ill health"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/selena-gomez-drink/400/300"
                title="Selena Gomez's bachelorette celebration in Mexico ahead wedding to Benny Blanco"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/gandhi-glasses/400/300"
                title="From Gandhi to Chaplin: Must-watch movies directed by Richard Attenborough"
                timestamp="Aug 29"
                category="Photos"
              />
            </div>

            {/* First "You May Like" Section - Real Estate */}
            <div>
              <h3 className="text-[18px] font-semibold mb-4">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd 
                  image="https://picsum.photos/seed/sowparnika-townscapes/400/300"
                  title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹81.42 Lacs* | No Pre EMI till Possession"
                  details="Whitefield, Near DPS school"
                  company="SOWPARNIKA TOWNSCAPES"
                  buttonText="Learn More"
                  buttonColor="bg-blue-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/mana-cresta-family/400/300"
                  title="Mana Cresta 3 BHK | ₹1.49 Cr* Onwards"
                  details="Mana Group"
                  company="SQUARE SHAPED MANA CRESTA"
                  buttonText="Get Quote"
                  buttonColor="bg-green-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/cresta-rain-garden/400/300"
                  title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre EMI till 2027"
                  details=""
                  company="CRESTA RAIN MANA"
                  buttonText="Learn More"
                  buttonColor="bg-blue-600"
                />
              </div>
            </div>

            {/* Second Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/ryan-gosling-yellow/400/300"
                title="Star Wars: Star Fighter - First look at Ryan Gosling's Jedi master is out"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/jaz-sinclair-dark-hair/400/300"
                title="Gen V: Jaz Sinclair wants her character to bring down Homelander"
                timestamp="Aug 28"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/chadwick-boseman-black-panther/400/300"
                title="Chadwick Boseman's 5th death anniversary: Remembering his iconic movies"
                timestamp="Aug 28"
                category="Photos"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/david-fincher-glasses/400/300"
                title="Happy Birthday David Fincher: 7 must-watch movies you need to binge"
                timestamp="Aug 28"
                category="Photos"
              />
            </div>

            {/* Video Player Section */}
            <div className="relative">
              <div className="bg-neutral-100 p-4 text-center">
                <div className="text-sm text-neutral-600 mb-2">Powered by VDO.AI</div>
                <div className="relative">
                  <img 
                    src="https://picsum.photos/seed/vice-president-india/800/400" 
                    alt="Vice President of India"
                    className="w-full h-80 object-cover bg-neutral-200"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-200">
                      <FiPlay className="w-12 h-12 text-neutral-800" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Mid-Page Main Article */}
            <article className="flex flex-col">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <img 
                  src="https://picsum.photos/seed/ryan-reynolds-suit/600/400" 
                  alt="Ryan Reynolds in suit"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
                <img 
                  src="https://picsum.photos/seed/robert-downey-sunglasses/600/400" 
                  alt="Robert Downey Jr. with sunglasses"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Avengers Doomsday: No tensions between Robert Downey Jr. and Ryan Reynolds, says report
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 27</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Hollywood</span>
              </div>
            </article>

            {/* Third Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/jensen-ackles-batman/400/300"
                title="After Jensen Ackles, Tyler Hoechlin also throws his hat in for DCU's Batman role"
                timestamp="Aug 27"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/kpop-demon-hunters-animated/400/300"
                title="KPop Demon Hunters is now Netflix's most-watched film, beating Red Notice"
                timestamp="Aug 27"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/taylor-travis-trump/400/300"
                title="Taylor Swift engaged to Travis Kelce - and even Trump is suddenly nice to her"
                timestamp="Aug 27"
                category="Entertainment"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/travis-kelce-dad/400/300"
                title="Travis Kelce's dad Ed reveals Taylor & Travis got engaged nearly 2 weeks ago"
                timestamp="Aug 27"
                category="Hollywood"
              />
            </div>

            {/* Second "You May Like" Section - Real Estate */}
            <div>
              <h3 className="text-[18px] font-semibold mb-4">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd 
                  image="https://picsum.photos/seed/sattva-lumina-pools/400/300"
                  title="Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from ₹1.54 crore*"
                  details="Sattva Lumina"
                  company=""
                  buttonText="Get Quote"
                  buttonColor="bg-green-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/luxury-villa-plots/400/300"
                  title="Premium Villa Plots Near Airport - From ₹1.7 Cr*"
                  details="Sumadhura"
                  company="THE ADDRESS OF CALM LIVING, FAST GROWTH & LASTING VALUE. LUXURY VILLA PLOTS"
                  buttonText="Learn More"
                  buttonColor="bg-blue-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/abhee-aaria-house/400/300"
                  title="Well-ventilated 3BHK homes at ₹1.79 Cr* by Abhee Aaria"
                  details="Abhee Aaria"
                  company=""
                  buttonText="Get Quote"
                  buttonColor="bg-green-600"
                />
              </div>
            </div>

            {/* Fourth Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/taylor-travis-kiss/400/300"
                title="It's a love story, baby just say yes! Taylor Swift and Travis Kelce are engaged"
                timestamp="Aug 27"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/taylor-travis-timeline/400/300"
                title="Taylor Swift and Travis Kelce are engaged: A look at their relationship timeline"
                timestamp="Aug 26"
                category="Hollywood"
              />
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 text-sm">
              <button className="px-3 py-1 border rounded">1</button>
              <button className="px-3 py-1 border rounded">2</button>
              <button className="px-3 py-1 border rounded">›</button>
            </div>
          </div>

          {/* Right Sidebar - Desktop View */}
          <aside className="hidden lg:block space-y-6">
                         {/* Top Advertisement */}
             <div className="border border-neutral-200 bg-white">
               <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
               <div className="aspect-[3/2] bg-neutral-200">
                 <img src="https://picsum.photos/seed/ad-hollywood-top/640/480" className="w-full h-full object-cover" alt="ad" />
               </div>
             </div>

            {/* Top Sidebar Articles */}
            <div className="space-y-3">
              <SidebarArticle 
                image="https://picsum.photos/seed/kpop-demon-hunters/80/80"
                title="KPop Demon Hunters' Golden bags VMA Song of the Summer nomination"
                timestamp="1 hr ago"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/timothy-spall-beard/80/80"
                title="HBO's Harry Potter reboot defended by original actor Timothy Spall"
                timestamp="2 hrs ago"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/harry-potter-director/80/80"
                title="Harry Potter director strongly reacts to reboot of franchise, says They are..."
                timestamp="Aug 29"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/bruce-willis-emma/80/80"
                title="Bruce Willis' health update: Actor living separately, wife Emma Heming reveals"
                timestamp="Aug 29"
                category="Hollywood"
              />
            </div>

                         {/* Mid-Page Advertisement */}
             <div className="border border-neutral-200 bg-white">
               <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
               <div className="aspect-[3/2] bg-neutral-200">
                 <img src="https://picsum.photos/seed/ad-hollywood-mid/640/480" className="w-full h-full object-cover" alt="div" />
               </div>
             </div>

            {/* Mid-Page Sidebar Articles */}
            <div className="space-y-3">
              <SidebarArticle 
                image="https://picsum.photos/seed/jelly-roll-beard/80/80"
                title="Jelly Roll expands 2025 Down Under tour with Brisbane, Townsville shows"
                timestamp="Aug 28"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/sophie-turner-child/80/80"
                title="Sophie Turner shares a simple but powerful tip for a Harry Potter child actors"
                timestamp="Aug 27"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/taylor-swift-singer/80/80"
                title="Who Has Taylor Swift Dated? Complete Boyfriend Timeline"
                timestamp="Aug 27"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/dirty-dancing-couple/80/80"
                title="From Dirty Dancing to Say Anything: Best 80s romance films to binge"
                timestamp="Aug 27"
                category="Photos"
              />
            </div>
          </aside>
        </div>

        {/* Bottom Advertisement */}
        <div className="mt-8 border border-neutral-200 bg-white">
          <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
          <div className="aspect-[3/1] bg-neutral-200">
            <img src="https://picsum.photos/seed/ad-hollywood-bottom/1200/400" className="w-full h-full object-cover" alt="ad" />
          </div>
        </div>
      </div>
    </section>
  )
}

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

function SidebarArticle({ image, title, timestamp, category, hasNumberedIcon = false, iconNumber = null }) {
  return (
    <div className="flex gap-3 py-3 border-b border-neutral-200 last:border-0">
      <div className="relative w-20 h-20 shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover bg-neutral-200" />
        {hasNumberedIcon && iconNumber && (
          <div className="absolute top-1 right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">{iconNumber}</span>
          </div>
        )}
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

function RealEstateAd({ image, title, company }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={title} className="w-full h-32 object-cover bg-neutral-200" />
      <div className="mt-2">
        <h4 className="text-[14px] font-semibold text-center leading-4">{title}</h4>
        <p className="text-[12px] text-neutral-600 text-center mt-1">{company}</p>
      </div>
    </div>
  )
}

export default function Sports() {
  return (
    <section className="content-wrap">
      <div className="container-page">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Sports
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h1 className="text-[28px] font-bold">Sports</h1>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content Area - 3 Columns */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Hero Article */}
            <article className="flex flex-col">
              <div className="mb-4 relative">
                <img 
                  src="https://picsum.photos/seed/sri-lanka-cricket/800/500" 
                  alt="Sri Lankan cricketer in blue jersey"
                  className="w-full h-80 object-cover bg-neutral-200"
                />
                <div className="absolute bottom-2 right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">8</span>
                </div>
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                From Chaminda Vaas to Farveez Maharoof: Meet 8 players to take ODI hattrick for Sri Lanka, only one against India
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 29</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Photos</span>
              </div>
            </article>

            {/* First Article Grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/rajeev-shukla-bcci/400/300"
                title="Rajeev Shukla temporarily takes over BCCI's presidency - Report"
                timestamp="Aug 29"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/ms-dhoni-ashwin/400/300"
                title="Ashwin awe-struck by Dhoni's fitness as he reveals reason behind IPL retirement"
                timestamp="Aug 29"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/afg-pak-rashid-khan/400/300"
                title="AFG vs PAK: Rashid Khan urges fans to avoid chaos ahead of tri-series opener"
                timestamp="Aug 29"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/india-pacer-shami/400/300"
                title="'When everyone agrees...', India pacer Shami opines on playing against Pakistan"
                timestamp="Aug 29"
                category="Cricket"
              />
            </div>

            {/* You May Like Section - Financial Ads */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd
                  image="https://picsum.photos/seed/mr-bala-intraday/400/300"
                  title="Top Intraday Expert Mr. Bala Revealing His Most Profitable Strategy for Free!"
                  company="Tradition"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/retirement-plans-kato/400/300"
                  title="Best Retirement Plans for You | Get monthly income of ₹6.72L"
                  company="Kato Max Life"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/retirement-plans-kato-2/400/300"
                  title="Best Retirement Plans for You | Get monthly income of ₹6.72L"
                  company="Kato Max Life"
                />
              </div>
            </div>

            {/* Second Article Grid - 2x2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/ipl-2005-rcb-trophy/400/300"
                title="After winning IPL, 2005, THIS RCB player is set to lead in Duleep Trophy"
                timestamp="Aug 28"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/shubman-gill-flu/400/300"
                title="Shubman Gill recovers from flu, set to join BCCI CoE ahead of Asia Cup 2025"
                timestamp="Aug 28"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/retired-indian-cricketer-england/400/300"
                title="Retired Indian cricketer eyes maiden stint with England's 'The Hundred' - Report"
                timestamp="Aug 28"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/sehwag-asia-cup-2025/400/300"
                title="Sehwag picks three game-changers for India at Asia Cup 2025, check names inside"
                timestamp="Aug 28"
                category="Sports"
              />
            </div>

            {/* Embedded Video Section */}
            <div className="space-y-4">
              <div className="relative bg-neutral-200 aspect-video">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <FiPlay className="w-8 h-8 text-neutral-700 ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 text-xs text-neutral-600 bg-white px-2 py-1 rounded">
                  Powered by VDO.AI
                </div>
              </div>
            </div>

            {/* Main Article Below Video */}
            <article className="flex flex-col">
              <div className="mb-4">
                <img 
                  src="https://picsum.photos/seed/rohit-sharma-bronco/800/500" 
                  alt="Rohit Sharma in Indian cricket team jersey"
                  className="w-full h-80 object-cover bg-neutral-200"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Rohit to undergo newly-introduced Bronco test at BCCI's CoE ahead of AUS ODIs
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 29</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Sports</span>
              </div>
            </article>

            {/* Third Article Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/mohammed-shami-asia-cup/400/300"
                title="Mohammed Shami opens on 2025 Asia Cup snub, says 'If I can play Duleep Trophy, then why won't I...'"
                timestamp="Aug 28"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/ashwin-ipl-salary/400/300"
                title="R Ashwin's IPL salary will leave you stunned! He earned more than..."
                timestamp="Aug 27"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/ashwin-ipl-retirement/400/300"
                title="Ravichandran Ashwin announces IPL retirement, posts 'my time as an...'"
                timestamp="Aug 27"
                category="Sports"
              />
            </div>

            {/* You May Like Section - Second Instance */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd
                  image="https://picsum.photos/seed/mr-bala-intraday-2/400/300"
                  title="Learn Mr. Bala's Intraday Strategy to Generate Daily Profit's in Market!"
                  company="Tradition"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/hearing-aids-nandinilayout/400/300"
                  title="Living in Nandinilayout? Don't Buy Hearing Aids Before Reading This"
                  company="Read More"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/birla-trimaya/400/300"
                  title="Birla Trimaya - Premium Apartments & Villaments - Bangalore"
                  company="Birla Trimaya Villament"
                />
              </div>
            </div>

            {/* Fourth Article Grid - 3 Columns */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/asia-cup-india-pakistan/400/300"
                title="Asia Cup 2025 | Netizens slam broadcasters for India vs Pakistan promo"
                timestamp="Aug 26"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/indian-football-future/400/300"
                title="What is the future of Indian football? AIFF, ISL now face crisis situation"
                timestamp="Aug 26"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/pujara-dravid-number-3/400/300"
                title="Was Pujara better than Dravid at number 3 for India? Here's what numbers say"
                timestamp="Aug 26"
                category="Sports"
              />
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 py-8">
              <button className="px-3 py-2 bg-yellow-600 text-white rounded">1</button>
              <button className="px-3 py-2 text-neutral-600 hover:text-yellow-600">2</button>
              <button className="px-3 py-2 text-neutral-600 hover:text-yellow-600">></button>
            </div>
          </div>

          {/* Right Sidebar - Desktop View */}
          <aside className="hidden lg:block space-y-6">
            {/* Top Advertisement */}
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img src="https://picsum.photos/seed/ad-sports-top/400/300" className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>

            {/* Top Sidebar Articles */}
            <div className="space-y-3">
              <SidebarArticle
                image="https://picsum.photos/seed/sl-zim-madushanka/80/80"
                title="SL vs ZIM, 1st ODI: Madushanka hattrick denies Zimbabwe win in a thriller"
                timestamp="Aug 29"
                category="Sports"
              />
              <SidebarArticle
                image="https://picsum.photos/seed/harbhajan-sreesanth-slap/80/80"
                title="Lalit Modi drops Harbhajan-Sreesanth slap video from IPL 2008 - Watch now"
                timestamp="Aug 29"
                category="Sports"
              />
              <SidebarArticle
                image="https://picsum.photos/seed/bradman-baggy-green/80/80"
                title="Donald Bradman's 1940 baggy green costs a fortune - here's why it matters"
                timestamp="Aug 29"
                category="Sports"
              />
              <SidebarArticle
                image="https://picsum.photos/seed/rohit-bronco-test/80/80"
                title="Rohit to undergo newly-introduced Bronco test at BCCI's CoE ahead of AUS ODIs"
                timestamp="Aug 29"
                category="Sports"
              />
            </div>

            {/* Mid-Page Advertisement */}
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img src="https://picsum.photos/seed/ad-sports-mid/400/300" className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>

            {/* Mid-Page Sidebar Articles */}
            <div className="space-y-3">
              <SidebarArticle
                image="https://picsum.photos/seed/rcb-bengaluru-stampede/80/80"
                title="RCB breaks social media hiatus after Bengaluru stampede, launches initiative"
                timestamp="Aug 28"
                category="Sports"
              />
              <SidebarArticle
                image="https://picsum.photos/seed/mohammed-shami-retirement/80/80"
                title="Mohammed Shami addresses retirement chatter - 'You don't pick me, play me.'"
                timestamp="Aug 28"
                category="Sports"
              />
              <SidebarArticle
                image="https://picsum.photos/seed/cricketers-cancer-battle/80/80"
                title="From Yuvraj Singh to Tony Greig: Here are top cricketers who battled cancer"
                timestamp="Aug 27"
                category="Photos"
              />
              <SidebarArticle
                image="https://picsum.photos/seed/pak-batter-tests-2006/80/80"
                title="Better than Sachin & Root? Pak batter ruled Tests in 2006 with average of 99"
                timestamp="Aug 27"
                category="Cricket"
              />
            </div>
          </aside>
        </div>

        {/* Top Right Sidebar - Mobile View */}
        <div className="lg:hidden">
          <div className="border border-neutral-200 bg-white mb-4">
            <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
            <div className="aspect-[4/3] bg-neutral-200">
              <img src="https://picsum.photos/seed/ad-sports-top-mobile/400/300" className="w-full h-full object-cover" alt="ad" />
            </div>
          </div>
          <div className="space-y-3">
            <SidebarArticle
              image="https://picsum.photos/seed/sl-zim-madushanka-mobile/80/80"
              title="SL vs ZIM, 1st ODI: Madushanka hattrick denies Zimbabwe win in a thriller"
              timestamp="Aug 29"
              category="Sports"
            />
            <SidebarArticle
              image="https://picsum.photos/seed/harbhajan-sreesanth-slap-mobile/80/80"
              title="Lalit Modi drops Harbhajan-Sreesanth slap video from IPL 2008 - Watch now"
              timestamp="Aug 29"
              category="Sports"
            />
            <SidebarArticle
              image="https://picsum.photos/seed/bradman-baggy-green-mobile/80/80"
              title="Donald Bradman's 1940 baggy green costs a fortune - here's why it matters"
              timestamp="Aug 29"
              category="Sports"
            />
            <SidebarArticle
              image="https://picsum.photos/seed/rohit-bronco-test-mobile/80/80"
              title="Rohit to undergo newly-introduced Bronco test at BCCI's CoE ahead of AUS ODIs"
              timestamp="Aug 29"
              category="Sports"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

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
      <div className="w-20 h-20 shrink-0">
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

function YouMayLikeItem({ image, text, isAd = false, adTitle = "", adSubtitle = "" }) {
  return (
    <div className="flex flex-col">
      <img src={image} alt={text} className="w-full h-32 object-cover bg-neutral-200" />
      {isAd ? (
        <div className="mt-2">
          <h4 className="text-[14px] font-semibold text-center">{adTitle}</h4>
          <p className="text-[12px] text-neutral-600 text-center mt-1">{adSubtitle}</p>
        </div>
      ) : (
        <p className="mt-2 text-[14px] text-center">{text}</p>
      )}
    </div>
  )
}

export default function Entertainment() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Entertainment
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h1 className="text-[28px] font-bold">Entertainment</h1>
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
                  src="https://picsum.photos/seed/batman/600/400" 
                  alt="Batman figure"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
                <img 
                  src="https://picsum.photos/seed/alan-ritchson/600/400" 
                  alt="Alan Ritchson"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Reacher star Alan Ritchson confirms he spoke to James Gunn about playing DCU's Batman
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>12 min ago</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Hollywood</span>
              </div>
            </article>

            {/* Top Right Sidebar - Mobile View */}
            <div className="lg:hidden">
              <div className="border border-neutral-200 bg-white mb-4">
                <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
                <div className="aspect-[4/3] bg-neutral-200">
                  <img src="https://picsum.photos/seed/ad-entertainment-top/640/480" className="w-full h-full object-cover" alt="ad" />
                </div>
              </div>
              <div className="space-y-3">
                <SidebarArticle 
                  image="https://picsum.photos/seed/kpop-group/80/80"
                  title="KPop Demon Hunters' Golden bags VMA Song of the Summer nomination"
                  timestamp="1 hrs ago"
                  category="Hollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/timothy-spall/80/80"
                  title="HBO's Harry Potter reboot defended by original actor Timothy Spall"
                  timestamp="2 hrs ago"
                  category="Hollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/dubai-princess/80/80"
                  title="Dubai princess, who divorced husband on IG, engaged to rapper French Montana"
                  timestamp="3 hrs ago"
                  category="Trading"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/tanya-mittal/80/80"
                  title="Bigg Boss' Tanya Mittal is the final boss of 'Pick me'"
                  timestamp="3:49 AM IST"
                  category="Entertainment"
                />
              </div>
            </div>

            {/* First Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/cameron-diaz/400/300"
                title="Cameron Diaz birthday special: 6 Must-watch films showcasing her versatility"
                timestamp="Aug 29"
                category="Photos"
                hasNumberedIcon={true}
                iconNumber={7}
              />
              <ArticleCard 
                image="https://picsum.photos/seed/harry-potter-children/400/300"
                title="Harry Potter director strongly reacts to reboot of franchise, says 'They are...'"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/ayushmann-sara/400/300"
                title="Scuffle breaks out on sets of Ayushmann Khurrana, Sara Ali Khan's film set"
                timestamp="Aug 29"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/bruce-willis/400/300"
                title="Bruce Willis' health update: Actor living separately, wife Emma Heming reveals"
                timestamp="Aug 29"
                category="Hollywood"
              />
            </div>

            {/* First "You May Like" Section */}
            <div>
              <h3 className="text-[18px] font-semibold mb-4">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <YouMayLikeItem 
                  image="https://picsum.photos/seed/retirement-man1/400/300"
                  text="Best Retirement Plans for You | Get monthly income of ₹6.72L"
                />
                <YouMayLikeItem 
                  image="https://picsum.photos/seed/retirement-man2/400/300"
                  text="Best Retirement Plans for You | Get monthly income of ₹6.72L"
                />
                <div className="border border-neutral-200 bg-white p-4">
                  <h4 className="text-[16px] font-bold text-center mb-2">Learn To Create Wealth In STOCK MARKET USING SWING</h4>
                  <p className="text-[14px] text-center mb-1">Hemant Jain 10+ years Experience</p>
                  <p className="text-[12px] text-neutral-600 text-center">"Swing is King": Mr. Hemant's Strategy Finally Explained in Free Session</p>
                </div>
              </div>
            </div>

            {/* Second Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/do-you-wanna-partner/400/300"
                title="Do You Wanna Partner trailer out! Tamannaah, Diana partner for a startup"
                timestamp="Aug 29"
                category="Entertainment"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/twilight-saga/400/300"
                title="The Twilight Saga back to back in theatres! Know when will it release"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/george-clooney/400/300"
                title="George Clooney pulls out from Venice Film Festival due to ill health"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/vishal-sai/400/300"
                title="Tamil stars Vishal-Sai Dhanshika get engaged on actor's birthday | See pics"
                timestamp="Aug 29"
                category="Entertainment"
              />
            </div>

            {/* Video Section */}
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/trump-elon/800/400" 
                alt="Trump and Elon Musk"
                className="w-full h-80 object-cover bg-neutral-200"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-200">
                  <FiPlay className="w-12 h-12 text-neutral-800" />
                </button>
              </div>
            </div>

            {/* Param Sundari Movie Banner */}
            <article className="flex flex-col">
              <img 
                src="https://picsum.photos/seed/param-sundari/800/400" 
                alt="Param Sundari Movie"
                className="w-full h-80 object-cover bg-neutral-200 mb-4"
              />
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Param Sundari movie review: Sidharth Malhotra's Param is no Rocky Randhawa and this is no 2 States
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 29</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Bollywood</span>
              </div>
            </article>

            {/* Third Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/sunny-sanekari/400/300"
                title="Sunny Sanekari Ki Tulsi Kumari first teaser is out! Watch"
                timestamp="Aug 29"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/gandhi-chaplin/400/300"
                title="From Gandhi to Chaplin: Must-watch movies directed by Richard Attenborough"
                timestamp="Aug 29"
                category="Photos"
                hasNumberedIcon={true}
                iconNumber={7}
              />
              <ArticleCard 
                image="https://picsum.photos/seed/ryan-gosling/400/300"
                title="Star Wars: Star Fighter First look at Ryan Gosling's Jedi master is out"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/lokah-chapter/400/300"
                title="Lokah Chapter 1: Here's why netizens are raving about the dark superhero film"
                timestamp="Aug 29"
                category="Entertainment"
              />
            </div>

            {/* Second "You May Like" Section */}
            <div>
              <h3 className="text-[18px] font-semibold mb-4">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <YouMayLikeItem 
                  image="https://picsum.photos/seed/hearing-aids/400/300"
                  text="Living in Nandinilayout? Don't Buy Hearing Aids Before Reading This"
                />
                <div className="border border-neutral-200 bg-white p-4">
                  <h4 className="text-[16px] font-bold text-center mb-2">शेयर बाज़ार की सबसे धमाकेदार Strategy</h4>
                  <p className="text-[14px] text-center">No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!</p>
                </div>
                <YouMayLikeItem 
                  image="https://picsum.photos/seed/english-fluency/400/300"
                  text="Secure Your Child's Future with Strong English Fluency"
                />
              </div>
            </div>

            {/* Fourth Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/ranveer-dhurandhar/400/300"
                title="Ranveer's Dhurandhar credits Rahul Gandhi as Executive Producer, who is he?"
                timestamp="Aug 28"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/linkin-park/400/300"
                title="Linkin Park is finally coming to India! Band announces details in newsletter"
                timestamp="Aug 28"
                category="Entertainment"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/deepika-ranveer/400/300"
                title="Deepika, Ranveer spotted at Ganesh Utsav celebration, see pics, video"
                timestamp="Aug 28"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/gen-v/400/300"
                title="Gen V: Jaz Sinclair wants her character to bring down Homelander"
                timestamp="Aug 28"
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
              <div className="aspect-[4/3] bg-neutral-200">
                <img src="https://picsum.photos/seed/ad-entertainment-top/640/480" className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>

            {/* Top Sidebar Articles */}
            <div className="space-y-3">
              <SidebarArticle 
                image="https://picsum.photos/seed/kpop-group/80/80"
                title="KPop Demon Hunters' Golden bags VMA Song of the Summer nomination"
                timestamp="1 hrs ago"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/timothy-spall/80/80"
                title="HBO's Harry Potter reboot defended by original actor Timothy Spall"
                timestamp="2 hrs ago"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/dubai-princess/80/80"
                title="Dubai princess, who divorced husband on IG, engaged to rapper French Montana"
                timestamp="3 hrs ago"
                category="Trading"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/tanya-mittal/80/80"
                title="Bigg Boss' Tanya Mittal is the final boss of 'Pick me'"
                timestamp="3:49 AM IST"
                category="Entertainment"
              />
            </div>

            {/* Mid-Page Advertisement */}
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img src="https://picsum.photos/seed/ad-entertainment-mid/640/480" className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>

            {/* Mid-Page Sidebar Articles */}
            <div className="space-y-3">
              <SidebarArticle 
                image="https://picsum.photos/seed/princess-diana/80/80"
                title="Princess Diana's time capsule opened 30 years later; Know about revealed items"
                timestamp="Aug 29"
                category="Royalty"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/guru-randhawa/80/80"
                title="Guru Randhawa faces ire of netizens over alleged sexualization of minors in Azul"
                timestamp="Aug 29"
                category="Entertainment"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/selena-gomez/80/80"
                title="Selena Gomez's bachelorette celebration in Mexico ahead wedding to Bonny Blanco"
                timestamp="Aug 29"
                category="Hollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/nagarjuna/80/80"
                title="Happy Birthday Nagarjuna: 8 must-watch films from the star"
                timestamp="Aug 29"
                category="Photos"
                hasNumberedIcon={true}
                iconNumber={7}
              />
            </div>
          </aside>
        </div>

        {/* Bottom Advertisement */}
        <div className="mt-8 border border-neutral-200 bg-white">
          <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
          <div className="aspect-[3/1] bg-neutral-200">
            <img src="https://picsum.photos/seed/ad-entertainment-bottom/1200/400" className="w-full h-full object-cover" alt="ad" />
          </div>
        </div>
      </div>
    </section>
  )
}

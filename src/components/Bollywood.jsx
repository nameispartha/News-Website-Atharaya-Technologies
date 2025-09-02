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

function XMAd({ title, subtitle, buttonText }) {
  return (
    <div className="border border-neutral-200 bg-white p-4 text-center">
      <div className="text-sm font-semibold text-neutral-700 mb-2">{title}</div>
      <div className="text-xs text-neutral-600 mb-3">{subtitle}</div>
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-4 py-2 rounded transition-colors">
        {buttonText}
      </button>
    </div>
  )
}

export default function Bollywood() {
  return (
    <section className="content-wrap">
      <div className="container-page">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Bollywood
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h1 className="text-[28px] font-bold">Bollywood</h1>
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
                  src="https://picsum.photos/seed/sara-ayushmann-car/600/400" 
                  alt="Sara Ali Khan and Ayushmann Khurrana in car"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
                <img 
                  src="https://picsum.photos/seed/chaotic-outdoor-scene/600/400" 
                  alt="Chaotic outdoor scene with blue shirt man"
                  className="w-full h-64 object-cover bg-neutral-200"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Scuffle breaks out on sets of Ayushmann Khurrana, Sara Ali Khan's film set; FIR lodged against local youth
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 29</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Bollywood</span>
              </div>
            </article>

            {/* Top Right Sidebar - Mobile View */}
            <div className="lg:hidden">
              <div className="border border-neutral-200 bg-white mb-4">
                <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
                <div className="aspect-[3/2] bg-neutral-200">
                  <img src="https://picsum.photos/seed/ad-bollywood-top/640/480" className="w-full h-full object-cover" alt="ad" />
                </div>
              </div>
              <div className="space-y-3">
                <SidebarArticle 
                  image="https://picsum.photos/seed/param-sundari-review/112/112"
                  title="Param Sundari movie review: The film is too tone deaf to be taken seriously"
                  timestamp="Aug 29"
                  category="Bollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/sunny-sanskari-teaser/112/112"
                  title="Sunny Sanskari Ki Tulsi Kumari first teaser is out! Watch"
                  timestamp="Aug 29"
                  category="Bollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/ranveer-dhurandhar/112/112"
                  title="Ranveer's Dhurandhar credits Rahul Gandhi as Executive Producer; who is he?"
                  timestamp="Aug 28"
                  category="Bollywood"
                />
                <SidebarArticle 
                  image="https://picsum.photos/seed/deepika-ranveer-ganesh/112/112"
                  title="Deepika, Ranveer spotted at Ganesh Utsav celebration, see pics, video"
                  timestamp="Aug 28"
                  category="Bollywood"
                />
              </div>
            </div>

            {/* First Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/lakshmi-menon-saree/400/300"
                title="Who is Lakshmi Menon? Tamil actress accused in a kidnapping and assault case"
                timestamp="Aug 27"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/govinda-sunita-traditional/400/300"
                title="Govinda is only mine! Sunita Ahuja rubbishes divorce rumours on Ganesh Chaturthi"
                timestamp="Aug 27"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/neha-angad-boat/400/300"
                title="Neha Dhupia and Angad Bedi jet off for honeymoon after 8 years of marriage!"
                timestamp="Aug 27"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/ganesh-chaturthi-stars/400/300"
                title="Ganesh Chaturthi 2025: Ananya Panday, Kareena Kapoor Khan stars extend wishes"
                timestamp="Aug 27"
                category="Bollywood"
              />
            </div>

            {/* First "You May Like" Section - Real Estate */}
            <div>
              <h3 className="text-[18px] font-semibold mb-4">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd 
                  image="https://picsum.photos/seed/sowparnika-highrise/400/300"
                  title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹81.42 Lacs* | No Pre EMI till Possession"
                  details="Whitefield, Near DPS school"
                  company="SOWPARNIKA"
                  buttonText="Learn More"
                  buttonColor="bg-blue-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/city-garden-woman-child/400/300"
                  title="city garden nce grows... Premium 2 & 3 BHK Apartments in Whitefield: Starts at ₹87 Lacs* | No Pre EMI till 2027"
                  details=""
                  company=""
                  buttonText="Learn More"
                  buttonColor="bg-blue-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/mana-cresta-modern/400/300"
                  title="FREEDOM OFFER Mana Cresta 3 BHK | ₹1.49 Cr* Onwards"
                  details=""
                  company=""
                  buttonText="Get Quote"
                  buttonColor="bg-green-600"
                />
              </div>
            </div>

            {/* Second Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/kamal-aparna-love/400/300"
                title="Kamal Haasan was in love with Aparna Sen, learnt Bengali to impress her"
                timestamp="Aug 27"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/gaurav-khanna-suit/400/300"
                title="Bigg Boss 19: Gaurav Khanna Says he's being targeted for being a strong player"
                timestamp="Aug 27"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/ganesha-cartoon/400/300"
                title="Celebrate Ganesh Chaturthi 2025 with 6 must-watch Lord Ganesha movies and shows"
                timestamp="Aug 27"
                category="Photos"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/celeb-inspired-looks/400/300"
                title="Celeb-inspired looks for Ganesh Chaturthi 2025: Alia Bhatt to Ananya Panday"
                timestamp="Aug 26"
                category="Photos"
              />
            </div>

            {/* Small Content Block */}
            <div className="bg-neutral-100 p-4 rounded-lg">
              <div className="flex items-center gap-3">
                <img 
                  src="https://picsum.photos/seed/health-writing-glass/80/80" 
                  alt="Health writing on glass"
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="text-[16px] font-medium">citing health reasons</div>
              </div>
            </div>

            {/* Large Article/Teaser (Baahubali) */}
            <article className="flex flex-col">
              <img 
                src="https://picsum.photos/seed/baahubali-prabhas-warrior/800/400" 
                alt="Prabhas as Baahubali in warrior costume"
                className="w-full h-80 object-cover bg-neutral-200 mb-4"
              />
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Baahubali The Epic teaser: Prabhas-starrer to make a grand return with a new version
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 26</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Bollywood</span>
              </div>
            </article>

            {/* Third Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/national-sports-day-collage/400/300"
                title="National Sports Day 2025: 7 Best Bollywood Movies on Indian Sportspersons"
                timestamp="Aug 25"
                category="Photos"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/gustaakh-ishq-vijay-fatima/400/300"
                title="Gustaakh Ishq teaser: Vijay & Fatima star in a classic love saga"
                timestamp="Aug 25"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/virat-avneet-split/400/300"
                title="Avneet Kaur indirectly reacts to Virat Kohli's liking her pic viral incident"
                timestamp="Aug 25"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/vijay-deverakonda-shirtless/400/300"
                title="Kingdom OTT release date: When and where to watch Vijay Deverakonda's movie"
                timestamp="Aug 25"
                category="Bollywood"
              />
            </div>

            {/* Second "You May Like" Section - Real Estate */}
            <div>
              <h3 className="text-[18px] font-semibold mb-4">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd 
                  image="https://picsum.photos/seed/luxury-villa-plots-foliage/400/300"
                  title="Premium Villa Plots Near Airport - From ₹1.7 Cr*"
                  details=""
                  company="THE ADDRESS OF CALM LIVING, FAST GROWTH & LASTING VALUE. LUXURY VILLA PLOTS"
                  buttonText="Learn More"
                  buttonColor="bg-blue-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/sattva-lumina-night-view/400/300"
                  title="Live the lake-view life Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from ₹1.54 crore*"
                  details=""
                  company=""
                  buttonText="Get Quote"
                  buttonColor="bg-green-600"
                />
                <RealEstateAd 
                  image="https://picsum.photos/seed/retirement-plans-man-suit/400/300"
                  title="Best Retirement Plans for You | Get monthly income of ₹6.72L"
                  details=""
                  company=""
                  buttonText="Get Quote"
                  buttonColor="bg-green-600"
                />
              </div>
            </div>

            {/* Fourth Article Grid (2 columns) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/hrithik-krrish-mask/400/300"
                title="Hrithik Roshan's Krrish mask was made of wax: Rakesh Roshan spills a secret"
                timestamp="Aug 25"
                category="Bollywood"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/salman-khan-lion-stage/400/300"
                title="Bigg Boss 19: Salman Khan's take on true love? Here's what he said"
                timestamp="Aug 25"
                category="Bollywood"
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
            {/* Top XM Advertisement */}
            <XMAd 
              title="XM 15 YEARS"
              subtitle="Get Up to $10,600 in Bonuses"
              buttonText="Get Bonus"
            />

            {/* Top Sidebar Articles */}
            <div className="space-y-3">
              <SidebarArticle 
                image="https://picsum.photos/seed/param-sundari-review/112/112"
                title="Param Sundari movie review: The film is too tone deaf to be taken seriously"
                timestamp="Aug 29"
                category="Bollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/sunny-sanskari-teaser/112/112"
                title="Sunny Sanskari Ki Tulsi Kumari first teaser is out! Watch"
                timestamp="Aug 29"
                category="Bollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/ranveer-dhurandhar/112/112"
                title="Ranveer's Dhurandhar credits Rahul Gandhi as Executive Producer; who is he?"
                timestamp="Aug 28"
                category="Bollywood"
              />
              <SidebarArticle 
                image="https://picsum.photos/seed/deepika-ranveer-ganesh/112/112"
                title="Deepika, Ranveer spotted at Ganesh Utsav celebration, see pics, video"
                timestamp="Aug 28"
                category="Bollywood"
              />
            </div>

            {/* Mid-Page Advertisement */}
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[3/2] bg-neutral-200">
                <img src="https://picsum.photos/seed/ad-bollywood-mid/640/480" className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Advertisement */}
        <div className="mt-8 border border-neutral-200 bg-white">
          <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
          <div className="aspect-[3/1] bg-neutral-200">
            <img src="https://picsum.photos/seed/ad-bollywood-bottom/1200/400" className="w-full h-full object-cover" alt="ad" />
          </div>
        </div>
      </div>
    </section>
  )
}

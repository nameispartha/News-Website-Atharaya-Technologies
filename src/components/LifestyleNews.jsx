import React from 'react'
import { Link } from 'react-router-dom'

function ArticleCard({ seed, title, date, category, iconNumber = null }) {
  return (
    <article className="flex flex-col">
      <div className="relative">
        <img 
          src={`https://picsum.photos/400/250?random=${seed}`} 
          alt="thumb" 
          className="w-full h-40 object-cover"
          onError={(e) => {
            e.target.src = `https://dummyimage.com/400x250/cccccc/666666&text=Lifestyle+${seed}`;
          }}
        />
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

function SidebarItem({ seed, title, date, category, iconNumber = null }) {
  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <div className="relative w-[88px] h-[66px]">
        <img 
          src={`https://picsum.photos/88/66?random=${seed + 300}`} 
          className="w-full h-full object-cover" 
          alt="thumb"
          onError={(e) => {
            e.target.src = `https://dummyimage.com/88x66/cccccc/666666&text=Sidebar+${seed}`;
          }}
        />
        {iconNumber && (
          <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
            <span className="text-white text-[10px] font-bold">{iconNumber.toString().padStart(2, '0')}</span>
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

function VideoPlayer({ seed, title }) {
  return (
    <div className="relative">
      <video 
        className="w-full h-96 object-cover"
        poster={`https://picsum.photos/1000/560?random=${seed + 400}`}
        controls
      >
        <source src={`https://sample-videos.com/zip/10/mp4/SampleVideo_${seed}.mp4`} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-4 left-4 bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
        {title}
      </div>
    </div>
  )
}

export default function LifestyleNews() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Lifestyle
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
            <h2 className="text-lg font-semibold">Lifestyle</h2>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Article - Princess Diana */}
            <div>
              <img 
                src="https://picsum.photos/1000/560?random=1" 
                alt="Princess Diana" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "https://dummyimage.com/1000x560/cccccc/666666&text=Princess+Diana";
                }}
              />
              <h3 className="mt-3 text-[18px] font-semibold leading-6">Princes Diana's time capsule opened 30 years later at London hospital; Know all about revealed items</h3>
              <span className="mt-2 text-sm text-neutral-600">52 mins ago | Lifestyle</span>
            </div>

            {/* Grid of Four Articles */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <ArticleCard seed={1} title="The Nine Lives of Zelensky: From comedy star to wartime president" date="Aug 28" category="Lifestyle" iconNumber={10} />
              <ArticleCard seed={2} title="Miss Universe India 2025: All about Manika Vishwakarma, winner of beauty pageant" date="Aug 19" category="Lifestyle" />
              <ArticleCard seed={3} title="Krishna Janmashtami 2025: 10 iconic temples in India to celebrate Janmashtami" date="Aug 19" category="Lifestyle" iconNumber={10} />
              <ArticleCard seed={4} title="British opium trade to Indian kitchens- Dark history of Bengal's comfort food" date="Aug 19" category="Lifestyle" />
            </div>

            {/* You May Like Section 1 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <RealEstateAd seed={1} title="Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from ₹1.54 crore*" buttonText="Get Quote" />
                <RealEstateAd seed={2} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre EMI till 2027" buttonText="Learn More" />
                <AdCard seed={1} title="शेयर बाज़ार की सबसे धमाकेदार Strategy - No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!" buttonText="Learn More" />
                <ArticleCard seed={5} title="Kiara Advani's fair trade with daughter, 1 change your diapers, you change..." date="Aug 10" category="Bollywood" />
              </div>
            </div>

            {/* Grid of Four Articles */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <ArticleCard seed={6} title="Why do Indians fly kites during Independence Day? It was once a mark of protest" date="Aug 14" category="Trending" />
              <ArticleCard seed={7} title="Harry and Meghan Markle extend Netflix partnership, here's what new deal is" date="Aug 12" category="Lifestyle" />
              <ArticleCard seed={8} title="In this country, people are paying companies so that they can pretend to work" date="Aug 11" category="Trending" />
              <ArticleCard seed={9} title="Kiara Advani's fair trade with daughter, 1 change your diapers, you change..." date="Aug 10" category="Bollywood" />
            </div>

            {/* Video Player - Vice President of India */}
            <div>
              <VideoPlayer seed={1} title="Vice President of India" />
            </div>

            {/* Hair Transplant Article */}
            <div>
              <img 
                src="https://picsum.photos/1000/560?random=2" 
                alt="Hair Transplant" 
                className="w-full h-auto object-cover"
                onError={(e) => {
                  e.target.src = "https://dummyimage.com/1000x560/cccccc/666666&text=Hair+Transplant";
                }}
              />
              <h3 className="mt-3 text-[18px] font-semibold leading-6">Hair Transplant: Myths vs Facts decoded by expert, know key parameters and procedures</h3>
              <span className="mt-2 text-sm text-neutral-600">Aug 09 | Lifestyle</span>
            </div>

            {/* You May Like Section 2 */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <ArticleCard seed={10} title="Sunburn festival 2025: Mumbai to host the musical event for the first time ever!" date="Aug 06" category="Lifestyle" />
                <ArticleCard seed={11} title="Rihanna announces launch of her beauty brand Fenty in India with quirky video" date="Aug 05" category="Lifestyle" />
                <ArticleCard seed={12} title="Ulta Beauty boycott calls rage because of 'Genderqueer' Netflix Star" date="Aug 05" category="Entertainment" />
                <ArticleCard seed={13} title="Trump backs 'HOTTEST' Sydney Sweeney amid American Eagle ad controversy" date="Aug 05" category="Lifestyle" />
              </div>
            </div>

            {/* You May Like Section 3 - Real Estate Ads */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd seed={3} title="Ecocity Phase 2 Pre-Launch at ₹4500/Sqft" buttonText="Get Quote" />
                <RealEstateAd seed={4} title="Well-ventilated 3BHK homes at ₹1.79 Cr* by Abhee Aaria" buttonText="Contact Us" />
                <RealEstateAd seed={5} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹1.42 Lacs* | No Pre EMI till Possession" buttonText="Learn More" />
              </div>
            </div>

            {/* You May Like Section 4 - Two Articles */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
                <h3 className="text-base font-semibold">You May Like</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ArticleCard seed={14} title="Happy International Friendship Day 2025: Best wishes, quotes and greetings" date="Aug 03" category="Life & Fun" />
                <ArticleCard seed={15} title="Sydney Sweeney gets support from American Eagle ad after facing criticism for ad" date="Aug 02" category="Lifestyle" />
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="space-y-3">
            {/* Advertisement Banner */}
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img 
                  src="https://picsum.photos/640/480?random=3" 
                  className="w-full h-full object-cover" 
                  alt="ad"
                  onError={(e) => {
                    e.target.src = "https://dummyimage.com/640x480/cccccc/666666&text=Advertisement";
                  }}
                />
              </div>
            </div>

            {/* Trending News List */}
            <div className="space-y-2">
              <SidebarItem seed={1} title="Gen Z is leading the return to office - it's not just about the corporate ladder" date="Aug 27" category="Trending" />
              <SidebarItem seed={2} title="Over 200,000 workers in the UK have transitioned to four-day workweek since 2019" date="Aug 23" category="Trending" />
              <SidebarItem seed={3} title="Gordon Ramsay opens First Indian restaurant 'Street Burger' at Delhi Airport" date="Aug 21" category="Lifestyle" />
              <SidebarItem seed={4} title="113-year-old Swedish church moved 3 miles on wheels" date="Aug 20" category="World" />
              <SidebarItem seed={5} title="Better than America: US YouTuber impressed by Gurugram's Cyber Hub" date="Aug 07" category="Entertainment" />
              <SidebarItem seed={6} title="Independence Day 2025 weekend: 7 best travel destinations near metro cities" date="Aug 07" category="Lifestyle" iconNumber={8} />
              <SidebarItem seed={7} title="Beyonce's old denim ad compared to Sydney Sweeney's American Eagle ad" date="Aug 06" category="Lifestyle" />
              <SidebarItem seed={8} title="Advertising body bans two Zara ads for featuring unhealthily thin models" date="Aug 06" category="Lifestyle" />
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

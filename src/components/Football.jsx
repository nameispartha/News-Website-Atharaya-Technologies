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

export default function Football() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Football
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h1 className="text-[28px] font-bold">Football</h1>
          </div>
        </div>

                 {/* Main Content Grid */}
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
           {/* Main Content Area - 3 Columns */}
           <div className="lg:col-span-3 space-y-8">
            
            {/* Hero Article */}
            <article className="flex flex-col">
              <div className="mb-4">
                <img 
                  src="https://picsum.photos/seed/messi-argentina-football/800/500" 
                  alt="Lionel Messi in Argentina national team jersey"
                  className="w-full h-80 object-cover bg-neutral-200"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Messi to not play in FIFA World Cup 2026? Argentina star gears up for 'very special match' at home
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 28</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Sports</span>
              </div>
            </article>

            {/* First Article Grid - 2x2 (4 horizontal images) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/league-cup-amorim-grimsby/400/300"
                title="League Cup: Amorim admits Man Utd was 'completely lost in shock loss to Grimsby'"
                timestamp="Aug 28"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/kairat-almaty-ucl-debut/400/300"
                title="Who are Kairat Almaty, ranked 311 in Europe, now set for UCL debut? Details here"
                timestamp="Aug 27"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/bundesliga-dortmund-kovac/400/300"
                title="Bundesliga: Borussia Dortmund extend coach Niko Kovac's contract until 2027"
                timestamp="Aug 26"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/liverpool-rio-ngumoha-100th-minute/400/300"
                title="Watch: Liverpool teenager Rio Ngumoha scripts history with 100th minute winner"
                timestamp="Aug 26"
                category="Sports"
              />
            </div>

            {/* You May Like Section - Real Estate Ads */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd
                  image="https://picsum.photos/seed/sowparnika-explore-whitefield/400/300"
                  title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹81.42 Lacs* | No Pre EMI till Possession"
                  company="Sowparnika Explore"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/sowparnika-rhythm-whitefield/400/300"
                  title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre EMI till 2027"
                  company="Sowparnika Rhythm"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/sattva-lumina-premium/400/300"
                  title="Sattva Lumina premium apartments: 2BHK from ₹1.12 crore* and 3 BHK from ₹2.54 crore*"
                  company="Sattva Lumina"
                />
              </div>
            </div>

            {/* Second Article Grid - 2x2 (4 horizontal images) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ArticleCard 
                image="https://picsum.photos/seed/ruben-amorim-kobbie-mainoo/400/300"
                title="Ruben Amorim warns Kobbie Mainoo he must fight for his Manchester United place"
                timestamp="Aug 25"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/rooney-arsenal-teen-dowman/400/300"
                title="Former Man Utd hero Rooney predicts 'massive future' for Arsenal teen Dowman"
                timestamp="Aug 25"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/transfer-deadline-day-window/400/300"
                title="Transfer Deadline Day: All you need to know - when is window closing?"
                timestamp="Aug 25"
                category="Sports"
              />
              <ArticleCard 
                image="https://picsum.photos/seed/premier-league-man-utd-everton/400/300"
                title="Premier League: Manchester United remain winless; Everton win at new stadium"
                timestamp="Aug 25"
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
                  Expedia
                </div>
              </div>
            </div>

            {/* Main Article Below Video */}
            <article className="flex flex-col">
              <div className="mb-4">
                <img 
                  src="https://picsum.photos/seed/ronaldo-al-nassr-saudi-super-cup/800/500" 
                  alt="Cristiano Ronaldo in yellow jersey"
                  className="w-full h-80 object-cover bg-neutral-200"
                />
              </div>
              <h2 className="text-[22px] font-bold leading-7 mb-2">
                Watch: Cristiano Ronaldo scores 100th goal for Al-Nassr in Saudi Super Cup, leaves heartbroken for THIS reason
              </h2>
              <div className="flex items-center gap-2 text-sm text-neutral-600">
                <span>Aug 24</span>
                <span>•</span>
                <span className="text-yellow-600 font-medium">Sports</span>
              </div>
            </article>

                         {/* Third Article Grid - 4 Columns */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <ArticleCard 
                 image="https://picsum.photos/seed/viktor-gyokeres-arsenal-leeds/400/300"
                 title="Viktor Gyokeres scores brace as Arsenal thrash Leeds to go on top of PL table"
                 timestamp="Aug 24"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/bayer-leverkusen-ten-hag/400/300"
                 title="Bayer Leverkusen lose on Erik Ten Hag's Bundesliga debut"
                 timestamp="Aug 23"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/spurs-manchester-city-top/400/300"
                 title="PL: Spurs sink Manchester City to go on top of standings after two games"
                 timestamp="Aug 23"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/arsenal-premier-league-top/400/300"
                 title="Arsenal maintain perfect start with dominant victory over Crystal Palace"
                 timestamp="Aug 23"
                 category="Sports"
               />
             </div>

                         {/* Fourth Article Grid - 4 Columns */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <ArticleCard 
                 image="https://picsum.photos/seed/messi-kerala-friendly-november/400/300"
                 title="Argentina FA confirms Messi's visit to Kerala, to play friendly in November"
                 timestamp="Aug 23"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/champions-league-draw-date/400/300"
                 title="Champions League draw: When is the league phase draw? Date and other key details"
                 timestamp="Aug 23"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/fans-arrested-copa-sudamericana/400/300"
                 title="Fans arrested during football match, what exactly happened in Copa Sudamericana?"
                 timestamp="Aug 22"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/argentina-friendly-match/400/300"
                 title="Argentina national team announces European tour for November 2024"
                 timestamp="Aug 22"
                 category="Sports"
               />
             </div>

            {/* You May Like Section - Second Instance */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">You May Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <RealEstateAd
                  image="https://picsum.photos/seed/sumadhura-group-luxury-villa/400/300"
                  title="THE ADDRESS OF CALM LIVING, FAST GROWTH & LASTING VALUE. LUXURY VILLA PLOTS"
                  company="Sumadhura Group"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/abhee-azria-3bhk-homes/400/300"
                  title="Well-ventilated 3BHK homes at ₹1.79 Cr* by Abhee Azria"
                  company="Abhee Azria"
                />
                <RealEstateAd
                  image="https://picsum.photos/seed/mr-bala-intraday-strategy/400/300"
                  title="Top Intraday Expert Mr. Bala Revealing His Most Profitable Strategy for Free!"
                  company="TradeFlow"
                />
              </div>
            </div>

                         {/* Fifth Article Grid - 4 Columns */}
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
               <ArticleCard 
                 image="https://picsum.photos/seed/suarez-miami-messi-absence/400/300"
                 title="Suarez scores penalty in each half to see Miami through in Messi's absence"
                 timestamp="Aug 21"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/alexander-isak-newcastle-liverpool/400/300"
                 title="Explained: Alexander Isak-Newcastle saga as player pushes for Liverpool move"
                 timestamp="Aug 20"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/isak-newcastle-breaking-point/400/300"
                 title="Bench him and don't sell him: Isak-Newcastle saga reaches breaking point"
                 timestamp="Aug 20"
                 category="Sports"
               />
               <ArticleCard 
                 image="https://picsum.photos/seed/newcastle-transfer-news/400/300"
                 title="Newcastle United confirm new signing ahead of Premier League season"
                 timestamp="Aug 20"
                 category="Sports"
               />
             </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 py-8">
              <button className="px-3 py-2 bg-yellow-600 text-white rounded">1</button>
              <button className="px-3 py-2 text-neutral-600 hover:text-yellow-600">2</button>
              <button className="px-3 py-2 text-neutral-600 hover:text-yellow-600">&gt;</button>
            </div>
                     </div>

           {/* Right Sidebar - Desktop View */}
           <aside className="hidden lg:block space-y-6">
             {/* Top Advertisement Block */}
             <div className="border border-neutral-200 bg-white">
               <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
               <div className="aspect-[4/3] bg-neutral-200">
                 <img src="https://picsum.photos/seed/fancy-tea-options/400/300" className="w-full h-full object-cover" alt="Fancy Tea Options" />
               </div>
             </div>

             {/* Top Sidebar Articles */}
             <div className="space-y-3">
               <SidebarArticle
                 image="https://picsum.photos/seed/jose-mourinho-fenerbahce/80/80"
                 title="Jose Mourinho and Turkey's Fenerbahce part ways: Club Statement"
                 timestamp="Aug 28"
                 category="Sports"
               />
               <SidebarArticle
                 image="https://picsum.photos/seed/ole-gunnar-solskjaer-besiktas/80/80"
                 title="Ex-Manchester United boss Solskjaer sacked by Besiktas after European flop"
                 timestamp="Aug 28"
                 category="Sports"
               />
               <SidebarArticle
                 image="https://picsum.photos/seed/uefa-champions-league-draw/80/80"
                 title="UEFA Champions League Draw: Check all home and away matches for each team"
                 timestamp="Aug 28"
                 category="Sports"
               />
               <SidebarArticle
                 image="https://picsum.photos/seed/messi-miami-leagues-cup-final/80/80"
                 title="Lionel Messi hits late winner to send Miami into Leagues Cup final - WATCH"
                 timestamp="Aug 28"
                 category="Sports"
               />
             </div>

             {/* Mid-Page Advertisement Block */}
             <div className="border border-neutral-200 bg-white">
               <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
               <div className="aspect-[4/3] bg-neutral-200">
                 <img src="https://picsum.photos/seed/ad-football-mid/400/300" className="w-full h-full object-cover" alt="ad" />
               </div>
             </div>

             {/* Mid-Page Sidebar Articles */}
             <div className="space-y-3">
               <SidebarArticle
                 image="https://picsum.photos/seed/mizoram-football-lallianzuala/80/80"
                 title="Mizoram's love for football runs deep: Lallianzuala Chhangte on N launch"
                 timestamp="Aug 23"
                 category="Sports"
               />
               <SidebarArticle
                 image="https://picsum.photos/seed/ten-hag-leverkusen-rebuilding/80/80"
                 title="Former Man Utd coach Ten Hag hopes for fresh start at rebuilding Leverkusen"
                 timestamp="Aug 21"
                 category="Sports"
               />
               <SidebarArticle
                 image="https://picsum.photos/seed/mbappe-real-madrid-osasuna/80/80"
                 title="Kylian Mbappe lifts Real Madrid past Osasuna in La Liga opener"
                 timestamp="Aug 20"
                 category="Sports"
               />
             </div>
           </aside>
         </div>

         {/* Top Right Sidebar - Mobile View */}
        <div className="lg:hidden">
          <div className="border border-neutral-200 bg-white mb-4">
            <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
            <div className="aspect-[4/3] bg-neutral-200">
              <img src="https://picsum.photos/seed/fancy-tea-options-mobile/400/300" className="w-full h-full object-cover" alt="Fancy Tea Options" />
            </div>
          </div>
          <div className="space-y-3">
            <SidebarArticle
              image="https://picsum.photos/seed/jose-mourinho-fenerbahce-mobile/80/80"
              title="Jose Mourinho and Turkey's Fenerbahce part ways: Club Statement"
              timestamp="Aug 28"
              category="Sports"
            />
            <SidebarArticle
              image="https://picsum.photos/seed/ole-gunnar-solskjaer-besiktas-mobile/80/80"
              title="Ex-Manchester United boss Solskjaer sacked by Besiktas after European flop"
              timestamp="Aug 28"
              category="Sports"
            />
            <SidebarArticle
              image="https://picsum.photos/seed/uefa-champions-league-draw-mobile/80/80"
              title="UEFA Champions League Draw: Check all home and away matches for each team"
              timestamp="Aug 28"
              category="Sports"
            />
            <SidebarArticle
              image="https://picsum.photos/seed/messi-miami-leagues-cup-final-mobile/80/80"
              title="Lionel Messi hits late winner to send Miami into Leagues Cup final - WATCH"
              timestamp="Aug 28"
              category="Sports"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

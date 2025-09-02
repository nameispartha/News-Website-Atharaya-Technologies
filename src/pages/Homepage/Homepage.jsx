import React from 'react'
import { Link } from 'react-router-dom'

export default function Homepage() {
  return (
    <div>
      {false && (
        <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white overflow-hidden">
          <div className="container-page">
            <div className="flex items-center justify-between py-3">
              {/* Z-News Channel Logos - Scrolling from Right to Left */}
              <div className="flex-1 overflow-hidden">
                <div className="flex items-center space-x-6 text-sm font-medium animate-scroll-right-to-left whitespace-nowrap">
                  <span>Z 24 Ghanta</span>
                  <span>Z 24 Taas</span>
                  <span>Z UP UK</span>
                  <span>Z Rajasthan</span>
                  <span>Z Malayalam News</span>
                  <span>Z Tamil News</span>
                  <span>Z Telugu News</span>
                  <span>Z Delhi NCR Haryana</span>
                  <span>Z J&K Ladakh</span>
                  {/* Duplicate for seamless loop */}
                  <span>Z 24 Ghanta</span>
                  <span>Z 24 Taas</span>
                  <span>Z UP UK</span>
                  <span>Z Rajasthan</span>
                  <span>Z Malayalam News</span>
                  <span>Z Tamil News</span>
                  <span>Z Telugu News</span>
                  <span>Z Delhi NCR Haryana</span>
                  <span>Z J&K Ladakh</span>
                </div>
              </div>
              
              {/* Advertisement Label */}
              <div className="text-xs text-white/80 ml-4">
                ADVERTISEMENT
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Main Content Area */}
                  <section className="content-wrap">
        <div className="container-page">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Left Sidebar - Trending News */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-neutral-200">
                <div className="bg-neutral-100 px-4 py-3 border-b border-neutral-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Trending News</h3>
                    <Link to="/trending" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All »</Link>
                  </div>
                </div>
                
                <div className="p-4 space-y-0">
                  {/* Trending News Item 1 */}
                  <div className="flex gap-3 py-3 border-b border-neutral-200 last:border-0">
                    <Link to="/details/1" className="w-20 h-20 shrink-0 block">
                      <img src="https://picsum.photos/seed/dubai-princess-french-montana/80/80" alt="Dubai Princess" className="w-full h-full object-cover bg-neutral-200 hover:opacity-90 transition-opacity" />
                    </Link>
                    <div className="min-w-0">
                      <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">
                        <Link to="/details/1" className="hover:text-yellow-700 transition-colors">Dubai princess, who divorced husband on IG, engaged to rapper French Montana</Link>
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                        <span>Aug 30</span>
                        <span>|</span>
                        <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trending News Item 2 */}
                  <div className="flex gap-3 py-3 border-b border-neutral-200 last:border-0">
                    <Link to="/details/2" className="w-20 h-20 shrink-0 block">
                      <img src="https://picsum.photos/seed/man-sets-fire-airport/80/80" alt="Man on Fire" className="w-full h-full object-cover bg-neutral-200 hover:opacity-90 transition-opacity" />
                    </Link>
                    <div className="min-w-0">
                      <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">
                        <Link to="/details/2" className="hover:text-yellow-700 transition-colors">VIDEO: Man sets himself on fire at airport, after argument with wife</Link>
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                        <span>Aug 29</span>
                        <span>|</span>
                        <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trending News Item 3 */}
                  <div className="flex gap-3 py-3 border-b border-neutral-200 last:border-0">
                    <Link to="/details/3" className="w-20 h-20 shrink-0 block">
                      <img src="https://picsum.photos/seed/whale-sharks-injured/80/80" alt="Whale Shark" className="w-full h-full object-cover bg-neutral-200 hover:opacity-90 transition-opacity" />
                    </Link>
                    <div className="min-w-0">
                      <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">
                        <Link to="/details/3" className="hover:text-yellow-700 transition-colors">Humans have injured 80% of whale sharks in THIS popular tourist waters</Link>
                      </h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                        <span>Aug 29</span>
                        <span>|</span>
                        <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trending News Item 4 */}
                  <div className="flex gap-3 py-3 border-b border-neutral-200 last:border-0">
                    <div className="w-20 h-20 shrink-0">
                      <img src="https://picsum.photos/seed/old-newspaper-stopping/80/80" alt="Old Newspapers" className="w-full h-full object-cover bg-neutral-200" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">This 150-year-old US newspaper is stopping printing for THIS reason</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                        <span>Aug 28</span>
                        <span>|</span>
                        <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                      </div>
                    </div>
                  </div>
                  
                  {/* Trending News Item 5 */}
                  <div className="flex gap-3 py-3 border-b border-neutral-200 last:border-0">
                    <div className="w-20 h-20 shrink-0">
                      <img src="https://picsum.photos/seed/google-maps-attacked-villagers/80/80" alt="Google Maps Attack" className="w-full h-full object-cover bg-neutral-200" />
                    </div>
                    <div className="min-w-0">
                      <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">Night survey turns into nightmare! Google Maps attacked by villagers in UP</h4>
                      <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                        <span>Aug 29</span>
                        <span>|</span>
                        <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                      </div>
                    </div>
                  </div>
                  
                
                 
                  
                 
                </div>
              </div>
            </div>
            
            {/* Central Main Article */}
            <div className="lg:col-span-2">
              <div className="space-y-6">
                {/* Main Headline Article */}
                <article className="bg-white border border-neutral-200">
                  <div className="p-4">
                    {/* Main Image - Beach Scene */}
                    <div className="mb-4">
                      <img 
                        src="https://picsum.photos/seed/beach-palm-tree-sunset/800/500" 
                        alt="Tropical beach scene with palm tree and sunset"
                        className="w-full h-96 object-cover bg-neutral-200"
                      />
                    </div>
                    
                    <h1 className="text-2xl font-bold leading-tight mb-3">
                      You won't believe what Hyderabad is building for ₹225 crore! All details here
                    </h1>
                    
                    <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                      <span>2 hrs ago</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            
            {/* Right Sidebar - Ads & Live TV */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                {/* Advertisement Block */}
                <div className="bg-white border border-neutral-200">
                  <div className="bg-neutral-100 px-3 py-2 border-b border-neutral-200">
                    <span className="text-sm font-semibold text-neutral-600">ADVERTISEMENT</span>
                  </div>
                  <div className="h-64 bg-white flex items-center justify-center">
                    <div className="text-neutral-400 text-sm">Ad Space</div>
                  </div>
                </div>
                
                {/* Live TV Section */}
                <div className="bg-white border border-neutral-200">
                  <div className="bg-neutral-100 px-3 py-2 border-b border-neutral-200">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-sm font-semibold text-neutral-600">Live TV</span>
                    </div>
                  </div>
                  <div className="h-48 bg-black flex items-center justify-center">
                    {/* Loading Spinner */}
                    <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trending News Section - Below Main Content */}
      <section className="content-wrap mt-8">
        <div className="container-page">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Trending News</h2>
            <Link to="/trending" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All »</Link>
          </div>
          
          {/* Trending News Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Column - Hero Article */}
            <div className="lg:col-span-1">
              <article className="bg-white border border-neutral-200">
                <div className="p-4">
                  {/* Hero Image - Beach Scene */}
                  <div className="mb-4">
                    <img 
                      src="https://picsum.photos/seed/beach-palm-tree-sunset/800/500" 
                      alt="Tropical beach scene with palm tree and sunset"
                      className="w-full h-96 object-cover bg-neutral-200"
                    />
                  </div>
                  
                  <h1 className="text-2xl font-bold leading-tight mb-3">
                    You won't believe what Hyderabad is building for ₹225 crore! All details here
                  </h1>
                  
                  <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                    <span>2 hrs ago</span>
                    <span>|</span>
                    <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                  </div>
                </div>
              </article>
            </div>
            
            {/* Right Column - Grid of 8 Trending Articles */}
            <div className="lg:col-span-1">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Trending Article 1 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/dubai-princess-french-montana/80/80" alt="Dubai Princess" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">Dubai princess, who divorced husband on IG, engaged to rapper French Montana</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 30</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
                
                {/* Trending Article 2 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/man-sets-fire-airport/80/80" alt="Man on Fire" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">VIDEO: Man sets himself on fire at airport, after argument with wife</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 29</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
                
                {/* Trending Article 3 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/whale-sharks-injured/80/80" alt="Whale Shark" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">Humans have injured 80% of whale sharks in THIS popular tourist waters</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 29</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
                
                {/* Trending Article 4 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/old-newspaper-stopping/80/80" alt="Old Newspapers" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">This 150-year-old US newspaper is stopping printing for THIS reason</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 28</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
                
                {/* Trending Article 5 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/google-maps-attacked-villagers/80/80" alt="Google Maps Attack" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">Night survey turns into nightmare! Google Maps attacked by villagers in UP</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 29</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
                
                {/* Trending Article 6 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/radioactive-waste-ocean/80/80" alt="Radioactive Waste" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">European nations dumped 200,000 barrels of radioactive waste in ocean | Details</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 29</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
                
                {/* Trending Article 7 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/ganesh-chaturthi-texas/80/80" alt="Ganesh Chaturthi" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">Ganesh Chaturthi celebration in Texas parking lot sparks controversy</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 28</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
                
                {/* Trending Article 8 */}
                <div className="flex gap-3 py-3 border-b border-neutral-200">
                  <div className="w-20 h-20 shrink-0">
                    <img src="https://picsum.photos/seed/illegal-wildlife-ring/80/80" alt="Meerkats" className="w-full h-full object-cover bg-neutral-200" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-[14px] leading-4 font-medium hover:text-yellow-700 line-clamp-2">Online ad uncovers illegal wildlife ring: Secret Nules Zoo had 56 exotic species</h4>
                    <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                      <span>Aug 28</span>
                      <span>|</span>
                      <Link to="/trending" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Trending</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Short Videos Section - Third Section */}
      <section className="content-wrap mt-8">
        <div className="container-page">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold border-b-2 border-black pb-1">Short Videos</h2>
            </div>
            <span className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer">View All »</span>
          </div>
          
          {/* Video Thumbnails Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {/* Video 1 */}
            <div className="flex flex-col">
              <div className="relative mb-2">
                                                                                          <img 
                       src="https://picsum.photos/seed/pm-modi-japan-crowds/300/200" 
                       alt="PM Modi in Japan with crowds"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-yellow-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">PM Modi in Japan: Crowds Cheer "Modi-..."</h3>
            </div>
            
            {/* Video 2 */}
            <div className="flex flex-col">
              <div className="relative mb-2">
                                                                                                                                                                <img 
                       src="https://picsum.photos/seed/pm-modi-japan-japanese-pm/300/200" 
                       alt="PM Modi with Japanese PM"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-yellow-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">PM Modi in Japan: PM Joins Japanese PM on...</h3>
            </div>
            
            {/* Video 3 */}
            <div className="flex flex-col">
              <div className="relative mb-2">
                                                                                                                                                                <img 
                       src="https://picsum.photos/seed/pm-modi-ashoka-chakra/300/200" 
                       alt="PM Modi speaking with Ashoka Chakra backdrop"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-yellow-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">PM Modi in Japan: PM Pushes Closer India-...</h3>
            </div>
            
            {/* Video 4 */}
            <div className="flex flex-col">
              <div className="relative mb-2">
                                                                                                                                                                <img 
                       src="https://picsum.photos/seed/vizianagaram-train-derailment/300/200" 
                       alt="Train derailment scene"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-yellow-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">Vizianagaram Train Derailment: 5 Bogies o...</h3>
            </div>
            
            {/* Video 5 */}
            <div className="flex flex-col">
              <div className="relative mb-2">
                                                                                                                                                                <img 
                       src="https://picsum.photos/seed/uttarakhand-cloudburst-muddy/300/200" 
                       alt="Muddy ground with landslide scene"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-yellow-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">Uttarakhand Cloudbursts in...</h3>
            </div>
            
            {/* Video 6 */}
            <div className="flex flex-col">
              <div className="relative mb-2">
                                                                                                                                                                <img 
                       src="https://picsum.photos/seed/uttarakhand-cloudburst-dark-sky/300/200" 
                       alt="Dark cloudy sky"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-l-[8px] border-l-yellow-400 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <h3 className="text-sm font-medium line-clamp-2">Uttarakhand Cloudburst: Late-Night Cloudburst...</h3>
            </div>
          </div>
        </div>
             </section>

       {/* Latest Videos Section - Fourth Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Section Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">Latest Videos</h2>
             <Link to="/videos" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
           </div>
           
           {/* Black Separator Line */}
           <div className="w-full h-px bg-black mb-6"></div>
           
           {/* Video Content Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Left Column - Main Video */}
             <div className="lg:col-span-2">
               <article className="bg-white border border-neutral-200">
                 <div className="relative">
                   {/* Main Video Thumbnail */}
                   <div className="relative">
                     <img 
                       src="https://picsum.photos/seed/venezuela-us-tensions-naval-ship/800/500" 
                       alt="Man in dark suit with glasses behind desk, laptop showing SBI Mutual Fund logo, naval ship background"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                     
                     {/* Text Overlay at Bottom */}
                     <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 py-2">
                       <span className="text-sm font-medium">VENEZUELA-U.S. TENSIONS</span>
                     </div>
                     
                     {/* Yellow Play Button Overlay */}
                     <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                       <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                         <div className="w-0 h-0 border-l-[12px] border-l-black border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"></div>
                       </div>
                     </div>
                   </div>
                   
                   {/* Video Title and Metadata */}
                   <div className="p-4 bg-gray-900 text-white">
                     <h1 className="text-xl font-bold leading-tight mb-3">
                       US-Venezuela Tensions: Maduro Steps Up Military Enlistment, Boosts Militia to Counter Threat | WION
                     </h1>
                     <div className="flex items-center gap-2 text-sm text-gray-300">
                       <span>12 min ago</span>
                       <span>|</span>
                       <Link to="/videos" className="hover:text-yellow-400 transition-colors">Videos</Link>
                     </div>
                   </div>
                 </div>
               </article>
             </div>
             
             {/* Right Column - Small Video List */}
             <div className="lg:col-span-1">
               <div className="space-y-4">
                 {/* Small Video 1 */}
                 <div className="flex gap-3">
                   <div className="relative w-24 h-24 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/india-festive-season-crowd/96/96" 
                       alt="Group of people in festive setting"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                     {/* Small Yellow Play Button */}
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                         <div className="w-0 h-0 border-l-[6px] border-l-black border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                       </div>
                     </div>
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">India's Festive Season to Drive Growth | WION</h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>13 min ago</span>
                       <span>|</span>
                       <Link to="/videos" className="hover:text-yellow-600 transition-colors">Videos</Link>
                     </div>
                   </div>
                 </div>
                 
                 {/* Small Video 2 */}
                 <div className="flex gap-3">
                   <div className="relative w-24 h-24 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/pm-modi-bullet-train-japan/96/96" 
                       alt="PM Modi and another man in bullet train looking out window"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                     {/* Small Yellow Play Button */}
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                         <div className="w-0 h-0 border-l-[6px] border-l-black border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                       </div>
                     </div>
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">PM Modi Japan Visit: PM Narendra Modi Takes Bullet Train Ride With Ishiba To Sendai | WION</h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>13 min ago</span>
                       <span>|</span>
                       <Link to="/videos" className="hover:text-yellow-600 transition-colors">Videos</Link>
                     </div>
                   </div>
                 </div>
                 
                 {/* Small Video 3 */}
                 <div className="flex gap-3">
                   <div className="relative w-24 h-24 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/un-mission-tambura-construction/96/96" 
                       alt="Aerial view of construction site or temporary camp"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                     {/* Small Yellow Play Button */}
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                         <div className="w-0 h-0 border-l-[6px] border-l-black border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                       </div>
                     </div>
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">
                       <Link to="/details/4" className="hover:text-yellow-700 transition-colors">United Nations Mission Building Temporary Base in Tambura to Protect Civilians | WION</Link>
                     </h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>13 min ago</span>
                       <span>|</span>
                       <Link to="/videos" className="hover:text-yellow-600 transition-colors">Videos</Link>
                     </div>
                   </div>
                 </div>
                 
                 {/* Small Video 4 */}
                 <div className="flex gap-3">
                   <div className="relative w-24 h-24 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/court-ruling-tariffs-india-podium/96/96" 
                       alt="Person speaking at podium with graph/chart on screen behind"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                     {/* Small Yellow Play Button */}
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                         <div className="w-0 h-0 border-l-[6px] border-l-black border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                       </div>
                     </div>
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">
                       <Link to="/details/5" className="hover:text-yellow-700 transition-colors">Does Court Ruling Include Tariffs on India? | WION</Link>
                     </h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>13 min ago</span>
                       <span>|</span>
                       <Link to="/videos" className="hover:text-yellow-600 transition-colors">Videos</Link>
                     </div>
                   </div>
                 </div>
                 
                 {/* Small Video 5 */}
                 <div className="flex gap-3">
                   <div className="relative w-24 h-24 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/housing-market-us-residential-street/96/96" 
                       alt="Residential street with houses"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                     {/* Small Yellow Play Button */}
                     <div className="absolute inset-0 flex items-center justify-center">
                       <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                         <div className="w-0 h-0 border-l-[6px] border-l-black border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-0.5"></div>
                       </div>
                     </div>
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">Housing Market Cools in US Cities | WION</h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>13 min ago</span>
                       <span>|</span>
                       <Link to="/videos" className="hover:text-yellow-600 transition-colors">Videos</Link>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* World News Section - Fifth Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Section Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">World News</h2>
             <Link to="/world" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &raquo;</Link>
           </div>
           
           {/* Double Black Underline */}
           <div className="w-full h-0.5 bg-black mb-1"></div>
           <div className="w-full h-0.5 bg-black mb-6"></div>
           
                       {/* World News Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* Left Column - Main Article */}
              <div className="lg:col-span-2">
               <article className="bg-white border border-neutral-200">
                 <div className="p-4">
                   {/* Main Image - Trump with damaged buildings background */}
                   <Link to="/details/6" className="block mb-4">
                     <img 
                       src="https://picsum.photos/seed/trump-damaged-buildings-palestinians/800/500" 
                       alt="Donald Trump in dark blue suit with red tie, looking up and right, with damaged buildings and people walking through debris in background"
                       className="w-full h-96 object-cover bg-neutral-200 hover:opacity-90 transition-opacity"
                     />
                   </Link>
                   
                   <h1 className="text-2xl font-bold leading-tight mb-3">
                     <Link to="/details/6" className="hover:text-yellow-700 transition-colors">Why US denied visas to Palestinians ahead of UNGA meeting</Link>
                   </h1>
                 </div>
               </article>
             </div>
             
             {/* Middle Column - Stacked Articles */}
             <div className="lg:col-span-1">
               <div className="space-y-4">
                 {/* Article 1 */}
                 <div className="flex gap-3">
                   <Link to="/details/7" className="w-24 h-24 shrink-0 block">
                     <img 
                       src="https://picsum.photos/seed/trump-pointing-red-tie/96/96" 
                       alt="Donald Trump wearing red tie, pointing with right hand"
                       className="w-full h-full object-cover bg-neutral-200 hover:opacity-90 transition-opacity"
                     />
                   </Link>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">
                       <Link to="/details/7" className="hover:text-yellow-700 transition-colors">'Trump is dead' trends on Musk's X, netizens ask 'where is he': Here's why</Link>
                     </h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>3 hrs ago</span>
                       <span>|</span>
                       <Link to="/world" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">World</Link>
                     </div>
                   </div>
                 </div>
                 
                 {/* Article 2 */}
                 <div className="flex gap-3">
                   <Link to="/details/8" className="w-24 h-24 shrink-0 block">
                     <img 
                       src="https://picsum.photos/seed/advisor-podium-white-house-flag/96/96" 
                       alt="Man speaking at podium with American flag and White House building in background"
                       className="w-full h-full object-cover bg-neutral-200 hover:opacity-90 transition-opacity"
                     />
                   </Link>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">
                       <Link to="/details/8" className="hover:text-yellow-700 transition-colors">Trump tariff on India taking New Delhi closer to Beijing: Ex-US security advisor</Link>
                     </h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>11:04 AM IST</span>
                       <span>|</span>
                       <Link to="/world" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">World</Link>
                     </div>
                   </div>
                 </div>
                 
                 {/* Article 3 */}
                 <div className="flex gap-3">
                   <Link to="/details/9" className="w-24 h-24 shrink-0 block">
                     <img 
                       src="https://picsum.photos/seed/bearded-man-glasses-patterned-shirt/96/96" 
                       alt="Man with beard, wearing glasses and patterned shirt, speaking"
                       className="w-full h-full object-cover bg-neutral-200 hover:opacity-90 transition-opacity"
                     />
                   </Link>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">
                       <Link to="/details/9" className="hover:text-yellow-700 transition-colors">IDF believes Houthi PM, his cabinet killed in Israeli strike on Yemen: Reports</Link>
                     </h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>10:34 AM IST</span>
                       <span>|</span>
                       <Link to="/world" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">World</Link>
                     </div>
                   </div>
                 </div>
                 
                 {/* Article 4 */}
                 <div className="flex gap-3">
                   <Link to="/details/10" className="w-24 h-24 shrink-0 block">
                     <img 
                       src="https://picsum.photos/seed/trump-maga-hat-speaking/96/96" 
                       alt="Donald Trump wearing red 'MAKE AMERICA GREAT AGAIN' hat, speaking with open mouth"
                       className="w-full h-full object-cover bg-neutral-200 hover:opacity-90 transition-opacity"
                     />
                   </Link>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3">
                       <Link to="/details/10" className="hover:text-yellow-700 transition-colors">Trump admin compares Delhi's 'low' crime rate to Chicago</Link>
                     </h4>
                     <div className="flex items-center gap-2 mt-1 text-xs text-neutral-600">
                       <span>9:23 AM IST</span>
                       <span>|</span>
                       <Link to="/world" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">World</Link>
                     </div>
                   </div>
                 </div>
               </div>
             </div>
             
             {/* Right Column - Newsletter Signup */}
             <div className="lg:col-span-1">
               <div className="bg-white border border-neutral-200 p-6">
                 <h3 className="text-lg font-bold mb-2">Sign up for WION Weekly Newsletter</h3>
                 <p className="text-sm text-neutral-600 mb-4">Get the latest global news easily</p>
                 
                 <form className="space-y-4">
                   <div>
                     <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-1">
                       Full Name
                     </label>
                     <input
                       type="text"
                       id="fullName"
                       placeholder="Enter your full name"
                       className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                     />
                   </div>
                   
                   <div>
                     <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                       Email Address
                     </label>
                     <input
                       type="email"
                       id="email"
                       placeholder="Enter your email address"
                       className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                     />
                   </div>
                   
                   <button
                     type="submit"
                     className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors font-medium"
                   >
                     Subscribe
                   </button>
                 </form>
                 
                 <p className="text-xs text-neutral-500 mt-4 text-center">
                   By signing up, you agree to our{' '}
                   <a href="#" className="text-yellow-600 hover:text-yellow-700 underline">
                     Privacy Policy
                   </a>
                   .
                 </p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Photo Gallery Section - Sixth Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Photo Gallery Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">Photo Gallery</h2>
             <Link to="/photos" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &raquo;</Link>
           </div>
           
           {/* Photo Gallery Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
             {/* Photo Card 1 - India-China */}
             <Link to="/photos" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/india-china-flags-overlapping/400/300" 
                   alt="Indian flag (saffron, white, green with Ashoka Chakra) and Chinese flag (red with five yellow stars) side-by-side, slightly overlapping, with Chinese characters in blurred background"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
                 {/* Photo Count Badge */}
                 <div className="absolute top-2 right-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded flex items-center justify-center">
                   09
                 </div>
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-2 mb-2">From Kotnis to the 1962 war, tracing India-China bonhomie over the years</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>48 min ago</span>
                   <span>|</span>
                   <Link to="/photos" className="hover:text-yellow-600 transition-colors">Photos</Link>
                 </div>
               </div>
             </Link>
             
             {/* Photo Card 2 - Voyager 2 */}
             <Link to="/photos" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/voyager-2-spacecraft-antenna/400/300" 
                   alt="Detailed shot of the Voyager 2 spacecraft, prominently featuring its large, circular dish antenna, set against a dark, starry background"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
                 {/* Photo Count Badge */}
                 <div className="absolute top-2 right-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded flex items-center justify-center">
                   07
                 </div>
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-2 mb-2">What happened when NASA lost contact with Voyager 2 in 2023?</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>1 hrs ago</span>
                   <span>|</span>
                   <Link to="/photos" className="hover:text-yellow-600 transition-colors">Photos</Link>
                 </div>
               </div>
             </Link>
             
             {/* Photo Card 3 - Horror Movies */}
             <Link to="/photos" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/horror-movie-characters-collage/400/300" 
                   alt="Collage of various horror movie characters and scenes. Recognizable figures include Ghostface from 'Scream' (bottom left), Freddy Krueger from 'A Nightmare on Elm Street' (bottom right), and other spooky, shadowy figures"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
                 {/* Photo Count Badge */}
                 <div className="absolute top-2 right-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded flex items-center justify-center">
                   08
                 </div>
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-2 mb-2">Honouring Wes Craven's legacy: Here are 7 must-watch films</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>2 hrs ago</span>
                   <span>|</span>
                   <Link to="/photos" className="hover:text-yellow-600 transition-colors">Photos</Link>
                 </div>
               </div>
             </Link>
             
             {/* Photo Card 4 - Voyager 2 Secrets */}
             <Link to="/photos" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/rocket-spacecraft-industrial-launch/400/300" 
                   alt="Large, white and red rocket or spacecraft module is visible, partially enclosed within a tall, dark, industrial launch or assembly structure"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
                 {/* Photo Count Badge */}
                 <div className="absolute top-2 right-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded flex items-center justify-center">
                   07
                 </div>
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-2 mb-2">'Only meant to last 5 years': 6 surprising secrets of Voyager 2 you didn't know!</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>2 hrs ago</span>
                   <span>|</span>
                   <Link to="/photos" className="hover:text-yellow-600 transition-colors">Photos</Link>
                 </div>
               </div>
             </Link>
           </div>
           
           {/* You May Like Section */}
           <div className="mb-4">
             <h3 className="text-xl font-bold">You May Like</h3>
           </div>
           
           {/* Sponsored Content Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {/* Ad Card 1 - Sowparnika Euphoria */}
             <div className="bg-white border border-neutral-200">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/modern-apartment-building-just-pay-10/400/300" 
                   alt="Modern, multi-story apartment building with a 'JUST PAY 10%' banner overlay. A hand is shown holding a small house key"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h4 className="text-sm font-medium line-clamp-2 mb-2">Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹81.42 Lacs* | No...</h4>
                 <p className="text-xs text-neutral-600 mb-3">Sowparnika Euphoria I... | Sponsored</p>
                 <button className="w-full bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                   Learn More
                 </button>
               </div>
             </div>
             
             {/* Ad Card 2 - Sowparnika Rhythm */}
             <div className="bg-white border border-neutral-200">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/woman-child-watering-plants-community-garden/400/300" 
                   alt="Serene scene of a woman and a child watering plants in a lush, green community garden, with modern apartment buildings in the background. Text overlay reads 'A community garden where silence grows...'"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h4 className="text-sm font-medium line-clamp-2 mb-2">Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre...</h4>
                 <p className="text-xs text-neutral-600 mb-3">Sowparnika Rhythm of ... | Sponsored</p>
                 <button className="w-full bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                   Learn More
                 </button>
               </div>
             </div>
             
             {/* Ad Card 3 - Sattva Lumina */}
             <div className="bg-white border border-neutral-200">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/contemporary-apartment-buildings-waterfront/400/300" 
                   alt="Digital rendering of multiple contemporary apartment buildings situated along a waterfront, with a 'Live the lake-view life' text overlay"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h4 className="text-sm font-medium line-clamp-2 mb-2">Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from...</h4>
                 <p className="text-xs text-neutral-600 mb-3">Sattva Lumina | Sponsored</p>
                 <button className="w-full bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                   Get Quote
                 </button>
               </div>
             </div>
             
             {/* Ad Card 4 - Abhee Aaria */}
             <div className="bg-white border border-neutral-200">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/modern-multi-level-house-wooden-balconies/400/300" 
                   alt="Modern, multi-level house with a flat roof, extensive wooden slatted balconies, and surrounding greenery"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h4 className="text-sm font-medium line-clamp-2 mb-2">Well-ventilated 3BHK homes at 1.79 Cr* by Abhee Aaria</h4>
                 <p className="text-xs text-neutral-600 mb-3">Abhee Aaria | Sponsored</p>
                 <button className="w-full bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                   Contact Us
                 </button>
               </div>
             </div>
           </div>
           
           {/* Taboola Attribution */}
           <div className="text-right mt-2">
             <span className="text-xs text-neutral-500">by Taboola</span>
           </div>
         </div>
       </section>

       {/* TV Show Section - Seventh Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* TV Show Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">TV Show</h2>
             <Link to="/tvshows" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &raquo;</Link>
           </div>
           
           {/* Black Separator Line */}
           <div className="w-full h-px bg-black mb-6"></div>
           
           {/* TV Show Cards Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
             {/* TV Show Card 1 - WION Wideangle */}
             <Link to="/tvshows" className="flex flex-col hover:shadow-lg transition-shadow">
               <div className="relative mb-2">
                                   <div className="w-full h-96 bg-black flex items-center justify-center">
                   <div className="text-center text-white">
                     <div className="text-lg font-bold">WION</div>
                     <div className="text-sm">WIDEANGLE</div>
                   </div>
                 </div>
                 {/* Yellow Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                     <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                   </div>
                 </div>
               </div>
               <h3 className="text-sm font-medium line-clamp-2">WION Wideangle</h3>
             </Link>
             
             {/* TV Show Card 2 - World at War */}
             <Link to="/tvshows" className="flex flex-col hover:shadow-lg transition-shadow">
               <div className="relative mb-2">
                                   <div className="w-full h-96 bg-gray-800 flex items-center justify-center">
                   <div className="text-center text-white">
                     <div className="text-lg font-bold">WORLD AT WAR</div>
                     <div className="text-xs">A WION SPECIAL SERIES</div>
                   </div>
                 </div>
                 {/* Yellow Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                     <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                   </div>
                 </div>
               </div>
               <h3 className="text-sm font-medium line-clamp-2">World at War</h3>
             </Link>
             
             {/* TV Show Card 3 - World of Africa */}
             <Link to="/tvshows" className="flex flex-col hover:shadow-lg transition-shadow">
               <div className="relative mb-2">
                                   <div className="w-full h-96 bg-gradient-to-br from-orange-400 via-red-500 to-purple-600 flex items-center justify-center">
                   <div className="text-center text-white">
                     <div className="text-lg font-bold">WORLD OF AFRICA</div>
                   </div>
                 </div>
                 {/* Yellow Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                     <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                   </div>
                 </div>
               </div>
               <h3 className="text-sm font-medium line-clamp-2">World of Africa</h3>
             </Link>
             
             {/* TV Show Card 4 - Inside South Asia */}
             <Link to="/tvshows" className="flex flex-col hover:shadow-lg transition-shadow">
               <div className="relative mb-2">
                                   <div className="w-full h-96 bg-gray-300 flex items-center justify-center">
                   <div className="text-center text-gray-700">
                     <div className="text-lg font-bold">INSIDE</div>
                     <div className="w-full h-px bg-gray-500 my-1"></div>
                     <div className="text-lg font-bold">SOUTH ASIA</div>
                   </div>
                 </div>
                 {/* Yellow Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                     <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                   </div>
                 </div>
               </div>
               <h3 className="text-sm font-medium line-clamp-2">Inside South Asia</h3>
             </Link>
             
             {/* TV Show Card 5 - The West Asia Post */}
             <Link to="/tvshows" className="flex flex-col hover:shadow-lg transition-shadow">
               <div className="relative mb-2">
                                   <div className="w-full h-96 bg-gradient-to-br from-blue-200 to-blue-400 flex items-center justify-center">
                   <div className="text-center text-black">
                     <div className="text-lg font-bold">The West Asia Post</div>
                     <div className="text-sm text-yellow-600">YOUR WINDOW TO WEST ASIA</div>
                   </div>
                 </div>
                 {/* Yellow Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                     <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                   </div>
                 </div>
               </div>
               <h3 className="text-sm font-medium line-clamp-2">The West Asia Post</h3>
             </Link>
             
             {/* TV Show Card 6 - Digital/Tech Theme */}
             <Link to="/tvshows" className="flex flex-col hover:shadow-lg transition-shadow">
               <div className="relative mb-2">
                                   <div className="w-full h-96 bg-gray-900 flex items-center justify-center">
                   <div className="text-center text-white">
                     <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                       <div className="w-8 h-8 bg-white rounded-full"></div>
                     </div>
                   </div>
                 </div>
                 {/* Yellow Play Button Overlay */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                     <div className="w-0 h-0 border-l-[8px] border-l-black border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent ml-1"></div>
                   </div>
                 </div>
               </div>
               <h3 className="text-sm font-medium line-clamp-2">Digital Insights</h3>
             </Link>
           </div>
         </div>
       </section>

       {/* Opinions & Blogs Section - Eighth Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Section Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">Opinions & Blogs</h2>
             <Link to="/opinions" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
           </div>
           
           {/* Double Black Underline */}
           <div className="w-full h-0.5 bg-black mb-1"></div>
           <div className="w-full h-0.5 bg-black mb-6"></div>
           
           {/* Opinions Grid */}
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {/* Opinion Card 1 - Jet Engine */}
             <Link to="/opinions" className="bg-yellow-100 border border-yellow-300 p-6 hover:shadow-lg transition-shadow">
               <div className="mb-4">
                 <span className="inline-block bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-l-lg">Opinion</span>
               </div>
               <h3 className="text-lg font-medium text-black mb-6 leading-relaxed">
                 Why India still can't build its own jet engine - even after 40 years
               </h3>
               <div className="text-right">
                 <p className="text-black font-bold">Girish Linganna</p>
               </div>
             </Link>
             
             {/* Opinion Card 2 - Dowry */}
             <Link to="/opinions" className="bg-yellow-100 border border-yellow-300 p-6 hover:shadow-lg transition-shadow">
               <div className="mb-4">
                 <span className="inline-block bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-l-lg">Opinion</span>
               </div>
               <h3 className="text-lg font-medium text-black mb-6 leading-relaxed">
                 Scourge of dowry in India-How 'log kya kahenge?' ensures the practice never ends
               </h3>
               <div className="text-right">
                 <p className="text-black font-bold">Anamica Singh</p>
               </div>
             </Link>
             
             {/* Opinion Card 3 - Online Gaming */}
             <Link to="/opinions" className="bg-yellow-100 border border-yellow-300 p-6 hover:shadow-lg transition-shadow">
               <div className="mb-4">
                 <span className="inline-block bg-yellow-400 text-black text-xs font-medium px-3 py-1 rounded-l-lg">Opinion</span>
               </div>
               <h3 className="text-lg font-medium text-black mb-6 leading-relaxed">
                 Online Gaming: PM Modi's Push for Esports Rooted in Ethical Entertainment
               </h3>
               <div className="text-right">
                 <p className="text-black font-bold">Ramakant Chaudhary</p>
               </div>
             </Link>
           </div>
         </div>
       </section>

       {/* India News Section - Ninth Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Section Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">India News</h2>
             <Link to="/india" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
           </div>
           
           {/* Double Black Underline */}
           <div className="w-full h-0.5 bg-black mb-1"></div>
           <div className="w-full h-0.5 bg-black mb-6"></div>
           
           {/* India News Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {/* News Card 1 - Jammu and Kashmir Cloudburst */}
             <Link to="/india" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/jammu-kashmir-cloudburst-muddy-landslide/400/300" 
                   alt="Wide shot of muddy, reddish-brown landslide covering a section of road next to a river, with lush green hills in background under overcast sky"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-3 mb-2">Eleven people dead in two cloudburst incidents in Jammu and Kashmir</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>3 hrs ago</span>
                   <span>|</span>
                   <Link to="/india" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">India</Link>
                 </div>
               </div>
             </Link>
             
             {/* News Card 2 - Ramban District Cloudburst */}
             <Link to="/india" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/ramban-district-cloudburst-destroyed-building/400/300" 
                   alt="Close-up of partially destroyed building with foundation exposed and large pile of concrete rubble and debris in front"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-3 mb-2">J&K rains: At least 3 killed, two missing after cloudburst in Ramban district</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>10:26 AM IST</span>
                   <span>|</span>
                   <Link to="/india" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">India</Link>
                 </div>
               </div>
             </Link>
             
             {/* News Card 3 - Uttarakhand Cloudbursts and Landslides */}
             <Link to="/india" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/uttarakhand-cloudburst-muddy-river-overflow/400/300" 
                   alt="Aerial view of wide, fast-flowing muddy river that has overflowed its banks, with makeshift shelters partially submerged along river's edge"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-3 mb-2">Uttarakhand: Cloudbursts and landslides kills 6, 11 still missing</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>Aug 30</span>
                   <span>|</span>
                   <Link to="/india" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">India</Link>
                 </div>
               </div>
             </Link>
             
             {/* News Card 4 - America's Tariff on India */}
             <Link to="/india" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <div className="relative">
                 <img 
                   src="https://picsum.photos/seed/modi-trump-portrait-military-uniform/400/300" 
                   alt="Close-up portrait of Narendra Modi smiling in grey patterned jacket with white beard, and Donald Trump looking downwards in dark suit with red tie"
                   className="w-full h-48 object-cover bg-neutral-200"
                 />
               </div>
               <div className="p-3">
                 <h3 className="text-sm font-medium line-clamp-3 mb-2">America's 50% tariff on India was due to Trump's 'personal' enmity?</h3>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>Aug 30</span>
                   <span>|</span>
                   <Link to="/india" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">India</Link>
                 </div>
               </div>
             </Link>
           </div>
         </div>
       </section>

       {/* Entertainment Section - Tenth Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Section Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">Entertainment</h2>
             <Link to="/entertainment" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
           </div>
           
           {/* Double Black Underline */}
           <div className="w-full h-0.5 bg-black mb-1"></div>
           <div className="w-full h-0.5 bg-black mb-6"></div>
           
           {/* Entertainment News Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
             {/* News Card 1 - Param Sundari */}
             <Link to="/bollywood" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/param-sundari-sidharth-motorcycle/400/250" 
                 alt="Sidharth and Param Sundari on a motorcycle"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   Param Sundari BO day 1: Sidharth starrer off to strong start, mints THIS much
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>40 min ago</span>
                   <span>|</span>
                   <Link to="/bollywood" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Bollywood</Link>
                 </div>
               </div>
             </Link>

             {/* News Card 2 - Karl Urban Mortal Kombat */}
             <Link to="/hollywood" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/karl-urban-mortal-kombat/400/250" 
                 alt="Karl Urban with a serious expression"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   Finish him... in 2026! Karl Urban's Mortal Kombat 2 release delayed
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>56 min ago</span>
                   <span>|</span>
                   <Link to="/hollywood" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Hollywood</Link>
                 </div>
               </div>
             </Link>

             {/* News Card 3 - Motorheads Cancelled */}
             <Link to="/entertainment" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/motorheads-season-2-cancelled/400/250" 
                 alt="Four young people standing, one with RACC jacket"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   American show Motorheads season 2 cancelled by Amazon Prime Video, Here'...
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>1 hrs ago</span>
                   <span>|</span>
                   <Link to="/entertainment" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Entertainment</Link>
                 </div>
               </div>
             </Link>

             {/* News Card 4 - Baaghi 4 Trailer */}
             <Link to="/bollywood" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/baaghi-4-tiger-shroff/400/250" 
                 alt="Tiger Shroff shirtless with blood on face"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   Baaghi 4 trailer: Tiger Shroff returns in action franchise, battles Sanjay Dutt
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>2 hrs ago</span>
                   <span>|</span>
                   <Link to="/bollywood" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Bollywood</Link>
                 </div>
               </div>
             </Link>

             {/* News Card 5 - Bigg Boss 19 Gaurav Khanna */}
             <Link to="/bollywood" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/bigg-boss-gaurav-khanna/400/250" 
                 alt="Gaurav Khanna sitting on a red armchair"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   Bigg Boss 19: Gaurav Khanna on Farhana's re-entry: 'Every person needs a chance'
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>3 hrs ago</span>
                   <span>|</span>
                   <Link to="/bollywood" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Bollywood</Link>
                 </div>
               </div>
             </Link>

             {/* News Card 6 - Ahaan Panday Debut */}
             <Link to="/bollywood" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/ahaan-panday-saiyara/400/250" 
                 alt="Ahaan Panday and a man on a motorcycle"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   Ahaan Panday on debut with Saiyaara and struggle: 'I was entirely delusional'
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>3 hrs ago</span>
                   <span>|</span>
                   <Link to="/bollywood" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Bollywood</Link>
                 </div>
               </div>
             </Link>

             {/* News Card 7 - Julia Roberts Venice */}
             <Link to="/hollywood" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/julia-roberts-venice/400/250" 
                 alt="Julia Roberts smiling"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   Julia Roberts looks to 'stir it up' with cancel culture film at Venice
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>11:31 AM IST</span>
                   <span>|</span>
                   <Link to="/hollywood" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Hollywood</Link>
                 </div>
               </div>
             </Link>

             {/* News Card 8 - Alan Ritchson Batman */}
             <Link to="/hollywood" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
               <img 
                 src="https://picsum.photos/seed/alan-ritchson-batman/400/250" 
                 alt="Split image of Batman and Alan Ritchson"
                 className="w-full h-48 object-cover bg-neutral-200"
               />
               <div className="p-3">
                 <h4 className="text-base font-medium line-clamp-3 mb-2">
                   Reacher star Alan Ritchson confirms he spoke to James Gunn about playing Batman
                 </h4>
                 <div className="flex items-center gap-2 text-xs text-neutral-600">
                   <span>10:35 AM IST</span>
                   <span>|</span>
                   <Link to="/hollywood" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Hollywood</Link>
                 </div>
               </div>
             </Link>
           </div>
         </div>
       </section>

       {/* Sports Section - Eleventh Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Section Header */}
           <div className="flex items-center justify-between mb-6">
             <h2 className="text-2xl font-bold">Sports</h2>
             <Link to="/sports" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
           </div>
           
           {/* Black Separator Line */}
           <div className="w-full h-px bg-black mb-6"></div>
           
           {/* Sports Content Grid */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Left Column - Main Article */}
             <div className="lg:col-span-1">
               <Link to="/sports" className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
                 <div className="p-4">
                   {/* Main Image - Rahul Dravid */}
                   <div className="mb-4">
                     <img 
                       src="https://picsum.photos/seed/rahul-dravid-pink-hat-luminous-jersey/800/500" 
                       alt="Rahul Dravid wearing pink wide-brimmed hat and blue LUMINOUS jersey, speaking into microphone with sponsor logos in background"
                       className="w-full h-96 object-cover bg-neutral-200"
                     />
                   </div>
                   
                   <h1 className="text-2xl font-bold leading-tight mb-3">
                     Rahul Dravid steps down as Rajasthan Royals head coach ahead of IPL 2026
                   </h1>
                   
                   <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                     <span>1 hrs ago</span>
                     <span>|</span>
                     <Link to="/sports" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Sports</Link>
                   </div>
                 </div>
               </Link>
             </div>
             
             {/* Middle Column - Smaller Articles Grid */}
             <div className="lg:col-span-1">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                 {/* Article 1 - RCB Stampede */}
                 <Link to="/sports" className="flex flex-col hover:shadow-lg transition-shadow">
                   <img 
                     src="https://picsum.photos/seed/rcb-stampede-victims-crowd/400/250" 
                     alt="Collage of several small, blurry images depicting a crowd or event"
                     className="w-full h-32 object-cover bg-neutral-200 mb-2"
                   />
                   <h4 className="text-sm font-medium line-clamp-3 mb-2">
                     RCB extends $28,000 each to families of 11 stampede victims
                   </h4>
                   <div className="flex items-center gap-2 text-xs text-neutral-600">
                     <span>3 hrs ago</span>
                     <span>|</span>
                     <Link to="/sports" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Sports</Link>
                   </div>
                 </Link>
                 
                 {/* Article 2 - US Open Alcaraz Rybakina */}
                 <Link to="/sports" className="flex flex-col hover:shadow-lg transition-shadow">
                   <img 
                     src="https://picsum.photos/seed/elena-rybakina-tennis-pink-outfit/400/250" 
                     alt="Female tennis player Elena Rybakina in pink outfit, mid-action on blue tennis court"
                     className="w-full h-32 object-cover bg-neutral-200 mb-2"
                   />
                   <h4 className="text-sm font-medium line-clamp-3 mb-2">
                     US Open 2025: Alcaraz, Rybakina win round 3 matches in straight sets to advance
                   </h4>
                   <div className="flex items-center gap-2 text-xs text-neutral-600">
                     <span>Aug 29</span>
                     <span>|</span>
                     <Link to="/sports" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Sports</Link>
                   </div>
                 </Link>
                 
                 {/* Article 3 - PKL Puneri Paltan */}
                 <Link to="/sports" className="flex flex-col hover:shadow-lg transition-shadow">
                   <img 
                     src="https://picsum.photos/seed/kabaddi-players-huddle-red-blue-mat/400/250" 
                     alt="Kabaddi players in huddle or mid-game on red and blue mat"
                     className="w-full h-32 object-cover bg-neutral-200 mb-2"
                   />
                   <h4 className="text-sm font-medium line-clamp-3 mb-2">
                     PKL 2025: Puneri Paltan clinch thriller against Bengaluru Bulls in opening game
                   </h4>
                   <div className="flex items-center gap-2 text-xs text-neutral-600">
                     <span>9:26 AM IST</span>
                     <span>|</span>
                     <Link to="/sports" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Sports</Link>
                   </div>
                 </Link>
                 
                 {/* Article 4 - Chennai Chess Tournament */}
                 <Link to="/sports" className="flex flex-col hover:shadow-lg transition-shadow">
                   <img 
                     src="https://picsum.photos/seed/chess-board-cosmic-galaxy-background/400/250" 
                     alt="Chess board with white and black pieces set against vibrant cosmic galaxy background"
                     className="w-full h-32 object-cover bg-neutral-200 mb-2"
                   />
                   <h4 className="text-sm font-medium line-clamp-3 mb-2">
                     Chennai gears up for India's first all-Armageddon chess tournament
                   </h4>
                   <div className="flex items-center gap-2 text-xs text-neutral-600">
                     <span>Aug 29</span>
                     <span>|</span>
                     <Link to="/sports" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Sports</Link>
                   </div>
                 </Link>
                 
                 {/* Article 5 - US Open Djokovic */}
                 <Link to="/sports" className="flex flex-col hover:shadow-lg transition-shadow">
                   <img 
                     src="https://picsum.photos/seed/novak-djokovic-tennis-white-outfit/400/250" 
                     alt="Male tennis player Novak Djokovic in white outfit, mid-serve on blue tennis court"
                     className="w-full h-32 object-cover bg-neutral-200 mb-2"
                   />
                   <h4 className="text-sm font-medium line-clamp-3 mb-2">
                     US Open 2025: Novak Djokovic into last 16 as Sabalenka avenges defeat
                   </h4>
                   <div className="flex items-center gap-2 text-xs text-neutral-600">
                     <span>8:19 AM IST</span>
                     <span>|</span>
                     <Link to="/sports" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Sports</Link>
                   </div>
                 </Link>
                 
                 {/* Article 6 - SL vs ZIM ODI */}
                 <Link to="/sports" className="flex flex-col hover:shadow-lg transition-shadow">
                   <img 
                     src="https://picsum.photos/seed/dilshan-madushanka-cricket-blue-jersey-98/400/250" 
                     alt="Male cricketer Dilshan Madushanka in blue jersey with number 98, pointing with right hand"
                     className="w-full h-32 object-cover bg-neutral-200 mb-2"
                   />
                   <h4 className="text-sm font-medium line-clamp-3 mb-2">
                     SL vs ZIM, 1st ODI: Madushanka hattrick denies Zimbabwe win in a thriller
                   </h4>
                   <div className="flex items-center gap-2 text-xs text-neutral-600">
                     <span>Aug 29</span>
                     <span>|</span>
                     <Link to="/sports" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Sports</Link>
                   </div>
                 </Link>
               </div>
             </div>
             
             {/* Right Column - Advertisement Block */}
             <div className="lg:col-span-1">
               <div className="bg-white border border-neutral-200">
                 <div className="bg-neutral-100 px-3 py-2 border-b border-neutral-200">
                   <span className="text-sm font-semibold text-neutral-600">ADVERTISEMENT</span>
                 </div>
                 <div className="h-96 bg-white flex items-center justify-center">
                   <div className="text-neutral-400 text-sm">Ad Space</div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Lifestyle, Science & South Asia Section - Twelfth Section */}
       <section className="content-wrap mt-8">
         <div className="container-page">
           {/* Three Column Layout */}
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
             {/* Left Column - Lifestyle */}
             <div className="lg:col-span-1">
               {/* Lifestyle Header */}
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold">Lifestyle</h2>
                 <Link to="/lifestyle" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
               </div>
               
               {/* Main Article - Princess Diana */}
               <Link to="/lifestyle" className="bg-white border border-neutral-200 mb-4 hover:shadow-lg transition-shadow">
                 <div className="p-4">
                   <div className="mb-4">
                     <img 
                       src="https://picsum.photos/seed/princess-diana-tiara-pearls-golden-background/400/300" 
                       alt="Portrait of Princess Diana, smiling gently, wearing light-colored dress, sparkling tiara, pearl drop earrings, and pearl necklace with central pendant, soft blurred golden background"
                       className="w-full h-64 object-cover bg-neutral-200"
                     />
                   </div>
                   
                   <h3 className="text-lg font-bold leading-tight mb-3">
                     Princes Diana's time capsule opened 30 years later; Know about revealed items
                   </h3>
                   
                   <div className="flex items-center gap-2 text-sm text-neutral-600">
                     <span>Aug 29</span>
                     <span>|</span>
                     <Link to="/lifestyle" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Lifestyle</Link>
                   </div>
                 </div>
               </Link>
               
               {/* Smaller Articles */}
               <div className="space-y-4">
                 {/* Article 1 - Gordon Ramsay */}
                 <Link to="/lifestyle" className="flex gap-3 hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/gordon-ramsay-serious-expression-headshot/80/80" 
                       alt="Chef Gordon Ramsay looking directly at camera with serious expression"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3 mb-2">
                       Gordon Ramsay opens First Indian restaurant 'Street Burger' at Delhi Airport
                     </h4>
                     <div className="flex items-center gap-2 text-xs text-neutral-600">
                       <span>Aug 21</span>
                       <span>|</span>
                       <Link to="/lifestyle" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Lifestyle</Link>
                     </div>
                   </div>
                 </Link>
                 
                 {/* Article 2 - Miss Universe India */}
                 <Link to="/lifestyle" className="flex gap-3 hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/miss-universe-india-crowning-ceremony/80/80" 
                       alt="Two women, one wearing crown and sash reading 'MISS UNIVERSE INDIA' being crowned by another woman"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3 mb-2">
                       Miss Universe India 2025: All about Manika Vishwakarma, winner of beauty pageant
                     </h4>
                     <div className="flex items-center gap-2 text-xs text-neutral-600">
                       <span>Aug 19</span>
                       <span>|</span>
                       <Link to="/lifestyle" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Lifestyle</Link>
                     </div>
                   </div>
                 </Link>
               </div>
             </div>
             
             {/* Middle Column - Science */}
             <div className="lg:col-span-1">
               {/* Science Header */}
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold">Science</h2>
                 <Link to="/science" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
               </div>
               
               {/* Main Article - NASA James Webb */}
               <Link to="/science" className="bg-white border border-neutral-200 mb-4 hover:shadow-lg transition-shadow">
                 <div className="p-4">
                   <div className="mb-4">
                     <img 
                       src="https://picsum.photos/seed/nasa-james-webb-telescope-exoplanet-clouds-cosmic-background/400/300" 
                       alt="Large detailed image of planet, possibly exoplanet, with visible cloud formations and illuminated areas, set against dark star-filled cosmic background with faint nebulae"
                       className="w-full h-64 object-cover bg-neutral-200"
                     />
                   </div>
                   
                   <h3 className="text-lg font-bold leading-tight mb-3">
                     NASA's James Webb Telescope detects CO2-rich planet-forming disk
                   </h3>
                   
                   <div className="flex items-center gap-2 text-sm text-neutral-600">
                     <span>Aug 30</span>
                     <span>|</span>
                     <Link to="/science" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Science</Link>
                   </div>
                 </div>
               </Link>
               
               {/* Smaller Articles */}
               <div className="space-y-4">
                 {/* Article 1 - Asteroid */}
                 <Link to="/science" className="flex gap-3 hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/fiery-meteor-asteroid-streaking-space-planet-blue-atmosphere/80/80" 
                       alt="Fiery meteor or asteroid streaking through space towards planet with visible blue atmosphere"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3 mb-2">
                       NASA confirms 180-foot asteroid racing at 39,205 mph to fly past Earth on..
                     </h4>
                     <div className="flex items-center gap-2 text-xs text-neutral-600">
                       <span>Aug 28</span>
                       <span>|</span>
                       <Link to="/science" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Science</Link>
                     </div>
                   </div>
                 </Link>
                 
                 {/* Article 2 - Largest Water Body */}
                 <Link to="/science" className="flex gap-3 hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/dark-swirling-cosmic-cloud-nebula-deep-space/80/80" 
                       alt="Dark swirling cosmic cloud or nebula suggesting deep space phenomenon"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3 mb-2">
                       Largest body of water ever found is not present on Earth, but...
                     </h4>
                     <div className="flex items-center gap-2 text-xs text-neutral-600">
                       <span>Aug 27</span>
                       <span>|</span>
                       <Link to="/science" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">Science</Link>
                     </div>
                   </div>
                 </Link>
               </div>
             </div>
             
             {/* Right Column - South Asia */}
             <div className="lg:col-span-1">
               {/* South Asia Header */}
               <div className="flex items-center justify-between mb-6">
                 <h2 className="text-2xl font-bold">South Asia</h2>
                 <Link to="/world" className="text-sm text-neutral-600 hover:text-yellow-600 cursor-pointer transition-colors">View All &gt;&gt;</Link>
               </div>
               
               {/* Main Article - Taliban Farage */}
               <Link to="/world" className="bg-white border border-neutral-200 mb-4 hover:shadow-lg transition-shadow">
                 <div className="p-4">
                   <div className="mb-4">
                     <img 
                       src="https://picsum.photos/seed/nigel-farage-dark-suit-purple-tie-crowd-men-traditional-attire/400/300" 
                       alt="Split image: left side shows man in dark suit and purple tie (Nigel Farage) holding papers looking upwards; right side shows crowd of men with beards and traditional attire outdoors, some holding white flags with Arabic script, tall fluted monument in background"
                       className="w-full h-64 object-cover bg-neutral-200"
                     />
                   </div>
                   
                   <h3 className="text-lg font-bold leading-tight mb-3">
                     Taliban says 'ready and willing' to work with Farage and accept deported Afghans
                   </h3>
                   
                   <div className="flex items-center gap-2 text-sm text-neutral-600">
                     <span>Aug 27</span>
                     <span>|</span>
                     <Link to="/world" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">South Asia</Link>
                   </div>
                 </div>
               </Link>
               
               {/* Smaller Articles */}
               <div className="space-y-4">
                 {/* Article 1 - Bangladesh Rohingya */}
                 <Link to="/world" className="flex gap-3 hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/muhammad-yunus-podium-takeholder-rohingya-screen/80/80" 
                       alt="Man (Muhammad Yunus) speaking at podium, text on screen behind includes 'TAKEHOLDER' and 'ROHINGYA'"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3 mb-2">
                       Bangladesh chief advisor Yunus seeks int'l community's help with Rohingya crisis
                     </h4>
                     <div className="flex items-center gap-2 text-xs text-neutral-600">
                       <span>Aug 25</span>
                       <span>|</span>
                       <Link to="/world" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">South Asia</Link>
                     </div>
                   </div>
                 </Link>
                 
                 {/* Article 2 - China India Trump Tariffs */}
                 <Link to="/world" className="flex gap-3 hover:shadow-lg transition-shadow">
                   <div className="w-20 h-20 shrink-0">
                     <img 
                       src="https://picsum.photos/seed/three-men-suit-donald-trump-speaking-animated/80/80" 
                       alt="Three men: left man in suit, center Donald Trump speaking animatedly, right man in suit"
                       className="w-full h-full object-cover bg-neutral-200"
                     />
                   </div>
                   <div className="min-w-0">
                     <h4 className="text-sm font-medium line-clamp-3 mb-2">
                       What Chinese foreign minister Wang Yi told India about Trump's tariff war
                     </h4>
                     <div className="flex items-center gap-2 text-xs text-neutral-600">
                       <span>Aug 19</span>
                       <span>|</span>
                       <Link to="/world" className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">South Asia</Link>
                     </div>
                   </div>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       </section>

     </div>
   )
 }

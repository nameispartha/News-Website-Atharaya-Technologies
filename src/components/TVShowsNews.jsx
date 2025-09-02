import React from 'react'
import { Link } from 'react-router-dom'

function VideoCard({ seed, title, date, category, isMain = false }) {
  return (
    <article className="flex flex-col">
      <div className="relative">
        <video 
          className={`w-full object-cover ${isMain ? 'h-96' : 'h-40'}`}
          poster={`https://picsum.photos/seed/tv-${seed}/420/260`}
          controls
        >
          <source src={`https://sample-videos.com/zip/10/mp4/SampleVideo_${seed}.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white bg-opacity-80 rounded-full p-3">
            <svg className="w-6 h-6 text-neutral-800" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <span className="mt-1 text-[11px] text-neutral-500">{date} | {category}</span>
    </article>
  )
}

function SidebarVideo({ seed, title, date, category }) {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <video 
          className="w-full h-32 object-cover"
          poster={`https://picsum.photos/seed/sidebar-tv-${seed}/420/200`}
          controls
        >
          <source src={`https://sample-videos.com/zip/10/mp4/SampleVideo_${seed}.mp4`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <button className="bg-white bg-opacity-80 rounded-full p-2">
            <svg className="w-5 h-5 text-neutral-800" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
      <h3 className="mt-2 text-[12px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <span className="mt-1 text-[10px] text-neutral-500">{date} | {category}</span>
    </div>
  )
}

function SectionGrid({ title, videos, columns = 4 }) {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
        <h3 className="text-base font-semibold">{title}</h3>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-${columns} gap-4`}>
        {videos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  )
}

export default function TVShowsNews() {
  return (
    <section className="content-wrap mt-6">
      <div className="container-page">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / TV Shows
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
            <h2 className="text-lg font-semibold">TV Shows</h2>
          </div>
        </div>

        {/* Main TV Shows Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative">
              <video 
                className="w-full h-96 object-cover"
                poster={`https://picsum.photos/seed/tv-main/1000/560`}
                controls
              >
                <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white bg-opacity-80 rounded-full p-6">
                  <svg className="w-12 h-12 text-neutral-800" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <h3 className="mt-3 text-[18px] font-semibold leading-6">India: IMD Sounds Heavy Rain Alert Across Multiple States In India | WION</h3>
          </div>
          <aside className="space-y-3">
            <SidebarVideo seed={1} title="PM Modi In Japan: A Look At India's Partnership In Numbers Over Years" date="Aug 20" category="TV Shows" />
            <SidebarVideo seed={2} title="Trump tariffs: $87 billion in US imports from India at risk" date="Aug 19" category="TV Shows" />
          </aside>
        </div>

        {/* Main Video Grid */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <VideoCard seed={3} title="India: Dowry law in news..." date="Aug 18" category="TV Shows" />
            <VideoCard seed={4} title="Saudi Arabia: Why is it..." date="Aug 17" category="TV Shows" />
            <VideoCard seed={5} title="Trump, Putin: Geopolitical..." date="Aug 16" category="TV Shows" />
            <VideoCard seed={6} title="News Express: What's up..." date="Aug 15" category="TV Shows" />
          </div>
        </div>

        {/* WION Wideangle Section */}
        <SectionGrid 
          title="WION Wideangle" 
          videos={[
            { seed: 7, title: "Sea ice continues to melt...", date: "Aug 14", category: "WION Wideangle" },
            { seed: 8, title: "Arctic ice continues to melt...", date: "Aug 13", category: "WION Wideangle" },
            { seed: 9, title: "The Arctic: The new battleground...", date: "Aug 12", category: "WION Wideangle" },
            { seed: 10, title: "Can deadly jellyfish survive...", date: "Aug 11", category: "WION Wideangle" }
          ]} 
        />

        {/* World At War Section */}
        <SectionGrid 
          title="World At War" 
          videos={[
            { seed: 11, title: "New revelations in Ukraine...", date: "Aug 10", category: "World At War" },
            { seed: 12, title: "Is the US-India nuclear deal...", date: "Aug 09", category: "World At War" },
            { seed: 13, title: "Pakistan's nuclear arsenal...", date: "Aug 08", category: "World At War" },
            { seed: 14, title: "US-China nuclear rivalry...", date: "Aug 07", category: "World At War" }
          ]} 
        />

        {/* You May Like Section */}
        <SectionGrid 
          title="You May Like" 
          videos={[
            { seed: 15, title: "Online casino operator fined...", date: "Aug 06", category: "Business" },
            { seed: 16, title: "WION's new apartment in Mumbai...", date: "Aug 05", category: "Real Estate" },
            { seed: 17, title: "WION's new resort in Goa...", date: "Aug 04", category: "Travel" }
          ]} 
          columns={3}
        />

        {/* World Of Africa Section */}
        <SectionGrid 
          title="World Of Africa" 
          videos={[
            { seed: 18, title: "YouTube's plan to take down...", date: "Aug 03", category: "World Of Africa" },
            { seed: 19, title: "Kenyan court blocks move...", date: "Aug 02", category: "World Of Africa" },
            { seed: 20, title: "Zimbabwe's school fees hike...", date: "Aug 01", category: "World Of Africa" },
            { seed: 21, title: "South Africa's new president...", date: "Jul 31", category: "World Of Africa" }
          ]} 
        />

        {/* Inside South Asia Section */}
        <SectionGrid 
          title="Inside South Asia" 
          videos={[
            { seed: 22, title: "Emerging human rights crisis...", date: "Jul 30", category: "Inside South Asia" },
            { seed: 23, title: "Afghanistan's Taliban people...", date: "Jul 29", category: "Inside South Asia" },
            { seed: 24, title: "Sri Lanka's economic crisis...", date: "Jul 28", category: "Inside South Asia" },
            { seed: 25, title: "The impact of Sri Lanka...", date: "Jul 27", category: "Inside South Asia" }
          ]} 
        />

        {/* The West Asia Post Section */}
        <SectionGrid 
          title="The West Asia Post" 
          videos={[
            { seed: 26, title: "Taliban takeover of Afghanistan...", date: "Jul 26", category: "The West Asia Post" },
            { seed: 27, title: "Iraq: 100,000 people displaced...", date: "Jul 25", category: "The West Asia Post" },
            { seed: 28, title: "Syria: Humanitarian crisis...", date: "Jul 24", category: "The West Asia Post" },
            { seed: 29, title: "Yemen: The forgotten war...", date: "Jul 23", category: "The West Asia Post" }
          ]} 
        />

        {/* Eclub Section */}
        <SectionGrid 
          title="Eclub" 
          videos={[
            { seed: 30, title: "New study on climate change...", date: "Jul 22", category: "Eclub" },
            { seed: 31, title: "Is the US-India nuclear deal...", date: "Jul 21", category: "Eclub" },
            { seed: 32, title: "SpaceX's Starship launch...", date: "Jul 20", category: "Eclub" },
            { seed: 33, title: "New Zealand's earthquake...", date: "Jul 19", category: "Eclub" }
          ]} 
        />

        {/* WION Wings Section */}
        <SectionGrid 
          title="WION Wings" 
          videos={[
            { seed: 34, title: "UN UNESCO declares new...", date: "Jul 18", category: "WION Wings" },
            { seed: 35, title: "Thailand bans plastic bags...", date: "Jul 17", category: "WION Wings" },
            { seed: 36, title: "India's new drone policy...", date: "Jul 16", category: "WION Wings" },
            { seed: 37, title: "US military drone crashes...", date: "Jul 15", category: "WION Wings" }
          ]} 
        />

        {/* Tech It Out Section */}
        <SectionGrid 
          title="Tech It Out" 
          videos={[
            { seed: 38, title: "Samsung's new foldable phone...", date: "Jul 14", category: "Tech It Out" },
            { seed: 39, title: "The future of AI...", date: "Jul 13", category: "Tech It Out" },
            { seed: 40, title: "Google's new privacy policy...", date: "Jul 12", category: "Tech It Out" },
            { seed: 41, title: "Apple's new iPhone...", date: "Jul 11", category: "Tech It Out" }
          ]} 
        />

        {/* World DNA Section */}
        <SectionGrid 
          title="World DNA" 
          videos={[
            { seed: 42, title: "Pakistan's floods: Devastation...", date: "Jul 10", category: "World DNA" },
            { seed: 43, title: "Afghanistan: Taliban's rule...", date: "Jul 09", category: "World DNA" },
            { seed: 44, title: "Ukraine: Russia's invasion...", date: "Jul 08", category: "World DNA" },
            { seed: 45, title: "India & China: Border dispute...", date: "Jul 07", category: "World DNA" }
          ]} 
        />

        {/* World Business Watch Section */}
        <SectionGrid 
          title="World Business Watch" 
          videos={[
            { seed: 46, title: "Trump's new economic policy...", date: "Jul 06", category: "World Business Watch" },
            { seed: 47, title: "Global stock markets crash...", date: "Jul 05", category: "World Business Watch" },
            { seed: 48, title: "India's economic growth...", date: "Jul 04", category: "World Business Watch" },
            { seed: 49, title: "Tesla's new factory...", date: "Jul 03", category: "World Business Watch" }
          ]} 
        />

        {/* Climate Tracker Section */}
        <SectionGrid 
          title="Climate Tracker" 
          videos={[
            { seed: 50, title: "India: IMD Sounds Heavy Rain...", date: "Jul 02", category: "Climate Tracker" },
            { seed: 51, title: "Climate change: The global...", date: "Jul 01", category: "Climate Tracker" },
            { seed: 52, title: "Pakistan floods: A climate...", date: "Jun 30", category: "Climate Tracker" },
            { seed: 53, title: "Extreme weather events...", date: "Jun 29", category: "Climate Tracker" }
          ]} 
        />

        {/* Finaprint Section */}
        <SectionGrid 
          title="Finaprint" 
          videos={[
            { seed: 54, title: "Indian economy: The road...", date: "Jun 28", category: "Finaprint" },
            { seed: 55, title: "Financial crisis: The global...", date: "Jun 27", category: "Finaprint" },
            { seed: 56, title: "US-China trade war: Impact...", date: "Jun 26", category: "Finaprint" },
            { seed: 57, title: "India's new budget...", date: "Jun 25", category: "Finaprint" }
          ]} 
        />

        {/* Race To Power Section */}
        <SectionGrid 
          title="Race To Power" 
          videos={[
            { seed: 58, title: "US elections: The race...", date: "Jun 24", category: "Race To Power" },
            { seed: 59, title: "Argentina's President Javier...", date: "Jun 23", category: "Race To Power" },
            { seed: 60, title: "Indonesia: The world's largest...", date: "Jun 22", category: "Race To Power" },
            { seed: 61, title: "Brazil's presidential election...", date: "Jun 21", category: "Race To Power" }
          ]} 
        />

        {/* Gravitas Section */}
        <SectionGrid 
          title="Gravitas" 
          videos={[
            { seed: 62, title: "Sri Lanka's economic crisis...", date: "Jun 20", category: "Gravitas" },
            { seed: 63, title: "Ukraine-Russia war: The latest...", date: "Jun 19", category: "Gravitas" },
            { seed: 64, title: "Political unrest in Pakistan...", date: "Jun 18", category: "Gravitas" },
            { seed: 65, title: "India's new foreign policy...", date: "Jun 17", category: "Gravitas" }
          ]} 
        />

        {/* WION Pulse Section */}
        <SectionGrid 
          title="WION Pulse" 
          videos={[
            { seed: 66, title: "The latest news from Japan...", date: "Jun 16", category: "WION Pulse" },
            { seed: 67, title: "Ukraine-Russia war: The latest...", date: "Jun 15", category: "WION Pulse" },
            { seed: 68, title: "Financial markets: The global...", date: "Jun 14", category: "WION Pulse" },
            { seed: 69, title: "China's new economic policy...", date: "Jun 13", category: "WION Pulse" }
          ]} 
        />
      </div>
    </section>
  )
}


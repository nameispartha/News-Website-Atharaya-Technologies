import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function TrendingNews() {
  const [showAll, setShowAll] = useState(false)

  const trendingArticles = [
    {
      id: 1,
      title: "Dubai princess, who divorced husband on IG, engaged to rapper French Montana",
      image: "https://picsum.photos/seed/dubai-princess-french-montana/400/300",
      date: "Aug 30",
      category: "Entertainment",
      description: "The Dubai princess who famously announced her divorce on Instagram has now revealed her engagement to American rapper French Montana, creating a media sensation across social media platforms."
    },
    {
      id: 2,
      title: "VIDEO: Man sets himself on fire at airport, after argument with wife",
      image: "https://picsum.photos/seed/man-sets-fire-airport/400/300",
      date: "Aug 29",
      category: "World",
      description: "A shocking incident at an airport where a man allegedly set himself on fire following a heated argument with his wife, captured on video and shared widely on social media."
    },
    {
      id: 3,
      title: "Humans have injured 80% of whale sharks in THIS popular tourist waters",
      image: "https://picsum.photos/seed/whale-sharks-injured/400/300",
      date: "Aug 29",
      category: "Science",
      description: "A concerning study reveals that human activities have caused injuries to 80% of whale sharks in popular tourist destinations, raising serious conservation concerns."
    },
    {
      id: 4,
      title: "This 150-year-old US newspaper is stopping printing for THIS reason",
      image: "https://picsum.photos/seed/old-newspaper-stopping/400/300",
      date: "Aug 28",
      category: "World",
      description: "A historic 150-year-old American newspaper has announced it will cease print operations, citing changing media consumption patterns and economic challenges."
    },
    {
      id: 5,
      title: "Night survey turns into nightmare! Google Maps attacked by villagers in UP",
      image: "https://picsum.photos/seed/google-maps-attacked-villagers/400/300",
      date: "Aug 29",
      category: "India",
      description: "A Google Maps survey team conducting night-time mapping in Uttar Pradesh was allegedly attacked by local villagers, highlighting tensions over privacy and surveillance concerns."
    },
    {
      id: 6,
      title: "European nations dumped 200,000 barrels of radioactive waste in ocean | Details",
      image: "https://picsum.photos/seed/radioactive-waste-ocean/400/300",
      date: "Aug 29",
      category: "World",
      description: "Shocking revelations about European countries allegedly dumping massive amounts of radioactive waste into the ocean, raising environmental and health concerns."
    },
    {
      id: 7,
      title: "Ganesh Chaturthi celebration in Texas parking lot sparks controversy",
      image: "https://picsum.photos/seed/ganesh-chaturthi-texas/400/300",
      date: "Aug 28",
      category: "World",
      description: "A Ganesh Chaturthi celebration held in a Texas parking lot has sparked controversy and debate about cultural celebrations in public spaces."
    },
    {
      id: 8,
      title: "Online ad uncovers illegal wildlife ring: Secret Nules Zoo had 56 exotic species",
      image: "https://picsum.photos/seed/illegal-wildlife-ring/400/300",
      date: "Aug 28",
      category: "World",
      description: "An online advertisement led to the discovery of an illegal wildlife trafficking ring operating a secret zoo with 56 exotic animal species."
    },
    // Additional trending articles for "Load More" functionality
    {
      id: 9,
      title: "NASA discovers new Earth-like planet in habitable zone",
      image: "https://picsum.photos/seed/nasa-earth-like-planet/400/300",
      date: "Aug 27",
      category: "Science",
      description: "NASA's latest discovery reveals a new Earth-like planet located in the habitable zone of its star system, potentially capable of supporting life."
    },
    {
      id: 10,
      title: "Global tech summit announces revolutionary AI breakthrough",
      image: "https://picsum.photos/seed/tech-summit-ai-breakthrough/400/300",
      date: "Aug 27",
      category: "Technology",
      description: "Leading scientists at the Global Tech Summit have announced a revolutionary breakthrough in artificial intelligence that could transform multiple industries."
    },
    {
      id: 11,
      title: "World's largest solar farm begins operations in Sahara Desert",
      image: "https://picsum.photos/seed/sahara-solar-farm/400/300",
      date: "Aug 26",
      category: "World",
      description: "The world's largest solar farm has officially begun operations in the Sahara Desert, marking a major milestone in renewable energy development."
    },
    {
      id: 12,
      title: "Famous Hollywood director announces retirement after 40 years",
      image: "https://picsum.photos/seed/hollywood-director-retirement/400/300",
      date: "Aug 26",
      category: "Entertainment",
      description: "A legendary Hollywood director has announced their retirement after four decades of creating iconic films that shaped the industry."
    },
    {
      id: 13,
      title: "Breakthrough in quantum computing achieved by international team",
      image: "https://picsum.photos/seed/quantum-computing-breakthrough/400/300",
      date: "Aug 25",
      category: "Technology",
      description: "An international team of researchers has achieved a major breakthrough in quantum computing, bringing us closer to practical quantum applications."
    },
    {
      id: 14,
      title: "Ancient city discovered underwater in Mediterranean Sea",
      image: "https://picsum.photos/seed/underwater-ancient-city/400/300",
      date: "Aug 25",
      category: "World",
      description: "Archaeologists have discovered an ancient city underwater in the Mediterranean Sea, revealing fascinating insights into ancient civilizations."
    }
  ]

  // Show first 8 articles initially, then all when "Load More" is clicked
  const displayedArticles = showAll ? trendingArticles : trendingArticles.slice(0, 8)

  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Back to Homepage Button */}
        <div className="mb-6">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700 transition-colors font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Homepage
          </Link>
        </div>

        {/* Section Header */}
        <div className="flex items-center gap-2 mb-6">
          <div className="w-1.5 h-5 bg-wionYellow"></div>
          <h2 className="text-2xl font-semibold">Trending News</h2>
        </div>
        
        {/* Trending News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedArticles.map((article) => (
            <article key={article.id} className="bg-white border border-neutral-200 hover:shadow-lg transition-shadow">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
                  TRENDING
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold leading-tight mb-3 hover:text-yellow-700 transition-colors">
                  <a href="#" className="hover:text-yellow-700">
                    {article.title}
                  </a>
                </h3>
                <p className="text-sm text-neutral-600 mb-3 line-clamp-3">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-neutral-600">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span className="text-yellow-600 font-medium">{article.category}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Load More Button - Only show if not all articles are displayed */}
        {!showAll && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={() => setShowAll(true)}
              className="bg-yellow-600 text-white px-6 py-3 rounded-md hover:bg-yellow-700 transition-colors font-medium"
            >
              Load More Trending News
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

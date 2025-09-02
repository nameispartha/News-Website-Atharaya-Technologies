import React from 'react'
import { Link } from 'react-router-dom'

function getDescription(title) {
  const descriptions = {
    "Trump Tariffs: US Court Finds Trump's Global Tariffs Illegal, Trump Calls Verdict 'Total Disaster'": "A US federal court has ruled that former President Trump's global tariff policies were implemented illegally, dealing a significant blow to his trade agenda. Trump has called the verdict a 'total disaster' for American trade policy.",
    "SCO Summit 2025: Russian President Putin to Visit India in December Amid Trump's Tariff War | WION": "Russian President Vladimir Putin is scheduled to visit India in December for the SCO Summit 2025, as global powers gather to discuss economic cooperation amid ongoing trade tensions with the Trump administration.",
    "Russia Ukraine War: Macron Slams Putin Over Ukraine Talks, Accuses Him of Manipulating West | WION": "French President Emmanuel Macron has strongly criticized Russian President Putin, accusing him of manipulating Western nations during Ukraine peace negotiations. Macron called for stronger sanctions and diplomatic pressure.",
    "Another Cloudburst Hits J&K's Ramban, 3 Dead, 5 Feared Missing": "A devastating cloudburst has struck Jammu and Kashmir's Ramban district, resulting in three confirmed deaths and five people feared missing. Rescue operations are currently underway in the affected areas.",
    "PKL 2025: Puneri Paltan clinch thriller against Bengaluru Bulls in opening game": "In an exciting opening match of PKL 2025, Puneri Paltan secured a thrilling victory against Bengaluru Bulls. The match went down to the wire with spectacular performances from both teams.",
    "Trump admin compares Delhi's 'low' crime rate to Chicago": "The Trump administration has drawn comparisons between Delhi's crime statistics and Chicago, highlighting the differences in urban safety and law enforcement effectiveness between the two cities.",
    "KPop Demon Hunters' Golden bags VMA Song of the Summer nomination": "KPop group Demon Hunters' hit song 'Golden' has received a prestigious VMA Song of the Summer nomination, marking a significant achievement for the Korean music industry in international recognition.",
    "Putin grooming 7-year-old kids into killing Ukrainian children, reveals report": "A shocking report has revealed allegations that Russian President Putin's regime is allegedly grooming young children as young as 7 years old for military training, raising serious concerns about child welfare in conflict zones.",
    "US Bars Palestinian Leader Abbas From UN Meet | Israel Hails Move by Trump Administration | WION": "The United States has barred Palestinian leader Mahmoud Abbas from attending a crucial UN meeting, a move that has been hailed by Israel as a significant step in supporting their diplomatic position.",
    "Jammu Kashmir Cloudburst: Cloudburst in J&K's Ramban District Kills Three, Rescue Ops Underway |WION": "BREAKING: A severe cloudburst in Jammu and Kashmir's Ramban district has claimed three lives with rescue operations currently underway. The incident has caused significant damage to infrastructure and homes.",
    "SCO Summit 2025: How SCO Compares to G7, BRICS | Asian Superpowers Gather for SCO Summit | WION News": "As Asian superpowers gather for the SCO Summit 2025, experts analyze how the Shanghai Cooperation Organization compares to other major international groups like G7 and BRICS in terms of economic and political influence.",
    "US Open 2025: Novak Djokovic into last 16 as Sabalenka avenges defeat": "Tennis star Novak Djokovic has advanced to the last 16 of the US Open 2025, while Aryna Sabalenka successfully avenged her previous defeat in an impressive display of skill and determination.",
    "HBO's Harry Potter reboot defended by original actor Timothy Spall": "Original Harry Potter actor Timothy Spall has come forward to defend HBO's controversial Harry Potter reboot, arguing that the new adaptation brings fresh perspectives to the beloved magical world.",
    "'We remember Oct 7, so should you': Israel releases clip from Hamas attack": "Israel has released a powerful clip from the October 7th Hamas attack, accompanied by the message 'We remember Oct 7, so should you' as part of their campaign to raise awareness about the incident.",
    "Dubai princess, who divorced husband on IG, engaged to rapper French Montana": "The Dubai princess who famously announced her divorce on Instagram has now revealed her engagement to American rapper French Montana, creating a media sensation across social media platforms.",
    "'Cocaine in Coca-Cola': How Pablo Escobar used smuggling to mock the US": "A fascinating historical account reveals how notorious drug lord Pablo Escobar allegedly used cocaine smuggling operations to mock the United States, including references to Coca-Cola in his criminal activities.",
    "NASA's James Webb Telescope detects CO2-rich planet-forming disk": "NASA's revolutionary James Webb Telescope has made a groundbreaking discovery, detecting a CO2-rich planet-forming disk that could provide crucial insights into the formation of planetary systems and the origins of life.",
    "5 places on Earth where you could die in seconds": "Scientists have identified five extremely dangerous locations on Earth where human survival is measured in mere seconds due to extreme environmental conditions, toxic gases, or lethal radiation levels.",
    "This $60 billion Italian mafia organisation is big enough to list on NASDAQ": "A shocking investigation reveals that a massive Italian mafia organization has grown to such an extent that it could potentially qualify for NASDAQ listing, highlighting the scale of organized crime's economic influence."
  }
  return descriptions[title] || "Latest breaking news and updates from around the world. Stay informed with WION's comprehensive coverage of global events, politics, sports, and entertainment."
}

function ArticleItem({ index, title, category, source, timeAgo, hasVideo = false, hasBreaking = false, hasNumberedIcon = false, iconNumber = null }) {
  return (
    <article className="flex flex-col sm:flex-row gap-4 lg:gap-6">
      {/* Image Container - Fixed consistent sizing for desktop/laptop */}
      <Link to={`/details/${index}`} className="relative shrink-0 bg-neutral-200 w-full h-48 sm:h-52 md:h-48 lg:h-40 lg:w-48 xl:h-44 xl:w-52 block">
        <img 
          className="w-full h-full object-cover" 
          src={`https://picsum.photos/seed/${index}/800/440`} 
          alt={title}
        />
        {hasVideo && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white bg-opacity-80 rounded-full p-2 sm:p-3 lg:p-2">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 lg:w-6 lg:h-6 text-neutral-800" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        )}
        {hasBreaking && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
            BREAKING
          </div>
        )}
        {hasNumberedIcon && iconNumber && (
          <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">{iconNumber}</span>
          </div>
        )}
      </Link>
      
      {/* Content Container - Better alignment for desktop/laptop */}
      <div className="min-w-0 flex-1 flex flex-col justify-between">
        <div className="space-y-2 lg:space-y-3">
          <h3 className="text-base sm:text-lg lg:text-lg xl:text-xl font-semibold leading-tight line-clamp-2">
            <Link to={`/details/${index}`} className="hover:text-yellow-700 transition-colors">
              {title}
            </Link>
          </h3>
          <p className="text-sm sm:text-base lg:text-sm xl:text-base text-neutral-600 line-clamp-2 leading-relaxed">
            <Link to={`/details/${index}`} className="hover:text-yellow-700 transition-colors">
              {getDescription(title)}
            </Link>
          </p>
        </div>
        
        {/* Meta Information - Consistent alignment */}
        <div className="flex items-center gap-2 text-xs sm:text-sm lg:text-xs xl:text-sm text-neutral-600 mt-3 lg:mt-4">
          <span className="text-yellow-600 font-medium">{category}</span>
          <span>•</span>
          <span>{source}</span>
          <span>•</span>
          <span>{timeAgo}</span>
        </div>
      </div>
    </article>
  )
}

export default function LatestNews() {
  const articles = [
    {
      index: 1,
      title: "Trump Tariffs: US Court Finds Trump's Global Tariffs Illegal, Trump Calls Verdict 'Total Disaster'",
      category: "Videos",
      source: "Wion Web Team",
      timeAgo: "12 min ago",
      hasVideo: true
    },
    {
      index: 2,
      title: "SCO Summit 2025: Russian President Putin to Visit India in December Amid Trump's Tariff War | WION",
      category: "Videos",
      source: "Wion Web Team",
      timeAgo: "15 min ago",
      hasVideo: true
    },
    {
      index: 3,
      title: "Russia Ukraine War: Macron Slams Putin Over Ukraine Talks, Accuses Him of Manipulating West | WION",
      category: "Videos",
      source: "Wion Web Team",
      timeAgo: "18 min ago",
      hasVideo: true
    },
    {
      index: 4,
      title: "Another Cloudburst Hits J&K's Ramban, 3 Dead, 5 Feared Missing",
      category: "Videos",
      source: "Wion Web Team",
      timeAgo: "22 min ago",
      hasVideo: true
    },
    {
      index: 5,
      title: "PKL 2025: Puneri Paltan clinch thriller against Bengaluru Bulls in opening game",
      category: "Sports",
      source: "Jatin Verma",
      timeAgo: "25 min ago"
    },
    {
      index: 6,
      title: "Trump admin compares Delhi's 'low' crime rate to Chicago",
      category: "World",
      source: "Wion Web Team",
      timeAgo: "28 min ago"
    },
    {
      index: 7,
      title: "KPop Demon Hunters' Golden bags VMA Song of the Summer nomination",
      category: "Entertainment",
      source: "Wion Web Team",
      timeAgo: "32 min ago"
    },
    {
      index: 8,
      title: "Putin grooming 7-year-old kids into killing Ukrainian children, reveals report",
      category: "World",
      source: "Wion Web Team",
      timeAgo: "35 min ago"
    },
    {
      index: 9,
      title: "US Bars Palestinian Leader Abbas From UN Meet | Israel Hails Move by Trump Administration | WION",
      category: "Videos",
      source: "Wion Web Team",
      timeAgo: "38 min ago",
      hasVideo: true
    },
    {
      index: 10,
      title: "Jammu Kashmir Cloudburst: Cloudburst in J&K's Ramban District Kills Three, Rescue Ops Underway |WION",
      category: "Videos",
      source: "Wion Web Team",
      timeAgo: "42 min ago",
      hasVideo: true,
      hasBreaking: true
    },
    {
      index: 11,
      title: "SCO Summit 2025: How SCO Compares to G7, BRICS | Asian Superpowers Gather for SCO Summit | WION News",
      category: "Videos",
      source: "Wion Web Team",
      timeAgo: "45 min ago",
      hasVideo: true
    },
    {
      index: 12,
      title: "US Open 2025: Novak Djokovic into last 16 as Sabalenka avenges defeat",
      category: "Sports",
      source: "Wion Web Team",
      timeAgo: "48 min ago"
    },
    {
      index: 13,
      title: "HBO's Harry Potter reboot defended by original actor Timothy Spall",
      category: "Entertainment",
      source: "Wion Web Team",
      timeAgo: "52 min ago"
    },
    {
      index: 14,
      title: "'We remember Oct 7, so should you': Israel releases clip from Hamas attack",
      category: "World",
      source: "Wion Web Team",
      timeAgo: "55 min ago"
    },
    {
      index: 15,
      title: "Dubai princess, who divorced husband on IG, engaged to rapper French Montana",
      category: "Entertainment",
      source: "Wion Web Team",
      timeAgo: "58 min ago"
    },
    {
      index: 16,
      title: "'Cocaine in Coca-Cola': How Pablo Escobar used smuggling to mock the US",
      category: "World",
      source: "Wion Web Team",
      timeAgo: "1 hr ago"
    },
    {
      index: 17,
      title: "NASA's James Webb Telescope detects CO2-rich planet-forming disk",
      category: "Science",
      source: "Wion Web Team",
      timeAgo: "1 hr ago"
    },
    {
      index: 18,
      title: "5 places on Earth where you could die in seconds",
      category: "Photos",
      source: "Wion Web Team",
      timeAgo: "1 hr ago",
      hasNumberedIcon: true,
      iconNumber: 6
    },
    {
      index: 19,
      title: "This $60 billion Italian mafia organisation is big enough to list on NASDAQ",
      category: "World",
      source: "Wion Web Team",
      timeAgo: "1 hr ago"
    }
  ]

  return (
    <section className="lg:col-span-2 flex flex-col divide-y divide-neutral-200">
      {/* Breadcrumb Navigation */}
      <div className="mb-4">
        <div className="text-sm text-neutral-600 mb-2">
          <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Latest News
        </div>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-5 bg-wionYellow"></div>
          <h2 className="text-[24px] font-semibold">Latest News</h2>
        </div>
      </div>
      {articles.map((article, idx) => (
        <div className="py-4" key={idx}>
          <ArticleItem 
            index={article.index}
            title={article.title}
            category={article.category}
            source={article.source}
            timeAgo={article.timeAgo}
            hasVideo={article.hasVideo}
            hasBreaking={article.hasBreaking}
            hasNumberedIcon={article.hasNumberedIcon}
            iconNumber={article.iconNumber}
          />
        </div>
      ))}
      <div className="py-6 flex justify-center gap-2 text-sm">
        <button className="px-3 py-1 border rounded">1</button>
        <button className="px-3 py-1 border rounded bg-neutral-100">2</button>
        <button className="px-3 py-1 border rounded">›</button>
      </div>
    </section>
  )
}

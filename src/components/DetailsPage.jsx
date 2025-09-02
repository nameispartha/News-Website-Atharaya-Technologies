import React from 'react'
import { Link, useParams } from 'react-router-dom'

function DetailsPage() {
  const { id } = useParams()

  // Mock article data - in a real app, this would come from an API
  const article = {
    id: id || '1',
    title: "Trump Tariffs: US Court Finds Trump's Global Tariffs Illegal, Trump Calls Verdict 'Total Disaster'",
    category: "World",
    source: "Wion Web Team",
    timeAgo: "12 min ago",
    image: "https://picsum.photos/seed/trump-tariffs/1200/600",
    content: `
      <p>A US federal court has ruled that former President Donald Trump's global tariff policies were implemented illegally, dealing a significant blow to his trade agenda. The landmark decision, handed down by the US Court of International Trade, found that the Trump administration exceeded its authority when imposing tariffs on billions of dollars worth of imports from China, the European Union, and other trading partners.</p>
      
      <p>The court's ruling specifically addressed the use of Section 232 of the Trade Expansion Act of 1962, which Trump's administration had cited as justification for imposing tariffs on steel and aluminum imports. The judges determined that the administration's interpretation of national security threats was overly broad and not supported by the law's original intent.</p>
      
      <p>"This is a total disaster for American trade policy," Trump said in a statement following the ruling. "The court has sided with China and other countries that have been taking advantage of the United States for decades. This decision will cost American jobs and weaken our economy."</p>
      
      <p>The ruling comes at a critical time as the current administration grapples with ongoing trade tensions with China and other major trading partners. Legal experts suggest this decision could set a precedent for future trade policy challenges and may force the government to reconsider its approach to international trade disputes.</p>
      
      <p>Industry groups that had challenged the tariffs hailed the decision as a victory for American businesses and consumers. "These tariffs were hurting American manufacturers and raising costs for consumers," said a spokesperson for the National Association of Manufacturers. "This ruling provides much-needed clarity on the limits of executive authority in trade policy."</p>
      
      <p>The Trump administration has indicated it will appeal the decision, setting up a potential showdown in higher courts. Legal analysts expect the case to eventually reach the Supreme Court, where it could have far-reaching implications for presidential authority in trade matters.</p>
      
      <p>Meanwhile, international trade partners have welcomed the ruling, with representatives from the European Union and China expressing hope that it will lead to more constructive trade relations. "This decision reaffirms the importance of following international trade rules and procedures," said a spokesperson for the European Commission.</p>
    `,
    relatedArticles: [
      {
        id: '2',
        title: "SCO Summit 2025: Russian President Putin to Visit India in December Amid Trump's Tariff War",
        category: "World",
        image: "https://picsum.photos/seed/putin-india/400/250",
        timeAgo: "15 min ago"
      },
      {
        id: '3',
        title: "Russia Ukraine War: Macron Slams Putin Over Ukraine Talks, Accuses Him of Manipulating West",
        category: "World",
        image: "https://picsum.photos/seed/macron-putin/400/250",
        timeAgo: "18 min ago"
      },
      {
        id: '4',
        title: "Another Cloudburst Hits J&K's Ramban, 3 Dead, 5 Feared Missing",
        category: "India",
        image: "https://picsum.photos/seed/cloudburst-jk/400/250",
        timeAgo: "22 min ago"
      }
    ]
  }

  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / <Link to={`/${article.category.toLowerCase()}`} className="hover:text-yellow-600 transition-colors">{article.category}</Link> / Article
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h2 className="text-lg font-semibold">Article Details</h2>
          </div>
        </div>

        {/* Main Article Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Article Header */}
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-4">
                {article.title}
              </h1>
              <div className="flex items-center gap-2 text-sm text-neutral-600 mb-4">
                <Link to={`/${article.category.toLowerCase()}`} className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors">
                  {article.category}
                </Link>
                <span>•</span>
                <span>{article.source}</span>
                <span>•</span>
                <span>{article.timeAgo}</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative">
              <img 
                src={article.image} 
                alt={article.title}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            {/* Article Footer */}
            <div className="border-t border-neutral-200 pt-6">
              <div className="flex items-center justify-between text-sm text-neutral-600">
                <span>Published by {article.source}</span>
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                    </svg>
                    Share
                  </button>
                  <button className="flex items-center gap-2 hover:text-yellow-600 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Articles */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
              <div className="space-y-4">
                {article.relatedArticles.map((related) => (
                  <Link 
                    key={related.id} 
                    to={`/details/${related.id}`}
                    className="block group hover:shadow-lg transition-shadow rounded-lg overflow-hidden"
                  >
                    <div className="flex flex-col">
                      <img 
                        src={related.image} 
                        alt={related.title}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-3">
                        <h4 className="text-sm font-semibold line-clamp-2 group-hover:text-yellow-600 transition-colors">
                          {related.title}
                        </h4>
                        <div className="flex items-center gap-2 mt-2 text-xs text-neutral-600">
                          <Link to={`/${related.category.toLowerCase()}`} className="text-yellow-600 hover:text-yellow-700 transition-colors">
                            {related.category}
                          </Link>
                          <span>•</span>
                          <span>{related.timeAgo}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Advertisement */}
            <div className="border border-neutral-200 bg-white rounded-lg overflow-hidden">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">
                ADVERTISEMENT
              </div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img 
                  src="https://picsum.photos/seed/ad-details/400/300" 
                  alt="Advertisement"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default DetailsPage

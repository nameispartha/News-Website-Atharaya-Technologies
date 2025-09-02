import React from 'react'
import { Link } from 'react-router-dom'

function SmallCard({ seed, title, date, category }) {
  return (
    <article className="flex flex-col">
      <img src={`https://picsum.photos/seed/business-${seed}/420/260`} alt="thumb" className="w-full h-40 object-cover" />
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <span className="mt-1 text-[11px] text-neutral-500">{date} | {category}</span>
    </article>
  )
}

function RightListItem({ seed, title }) {
  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <img src={`https://picsum.photos/seed/br-${seed}/88/66`} className="w-[88px] h-[66px] object-cover" alt="thumb" />
      <a className="text-[12px] leading-4 hover:text-yellow-700 line-clamp-3" href="#">{title}</a>
    </div>
  )
}

function AdCard({ seed, title }) {
  return (
    <div className="flex flex-col">
      <img src={`https://picsum.photos/seed/ad-${seed}/540/320`} alt="ad" className="w-full h-48 object-cover" />
      <h3 className="mt-2 text-[13px] leading-4 font-semibold">{title}</h3>
    </div>
  )
}

export default function BusinessNews() {
  return (
    <section className="content-wrap">
      <div className="container-page px-4 md:px-0">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Business & Economy
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h2 className="text-lg font-semibold">Business & Economy</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <img src={`https://picsum.photos/seed/business-hero/1000/560`} className="w-full h-auto object-cover" alt="hero" />
            <h3 className="mt-3 text-[18px] font-semibold leading-6">Trump anti-India tariffs a strategic misstep or leverage? How US media, think tanks, experts are reacting to punishment over Russia oil trade</h3>
            <span className="mt-2 text-sm text-neutral-600">Aug 28 | World</span>
          </div>
          <aside className="space-y-3">
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img src={`https://picsum.photos/seed/ad-sidebar-1/640/480`} className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>
            <div className="space-y-2">
              <RightListItem seed={1} title="Gaming law faces legal challenge. A23 online gaming company moves Klaka HC" />
              <RightListItem seed={2} title="7 times Peter Navamo proved his ex-aide, who called him an a**hole, right" />
              <RightListItem seed={3} title="Maruti Suzuki India chairman backs Centre over Trump tariff: 'Don't give in'" />
              <RightListItem seed={4} title="Why did Sensex and Nifty fall today? Here's what the expert says" />
            </div>
          </aside>
        </div>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <SmallCard seed={1} title="When will India become world's second-largest economy? Report makes big claim" date="Aug 27" category="Business & Economy" />
          <SmallCard seed={2} title="Think tank GTRI asks Centre to boost consumption to offset Donald Trump's tariff" date="Aug 27" category="Business & Economy" />
          <SmallCard seed={3} title="Amid Trump tariff pressure, India looks to diversify textile exports: Report" date="Aug 27" category="Business & Economy" />
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdCard seed={1} title="Sattva Lumina premium apartments: 2 BHK from ₹1.12 crore* and 3 BHK from ₹1.54 crore*" />
            <AdCard seed={2} title="Premium 2 & 3 BHK Apartments in Whitefield | Starts at ₹87 Lacs* | No Pre EMI till 2027" />
            <AdCard seed={3} title="Well-ventilated 3BHK homes at ₹1.79 Cr* by Abbee Aaria" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <SmallCard seed={4} title="Here's what India can do to counter Donald Trump's tariffs" date="Aug 27" category="Business & Economy" />
          <SmallCard seed={5} title="Donald Trump's tariff on India in numbers: Which sectors are hardest hit" date="Aug 27" category="Business & Economy" />
          <SmallCard seed={6} title="Most valuable banks 2025: Top 10 banks by market capitalization globally" date="Aug 26" category="Photos" />
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">India's Foreign Policy in 2025</h3>
          </div>
          <div className="relative w-full aspect-video bg-neutral-200 flex items-center justify-center">
            <img src={`https://picsum.photos/seed/video-business/1280/720`} alt="Video thumbnail" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-80 rounded-full p-4">
                <svg className="w-8 h-8 text-neutral-800" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col">
                <img src={`https://picsum.photos/seed/modi-business/600/400`} className="w-full h-64 object-cover" alt="Modi" />
                <div className="mt-3 space-y-2">
                  <p className="text-sm font-medium">Are Indian refiners planning to lower the volume of Russian crude imports?</p>
                  <p className="text-sm font-medium">Chinese Ambassador claims 20 per cent growth in Indian exports to China</p>
                  <p className="text-sm font-medium">Dream11 lost 95 pc revenue due to online gaming ban. Will it lay off staff?</p>
                  <p className="text-sm font-medium">Why Maruti Suzuki's share prices hit all-time high ahead of Trump tariff?</p>
                </div>
              </div>
              <img src={`https://picsum.photos/seed/japan-street/600/400`} className="w-full h-64 object-cover" alt="Japan street" />
            </div>
            <h3 className="mt-4 text-[16px] font-semibold leading-5">Modi's 'Swadeshi' push can take inspiration from 'Nihonsei' (wow they even sound similar) in Japan, which he's visiting amid Trump tariffs</h3>
            <span className="mt-2 text-sm text-neutral-600">Aug 25 | World</span>
          </div>
          <aside className="space-y-3">
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img src={`https://picsum.photos/seed/ad-sidebar-2/640/480`} className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">You May Like</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <SmallCard seed={7} title="Donald Trump's tariff: What will happen to Apple's Made-in-India iPhone supply?" date="Aug 25" category="Business & Economy" />
            <SmallCard seed={8} title="Global Space Economy: Top countries with highest space budget in 2025" date="Aug 25" category="Photos" />
            <SmallCard seed={9} title="Modi didn't pick up four calls from Trump? German newspaper report claims..." date="Aug 25" category="World" />
          </div>
          <div className="mt-4">
            <SmallCard seed={10} title="Top 10 countries with the highest public pension wealth. Where does India stand?" date="Aug 25" category="World" />
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">Learn To Create Wealth In STOCK MARKET USING SWING</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <AdCard seed={4} title="Swing is King: Mr. Hemant's Strategy Finally Explained in Free Session" />
            <AdCard seed={5} title="3 BHK airy homes at Abhee Aaria at ₹1.79 Cr* near Gunjur Lake" />
            <AdCard seed={6} title="No.1 Trader Mr. Hemant Reveals His Winning Strategy for Free!" />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <SmallCard seed={11} title="Forex Reserve 2025: Top 5 countries with highest foreign reserves" date="Aug 25" category="World" />
          <SmallCard seed={12} title="BSE, NSE crash: 6 reasons why the Indian stock market crashed" date="Aug 25" category="World" />
          <SmallCard seed={13} title="Trump fires Fed Governor Lisa Cook, claims 'sufficient cause' of mortgage fraud" date="Aug 25" category="World" />
        </div>
        <div className="mt-4">
          <SmallCard seed={14} title="60 nations to take part in India Maritime Week: $114bn investment prospect: Govt" date="Aug 25" category="World" />
        </div>

        <div className="mt-6 flex justify-center items-center">
          <img src={`https://picsum.photos/seed/bottom-ad/1100/90`} alt="bottom-ad" className="w-full object-cover" />
        </div>
        <div className="mt-4 flex justify-center gap-2 text-sm">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </section>
  )
}


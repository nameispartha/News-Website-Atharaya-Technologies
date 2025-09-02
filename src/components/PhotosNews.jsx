import React from 'react'
import { Link } from 'react-router-dom'

function PhotoCard({ seed, title, iconNumber }) {
  return (
    <article className="flex flex-col">
      <div className="relative">
        <img 
          src={`https://picsum.photos/seed/photo-${seed}/420/260`} 
          alt="thumb" 
          className="w-full h-40 object-cover"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/420x260/cccccc/666666?text=Photo+${seed}`;
          }}
        />
        <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
          <span className="text-white text-xs font-bold">{iconNumber.toString().padStart(2, '0')}</span>
        </div>
      </div>
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
    </article>
  )
}

function RightPhotoItem({ seed, title, timeAgo, iconNumber }) {
  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <div className="relative w-[88px] h-[66px]">
        <img 
          src={`https://picsum.photos/seed/sidebar-photo-${seed}/88/66`} 
          className="w-full h-full object-cover" 
          alt="thumb"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/88x66/cccccc/666666?text=Sidebar+${seed}`;
          }}
        />
        <div className="absolute bottom-1 right-1 w-5 h-5 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
          <span className="text-white text-[10px] font-bold">{iconNumber.toString().padStart(2, '0')}</span>
        </div>
      </div>
      <div className="min-w-0">
        <a className="text-[12px] leading-4 hover:text-yellow-700 line-clamp-3" href="#">{title}</a>
        <span className="text-[11px] text-neutral-500 block mt-1">{timeAgo}</span>
      </div>
    </div>
  )
}

function FeaturedPhoto({ seed, title, timeAgo, iconNumber }) {
  return (
    <div className="lg:col-span-2">
      <div className="relative">
        <img 
          src={`https://picsum.photos/seed/featured-photo-${seed}/1000/560`} 
          className="w-full h-auto object-cover" 
          alt="featured"
          onError={(e) => {
            e.target.src = `https://via.placeholder.com/1000x560/cccccc/666666?text=Featured+${seed}`;
          }}
        />
        <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
          <span className="text-white text-sm font-bold">{iconNumber.toString().padStart(2, '0')}</span>
        </div>
      </div>
      <div className="mt-3">
        <span className="text-sm text-neutral-600">Photos | {timeAgo}</span>
        <h3 className="mt-2 text-[18px] font-semibold leading-6">{title}</h3>
      </div>
    </div>
  )
}

export default function PhotosNews() {
  return (
    <section className="content-wrap mt-6">
      <div className="container-page">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Photo Gallery
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5" style={{backgroundColor: '#ffd400'}}></div>
            <h2 className="text-lg font-semibold">Photo Gallery</h2>
          </div>
        </div>

        {/* Main Featured Photo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <FeaturedPhoto 
            seed={1} 
            title="Why Did The F-16 Ejection Process Fail? All About The Poland Crash" 
            timeAgo="10 min ago" 
            iconNumber={7} 
          />
          <aside className="space-y-3">
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img 
                  src={`https://picsum.photos/seed/ad-photos-sidebar-1/640/480`} 
                  className="w-full h-full object-cover" 
                  alt="ad"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/640x480/cccccc/666666?text=Advertisement`;
                  }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <RightPhotoItem seed={1} title="Baba Vanga's 2025 prophecies that came true" timeAgo="39 min ago" iconNumber={7} />
              <RightPhotoItem seed={2} title="How did a Soviet probe survived just 53 minutes on Venus?" timeAgo="1 hrs ago" iconNumber={6} />
              <RightPhotoItem seed={3} title="5 Indian batters with most international sixes, two active players on list" timeAgo="1 hrs ago" iconNumber={5} />
              <RightPhotoItem seed={4} title="5 players with most raid points in PKL history, check which raider tops list" timeAgo="1 hrs ago" iconNumber={5} />
            </div>
          </aside>
        </div>

        {/* First Grid of Photos - 3 columns, 2 rows */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PhotoCard seed={2} title="What were Voyager 2's greatest discoveries about our Solar System?" iconNumber={7} />
            <PhotoCard seed={3} title="'Not dead worlds': How Voyager 2's discoveries at Uranus and Neptune changed planetary science forever" iconNumber={7} />
            <PhotoCard seed={4} title="What is the secret 'Ghost Mode' of B-2 Bomber?" iconNumber={7} />
            <PhotoCard seed={5} title="'48 hours of non-stop flight': What is the billion-dollar secret behind B-2's exhaust system?" iconNumber={7} />
            <PhotoCard seed={6} title="Where was B-2 Bomber's 'Batwing' design inspired from?" iconNumber={7} />
            <PhotoCard seed={7} title="Why B-2 Bomber doesn't have a tail?" iconNumber={7} />
          </div>
        </div>

        {/* Second Main Featured Photo */}
        <div className="mt-8">
          <div className="relative">
            <img 
              src={`https://picsum.photos/seed/featured-photo-2/1000/560`} 
              className="w-full h-auto object-cover" 
              alt="F-16 fighter jet"
              onError={(e) => {
                e.target.src = `https://via.placeholder.com/1000x560/cccccc/666666?text=F-16+Fighter+Jet`;
              }}
            />
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full flex items-center justify-center" style={{backgroundColor: '#ffd400'}}>
              <span className="text-white text-sm font-bold">06</span>
            </div>
          </div>
          <h3 className="mt-3 text-[18px] font-semibold leading-6">How Does F-16 Fighter Jet's Ejection Process Work And How Pilots Are Trained For Emergency?</h3>
        </div>

        {/* Bottom Right Sidebar */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2"></div>
          <aside className="space-y-3">
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img 
                  src={`https://picsum.photos/seed/ad-photos-sidebar-2/640/480`} 
                  className="w-full h-full object-cover" 
                  alt="ad"
                  onError={(e) => {
                    e.target.src = `https://via.placeholder.com/640x480/cccccc/666666?text=Advertisement`;
                  }}
                />
              </div>
            </div>
            <div className="space-y-2">
              <RightPhotoItem seed={5} title="What did Voyager 2 discover on Neptune's moon Triton?" timeAgo="" iconNumber={7} />
              <RightPhotoItem seed={6} title="From F-16s to F-35: How many fighter jets does Poland have?" timeAgo="" iconNumber={6} />
              <RightPhotoItem seed={7} title="Did you know Voyager 2 is taking a time capsule of Earth in deep space?" timeAgo="" iconNumber={7} />
              <RightPhotoItem seed={8} title="Happy Birthday Nagarjuna: 8 must-watch films from the star" timeAgo="" iconNumber={7} />
            </div>
          </aside>
        </div>

        {/* Second Grid of Photos - 4 columns, 2 rows */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <PhotoCard seed={8} title="From Gandhi to Chaplin: Must-watch movies directed by Richard Attenborough" iconNumber={7} />
            <PhotoCard seed={9} title="PM Narendra Modi in Japan: Look back at Indian PM's 7 Japan visits since 2014" iconNumber={7} />
            <PhotoCard seed={10} title="Blood 'red' Moon for 82 minutes — Why the Moon will turn an eerie dark red in September | Details" iconNumber={6} />
            <PhotoCard seed={11} title="'Touched by the warmth and affection': PM Modi arrives in Tokyo, receives grand welcome by Indian diaspora" iconNumber={5} />
            <PhotoCard seed={12} title="How many F-16 fighter jets does Poland operate and where are they based?" iconNumber={6} />
            <PhotoCard seed={13} title="Radom airshow tragedy: Polish F-16 fighter jet crashes during rehearsal, pilot dead" iconNumber={6} />
            <PhotoCard seed={14} title="In Pics: All 2025 NFL Rivalry Jerseys, names, meaning and on-field debut date" iconNumber={8} />
            <PhotoCard seed={15} title="Five bowlers with the best bowling figures in T20I Asia Cup history: Only one Indian makes the cut" iconNumber={5} />
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2 text-sm">
          <button className="px-3 py-1 border rounded text-white" style={{backgroundColor: '#ffd400'}}>1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </section>
  )
}

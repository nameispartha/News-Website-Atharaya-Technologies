import React, { useState, useRef } from 'react'
import { FiPlay, FiPause, FiVolume2, FiVolumeX } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function VideoCard({ seed, title, timestamp, timeAgo, isBreaking = false }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <article className="flex flex-col">
      <div className="relative group">
        <video 
          ref={videoRef}
          className="w-full h-40 object-cover bg-neutral-200"
          poster={`https://picsum.photos/seed/video-${seed}/420/260`}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          muted={isMuted}
          preload="metadata"
          controls
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
          <source src="https://file-examples.com/storage/fe68a1ef0c6364f6c9504cc/2017/10/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {isBreaking && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded font-bold">
            BREAKING
          </div>
        )}
        
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Custom Video Controls */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={togglePlay}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-3 transition-all duration-200"
            >
              {isPlaying ? <FiPause className="w-5 h-5 text-neutral-800" /> : <FiPlay className="w-5 h-5 text-neutral-800" />}
            </button>
            <button 
              onClick={toggleMute}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              {isMuted ? <FiVolumeX className="w-4 h-4 text-neutral-800" /> : <FiVolume2 className="w-4 h-4 text-neutral-800" />}
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-black bg-opacity-30">
          <div 
            className="h-full bg-wionYellow transition-all duration-100"
            style={{ width: `${duration > 0 ? (currentTime / duration) * 100 : 0}%` }}
          ></div>
        </div>
      </div>
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
      <span className="mt-1 text-[11px] text-neutral-500">{timeAgo}</span>
    </article>
  )
}

function RightVideoItem({ seed, title, timestamp, timeAgo }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className="flex gap-2 py-2 border-b border-neutral-200 last:border-0">
      <div className="relative w-[88px] h-[66px] group">
        <video 
          ref={videoRef}
          className="w-full h-full object-cover bg-neutral-200"
          poster={`https://picsum.photos/seed/sidebar-${seed}/88/66`}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          muted={isMuted}
          preload="metadata"
          controls
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
        </video>
        
        <div className="absolute bottom-1 right-1 bg-black bg-opacity-70 text-white text-[10px] px-1 rounded">
          {timestamp}
        </div>

        {/* Mini Controls */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={togglePlay}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1 transition-all duration-200"
            >
              {isPlaying ? <FiPause className="w-3 h-3 text-neutral-800" /> : <FiPlay className="w-3 h-3 text-neutral-800" />}
            </button>
            <button 
              onClick={toggleMute}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1 transition-all duration-200"
            >
              {isMuted ? <FiVolumeX className="w-2 h-2 text-neutral-800" /> : <FiVolume2 className="w-2 h-2 text-neutral-800" />}
            </button>
          </div>
        </div>
      </div>
      <div className="min-w-0">
        <a className="text-[12px] leading-4 hover:text-yellow-700 line-clamp-3" href="#">{title}</a>
        <span className="text-[11px] text-neutral-500 block mt-1">{timeAgo}</span>
      </div>
    </div>
  )
}

function TrendingVideoCard({ seed, title }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <article className="flex flex-col">
      <div className="relative group">
        <video 
          ref={videoRef}
          className="w-full h-32 object-cover bg-neutral-200"
          poster={`https://picsum.photos/seed/trending-${seed}/420/200`}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          muted={isMuted}
          preload="metadata"
          controls
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
        </video>
        
        {/* Custom Video Controls */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button 
              onClick={togglePlay}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200"
            >
              {isPlaying ? <FiPause className="w-4 h-4 text-neutral-800" /> : <FiPlay className="w-4 h-4 text-neutral-800" />}
            </button>
            <button 
              onClick={toggleMute}
              className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-1.5 transition-all duration-200"
            >
              {isMuted ? <FiVolumeX className="w-3 h-3 text-neutral-800" /> : <FiVolume2 className="w-3 h-3 text-neutral-800" />}
            </button>
          </div>
        </div>
      </div>
      <h3 className="mt-2 text-[13px] leading-4 font-semibold hover:text-yellow-700 line-clamp-2">{title}</h3>
    </article>
  )
}

export default function VideosNews() {
  const [mainVideoPlaying, setMainVideoPlaying] = useState(false)
  const [mainVideoMuted, setMainVideoMuted] = useState(false)
  const [mainVideoCurrentTime, setMainVideoCurrentTime] = useState(0)
  const [mainVideoDuration, setMainVideoDuration] = useState(0)
  const mainVideoRef = useRef(null)

  const toggleMainVideoPlay = () => {
    if (mainVideoRef.current) {
      if (mainVideoPlaying) {
        mainVideoRef.current.pause()
      } else {
        mainVideoRef.current.play()
      }
      setMainVideoPlaying(!mainVideoPlaying)
    }
  }

  const toggleMainVideoMute = () => {
    if (mainVideoRef.current) {
      mainVideoRef.current.muted = !mainVideoMuted
      setMainVideoMuted(!mainVideoMuted)
    }
  }

  const handleMainVideoTimeUpdate = () => {
    if (mainVideoRef.current) {
      setMainVideoCurrentTime(mainVideoRef.current.currentTime)
    }
  }

  const handleMainVideoLoadedMetadata = () => {
    if (mainVideoRef.current) {
      setMainVideoDuration(mainVideoRef.current.duration)
    }
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <section className="content-wrap mt-6">
      <div className="container-page">
        {/* Breadcrumb Navigation */}
        <div className="mb-4">
          <div className="text-sm text-neutral-600 mb-2">
            <Link to="/" className="hover:text-yellow-600 transition-colors">Wion</Link> / Video
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h2 className="text-lg font-semibold">Videos</h2>
          </div>
        </div>

        {/* Main Featured Video Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative group">
              <video 
                ref={mainVideoRef}
                className="w-full h-96 object-cover bg-neutral-200"
                poster={`https://picsum.photos/seed/featured-video/1000/560`}
                onTimeUpdate={handleMainVideoTimeUpdate}
                onLoadedMetadata={handleMainVideoLoadedMetadata}
                onPlay={() => setMainVideoPlaying(true)}
                onPause={() => setMainVideoPlaying(false)}
                muted={mainVideoMuted}
                preload="metadata"
                controls
              >
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                <source src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4" type="video/mp4" />
                <source src="https://file-examples.com/storage/fe68a1ef0c6364f6c9504cc/2017/10/file_example_MP4_480_1_5MG.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute bottom-4 left-4">
                <div className="w-12 h-12 bg-wionYellow rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white text-sm px-2 py-1 rounded">
                {formatTime(mainVideoCurrentTime)} / {formatTime(mainVideoDuration)}
              </div>

              {/* Main Video Controls */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button 
                    onClick={toggleMainVideoPlay}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-200"
                  >
                    {mainVideoPlaying ? <FiPause className="w-12 h-12 text-neutral-800" /> : <FiPlay className="w-12 h-12 text-neutral-800" />}
                  </button>
                  <button 
                    onClick={toggleMainVideoMute}
                    className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-4 transition-all duration-200"
                  >
                    {mainVideoMuted ? <FiVolumeX className="w-8 h-8 text-neutral-800" /> : <FiVolume2 className="w-8 h-8 text-neutral-800" />}
                  </button>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="absolute bottom-0 left-0 right-0 h-2 bg-black bg-opacity-30">
                <div 
                  className="h-full bg-wionYellow transition-all duration-100"
                  style={{ width: `${mainVideoDuration > 0 ? (mainVideoCurrentTime / mainVideoDuration) * 100 : 0}%` }}
                ></div>
              </div>
            </div>
            <h3 className="mt-3 text-[18px] font-semibold leading-6">First Snow Leopard Cub Born At Chester Zoo In 94 Years</h3>
            <span className="mt-2 text-sm text-neutral-600">4 min ago</span>
          </div>
          <aside className="space-y-3">
            <div className="border border-neutral-200 bg-white">
              <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
              <div className="aspect-[4/3] bg-neutral-200">
                <img src={`https://picsum.photos/seed/ad-videos-sidebar/640/480`} className="w-full h-full object-cover" alt="ad" />
              </div>
            </div>
            <div className="space-y-2">
              <RightVideoItem seed={1} title="PM Modi In Japan: A Look At India's Partnership In Numbers Over Years" timestamp="2:15" timeAgo="4 min ago" />
              <RightVideoItem seed={2} title="Trump tariffs: $87 billion in US imports from India at risk" timestamp="1:59" timeAgo="19 min ago" />
              <RightVideoItem seed={3} title="Pakistan floods: Floodwaters sweep into 1,400 villages in eastern province" timestamp="2:36" timeAgo="19 min ago" />
            </div>
          </aside>
        </div>

        {/* Main Grid of Videos - Row 1 */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <VideoCard seed={4} title="JD Vance reiterates 'Trump is in great health' | Trump's 'frailing' health causes ..." timestamp="1:31" timeAgo="34 min ago" />
            <VideoCard seed={5} title="Neeraj Chopra Finishes Second In Diamond League Final" timestamp="1:27" timeAgo="34 min ago" />
            <VideoCard seed={6} title="Vietnam announces National Day cash handouts worth $380 million" timestamp="1:03" timeAgo="34 min ago" />
            <VideoCard seed={7} title="India: Cloudburst Mayhem In Uttarakhand's Rudraprayag & Chamoli, ..." timestamp="2:34" timeAgo="49 min ago" />
          </div>
        </div>

        {/* Main Grid of Videos - Row 2 */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <VideoCard seed={8} title="Fifth body found in seine at Charenton-le-Pont; no link yet to earlier..." timestamp="1:12" timeAgo="49 min ago" />
            <VideoCard seed={9} title="BREAKING | Thailand's Prime Minister Paetongtarn Shinawatra Sacked Over ..." timestamp="1:53" timeAgo="1 hrs ago" isBreaking={true} />
            <VideoCard seed={10} title="Iran's Foreign Minister Araghchi says Tehran is ready for nuclear talks" timestamp="3:04" timeAgo="1 hrs ago" />
            <VideoCard seed={11} title="SCO Summit 2025: Putin, Modi & Xi to Meet on Sidelines of SCO Amid Trump's ..." timestamp="4:27" timeAgo="1 hrs ago" />
          </div>
        </div>

        {/* Main Grid of Videos - Row 3 */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <VideoCard seed={12} title="Vietnam's cash gift to citizens on National day" timestamp="1:02" timeAgo="1 hrs ago" />
            <VideoCard seed={13} title="PM Modi in Japan: India eyes AI, semiconductors, quantum tech with ..." timestamp="2:47" timeAgo="1 hrs ago" />
            <VideoCard seed={14} title="India: IMD Sounds Heavy Rain Alert Across Multiple States in India | WION" timestamp="2:28" timeAgo="1 hrs ago" />
            <VideoCard seed={15} title="Papua New Guinea makes first-ever Oscar entry with 'Papa Buka'" timestamp="1:18" timeAgo="1 hrs ago" />
          </div>
        </div>

        {/* Main Grid of Videos - Row 4 */}
        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <VideoCard seed={16} title="Trump Tariffs: Why is Laos High on Trump's Tariff 'Hate List'? | Laos Hit With..." timestamp="1:39" timeAgo="1 hrs ago" />
            <VideoCard seed={17} title="Charred trees from Eaton wildfire used to rebuild Altadena" timestamp="1:28" timeAgo="2 hrs ago" />
            <VideoCard seed={18} title="Pakistan: Over 1,600 Villages Submerged as Punjab Province Faces Worst Floodin..." timestamp="2:28" timeAgo="2 hrs ago" />
            <VideoCard seed={19} title="Cub takes first steps in outdoors enclosure in adorable video" timestamp="1:11" timeAgo="2 hrs ago" />
          </div>
        </div>

        {/* Advertisement Banner */}
        <div className="mt-8">
          <div className="border border-neutral-200 bg-white">
            <div className="h-8 bg-neutral-100 flex items-center px-3 text-sm font-semibold">ADVERTISEMENT</div>
            <div className="aspect-[3/1] bg-neutral-200">
              <img src={`https://picsum.photos/seed/ad-videos-bottom/1200/400`} className="w-full h-full object-cover" alt="ad" />
            </div>
          </div>
        </div>

        {/* Trending Videos Section */}
        <div className="mt-8">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1.5 h-5 bg-wionYellow"></div>
            <h3 className="text-base font-semibold">Trending Videos</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <TrendingVideoCard seed={20} title="Pakistan's jailed Ex-PM Imran Khan draws a parallel between Asim Munir and PCB chief Mohsin Naqvi" />
            <TrendingVideoCard seed={21} title="London: A Viking Arrival in the Heart of London | 1000-Year Old Design Sails the Thames | WION" />
            <TrendingVideoCard seed={22} title="PM Modi in Japan: Strengthening Partnerships, Meeting Leaders And Much More" />
          </div>
        </div>

        {/* Pagination */}
        <div className="mt-6 flex justify-center gap-2 text-sm">
          <button className="px-3 py-1 border rounded">1</button>
          <button className="px-3 py-1 border rounded">2</button>
          <button className="px-3 py-1 border rounded">›</button>
        </div>
      </div>
    </section>
  )
}

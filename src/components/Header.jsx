import React, { useState, useEffect } from 'react'
import { FiMenu, FiSearch, FiUser, FiX, FiChevronDown } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export default function Header({ openLoginForm }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [entertainmentDropdown, setEntertainmentDropdown] = useState(false)
  const [sportsDropdown, setSportsDropdown] = useState(false)
  const [currentAdIndex, setCurrentAdIndex] = useState(0)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Sample advertisement content
  const advertisements = [
    "Breaking: Latest updates on global markets",
    "Exclusive: Behind the scenes of major political events",
    "Special Report: Technology trends shaping our future",
    "Live Coverage: Sports events around the world"
  ]

  // Auto-scroll advertisements
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => 
        prevIndex === advertisements.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(interval)
  }, [advertisements.length])

  // Close on Escape and lock scroll when menu is open
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  // Hide/Show header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY < 100) {
        // Always show header at top
        setIsHeaderVisible(true)
      } else if (currentScrollY > lastScrollY + 10) {
        // Scrolling DOWN - hide header (with 10px threshold)
        setIsHeaderVisible(false)
      } else if (currentScrollY < lastScrollY - 10) {
        // Scrolling UP - show header (with 10px threshold)
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const toggleEntertainmentDropdown = () => {
    setEntertainmentDropdown(!entertainmentDropdown)
    setSportsDropdown(false) // Close other dropdown
  }

  const toggleSportsDropdown = () => {
    setSportsDropdown(!sportsDropdown)
    setEntertainmentDropdown(false) // Close other dropdown
  }

  const navigationItems = [
    { name: 'Live TV', path: '/' },
    { name: 'Latest', path: '/latest' },
    { name: 'World', path: '/world' },
    { name: 'India', path: '/india' },
    { name: 'Business', path: '/business' },
    { name: 'Entertainment', path: '/entertainment', hasDropdown: true, subItems: ['Hollywood', 'Bollywood'] },
    { name: 'Sports', path: '/sports', hasDropdown: true, subItems: ['Football', 'Cricket'] },
    { name: 'Opinions', path: '/opinions' },
    { name: 'Videos', path: '/videos' },
    { name: 'Photos', path: '/photos' },
    { name: 'Webstory', path: '/' },
    { name: 'TV Show', path: '/tvshows' },
    { name: 'Lifestyle', path: '/lifestyle' },
    { name: 'Science', path: '/science' },
    { name: 'Tech', path: '/tech' }
  ]

  return (
    <header className={`w-full fixed top-0 z-50 transform transition-transform duration-300 ease-in-out ${
      isHeaderVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      {/* Section 1: Scrolling Advertisement Banner */}
      <div className="bg-yellow-500 text-black py-2 overflow-hidden">
        <div className="container-page px-4 md:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
            <div className="flex items-center gap-2">
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">BREAKING</span>
              <div className="overflow-hidden flex-1 sm:flex-none">
                <div 
                  className="whitespace-nowrap transition-transform duration-1000 ease-in-out"
                  style={{ transform: `translateX(-${currentAdIndex * 100}%)` }}
                >
                  {advertisements.map((ad, index) => (
                    <span key={index} className="inline-block w-full text-sm font-medium">
                      {ad}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex gap-1 justify-center sm:justify-end">
              {advertisements.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    index === currentAdIndex ? 'bg-black' : 'bg-black/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 2: Logo and Login Button */}
      <div className="border-b border-neutral-200 bg-white">
        <div className="container-page flex items-center justify-between py-4 px-4 md:px-8">
          <div className="flex items-center gap-3">
            {/* Menu Icon - Commented out since categories list is already displaying in mobile */}
            {/* <button 
              className="md:hidden p-2 rounded-lg border border-neutral-300 text-neutral-700 hover:bg-neutral-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500" 
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-drawer"
              onClick={toggleMenu}
            >
              <FiMenu className="w-5 h-5" />
            </button> */}
            <div className="flex items-center">
              <div className="w-10 h-10 bg-wionYellow rounded-full mr-3 flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-2xl font-bold tracking-wide text-neutral-800">WION</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={openLoginForm}
              className="px-4 py-2 border border-neutral-300 rounded-lg flex items-center gap-2 hover:bg-neutral-50 transition-colors"
            >
              <FiUser className="w-4 h-4" /> 
              <span className="font-medium">Login</span>
            </button>
          </div>
        </div>
      </div>

      {/* Section 3: Categories Navigation */}
      <div className="bg-white border-b border-neutral-200 relative overflow-visible">
        {/* Mobile & Tablet Categories - Horizontal Scroll */}
        <div className="lg:hidden px-4 py-2">
          <nav className="flex items-center gap-4 overflow-x-auto scrollbar-hide whitespace-nowrap text-sm font-medium">
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/">Live TV</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/latest">Latest</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/world">World</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/india">India</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/business">Business</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/entertainment">Entertainment</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/sports">Sports</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/opinions">Opinions</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/videos">Videos</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/photos">Photos</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/tvshows">TV Show</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/lifestyle">Lifestyle</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/science">Science</Link>
            <Link className="hover:text-yellow-600 transition-colors flex-shrink-0" to="/tech">Tech</Link>
          </nav>
        </div>
        
        {/* Desktop Categories */}
        <div className="container-page px-4 md:px-8 relative overflow-visible">
          <nav className="hidden lg:flex items-center justify-center gap-6 py-3 text-sm font-medium overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link className="hover:text-yellow-600 transition-colors" to="/">Live TV</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/latest">Latest</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/world">World</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/india">India</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/business">Business</Link>
            
            {/* Entertainment Dropdown */}
            <div className="relative group">
              <div 
                className="flex items-center gap-1 hover:text-yellow-600 transition-colors cursor-pointer py-3"
              >
                <Link to="/entertainment" className="hover:text-yellow-600 transition-colors">
                  Entertainment
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Entertainment submenu"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleEntertainmentDropdown(); }}
                >
                  <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${entertainmentDropdown ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                </button>
              </div>
              <div className={`absolute top-full left-0 mt-1 bg-white border border-neutral-200 rounded-lg shadow-xl min-w-[140px] transition-all duration-200 z-[9999] ${
                entertainmentDropdown ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              }`}>
                <Link 
                  to="/hollywood" 
                  className="block px-4 py-2 text-sm font-medium hover:text-yellow-600 hover:bg-neutral-50 border-b border-neutral-100"
                >
                  Hollywood
                </Link>
                <Link 
                  to="/bollywood" 
                  className="block px-4 py-2 text-sm font-medium hover:text-yellow-600 hover:bg-neutral-50"
                >
                  Bollywood
                </Link>
              </div>
            </div>

            {/* Sports Dropdown */}
            <div className="relative group">
              <div 
                className="flex items-center gap-1 hover:text-yellow-600 transition-colors cursor-pointer py-3"
              >
                <Link to="/sports" className="hover:text-yellow-600 transition-colors">
                  Sports
                </Link>
                <button
                  type="button"
                  aria-label="Toggle Sports submenu"
                  onClick={(e) => { e.preventDefault(); e.stopPropagation(); toggleSportsDropdown(); }}
                >
                  <FiChevronDown className={`w-3 h-3 transition-transform duration-200 ${sportsDropdown ? 'rotate-180' : 'group-hover:rotate-180'}`} />
                </button>
              </div>
              <div className={`absolute top-full left-0 mt-1 bg-white border border-neutral-200 rounded-lg shadow-xl min-w-[120px] transition-all duration-200 z-[9999] ${
                sportsDropdown ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'
              }`}>
                <Link 
                  to="/football" 
                  className="block px-4 py-2 text-sm font-medium hover:text-yellow-600 hover:bg-neutral-50 border-b border-neutral-100"
                >
                  Football
                </Link>
                <Link 
                  to="/cricket" 
                  className="block px-4 py-2 text-sm font-medium hover:text-yellow-600 hover:bg-neutral-50"
                >
                  Cricket
                </Link>
              </div>
            </div>

            <Link className="hover:text-yellow-600 transition-colors" to="/opinions">Opinions</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/videos">Videos</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/photos">Photos</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/">Webstory</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/tvshows">TV Show</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/lifestyle">Lifestyle</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/science">Science</Link>
            <Link className="hover:text-yellow-600 transition-colors" to="/tech">Tech</Link>
          </nav>
        </div>
      </div>

      {/* Mobile Drawer Menu with Backdrop (mobile only) */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 md:hidden" onClick={closeMenu} />
      )}
      <div 
        id="mobile-drawer"
        className={`fixed top-0 left-0 h-full w-3/4 max-w-xs bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-neutral-200">
            <span className="text-lg font-semibold">Menu</span>
            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="p-2 rounded-lg hover:bg-neutral-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-3">
            {navigationItems.map((item, index) => (
              <div key={index}>
                {item.hasDropdown ? (
                  <div className="space-y-2">
                    <Link
                      to={item.path}
                      className="block px-4 py-3 text-base font-semibold text-neutral-700 hover:text-yellow-600 hover:bg-neutral-50 rounded-lg transition-all duration-300"
                      onClick={closeMenu}
                    >
                      {item.name}
                    </Link>
                    <div className="ml-4 space-y-1">
                      {item.subItems.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`/${subItem.toLowerCase()}`}
                          className="block px-4 py-2 text-sm font-medium text-neutral-600 hover:text-yellow-600 hover:bg-neutral-50 rounded-lg transition-all duration-300"
                          onClick={closeMenu}
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-base font-semibold text-neutral-700 hover:text-yellow-600 hover:bg-neutral-50 rounded-lg transition-all duration-300"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

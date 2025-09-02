import React from 'react'
import { FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black w-full mt-10">
      <div className="container-page px-4 md:px-8 py-6 md:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          
          {/* Left Section: WION Branding and Social Media */}
          <div className="space-y-4 text-center lg:text-left">
            {/* WION Logo */}
            <div className="flex items-center justify-center lg:justify-start gap-2">
              <div className="w-8 h-8 bg-wionYellow rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-white text-xl md:text-2xl font-bold tracking-wide">WION</span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaFacebookF className="text-black text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaTwitter className="text-black text-sm" />
              </a>
              <a href="#" className="w-8 h-8 bg-white rounded flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaYoutube className="text-black text-sm" />
              </a>
            </div>
          </div>

          {/* Middle Section: Our Network Sites */}
          <div className="space-y-4 text-center lg:text-left">
            <h3 className="text-white text-base md:text-lg font-semibold">Our Network Sites</h3>
            <div className="flex items-center justify-center lg:justify-start gap-2 md:gap-3">
              {/* Bollywoodlife.com */}
              <div className="flex items-center flex-shrink-0">
                <div className="h-8 md:h-10 w-20 md:w-28 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs md:text-sm font-bold">Bollywoodlife</span>
                </div>
              </div>
              
              {/* TheHealthSite.com */}
              <div className="flex items-center flex-shrink-0">
                <div className="h-8 md:h-10 w-24 md:w-32 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs md:text-sm font-bold">HealthSite</span>
                </div>
              </div>
              
              {/* CRICKET COUNTRY */}
              <div className="flex items-center flex-shrink-0">
                <div className="h-8 md:h-10 w-20 md:w-28 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs md:text-sm font-bold">CRICKET</span>
                </div>
              </div>
              
              {/* ZNEWS */}
              <div className="flex items-center flex-shrink-0">
                <div className="h-8 md:h-10 w-16 md:w-20 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs md:text-sm font-bold">ZNEWS</span>
                </div>
              </div>
              
              {/* india.com */}
              <div className="flex items-center flex-shrink-0">
                <div className="h-8 md:h-10 w-18 md:w-24 bg-white rounded flex items-center justify-center">
                  <span className="text-black text-xs md:text-sm font-bold">india.com</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Empty for now, can be used for additional content */}
          <div></div>
        </div>

        {/* Bottom Section: Legal Links and Copyright */}
        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-4 md:pt-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-4">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 text-white text-xs md:text-sm">
              <a href="#" className="hover:text-yellow-400 transition-colors">Advertise with us</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">About Us</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Disclaimer</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
            </div>
            
            {/* Copyright Information */}
            <div className="text-white text-xs text-center md:text-right">
              Copyright © 2025. INDIADOTCOM DIGITAL PRIVATE LIMITED. All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

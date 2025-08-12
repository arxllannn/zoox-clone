'use client'

import { useState, useEffect, useRef } from 'react'
import { IoMdClose } from 'react-icons/io'
import { RxHamburgerMenu } from 'react-icons/rx'
import { FiChevronRight} from "react-icons/fi";
import { FaYoutube, FaLinkedin, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import NavbarCollapseIcon from '@/utils/icons';


const sideMenuItems = [
  { name: 'Discover', video: '/videos/video1.mp4' },
  { name: 'Innovation', video: '/videos/video2.mp4' },
  { name: 'Design', video: '/videos/video3.mp4' },
  { name: 'Safety', video: '/videos/video4.mp4' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState(null)
  const [delayedClose, setDelayedClose] = useState(null)
  const menuRef = useRef()
  const videoRef = useRef(null)
  const sourceRef = useRef(null)
  const [isVideoHovered, setIsVideoHovered] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const collapseTimeout = useRef(null)
  const [isFromHover, setIsFromHover] = useState(false)
  const [isNavbarHovered, setIsNavbarHovered] = useState(false)


  const closeMenu = () => {
    setIsOpen(false)
    setHoveredMenu(null)
  }

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        closeMenu()
      }
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [isOpen])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY

      if (scrollY > 80 && !isCollapsed) {
        setIsCollapsed(true)
        collapseTimeout.current = setTimeout(() => {
          setShowIcon(true)
        }, 2000)
      } else if (scrollY <= 10 && isCollapsed) {
        setIsCollapsed(false)
        setShowIcon(false)
        setIsFromHover(false)
        if (collapseTimeout.current) clearTimeout(collapseTimeout.current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isCollapsed])


  const handleMouseEnter = (item) => {
    if (delayedClose) {
      clearTimeout(delayedClose)
      setDelayedClose(null)
    }

    setHoveredMenu(item)

    if (videoRef.current && sourceRef.current) {
      const fullURL = location.origin + item.video
      if (sourceRef.current.src !== fullURL) {
        sourceRef.current.src = item.video
        videoRef.current.load()
      }
    }
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      if (!isVideoHovered) {
        setHoveredMenu(null)
      }
    }, 500)
    setDelayedClose(timeout)
  }


  return (
    <div className='theme-bg'>
      {showIcon && !isNavbarHovered && (
        <div
          onMouseEnter={() => {
            setShowIcon(false)
            setIsCollapsed(false)
            setIsFromHover(true)
          }}
          className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 cursor-pointer transition-opacity duration-1000"
        >
          <div className={`fixed top-0 z-50 transform -translate-x-1/2 transition-all duration-[2000ms] ease-in-out`}>
            <div className="mx-auto flex justify-between items-center text-black transition-all duration-[2000ms] ease-in-out">
              <div className="bg-white p-4 rounded-2xl shadow-md hover:scale-105 transition-transform duration-500">
                <NavbarCollapseIcon className="text-black text-xl" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navbar */}
      <nav onMouseEnter={() => setIsNavbarHovered(true)} onMouseLeave={() => setIsNavbarHovered(false)}
        className={`fixed top-0 z-50 left-1/2 transform mt-5 -translate-x-1/2 transition-all duration-[2000ms] ease-in-out
          ${isCollapsed ? 'w-0 opacity-0 pointer-events-none' : 'w-full opacity-100'}
          ${isFromHover ? 'bg-white shadow-lg mt-3 max-w-[95%] rounded-3xl py-0 px-2' : 'theme-bg backdrop-blur-md px-6'}
        `}
      >

        <div className="mx-auto flex justify-between items-center text-black transition-all duration-[2000ms] ease-in-out">
          <button onClick={() => setIsOpen(true)} className="text-1xl border border-gray-400 p-3 rounded-2xl cursor-pointer">
            <RxHamburgerMenu />
          </button>

          <ul className="flex items-center gap-6 text-sm">
            <li>
              <a href="#about" className="hover:underline uppercase theme-text-color font-semibold">
                How to Ride
              </a>
            </li>
            <li>
              <a href="#tech" className="hover:underline uppercase theme-text-color font-semibold">
                Las Vegas
              </a>
            </li>
            <li className="group cursor-pointer mx-4">
              <div className="text_logo_wrapper">
                <div className="letter z">Z</div>
                <div className="letter o1">o</div>
                <div className="letter o2">o</div>
                <div className="letter x">x</div>
              </div>
            </li>
            <li>
              <a href="#careers" className="hover:underline uppercase theme-text-color font-semibold">
                Know Your Ride
              </a>
            </li>
            <li>
              <a href="#support" className="hover:underline uppercase theme-text-color font-semibold">
                Support
              </a>
            </li>
          </ul>
          <button className="group newsletter-btn relative flex items-center gap-3 border px-6 py-5 rounded-xl overflow-hidden cursor-pointer">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                <FiChevronRight className="text-sm text-white" />
              </div>
            </div>

            <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
              <span className="text-md text-white mr-2">Join The Newsletter</span>
              <div className="relative w-4 h-4 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                  <FiChevronRight className="text-md text-white" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-500" />
      )}

      <div
        ref={menuRef}
        className={`fixed top-0 left-0 z-50 h-full flex transition-transform duration-700 ease-in-out ${isOpen ? 'translate-x-0 m-4' : '-translate-x-full'
          }`}
      >
        {/* Sidebar */}
        <div className={`bg-white w-[350px] h-full shadow-lg p-8 flex flex-col transition-all duration-300 ${hoveredMenu ? 'rounded-l-2xl rounded-r-none' : 'rounded-2xl'}`}  >
          <div className="flex items-center pb-2 flex justify-between">
            <button onClick={closeMenu} className="text-sm p-3 cursor-pointer text-gray-500 border border-gray-200 rounded-2xl  hover:border-black hover:text-black transition-all duration-300 transform hover:scale-90">
              <IoMdClose className="text-xl" />
            </button>

            <h2 className="text-black text-xl">ZOOX</h2>
            <div className='d-none'>Zoon</div>
          </div>
          <ul className="mt-4 space-y-4">
            {sideMenuItems.map((item, idx) => {
              const [isHovered, setIsHovered] = useState(false)

              return (
                <li
                  key={idx}
                  className="cursor-pointer text-black flex justify-between items-center"
                  onMouseEnter={() => {
                    handleMouseEnter(item)
                    setIsHovered(true)
                  }}
                  onMouseLeave={() => {
                    handleMouseLeave()
                    setIsHovered(false)
                  }}
                >
                  <p className="text-2xl">{item.name}</p>
                  <div className="relative w-8 h-8 theme-box-bg border rounded-xl overflow-hidden">
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isHovered ? "translate-x-full opacity-0" : "translate-x-0 opacity-100"
                        }`}
                    >
                      <FiChevronRight className="text-xl text-white" />
                    </div>

                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${isHovered ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
                        }`}
                    >
                      <FiChevronRight className="text-xl text-white" />
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
          <div className="mt-6 border-t border-gray-200 pt-12">
            <div className="grid grid-cols-2 gap-3">
              {[
                'Safety',
                'Careers',
                'About',
                'Contact',
                'Journal',
                'Community',
                'Press Room',
                'First Responders',
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative flex items-center cursor-pointer py-1"
                >
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                      <FiChevronRight className="text-sm text-gray-400" />
                    </div>
                  </div>

                  <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                    <span className="text-sm font-bold text-black font-medium mr-2 transition-all duration-300">
                      {item}
                    </span>
                    <div className="relative w-4 h-4 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                        <FiChevronRight className="text-sm text-gray-500" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="mt-auto pt-6 text-1xl border border-gray-200 p-3 rounded-2xl">
            <div className="border rounded-xl p-2">
              <div className='flex gap-3 items-center justify-between'>
                <p className="uppercase text-xs font-semibold text-gray-500">Socials</p>
                <div className="flex items-center gap-2 social-items-icon">
                  <a href="#" className="group border rounded-md p-1 transition-all border border-gray-200 hover:bg-[#34484a]">
                    <FaYoutube className="w-4 h-4 text-gray-700 group-hover:text-white" />
                  </a>
                  <a href="#" className="group border rounded-md p-1 transition-all border border-gray-200 hover:bg-[#34484a]">
                    <FaLinkedin className="w-4 h-4 text-gray-700 group-hover:text-white" />
                  </a>
                  <a href="#" className="group border rounded-md p-1 transition-all border border-gray-200 hover:bg-[#34484a]">
                    <FaInstagram className="w-4 h-4 text-gray-700 group-hover:text-white" />
                  </a>
                  <a href="#" className="group border rounded-md p-1 transition-all border border-gray-200 hover:bg-[#34484a]">
                    <FaXTwitter className="w-4 h-4 text-gray-700 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          onMouseEnter={() => {
            if (delayedClose) {
              clearTimeout(delayedClose)
              setDelayedClose(null)
            }
            setIsVideoHovered(true)
          }}
          onMouseLeave={() => {
            setIsVideoHovered(false)
            handleMouseLeave()
          }}
          className={`bg-white p-8 h-full overflow-hidden transition-all duration-500 ease-in-out rounded-r-2xl rounded-l-none`}
          style={{
            width: hoveredMenu ? '400px' : '0px',
            opacity: hoveredMenu ? 1 : 0,
          }}
        >
          <div className="h-full w-full">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              className="w-full h-full rounded-2xl object-cover transition-opacity duration-500 ease-in-out"
            >
              <source ref={sourceRef} src={sideMenuItems[0].video} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  )
}

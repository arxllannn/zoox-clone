'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FaPause, FaPlay } from 'react-icons/fa'

export default function Hero() {
  const textRef = useRef(null)
  const videoRef = useRef(null)
  const progressRef = useRef(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: 'power3.out',
      }
    )

    const video = videoRef.current
    const circle = progressRef.current

    const updateProgress = () => {
      if (!video || !progressRef.current) return;
      const progress = video.currentTime / video.duration;
      const rectLength = 52 * 4;
      const offset = rectLength - progress * rectLength;
      gsap.to(progressRef.current, {
        strokeDashoffset: offset,
        duration: 0.2,
        ease: "power1.out",
      });
    }


    video.addEventListener('timeupdate', updateProgress)

    return () => {
      video.removeEventListener('timeupdate', updateProgress)
    }
  }, [])

  const toggleVideo = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPaused(false)
    } else {
      videoRef.current.pause()
      setIsPaused(true)
    }
  }

  return (
    <section className="theme-bg text-black p-8">
      <div ref={textRef} className="text-center py-24 px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl mb-4">It’s not a car.</h1>
        <h1 className="text-5xl md:text-6xl mb-4">
          It’s a robotaxi designed around you.
        </h1>
      </div>

      <div className="relative">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="w-full rounded-4xl h-auto object-cover"
        >
          <source src="/high.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute bottom-6 left-6 z-20">
          <button
            onClick={toggleVideo}
            className="bg-black p-3 rounded-xl relative flex items-center justify-center"
          >
            {isPaused ? <FaPlay className="text-white text-sm" /> : <FaPause className="text-white text-sm" />}

            <svg
              className="absolute top-0 left-0 w-full h-full"
              viewBox="0 0 56 56"
              fill="none"
            >
              <rect
                ref={progressRef}
                x="2"
                y="2"
                width="52"
                height="52"
                rx="12"
                ry="12"
                stroke="#d3e4df"
                strokeWidth="2"
                strokeDasharray="208"
                strokeDashoffset="208"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FaPause, FaPlay } from 'react-icons/fa'
import { FiChevronRight } from "react-icons/fi";

export default function WorkSpace() {
    const videoRef = useRef(null)
    const progressRef = useRef(null)
    const textRefs = useRef([])
    const [isPaused, setIsPaused] = useState(false)

    const phrases = [
        'Workspace',
        'Chill Space',
        'Photo Booth',
        'Date Night',
        'Nightclub',
    ]

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const updateProgress = () => {
            if (!progressRef.current) return
            const progress = video.currentTime / video.duration
            const rectLength = 52 * 4
            const offset = rectLength - progress * rectLength
            gsap.to(progressRef.current, {
                strokeDashoffset: offset,
                duration: 0.2,
                ease: 'power1.out',
            })
        }

        video.addEventListener('timeupdate', updateProgress)
        return () => video.removeEventListener('timeupdate', updateProgress)
    }, [])

    useEffect(() => {
        let index = 0
        const interval = setInterval(() => {
            textRefs.current.forEach((el, i) => {
                if (el) {
                    el.style.color = i === index ? '#444343ff' : '#7a8b8a'
                    el.style.fontWeight = i === index ? '600' : '400'
                }
            })
            index = (index + 1) % textRefs.current.length
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    // Toggle video play/pause
    const toggleVideo = () => {
        const video = videoRef.current
        if (!video) return

        if (video.paused) {
            video.play()
            setIsPaused(false)
        } else {
            video.pause()
            setIsPaused(true)
        }
    }

    return (
        <section className="h-screen bg-white grid grid-cols-1 md:grid-cols-2 overflow-hidden py-3">
            <div className='px-5 py-2 h-full'>
                <div className="relative bg-[#d3e4df] px-10 py-16 h-full  rounded-4xl">
                    <p className="text-sm top-1/2 left-1/2 font-semibold text-[#3d4a4a] w-full text-center uppercase">
                        It’s not a car, it’s a…
                    </p>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-center">
                        {phrases.map((text, i) => (
                            <h2
                                key={i}
                                ref={(el) => (textRefs.current[i] = el)}
                                className="text-4xl md:text-5xl font-normal text-[#7a8b8a] transition-colors duration-300 pt-4"
                            >
                                {text}
                            </h2>
                        ))}
                    </div>

                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
                        <button className="group zoom-experience-btn bg-[#64d5b3] relative flex items-center gap-3 border px-6 py-5 rounded-2xl overflow-hidden cursor-pointer">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                    <FiChevronRight className="text-sm text-black" />
                                </div>
                            </div>

                            <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                                <span className="text-md text-black mr-2 font-bold">THE ZOOX EXPERIENCE</span>
                                <div className="relative w-4 h-4 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                                        <FiChevronRight className="text-md text-black" />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <div className='px-5 py-2 h-full'>
                <div className="relative flex items-center justify-center rounded-4xl h-full bg-black overflow-hidden">
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="/home1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>

                    <div className="absolute bottom-6 right-6 z-20">
                        <button
                            onClick={toggleVideo}
                            className="bg-black w-10 h-10 rounded-xl relative flex items-center justify-center"
                        >
                            {isPaused ? (
                                <FaPlay className="text-white text-sm" />
                            ) : (
                                <FaPause className="text-white text-sm" />
                            )}

                            <svg
                                className="absolute top-0 left-0 w-full h-full pointer-events-none"
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
            </div>
        </section>
    )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { FaPause, FaPlay } from 'react-icons/fa'
import { FiChevronRight } from 'react-icons/fi'

export default function ComingSoon() {
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
        <section className="text-white bg-black">
            <div className='w-[75%] mx-auto'>
                <div className="flex flex-col items-center p-40">
                    <div className="text-center pb-4">
                        <h1 className="text-sm font-bold text-gray-300">Zoox in Las Vegas</h1>
                    </div>
                    <h2 className="text-8xl md:text-7xl font-semibold leading-tight">
                        Coming soon: <span className="text-[#64d5b3]">our</span>
                    </h2>
                    <h2 className="text-8xl md:text-7xl font-bold my-4 text-[#64d5b3]">Vegas Debut</h2>
                    <button className="group zoom-experience-btn bg-[#64d5b3] relative flex mt-4 items-center gap-3 border px-6 py-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                <FiChevronRight className="text-sm text-black" />
                            </div>
                        </div>
                        <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                            <span className="text-md text-black mr-2 font-bold">See what we’ve been up to</span>
                            <div className="relative w-4 h-4 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                                    <FiChevronRight className="text-md text-black" />
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

                <div className="px-0 pt-0 pb-16">
                    <div className="relative rounded-4xl overflow-hidden">
                        <video
                            ref={videoRef}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto object-cover rounded-4xl"
                        >
                            <source src="/high.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>

                        <div className="absolute bottom-6 left-6 z-20">
                            <button
                                onClick={toggleVideo}
                                className="bg-black p-3 rounded-xl relative flex items-center justify-center"
                            >
                                {isPaused ? (
                                    <FaPlay className="text-white text-sm" />
                                ) : (
                                    <FaPause className="text-white text-sm" />
                                )}

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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-4 pb-16">
                    <div className="md:col-span-2 rounded-2xl opacity-75 text-white text-sm uppercase">Ride with Us</div>
                    <div className="md:col-span-5 text-2xl rounded-2xl text-white py-4 px-14">
                        Be one of the first to experience the future of mobility
                    </div>
                    <div className="md:col-span-5 rounded-2xl opacity-75 text-white  py-4 px-14">
                        We can’t wait to welcome you aboard the robotaxi for your first Zoox ride. Learn more about our progress — and big plans.
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mt-24 px-4 pb-24 bg-black text-white">
                    {/* Left Column */}
                    <div className="md:col-span-5 flex flex-col items-center text-center">
                        <img
                            src="/images/comingsoon1.webp"
                            alt="People inside Zoox"
                            className="rounded-2xl mb-6"
                        />
                        <div className="text-xs uppercase text-gray-400 font-semibold tracking-wider">
                            Now Arriving
                        </div>
                        <p className="mt-3 text-lg max-w-md">
                            After extensive testing in cities around the country, we’re getting ready
                            for riders to experience the robotaxi in Las Vegas.
                        </p>
                    </div>

                    <div className='md:col-span-3'>

                    </div>
                    {/* Right Column */}
                    <div className="md:col-span-4 items-center text-center">
                        <img
                            src="/images/comingsoon2.webp"
                            alt="Zoox driving"
                            className="rounded-2xl mb-6"
                        />
                        <div className="text-xs uppercase text-gray-400 font-semibold tracking-wider">
                            Ride a World First, First
                        </div>
                        <p className="mt-3 text-lg font-semibold max-w-md">
                            It’s a big day for a Zoox — and for riders.
                        </p>
                        <div className='flex justify-center'>
                            <button className="group zoom-experience-btn relative flex mt-4 items-center gap-3 border px-6 py-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                        <FiChevronRight className="text-sm text-white" />
                                    </div>
                                </div>
                                <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                                    <span className="text-md text-white mr-2 font-bold uppercase">Sign up to be one of the first.</span>
                                    <div className="relative w-4 h-4 overflow-hidden">
                                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                                            <FiChevronRight className="text-md text-white" />
                                        </div>
                                    </div>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

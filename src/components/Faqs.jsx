'use client'

import { useState } from 'react'
import Image from 'next/image'
import classNames from 'classnames'
import { FiChevronRight } from "react-icons/fi";

export default function Faqs() {
    const items = [
        {
            title: 'Zoox is the official autonomous ride–hail partner of AREA15 in Las Vegas',
            category: 'News',
            image: '/images/zoox1.webp',
        },
        {
            title: 'Inside the Zoox robotaxi serial production facility',
            category: 'News',
            image: '/images/zoox2.webp',
        },
        {
            title: 'Want to go to Stern Grove? Zoox is your ticket in.',
            category: 'Community',
            image: '/images/zoox3.webp',
        },
        {
            title: 'Zoox becomes official robotaxi partner of Resorts World Las Vegas',
            category: 'News',
            image: '/images/zoox4.webp',
        },
        {
            title: 'Zoox is arriving in Atlanta',
            category: 'News',
            image: '/images/zoox5.webp',
        },
    ]

    const [activeImage, setActiveImage] = useState(items[0].image)

    return (
        <section className="py-20 px-4 md:px-16 bg-white">
            <div className="max-w-8xl mx-auto px-12">
                {/* Heading */}
                <div className="text-center mb-10">
                    <p className="text-xs font-medium opacity-80 text-black uppercase">Get up to speed</p>
                    <h2 className="text-3xl md:text-4xl py-1 mt-2">
                        <span className="text-black">Learn more about Zoox</span>{' '}
                        <span className="text-[#5b8279]">and where we’re going next</span>
                    </h2>
                    <div className="mt-6 flex justify-center">
                        <button className="group zoom-experience-btn bg-[#5fddc7] relative flex mt-4 items-center gap-3 border px-6 py-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                                    <FiChevronRight className="text-sm text-black" />
                                </div>
                            </div>
                            <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                                <span className="text-md text-black mr-2 font-bold uppercase">JOURNAL</span>
                                <div className="relative w-4 h-4 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                                        <FiChevronRight className="text-md text-black" />
                                    </div>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-start gap-10 mt-10">
                    <div className="w-full md:w-1/2 relative h-[400px] rounded-xl overflow-hidden">
                        {items.map((item, idx) => (
                            <Image
                                key={idx}
                                src={item.image}
                                alt="Zoox"
                                width={800}
                                height={600}
                                className={classNames(
                                    'absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out',
                                    item.image === activeImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                                )}
                                priority={item.image === activeImage}
                            />
                        ))}
                    </div>

                    <div className="w-full md:w-1/2 space-y-6">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                onMouseEnter={() => setActiveImage(item.image)}
                                className="flex justify-between items-center border-b pb-4 cursor-pointer group"
                            >
                                <div className="max-w-[85%] flex items-center">
                                    <p className="text-md font-medium text-black group-hover:text-[#5f9e91] transition">
                                        {item.title}
                                    </p>
                                    <span className="inline-block mt-2 text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                </div>
                                <button className="w-8 h-8 bg-[#5fddc7] rounded-full flex items-center justify-center">
                                    <span className="text-black text-sm">›</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

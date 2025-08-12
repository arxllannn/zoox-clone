'use client'
import { FiChevronRight } from 'react-icons/fi'

export default function Transportation() {
  return (
    <section className="bg-[#d9ebe7] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center pt-24">
        <p className="text-xs tracking-wide uppercase font-semibold text-gray-800 mb-5 opacity-80">
          Moving mobility forward
        </p>
        <p className="text-2xl md:text-4xl text-gray-900 mb-6">
          Zoox is the future of transportation:{' '}
          <span className="text-[#5b8279]">safer, cleaner, more efficient</span> — and a lot more fun.
        </p>
      </div>

      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 px-48 py-24">
        {/* Left Block (4 columns) */}
        <div className="text-center md:col-span-5 flex flex-col items-center">
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img src="/images/home1.webp" alt="Zoox vehicle" className="w-full h-auto" />
          </div>
          <p className="text-xs uppercase mt-6 text-gray-600 font-semibold">
            A Revolution From the Ground Up
          </p>
          <p className="text-xl mt-2 font-medium text-gray-800 px-8">
            Zoox is a new form of transportation that will make our streets safer and less congested.
          </p>
          <div className='flex justify-center'>
            <button className="group zoom-experience-btn theme-box-bg  relative flex mt-4 items-center gap-3 border px-6 py-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  <FiChevronRight className="text-sm text-white" />
                </div>
              </div>
              <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                <span className="text-md text-white mr-2 font-bold uppercase">Our Vision</span>
                <div className="relative w-4 h-4 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full group-hover:opacity-0">
                    <FiChevronRight className="text-md text-white" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        <div className="md:col-span-2 flex items-center justify-center">
        </div>

        <div className="text-center md:col-span-5 flex flex-col items-center">
          <div className="rounded-3xl overflow-hidden shadow-md">
            <img src="/images/home2.webp" alt="Zoox team" className="w-full h-auto" />
          </div>
          <p className="text-xs uppercase mt-6 text-gray-600 font-semibold">
            Meet the Team
          </p>
          <p className="text-xl mt-2 font-medium text-gray-800 px-8">
            Zoox is built by some of the brightest minds in AI, engineering, computer vision, and more.
          </p>
          <div className='flex justify-center'>
            <button className="group zoom-experience-btn theme-box-bg  relative flex mt-4 items-center gap-3 border px-6 py-5 rounded-2xl overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 z-0 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
                  <FiChevronRight className="text-sm text-white" />
                </div>
              </div>
              <div className="flex items-center relative z-10 transition-all duration-300 group-hover:translate-x-4">
                <span className="text-md text-white mr-2 font-bold uppercase">Careers</span>
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
    </section>
  )
}

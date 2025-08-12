'use client'
import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Section({ title, text, bg = 'bg-gray-900' }) {
  const sectionRef = useRef()

  useEffect(() => {
    gsap.fromTo(sectionRef.current, {
      opacity: 0,
      y: 100
    }, {
      opacity: 1,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      }
    })
  }, [])

  return (
    <section ref={sectionRef} className={`min-h-screen ${bg} text-white p-10`}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">{title}</h2>
        <p className="text-lg text-gray-300">{text}</p>
      </div>
    </section>
  )
}

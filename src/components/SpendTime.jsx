'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function SpendTime() {
    const sectionRef = useRef(null)
    const modelRef = useRef(null)
    const rightRef = useRef(null)
    const newLeftRef = useRef(null)
    const ballRef = useRef(null)

    useEffect(() => {
        const section = sectionRef.current
        const model = modelRef.current
        const right = rightRef.current
        const newLeft = newLeftRef.current
        const ball = ballRef.current

        if (!section || !model || !right || !newLeft || !ball) return

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top top',
                end: '+=20000',
                scrub: true,
                pin: true,
            }
        })

        // Ball rotations only
        tl.to(ball, {
            rotateY: 350,
            ease: 'none',
            duration: 1,
        })

        tl.to(ball, {
            rotate: 1440,
            ease: 'none',
            duration: 1,
        })

        // ✅ Slide full left column, not the ball
        tl.to(model, { xPercent: 100, ease: 'none', duration: 1 }, "<")
        tl.to(right, { xPercent: 100, ease: 'none', duration: 1 }, "<")

        tl.fromTo(newLeft,
            { xPercent: -100 },
            { xPercent: 0, ease: 'none', duration: 1 },
            "<"
        )

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill())
            tl.kill()
        }
    }, [])

    return (
        <section
            ref={sectionRef}
            className="h-screen w-full text-white overflow-hidden flex items-center justify-center"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <div
                    ref={modelRef}
                    className="absolute left-0 top-0 w-1/2 h-full bg-white text-black flex items-center justify-center text-2xl z-10"
                    style={{ perspective: '1000px' }}
                >
                    <div className="relative w-full h-full flex items-center justify-center">
                        <div
                            ref={ballRef}
                            className="w-80 h-80 bg-black rounded-full"
                        ></div>
                    </div>
                </div>

                <div
                    ref={rightRef}
                    className="absolute right-0 top-0 w-1/2 h-full bg-white text-black flex items-center justify-center text-2xl z-10"
                >
                    <div className="flex flex-col gap-4 p-5 max-w-md">
                        <p className="text-[16px] text-center text-gray-600">
                            A better way to hail a ride
                        </p>
                        <p className="text-2xl font-bold leading-relaxed text-center font-medium">
                            Spend your time on what you care about and let Zoox handle the traffic as you enjoy a smooth ride in a spacious cabin.
                        </p>
                    </div>
                </div>
                <div
                    ref={newLeftRef}
                    className="absolute left-0 top-0 w-1/2 h-full bg-white text-black flex items-center justify-center text-2xl z-0"
                >
                    <div className="flex flex-col gap-4 p-5 max-w-md">
                        <p className="text-[16px] text-center text-gray-600">
                            The robotaxi designed around you
                        </p>
                        <p className="text-2xl font-bold leading-relaxed text-center font-medium">
                            Comfortable. Spacious. All yours.
                            Zoox is designed around the rider,
                            not a steering wheel. And that
                            changes everything.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

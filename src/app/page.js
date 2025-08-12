import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Footer from '@/components/Footer'
import SpendTime from '@/components/SpendTime'
import WorkSpace from '@/components/WorkSpace'
import Innovation from '@/components/Innovation'
import ComingSoon from '@/components/ComingSoon'
import Transportation from '@/components/Transportation'
import Faqs from '@/components/Faqs'

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="pt-16 theme-bg">
        <Hero />
        <SpendTime />
        <WorkSpace />
        <Innovation />
        <ComingSoon />
        <Transportation />
        <Faqs />
      </main>
      <Footer />
    </div>
  )
}

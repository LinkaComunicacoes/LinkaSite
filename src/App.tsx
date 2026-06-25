import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/components/sections/Hero'
import { SocialGrid } from '@/components/sections/SocialGrid'
import { Videos } from '@/components/sections/Videos'
import { Portfolio } from '@/components/sections/Portfolio'
import { Testimonials } from '@/components/sections/Testimonials'
import { CallToAction } from '@/components/sections/CallToAction'

export function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="h-px bg-border" />
        <SocialGrid />
        <div className="h-px bg-border" />
        <Videos />
        <div className="h-px bg-border" />
        <Portfolio />
        <div className="h-px bg-border" />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}

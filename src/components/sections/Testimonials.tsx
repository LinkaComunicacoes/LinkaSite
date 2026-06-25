import { motion } from 'framer-motion'
import { testimonials } from '@/data/testimonials'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import { fadeUp, staggerContainer, cardReveal, viewportOnce } from '@/lib/animations'

export function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="text-xs font-bold tracking-widest uppercase text-[#EC4899] mb-3">Depoimentos</div>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mb-4">
            O que meus clientes estão dizendo
          </h2>
          <p className="text-[#888] text-base leading-relaxed max-w-lg">Resultados reais de quem confiou na estratégia.</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {testimonials.map((t) => (
            <motion.div key={t.id} variants={cardReveal}>
              <TestimonialCard testimonial={t} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

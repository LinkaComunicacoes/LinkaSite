import { motion } from 'framer-motion'
import { socialProfiles } from '@/data/social'
import { SocialCard } from '@/components/ui/SocialCard'
import { fadeUp, staggerContainer, cardReveal, viewportOnce } from '@/lib/animations'

export function SocialGrid() {
  return (
    <section id="redes" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="text-xs font-bold tracking-widest uppercase text-[#EC4899] mb-3">Redes sociais</div>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mb-4">Me encontre por aí</h2>
          <p className="text-[#888] text-base leading-relaxed max-w-lg">Conteúdo diário sobre marketing, estratégia e bastidores. Vem junto!</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {socialProfiles.map((profile) => (
            <motion.div key={profile.id} variants={cardReveal}>
              <SocialCard profile={profile} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

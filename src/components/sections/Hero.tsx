import { motion } from 'framer-motion'
import { siteConfig } from '@/data/config'
import { Button } from '@/components/ui/Button'
import { fadeUp, fadeIn, staggerContainer, viewportOnce } from '@/lib/animations'

export function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center text-center px-8 py-16 relative overflow-hidden">
      {/* Glows */}
      <motion.div
        className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7C3AED33 0%, transparent 70%)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, #EC489933 0%, transparent 70%)' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut', delay: 0.2 }}
      />

      {/* Símbolo LINKA decorativo */}
      <motion.img
        src="/conteudos/logos/simbolo-sem-fundo.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-8 right-8 w-24 opacity-[0.18] pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 2, delay: 0.5 }}
      />
      <motion.img
        src="/conteudos/logos/simbolo-sem-fundo.png"
        alt=""
        aria-hidden="true"
        className="absolute top-12 left-8 w-16 opacity-[0.12] pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.12 }}
        transition={{ duration: 2, delay: 0.8 }}
      />

      <motion.div
        className="relative"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-1.5 gradient-soft border border-[#7C3AED55] text-[#A855F7] text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider"
        >
          <i className="ti ti-sparkles" aria-hidden="true" />
          Marketing &amp; Social Media
        </motion.div>

        <motion.h1
          variants={fadeUp}
          className="text-[clamp(2.5rem,6vw,5rem)] font-extrabold leading-tight mb-5"
        >
          Sua marca merece<br />
          estar no <span className="gradient-text">próximo nível</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg text-[#aaa] max-w-xl mx-auto leading-relaxed mb-10"
        >
          Estratégia, conteúdo e gestão de redes sociais para marcas que querem crescer de verdade — com método, dados e criatividade.
        </motion.p>

        <motion.div variants={fadeUp} className="flex gap-4 flex-wrap justify-center">
          <Button variant="primary" href="#agendar" className="text-base font-bold">
            <i className="ti ti-calendar" aria-hidden="true" />
            Agendar reunião gratuita
          </Button>
          <Button variant="ghost" href="#videos" className="text-base">
            <i className="ti ti-player-play" aria-hidden="true" />
            Ver vídeos
          </Button>
        </motion.div>

        <motion.div
          variants={fadeIn}
          className="flex gap-12 mt-16 justify-center flex-wrap"
          viewport={viewportOnce}
        >
          {siteConfig.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-4xl font-extrabold gradient-text">{stat.value}</div>
              <div className="text-xs text-[#666] mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

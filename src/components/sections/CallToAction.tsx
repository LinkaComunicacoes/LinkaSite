import { motion } from 'framer-motion'
import { siteConfig } from '@/data/config'
import { Button } from '@/components/ui/Button'
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations'

export function CallToAction() {
  return (
    <section id="agendar" className="py-20 px-8 bg-card border-y border-border">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="gradient-bg rounded-3xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Símbolo grande e visível ao fundo */}
          <img
            src="/conteudos/logos/simbolo-sem-fundo.png"
            alt=""
            aria-hidden="true"
            className="absolute -right-10 -bottom-10 w-72 opacity-[0.30] pointer-events-none select-none"
          />
          <img
            src="/conteudos/logos/simbolo-sem-fundo.png"
            alt=""
            aria-hidden="true"
            className="absolute -left-8 -top-8 w-48 opacity-[0.20] pointer-events-none select-none"
          />

          {/* Conteúdo */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              {/* Badge */}
              <motion.div variants={fadeUp}
                className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                <i className="ti ti-calendar-check" aria-hidden="true" />
                Sessão gratuita de 30 min
              </motion.div>

              <motion.h2
                variants={fadeUp}
                className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-white leading-tight mb-5"
              >
                Pronto para crescer<br />de verdade?
              </motion.h2>

              <motion.p variants={fadeUp} className="text-white/75 text-lg max-w-lg mx-auto mb-3 leading-relaxed">
                Reserve agora sua sessão estratégica gratuita.
              </motion.p>
              <motion.p variants={fadeUp} className="text-white/50 text-sm mb-10">
                Sem enrolação — só estratégia, diagnóstico e plano de ação.
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <Button
                  variant="white"
                  href={siteConfig.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-extrabold"
                >
                  <i className="ti ti-calendar-event" aria-hidden="true" />
                  Agendar minha sessão gratuita
                </Button>
                <a
                  href="https://www.instagram.com/linka_comunicacoes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
                >
                  <i className="ti ti-brand-instagram" aria-hidden="true" />
                  Ver nosso Instagram
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

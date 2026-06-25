import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioItems, PortfolioItem } from '@/data/portfolio'
import { fadeUp, viewportOnce } from '@/lib/animations'

const VISIBLE = 3
const CARD_WIDTH = 280
const GAP = 20

// ─── Lightbox ────────────────────────────────────────────────────────────────

function Lightbox({ item, onClose }: { item: PortfolioItem; onClose: () => void }) {
  const [current, setCurrent] = useState(0)
  const isCarousel = item.type === 'carousel'

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + item.images.length) % item.images.length),
    [item.images.length],
  )
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % item.images.length),
    [item.images.length],
  )

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

      <motion.div
        className="relative z-10 w-full max-w-3xl flex flex-col"
        style={{ maxHeight: '90vh' }}
        initial={{ scale: 0.93, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Área da imagem */}
        <div className="relative rounded-2xl overflow-hidden bg-[#111] flex items-center justify-center" style={{ minHeight: 320 }}>
          <AnimatePresence mode="wait">
            <motion.img
              key={current}
              src={item.images[current].src}
              alt={item.images[current].alt}
              className="w-full object-contain"
              style={{ maxHeight: '72vh' }}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              draggable={false}
            />
          </AnimatePresence>

          {/* Setas */}
          {isCarousel && (
            <>
              <button onClick={prev}
                className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 flex items-center justify-center text-white transition-colors z-10"
                aria-label="Anterior">
                <i className="ti ti-chevron-left text-lg" />
              </button>
              <button onClick={next}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 flex items-center justify-center text-white transition-colors z-10"
                aria-label="Próxima">
                <i className="ti ti-chevron-right text-lg" />
              </button>
            </>
          )}

          {/* Fechar */}
          <button onClick={onClose}
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 hover:bg-black/90 border border-white/15 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Fechar">
            <i className="ti ti-x" />
          </button>
        </div>

        {/* Footer do lightbox */}
        <div className="mt-3 flex items-center justify-between px-1">
          <div>
            <span className="inline-block gradient-soft border border-[#7C3AED44] text-[#A855F7] text-[0.7rem] font-semibold px-2 py-0.5 rounded-full mr-2 uppercase tracking-wide">{item.tag}</span>
            <span className="text-sm text-[#ccc] font-medium">{item.title}</span>
          </div>
          {isCarousel && (
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                {item.images.map((_, i) => (
                  <button key={i} onClick={() => setCurrent(i)}
                    className={`h-1.5 rounded-full transition-all duration-200 ${i === current ? 'w-5 bg-[#A855F7]' : 'w-1.5 bg-white/20'}`}
                    aria-label={`Imagem ${i + 1}`} />
                ))}
              </div>
              <span className="text-xs text-[#555]">{current + 1}/{item.images.length}</span>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─── Card ────────────────────────────────────────────────────────────────────

function PortfolioCard({ item, onClick, active }: { item: PortfolioItem; onClick: () => void; active: boolean }) {
  return (
    <motion.button
      onClick={onClick}
      className="flex flex-col flex-shrink-0 bg-card border border-border rounded-2xl overflow-hidden text-left focus:outline-none"
      style={{ width: CARD_WIDTH, height: 340 }}
      whileHover={active ? { y: -4, borderColor: '#A855F7' } : {}}
      transition={{ duration: 0.2 }}
    >
      <div
        className="h-44 w-full flex-shrink-0 relative overflow-hidden"
        style={{ background: item.thumbGradient ?? '#1a1a1a' }}
      >
        {item.thumbSrc && (
          <img
            src={item.thumbSrc}
            alt={item.title}
            className="w-full h-full object-cover"
          />
        )}
        {active && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-200">
            <div className="bg-white/90 rounded-full px-4 py-2 flex items-center gap-2 text-[#7C3AED] text-sm font-semibold">
              <i className={`ti ${item.type === 'carousel' ? 'ti-layout-grid' : 'ti-zoom-in'}`} />
              {item.type === 'carousel' ? `${item.images.length} imagens` : 'Ver imagem'}
            </div>
          </div>
        )}
        {item.type === 'carousel' && (
          <div className="absolute top-3 right-3 bg-black/60 border border-white/10 rounded-full px-2 py-0.5 text-white text-[0.65rem] font-semibold flex items-center gap-1">
            <i className="ti ti-layout-grid text-xs" />
            {item.images.length}
          </div>
        )}
      </div>
      <div className="flex flex-col flex-1 p-4 px-5 overflow-hidden">
        <span className="inline-block gradient-soft border border-[#7C3AED44] text-[#A855F7] text-[0.7rem] font-semibold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide flex-shrink-0">{item.tag}</span>
        <div className="text-[0.95rem] font-semibold text-[#f0f0f0] leading-snug mb-1 line-clamp-2">{item.title}</div>
        <div className="text-[0.75rem] text-[#555] mt-auto">{item.client}</div>
      </div>
    </motion.button>
  )
}

// ─── Nav Button ──────────────────────────────────────────────────────────────

function NavButton({
  onClick,
  disabled,
  direction,
  ...props
}: {
  onClick: () => void
  disabled: boolean
  direction: 'left' | 'right'
  'aria-label': string
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      aria-label={props['aria-label']}
      className="relative flex items-center justify-center rounded-full cursor-pointer disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED]"
      style={{
        width: 48,
        height: 48,
        background: disabled
          ? '#1a1a1a'
          : 'linear-gradient(135deg, #7C3AED, #EC4899)',
        border: disabled ? '1px solid #333' : '1px solid transparent',
        boxShadow: disabled ? 'none' : '0 0 18px #7C3AED55',
      }}
      whileHover={!disabled ? { scale: 1.1, boxShadow: '0 0 28px #7C3AED88' } : {}}
      whileTap={!disabled ? { scale: 0.93 } : {}}
      transition={{ duration: 0.18 }}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
        style={{ color: disabled ? '#444' : '#fff' }}
      >
        {direction === 'left' ? (
          <path d="M11 14L6 9L11 4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        ) : (
          <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        )}
      </svg>
    </motion.button>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Portfolio() {
  const [start, setStart] = useState(0)
  const [selected, setSelected] = useState<PortfolioItem | null>(null)

  const maxStart = portfolioItems.length - VISIBLE
  const canPrev = start > 0
  const canNext = start < maxStart

  const trackOffset = -(start * (CARD_WIDTH + GAP))

  return (
    <section id="portfolio" className="py-20">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-8">
        <motion.div className="mb-10" variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewportOnce}>
          <div className="text-xs font-bold tracking-widest uppercase text-[#EC4899] mb-3">Portfólio</div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mb-2">
                Trabalhos que falam por si
              </h2>
              <p className="text-[#888] text-base leading-relaxed max-w-lg">
                Clique em qualquer bloco para ver as imagens do projeto.
              </p>
            </div>

            {/* Botões de navegação */}
            <div className="flex gap-3 flex-shrink-0">
              <NavButton
                onClick={() => setStart((s) => Math.max(0, s - 1))}
                disabled={!canPrev}
                direction="left"
                aria-label="Portfólio anterior"
              />
              <NavButton
                onClick={() => setStart((s) => Math.min(maxStart, s + 1))}
                disabled={!canNext}
                direction="right"
                aria-label="Próximo portfólio"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider */}
      <div className="relative max-w-5xl mx-auto">
        {/* Viewport com overflow oculto */}
        <div
          className="overflow-hidden"
          style={{ padding: `0 calc((100% - ${VISIBLE * CARD_WIDTH + (VISIBLE - 1) * GAP}px) / 2)` }}
        >
          <motion.div
            className="flex"
            style={{ gap: GAP }}
            animate={{ x: trackOffset }}
            transition={{ type: 'tween', duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {portfolioItems.map((item, i) => {
              const isActive = i >= start && i < start + VISIBLE
              return (
                <motion.div
                  key={item.id}
                  animate={{
                    opacity: isActive ? 1 : 0.35,
                    filter: isActive ? 'blur(0px)' : 'blur(3px)',
                    scale: isActive ? 1 : 0.96,
                  }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  style={{ flexShrink: 0 }}
                >
                  <PortfolioCard
                    item={item}
                    active={isActive}
                    onClick={() => isActive && setSelected(item)}
                  />
                </motion.div>
              )
            })}
          </motion.div>
        </div>

        {/* Fades laterais */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-20 bg-gradient-to-r from-bg to-transparent" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-20 bg-gradient-to-l from-bg to-transparent" />
      </div>

      {/* Dots de progresso */}
      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: maxStart + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setStart(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === start ? 'w-6 gradient-bg' : 'w-1.5 bg-[#2a2a2a]'}`}
            aria-label={`Página ${i + 1}`}
          />
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && <Lightbox item={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}

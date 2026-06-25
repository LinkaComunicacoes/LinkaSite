import { motion } from 'framer-motion'
import { Testimonial } from '@/data/testimonials'

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <motion.div
      className="flex flex-col h-[340px] bg-card border border-border rounded-2xl p-6"
      whileHover={{ borderColor: '#EC489966' }}
      transition={{ duration: 0.2 }}
    >
      <div className="text-[#F59E0B] text-sm mb-3 tracking-widest flex-shrink-0">★★★★★</div>

      {/* Texto ocupa espaço disponível, com scroll se transbordar */}
      <div className="flex-1 overflow-y-auto pr-1 mb-5" style={{ scrollbarWidth: 'none' }}>
        <p className="text-sm text-[#bbb] leading-relaxed italic">"{testimonial.text}"</p>
      </div>

      {/* Autor sempre no fundo */}
      <div className="flex items-center gap-2.5 flex-shrink-0">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm text-white flex-shrink-0"
          style={{ background: testimonial.avatarGradient }}
        >
          {testimonial.authorInitials}
        </div>
        <div>
          <div className="text-sm font-bold text-[#f0f0f0]">{testimonial.authorName}</div>
          <div className="text-xs text-[#666]">{testimonial.authorRole}</div>
        </div>
      </div>
    </motion.div>
  )
}

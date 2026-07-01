import { motion } from 'framer-motion'
import { videos } from '@/data/videos'
import { VideoCard } from '@/components/ui/VideoCard'
import { fadeUp, staggerContainer, cardReveal, viewportOnce } from '@/lib/animations'

export function Videos() {
  return (
    <section id="videos" className="py-20 px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          <div className="text-xs font-bold tracking-widest uppercase text-[#EC4899] mb-3">Conteúdo em vídeo</div>
          <h2 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold mb-4">
            Exemplos de histórias sendo contadas
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {videos.map((video) => (
            <motion.div key={video.id} variants={cardReveal}>
              <VideoCard video={video} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

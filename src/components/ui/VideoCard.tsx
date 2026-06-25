import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Video } from '@/data/videos'

// Captura o primeiro frame do vídeo como imagem
function useVideoThumbnail(src: string) {
  const [thumb, setThumb] = useState<string | null>(null)

  useEffect(() => {
    const video = document.createElement('video')
    const canvas = document.createElement('canvas')
    video.src = src
    video.crossOrigin = 'anonymous'
    video.preload = 'metadata'
    video.muted = true

    const onSeeked = () => {
      canvas.width = video.videoWidth
      canvas.height = video.videoHeight
      canvas.getContext('2d')?.drawImage(video, 0, 0)
      setThumb(canvas.toDataURL('image/jpeg', 0.85))
    }

    video.addEventListener('loadedmetadata', () => { video.currentTime = 0.5 })
    video.addEventListener('seeked', onSeeked, { once: true })

    return () => { video.src = '' }
  }, [src])

  return thumb
}

function VideoLightbox({ video, onClose }: { video: Video; onClose: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)

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
        className="relative z-10 w-full max-w-4xl"
        initial={{ scale: 0.93, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 20 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <video
          ref={videoRef}
          src={video.src}
          controls
          autoPlay
          playsInline
          className="w-full rounded-2xl shadow-2xl"
          style={{ maxHeight: '80vh', background: '#000' }}
        />
        <button
          onClick={onClose}
          className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 flex items-center justify-center text-white transition-colors"
          aria-label="Fechar"
        >
          <i className="ti ti-x" />
        </button>
      </motion.div>
    </motion.div>
  )
}

export function VideoCard({ video }: { video: Video }) {
  const [open, setOpen] = useState(false)
  const thumb = useVideoThumbnail(video.src)

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        className="flex flex-col w-full h-[340px] bg-card border border-border rounded-2xl overflow-hidden text-left group focus:outline-none"
        whileHover={{ y: -4, borderColor: '#EC4899' }}
        transition={{ duration: 0.2 }}
      >
        {/* Thumb */}
        <div
          className="h-44 w-full flex-shrink-0 relative overflow-hidden"
          style={{ background: video.thumbGradient }}
        >
          {thumb && (
            <img
              src={thumb}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <motion.div
              className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center text-[#7C3AED] text-xl shadow-lg"
              whileHover={{ scale: 1.12 }}
              transition={{ duration: 0.18 }}
            >
              <i className="ti ti-player-play-filled" aria-hidden="true" />
            </motion.div>
          </div>
        </div>

        {/* Info */}
        <div className="flex flex-col flex-1 p-4 px-5 overflow-hidden">
          <span className="inline-block gradient-soft border border-[#7C3AED44] text-[#A855F7] text-[0.7rem] font-semibold px-2 py-0.5 rounded-full mb-2 uppercase tracking-wide flex-shrink-0">
            {video.tag}
          </span>
          <div className="text-[0.95rem] font-semibold text-[#f0f0f0] leading-snug line-clamp-2">
            {video.title}
          </div>
        </div>
      </motion.button>

      <AnimatePresence>
        {open && <VideoLightbox video={video} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  )
}

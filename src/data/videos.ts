export interface Video {
  id: string
  title: string
  tag: string
  src: string
  thumbGradient: string
}

export const videos: Video[] = [
  {
    id: 'v1',
    title: 'Conteúdo LINKA — Vídeo 1',
    tag: 'Estratégia',
    src: '/conteudos/videos/video-1.mp4',
    thumbGradient: 'linear-gradient(135deg, #7C3AED, #EC4899)',
  },
  {
    id: 'v2',
    title: 'Conteúdo LINKA — Vídeo 2',
    tag: 'Conteúdo',
    src: '/conteudos/videos/video-2.mp4',
    thumbGradient: 'linear-gradient(135deg, #EC4899, #F97316)',
  },
  {
    id: 'v3',
    title: 'Conteúdo LINKA — Vídeo 3',
    tag: 'Social Media',
    src: '/conteudos/videos/video-3.mp4',
    thumbGradient: 'linear-gradient(135deg, #A855F7, #06B6D4)',
  },
]

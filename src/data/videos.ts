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
    title: 'Lançamento Imobiliário',
    tag: 'Imobiliária',
    src: 'https://linkacomunicacoes.com/wp-content/uploads/2026/06/Video-1.mp4',
    thumbGradient: 'linear-gradient(135deg, #7C3AED, #EC4899)',
  },
  {
    id: 'v2',
    title: 'Antes e Depois - Cabelo Feminino',
    tag: 'Salão de Beleza',
    src: 'https://linkacomunicacoes.com/wp-content/uploads/2026/06/Video-2.mp4',
    thumbGradient: 'linear-gradient(135deg, #EC4899, #F97316)',
  },
  {
    id: 'v3',
    title: 'Divulgação da SemiFinal',
    tag: 'Esporte',
    src: 'https://linkacomunicacoes.com/wp-content/uploads/2026/06/Video-3.mp4',
    thumbGradient: 'linear-gradient(135deg, #A855F7, #06B6D4)',
  },
]

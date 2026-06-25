export interface PortfolioItem {
  id: string
  title: string
  tag: string
  client: string
  type: 'single' | 'carousel'
  thumbSrc?: string
  thumbGradient?: string
  images: PortfolioImage[]
}

export interface PortfolioImage {
  src: string
  alt: string
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'carrossel-1',
    title: 'O que acontece no seu cérebro quando você reage antes de pensar?',
    tag: 'Carrossel',
    client: '@psicologoluisvirguerio',
    type: 'carousel',
    thumbSrc: '/conteudos/carrossel-1/3_01.png',
    images: [
      { src: '/conteudos/carrossel-1/3_01.png', alt: 'Slide 1 — Reação antes de pensar' },
      { src: '/conteudos/carrossel-1/3_02.png', alt: 'Slide 2' },
      { src: '/conteudos/carrossel-1/3_03.png', alt: 'Slide 3' },
      { src: '/conteudos/carrossel-1/3_04.png', alt: 'Slide 4' },
      { src: '/conteudos/carrossel-1/3_05.png', alt: 'Slide 5' },
      { src: '/conteudos/carrossel-1/3_06.png', alt: 'Slide 6' },
      { src: '/conteudos/carrossel-1/3_07.png', alt: 'Slide 7' },
    ],
  },
  {
    id: 'unico-1',
    title: 'Dia Internacional da Mulher — Por trás de cada grande resultado',
    tag: 'Post Único',
    client: 'Multimin · Axiota · Lactipro',
    type: 'single',
    thumbSrc: '/conteudos/unicos/unico-1.png',
    images: [{ src: '/conteudos/unicos/unico-1.png', alt: 'Dia Internacional da Mulher' }],
  },
  {
    id: 'carrossel-2',
    title: 'Por que a intensidade pode te fazer desistir em fevereiro?',
    tag: 'Carrossel',
    client: '@marciasiqueira.psico',
    type: 'carousel',
    thumbSrc: '/conteudos/carrossel-2/0801_01.png',
    images: [
      { src: '/conteudos/carrossel-2/0801_01.png', alt: 'Slide 1 — Intensidade e desistência' },
      { src: '/conteudos/carrossel-2/0801_02.png', alt: 'Slide 2' },
      { src: '/conteudos/carrossel-2/0801_03.png', alt: 'Slide 3' },
      { src: '/conteudos/carrossel-2/0801_04.png', alt: 'Slide 4' },
      { src: '/conteudos/carrossel-2/0801_05.png', alt: 'Slide 5' },
      { src: '/conteudos/carrossel-2/0801_06.png', alt: 'Slide 6' },
      { src: '/conteudos/carrossel-2/0801_07.png', alt: 'Slide 7' },
      { src: '/conteudos/carrossel-2/0801_08.png', alt: 'Slide 8' },
      { src: '/conteudos/carrossel-2/0801_09.png', alt: 'Slide 9' },
      { src: '/conteudos/carrossel-2/0801_10.png', alt: 'Slide 10' },
    ],
  },
  {
    id: 'unico-2',
    title: 'Uniforme Combo Semifinal — VS Ocelots',
    tag: 'Post Único',
    client: 'Futebol Americano',
    type: 'single',
    thumbSrc: '/conteudos/unicos/unico-2.png',
    images: [{ src: '/conteudos/unicos/unico-2.png', alt: 'Uniforme Combo Semifinal' }],
  },
  {
    id: 'carrossel-3',
    title: 'Qual é o plano de internet perfeito para a sua casa?',
    tag: 'Carrossel',
    client: 'Algar Telecom',
    type: 'carousel',
    thumbSrc: '/conteudos/carrossel-3/10_01.png',
    images: [
      { src: '/conteudos/carrossel-3/10_01.png', alt: 'Slide 1 — Plano de internet Algar' },
      { src: '/conteudos/carrossel-3/10_02.png', alt: 'Slide 2' },
      { src: '/conteudos/carrossel-3/10_03.png', alt: 'Slide 3' },
      { src: '/conteudos/carrossel-3/10_04.png', alt: 'Slide 4' },
      { src: '/conteudos/carrossel-3/10_05.png', alt: 'Slide 5' },
    ],
  },
  {
    id: 'unico-3',
    title: 'Seu filho aprende Inglês de verdade — não só o Verb to be',
    tag: 'Post Único',
    client: 'GoldenBear Escola de Idiomas',
    type: 'single',
    thumbSrc: '/conteudos/unicos/unico-3.png',
    images: [{ src: '/conteudos/unicos/unico-3.png', alt: 'GoldenBear — Inglês de verdade' }],
  },
]

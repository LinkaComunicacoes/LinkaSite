export interface Testimonial {
  id: string
  text: string
  authorName: string
  authorRole: string
  authorInitials: string
  avatarGradient: string
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    text: 'Eu estou adorando trabalhar com vocês e me sinto verdadeiramente próxima e acolhida, nunca pensei que teria essa fluidez! Já aconteceu de trabalhar com pessoas aqui de POA e poucas terem essa sinergia entre o time e devolutiva, parabéns estou impressionada! Desde a primeira abordagem está sendo mt legal, mesmo sem mensurar resultados do trabalho em si, só o alinhamento e primeiros contatos já estão mt legais.',
    authorName: 'Hayane',
    authorRole: 'Massoterapeuta',
    authorInitials: 'H',
    avatarGradient: 'linear-gradient(135deg, #7C3AED, #EC4899)',
  },
  {
    id: 't2',
    text: 'Gostei bastante, está conseguindo descrever exatamente o que eu penso e sinto...',
    authorName: 'Márcia',
    authorRole: 'Psicóloga',
    authorInitials: 'M',
    avatarGradient: 'linear-gradient(135deg, #EC4899, #F97316)',
  },
  {
    id: 't3',
    text: 'Olha, tenho que fazer uma observação sobre os últimos conteúdos e esses que vi agora. Estão excelentes, muito bons mesmo.',
    authorName: 'Luís',
    authorRole: 'Psicólogo',
    authorInitials: 'L',
    avatarGradient: 'linear-gradient(135deg, #A855F7, #06B6D4)',
  },
]

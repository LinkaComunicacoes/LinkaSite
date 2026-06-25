export interface SocialProfile {
  id: string
  name: string
  handle: string
  url: string
  followers: string
  followersLabel: string
  iconClass: string
  iconBg: string
  comingSoon?: boolean
}

export const socialProfiles: SocialProfile[] = [
  {
    id: 'instagram',
    name: 'Instagram',
    handle: '@linka_comunicacoes',
    url: 'https://www.instagram.com/linka_comunicacoes?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    followers: '48,2K',
    followersLabel: 'seguidores',
    iconClass: 'ti ti-brand-instagram',
    iconBg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    handle: '@linka_comunicacoes',
    url: 'https://tiktok.com/@linka_comunicacoes',
    followers: '91,5K',
    followersLabel: 'seguidores',
    iconClass: 'ti ti-brand-tiktok',
    iconBg: '#000',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    handle: '@linka_comunicacoes',
    url: '',
    followers: '',
    followersLabel: '',
    iconClass: 'ti ti-brand-youtube',
    iconBg: '#FF0000',
    comingSoon: true,
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    handle: 'LINKA Comunicações',
    url: 'https://linkedin.com/company/linka-comunicacoes',
    followers: '12,8K',
    followersLabel: 'conexões',
    iconClass: 'ti ti-brand-linkedin',
    iconBg: '#0A66C2',
  },
]

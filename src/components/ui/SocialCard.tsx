import { motion } from 'framer-motion'
import { SocialProfile } from '@/data/social'

export function SocialCard({ profile }: { profile: SocialProfile }) {
  if (profile.comingSoon) {
    return (
      <div className="flex flex-col items-start gap-3 bg-card border border-border rounded-2xl p-6 opacity-50 cursor-not-allowed relative overflow-hidden">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: profile.iconBg }}
        >
          <i className={`${profile.iconClass} text-white text-xl`} aria-hidden="true" />
        </div>
        <div>
          <div className="text-sm font-bold text-[#f0f0f0]">{profile.name}</div>
          <div className="text-xs text-[#666]">{profile.handle}</div>
        </div>
        <span className="text-[0.7rem] font-semibold text-[#888] border border-[#333] px-2 py-0.5 rounded-full uppercase tracking-wide">
          Em breve
        </span>
      </div>
    )
  }

  return (
    <motion.a
      href={profile.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-start gap-3 bg-card border border-border rounded-2xl p-6 no-underline text-inherit"
      whileHover={{ y: -4, borderColor: '#A855F7' }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{ background: profile.iconBg }}
      >
        <i className={`${profile.iconClass} text-white text-xl`} aria-hidden="true" />
      </div>
      <div>
        <div className="text-sm font-bold text-[#f0f0f0]">{profile.name}</div>
        <div className="text-xs text-[#666]">{profile.handle}</div>
      </div>
    </motion.a>
  )
}

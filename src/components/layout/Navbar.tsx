import { motion } from 'framer-motion'
import { siteConfig } from '@/data/config'
import { Button } from '@/components/ui/Button'

export function Navbar() {
  return (
    <motion.nav
      className="sticky top-0 z-50 bg-[#0d0d0dcc] backdrop-blur-xl border-b border-border px-8 py-3 flex items-center justify-between"
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <img
        src={siteConfig.logoUrl}
        alt="LINKA Comunicações"
        className="h-20 w-auto object-contain"
      />
      <Button variant="primary" href="#agendar" className="text-sm py-2 px-5">
        Agendar reunião
      </Button>
    </motion.nav>
  )
}

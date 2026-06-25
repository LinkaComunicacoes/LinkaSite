import { siteConfig } from '@/data/config'
import { socialProfiles } from '@/data/social'

export function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      {/* Símbolo decorativo */}
      <img
        src={siteConfig.simboloUrl}
        alt=""
        aria-hidden="true"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 opacity-[0.12] pointer-events-none select-none"
      />

      <div className="relative max-w-5xl mx-auto px-8 py-12">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8">

          {/* Logo + tagline */}
          <div className="flex flex-col items-center sm:items-start gap-3">
            <img
              src={siteConfig.logoUrl}
              alt="LINKA Comunicações"
              className="h-12 w-auto object-contain"
            />
            <p className="text-[#555] text-sm max-w-xs text-center sm:text-left leading-relaxed">
              Estratégia, conteúdo e gestão de redes sociais para marcas que querem crescer de verdade.
            </p>
          </div>

          {/* Redes sociais */}
          <div className="flex flex-col items-center sm:items-end gap-3">
            <p className="text-[#444] text-xs uppercase tracking-widest font-semibold">Redes sociais</p>
            <div className="flex gap-3">
              {socialProfiles.map((p) => (
                <a
                  key={p.id}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-[#1a1a1a] border border-border flex items-center justify-center text-[#666] hover:text-[#A855F7] hover:border-[#7C3AED] transition-all duration-200"
                  aria-label={p.name}
                >
                  <i className={p.iconClass} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-2 text-[#3a3a3a] text-xs">
          <p className="text-[#666]">© 2026 · LINKA Comunicações · Todos os direitos reservados</p>
          <a
            href={siteConfig.calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#555] hover:text-[#A855F7] transition-colors"
          >
            Agendar reunião →
          </a>
        </div>
      </div>
    </footer>
  )
}

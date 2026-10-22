import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ArrowDown, FileText } from 'lucide-react';

export default function Hero() {
  const { hero } = portfolioData;

  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(20,184,166,0.12),rgba(255,255,255,0))] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-4xl mx-auto text-center z-10 py-16"
      >
        <span className="inline-block py-1 px-3 mb-6 text-xs font-mono font-medium tracking-wide text-teal-300 bg-teal-500/10 border border-teal-500/30 rounded-full">
          Fresher • 2027
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
          {hero.greeting}{' '}
          <span className="text-teal-400">
            {hero.role}
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-3">
          {hero.tagline}
        </p>

        <p className="font-mono text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-10">
          {hero.subheading}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={hero.ctaPrimary.href}
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 transition-colors shadow-tealGlow flex items-center justify-center gap-2"
          >
            {hero.ctaPrimary.label}
            <ArrowDown size={16} />
          </a>

          <a
            href={hero.ctaSecondary.href}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-semibold text-slate-200 border border-white/10 hover:border-teal-500/40 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <FileText size={16} />
            {hero.ctaSecondary.label}
          </a>
        </div>
      </motion.div>
    </section>
  );
}

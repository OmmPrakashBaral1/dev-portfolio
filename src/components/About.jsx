import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Cloud, Layers } from 'lucide-react';

export default function About() {
  const { about } = portfolioData;

  const cardIcons = [
    <Cloud key="cloud" className="text-teal-400" size={22} />,
    <Layers key="stack" className="text-teal-400" size={22} />,
  ];

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-teal-400 text-sm font-semibold">01.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">About Me</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-2" />
        </div>

        <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-3xl">
          {about.bio.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {about.highlights.map((item, idx) => (
            <div
              key={item.title}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center mb-4">
                {cardIcons[idx]}
              </div>

              <h3 className="text-lg font-bold text-white mb-1">
                {item.title}
              </h3>

              <div className="text-xs font-mono text-teal-400/90 mb-3">
                {item.subtitle}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

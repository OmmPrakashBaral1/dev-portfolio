import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const { experience } = portfolioData;

  const icons = [
    <Briefcase key="work" size={16} className="text-teal-400" />,
    <GraduationCap key="edu" size={16} className="text-teal-400" />,
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-12">
          <span className="font-mono text-teal-400 text-sm font-semibold">04.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Experience & Education</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-2" />
        </div>

        <div className="relative border-l border-slate-800 ml-4 sm:ml-6 space-y-10">
          {experience.map((item, idx) => (
            <div key={item.role} className="relative pl-8 sm:pl-10 group">
              <div className="absolute -left-[17px] top-1 w-8 h-8 rounded-full bg-surface border border-teal-500/40 flex items-center justify-center group-hover:border-teal-400 transition-colors">
                {icons[idx] || <Briefcase size={16} className="text-teal-400" />}
              </div>

              <div className="glass-card rounded-xl p-6 transition-all duration-300">
                <span className="text-xs font-mono text-teal-400/90 font-medium">
                  {item.period}
                </span>
                <h3 className="text-lg font-bold text-white mt-1">
                  {item.role}
                </h3>
                <div className="text-sm font-medium text-slate-300 mb-3">
                  {item.organization}
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { portfolioData } from '../data';

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-teal-400 text-sm font-semibold">02.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Skills & Technologies</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <div
              key={group.category}
              className="glass-card rounded-xl p-6 transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-base font-semibold text-white mb-4 flex items-center justify-between">
                <span>{group.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
              </h3>

              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-slate-300 bg-white/5 border border-white/10 rounded hover:border-teal-400/50 hover:text-teal-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

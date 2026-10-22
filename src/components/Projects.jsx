import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-teal-400 text-sm font-semibold">03.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Featured Projects</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="glass-card rounded-xl p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h3>
                  {project.inProgress && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-teal-500/10 text-teal-300 border border-teal-500/30">
                      <Sparkles size={12} />
                      In Progress
                    </span>
                  )}
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-xs font-mono text-slate-400 bg-white/5 border border-white/5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <Github size={15} />
                    Source
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-teal-400 transition-colors"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

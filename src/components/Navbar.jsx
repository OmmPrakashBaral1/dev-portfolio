import { useState } from 'react';
import { portfolioData } from '../data';
import { Menu, X, FileDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { navLinks, personal } = portfolioData;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-bg/85 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="font-mono text-lg font-bold tracking-tight text-white hover:text-teal-400 transition-colors">
            omm<span className="text-teal-400">.dev</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-teal-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-mono font-semibold text-teal-300 border border-teal-500/40 rounded-md hover:bg-teal-500/10 hover:border-teal-400 transition-all"
            >
              <FileDown size={14} />
              Resume
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-surface/95 border-b border-white/10 px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-slate-300 hover:text-teal-400 hover:bg-white/5 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <a
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-2 px-3 py-2 text-xs font-mono font-semibold text-teal-300 border border-teal-500/40 rounded-md hover:bg-teal-500/10"
          >
            <FileDown size={14} />
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

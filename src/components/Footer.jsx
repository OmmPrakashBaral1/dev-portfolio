import { portfolioData } from '../data';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-white/5 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs font-mono text-slate-500">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          Designed & built by <span className="text-slate-300 font-semibold">{personal.name}. All rights reserved.</span>
        </p>
        <p>
          React • Tailwind CSS • Framer Motion
        </p>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Github, Linkedin, Mail, Send, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const { socials } = portfolioData.personal;

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Invalid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message is required';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitError('');
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${socials.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (response.ok || result.success === 'true' || result.success === true) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitError(result.message || 'Failed to send message. Please try again.');
      }
    } catch {
      setSubmitError('Unable to send. Please check your internet connection or email directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3 mb-10">
          <span className="font-mono text-teal-400 text-sm font-semibold">05.</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Get In Touch</h2>
          <div className="h-[1px] bg-slate-800 flex-grow ml-2" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <p className="text-slate-300 leading-relaxed mb-6">
              I am open to software engineering opportunities, cloud computing discussions, and collaborative projects. Feel free to reach out.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${socials.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm"
              >
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-teal-400">
                  <Mail size={18} />
                </div>
                <span>{socials.email}</span>
              </a>

              <a
                href={socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm"
              >
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-teal-400">
                  <Github size={18} />
                </div>
                <span>GitHub</span>
              </a>

              <a
                href={socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm"
              >
                <div className="w-10 h-10 rounded-lg glass-card flex items-center justify-center text-teal-400">
                  <Linkedin size={18} />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="glass-card rounded-xl p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle2 size={44} className="text-teal-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-sm text-slate-300 mb-2">
                  Your message has been sent to <span className="text-teal-400 font-mono">{socials.email}</span>.
                </p>
                <p className="text-xs text-slate-400 mb-6 max-w-sm mx-auto">
                  (If this is the first test, check your Gmail for an activation email from FormSubmit and click activate).
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2 text-xs font-mono font-medium text-teal-300 border border-teal-500/40 rounded-md hover:bg-teal-500/10 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {submitError && (
                  <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 font-mono">
                    <AlertCircle size={15} />
                    <span>{submitError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-teal-400 font-sans"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-teal-400 font-sans"
                    placeholder="you@domain.com"
                  />
                  {errors.email && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-bg/80 border border-white/10 text-slate-200 text-sm focus:outline-none focus:border-teal-400 font-sans resize-none"
                    placeholder="Brief description of your project or inquiry"
                  />
                  {errors.message && <p className="text-xs text-rose-400 mt-1 font-mono">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 px-4 rounded-lg text-sm font-semibold text-slate-950 bg-teal-400 hover:bg-teal-300 disabled:opacity-60 transition-colors flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

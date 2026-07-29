import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useContactModal } from '../context/ContactModalContext';
import { EMAILJS_CONFIG } from '../config/emailjs';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

const ContactModal = () => {
  const { isOpen, close } = useContactModal();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SendStatus>('idle');

  const resetAndClose = () => {
    close();
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setStatus('idle');
    }, 300);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        {
          from_name: name,
          from_email: email,
          message,
        },
        EMAILJS_CONFIG.publicKey
      );
      setStatus('success');
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Blurred backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
            onClick={resetAndClose}
          />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-md rounded-[28px] border border-[#D7E2EA]/20 bg-[#0C0C0C] p-6 sm:p-8 shadow-2xl"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button
              onClick={resetAndClose}
              aria-label="Close contact form"
              className="absolute top-5 right-5 text-[#D7E2EA] opacity-70 hover:opacity-100 transition-opacity"
            >
              <X size={20} />
            </button>

            <h3 className="hero-heading font-black uppercase text-3xl sm:text-4xl mb-1">
              Let&apos;s talk
            </h3>
            <p className="text-[#D7E2EA]/60 text-sm mb-6">
              Tell me a bit about your project or opportunity.
            </p>

            {status === 'success' ? (
              <div className="flex flex-col items-center gap-3 py-8 text-center">
                <CheckCircle2 className="text-[#BBCCD7]" size={40} />
                <p className="text-[#D7E2EA] font-medium">
                  Message sent! I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={resetAndClose}
                  className="mt-2 text-sm uppercase tracking-widest text-[#D7E2EA]/70 hover:text-[#D7E2EA] transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-name"
                    className="text-xs uppercase tracking-widest text-[#D7E2EA]/60"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Sheikh Nabeel"
                    className="rounded-xl bg-white/5 border border-[#D7E2EA]/20 px-4 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-[#D7E2EA]/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-email"
                    className="text-xs uppercase tracking-widest text-[#D7E2EA]/60"
                  >
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    className="rounded-xl bg-white/5 border border-[#D7E2EA]/20 px-4 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-[#D7E2EA]/60 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="text-xs uppercase tracking-widest text-[#D7E2EA]/60"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Let's build something great..."
                    className="rounded-xl bg-white/5 border border-[#D7E2EA]/20 px-4 py-3 text-[#D7E2EA] placeholder:text-[#D7E2EA]/30 outline-none focus:border-[#D7E2EA]/60 transition-colors resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-sm text-red-400">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-2 rounded-full px-8 py-3.5 text-sm text-white font-medium uppercase tracking-widest transition-transform duration-200 hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100 flex items-center justify-center gap-2"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                    boxShadow:
                      '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
                    outline: '2px solid white',
                    outlineOffset: '-3px',
                  }}
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;

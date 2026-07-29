import { MessageCircleMore, Mail, Github, Linkedin, Code2, FileDown, Instagram } from 'lucide-react';
import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const CONTACT_LINKS = [
  {
    icon: MessageCircleMore,
    label: '+92 316 8440955',
    href: 'https://wa.me/923168440955',
  },
  {
    icon: Mail,
    label: 'sheikhnabeel2201182@gmail.com',
    href: 'mailto:sheikhnabeel2201182@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Nabeel-8090',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sheikh-nabeel-34687a291/',
  },
  {
    icon: Code2,
    label: 'LeetCode',
    href: 'https://leetcode.com/u/LVaNBBffPh/',
  },
  {
    icon: Instagram,
    label: 'Instagram',
    href: 'https://www.instagram.com/sheikhnabeel8090/',
  },
];

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32 flex flex-col items-center text-center"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Contact
        </h2>
      </FadeIn>

      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/70 max-w-md mb-12 sm:mb-14 text-sm sm:text-base">
          Have a project in mind or just want to connect? Reach out directly or
          send a message below.
        </p>
      </FadeIn>

      <div className="w-full max-w-2xl grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 sm:mb-14">
        {CONTACT_LINKS.map((link, i) => {
          const Icon = link.icon;
          return (
            <FadeIn key={link.label} delay={0.15 + i * 0.08} y={20}>
              <a
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center gap-3 rounded-2xl border border-[#D7E2EA]/15 bg-white/[0.02] px-5 py-4 text-left transition-colors duration-200 hover:bg-white/[0.05] hover:border-[#D7E2EA]/30"
              >
                <span
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full"
                  style={{
                    background:
                      'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                  }}
                >
                  <Icon className="text-white" size={17} />
                </span>
                <span className="text-[#D7E2EA] text-sm sm:text-[0.95rem] truncate">
                  {link.label}
                </span>
              </a>
            </FadeIn>
          );
        })}
      </div>

      <FadeIn delay={0.5} y={20}>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <ContactButton />
          <a
            href="/resume/Sheikh_Nabeel_Resume_Updated.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10"
          >
            <FileDown size={16} />
            Resume
          </a>
        </div>
      </FadeIn>
    </section>
  );
};

export default ContactSection;

import FadeIn from './FadeIn';
import Magnet from './Magnet';
import ContactButton from './ContactButton';
import Hero3DBackground from './Hero3DBackground';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen flex flex-col" style={{ overflowX: 'clip' }}>
      {/* Ambient 3D animation, sits behind the name */}
      <Magnet
        padding={250}
        strength={22}
        activeTransition="transform 0.4s ease-out"
        inactiveTransition="transform 0.8s ease-in-out"
        className="absolute inset-0 z-0"
      >
        <Hero3DBackground />
      </Magnet>

      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="nav" className="relative z-20">
        <div className="flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#D7E2EA] font-medium uppercase tracking-wider text-[0.65rem] sm:text-base md:text-lg lg:text-[1.3rem] transition-opacity duration-200 hover:opacity-70"
            >
              {link.label}
            </a>
          ))}
        </div>
      </FadeIn>

      {/* Heading */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 gap-2 sm:gap-3 px-4">
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.15} y={30}>
            <p
              className="text-center text-[#D7E2EA]/70 font-light uppercase tracking-[0.3em] whitespace-nowrap"
              style={{ fontSize: 'clamp(0.85rem, 2.4vw, 1.6rem)' }}
            >
              Hi, i&apos;m
            </p>
          </FadeIn>
        </div>
        <div className="overflow-hidden w-full">
          <FadeIn delay={0.25} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[10.5vw] sm:text-[9vw] md:text-[8vw] lg:text-[7vw]">
              Sheikh Nabeel
            </h1>
          </FadeIn>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-auto relative z-20 flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10">
        <FadeIn delay={0.4} y={20}>
          <div
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[220px] sm:max-w-[280px] md:max-w-[340px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            <p>BS Software Engineering Student @ GIKI</p>
            <p className="hero-heading font-medium mt-1">Fullstack Developer</p>
          </div>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;

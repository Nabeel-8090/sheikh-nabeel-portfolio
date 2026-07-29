import { GraduationCap } from 'lucide-react';
import FadeIn from './FadeIn';

const EducationSection = () => {
  return (
    <section
      id="education"
      className="relative bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-24 sm:py-28 md:py-32 flex flex-col items-center"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-14 sm:mb-16 md:mb-20"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Education
        </h2>
      </FadeIn>

      <FadeIn delay={0.15} y={30}>
        <div className="w-full max-w-2xl rounded-[32px] border border-[#D7E2EA]/15 bg-white/[0.02] px-6 sm:px-10 py-8 sm:py-10 flex flex-col sm:flex-row items-start gap-5 sm:gap-8">
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-2xl w-14 h-14 sm:w-16 sm:h-16"
            style={{
              background:
                'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
            }}
          >
            <GraduationCap className="text-white" size={28} />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-[#D7E2EA]/50 uppercase tracking-widest text-xs sm:text-sm">
              2024 — 2028
            </span>
            <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-2xl md:text-[1.75rem] leading-snug">
              BS Software Engineering
            </h3>
            <p className="text-[#D7E2EA]/70 text-sm sm:text-base">
              GIK Institute of Engineering Sciences &amp; Technology
            </p>
            <p className="text-[#D7E2EA]/50 text-sm sm:text-base mt-1">
              CGPA:{' '}
              <span className="text-[#D7E2EA] font-medium">3.09 / 4.00</span>
            </p>
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default EducationSection;

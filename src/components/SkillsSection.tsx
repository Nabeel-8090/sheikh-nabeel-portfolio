import { motion, type Variants } from 'framer-motion';
import { Code2, Globe, Database, Brain, Wrench, Server } from 'lucide-react';
import FadeIn from './FadeIn';

interface SkillCategory {
  icon: typeof Code2;
  title: string;
  skills: string[];
}

const CATEGORIES: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: ['C++', 'JavaScript'],
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    skills: ['HTML', 'CSS', 'React', 'Next.js'],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'REST APIs']
  },
  {
    icon: Database,
    title: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma ORM'],
  },
  {
    icon: Brain,
    title: 'Concepts',
    skills: ['OOP', 'Data Structures & Algorithms'],
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    skills: ['Git / GitHub', 'Cloudinary', 'NextAuth.js', 'Vercel', 'Tailwind CSS'],
  },
];

const chipVariants: Variants = {
  hidden: { opacity: 0, y: 10, scale: 0.85 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.05 * i,
      duration: 0.35,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  }),
};

const SkillCard = ({ category, index }: { category: SkillCategory; index: number }) => {
  const Icon = category.icon;

  return (
    <FadeIn delay={index * 0.1} y={30}>
      <motion.div
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
        className="h-full rounded-[28px] border border-[#0C0C0C]/10 bg-[#0C0C0C]/[0.02] px-6 sm:px-8 py-7 sm:py-8 flex flex-col gap-5"
      >
        <motion.div
          whileHover={{ rotate: [0, -8, 8, -4, 0] }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
          style={{
            background:
              'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
          }}
        >
          <Icon className="text-white" size={22} />
        </motion.div>

        <h3 className="text-[#0C0C0C] font-medium uppercase text-lg sm:text-xl tracking-wide">
          {category.title}
        </h3>

        <div className="flex flex-wrap gap-2 mt-auto">
          {category.skills.map((skill, i) => (
            <motion.span
              key={skill}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={chipVariants}
              whileHover={{ scale: 1.08, y: -2 }}
              className="rounded-full px-4 py-1.5 text-xs sm:text-sm font-medium text-[#0C0C0C]/80 border border-[#0C0C0C]/15 bg-[#0C0C0C]/[0.03] cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </FadeIn>
  );
};

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="bg-white px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(2.5rem, 10vw, 130px)' }}
        >
          Skills &amp; Technologies
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {CATEGORIES.map((category, i) => (
          <div key={category.title}>
            <SkillCard category={category} index={i} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

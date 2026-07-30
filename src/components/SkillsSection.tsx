import { motion, type Variants } from 'framer-motion';
import { Code2, Globe, Database, Brain, Wrench, Server, type LucideIcon } from 'lucide-react';
import type { IconType } from 'react-icons';
import {
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
  SiGit,
  SiGithub,
  SiCloudinary,
  SiVercel,
  SiTailwindcss,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { LuNetwork, LuBrainCircuit } from 'react-icons/lu';
import FadeIn from './FadeIn';

/**
 * Not every technology has an official brand logo available in react-icons
 * (e.g. abstract concepts like OOP, or rebranded libraries like NextAuth.js).
 * For those we fall back to a sensible generic icon so the grid still looks
 * consistent instead of leaving a gap.
 */
interface Skill {
  name: string;
  icon: IconType | LucideIcon;
  color: string; // brand color used for the icon itself
  /**
   * Brand logos don't all carry the same amount of "ink" inside their own
   * viewBox — badge-style marks (HTML5, CSS, Git) are dense and fill the
   * box, while outline marks (React, Node.js, Tailwind) are thin with lots
   * of built-in whitespace. Rendering everything at the same numeric size
   * prop still looks mismatched, so each icon gets a tuned size to read as
   * visually equal. Defaults to 24 if omitted.
   */
  size?: number;
}

interface SkillCategory {
  icon: typeof Code2;
  title: string;
  skills: Skill[];
}

const CATEGORIES: SkillCategory[] = [
  {
    icon: Code2,
    title: 'Programming Languages',
    skills: [
      { name: 'C++', icon: SiCplusplus, color: '#00599C', size: 24 },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', size: 22 },
    ],
  },
  {
    icon: Globe,
    title: 'Web Technologies',
    skills: [
      { name: 'HTML', icon: SiHtml5, color: '#E34F26', size: 20 },
      { name: 'CSS', icon: SiCss, color: '#1572B6', size: 20 },
      { name: 'React', icon: SiReact, color: '#61DAFB', size: 26 },
      { name: 'Next.js', icon: SiNextdotjs, color: '#000000', size: 22 },
    ],
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: [
      { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E', size: 26 },
      { name: 'Express.js', icon: SiExpress, color: '#000000', size: 24 },
      { name: 'REST APIs', icon: TbApi, color: '#0C0C0C', size: 22 },
    ],
  },
  {
    icon: Database,
    title: 'Databases',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', size: 26 },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', size: 24 },
      { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748', size: 22 },
    ],
  },
  {
    icon: Brain,
    title: 'Concepts',
    skills: [
      { name: 'OOP', icon: LuBrainCircuit, color: '#7621B0', size: 22 },
      { name: 'DSA', icon: LuNetwork, color: '#B600A8', size: 22 },
    ],
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    skills: [
      { name: 'Git', icon: SiGit, color: '#F05032', size: 22 },
      { name: 'GitHub', icon: SiGithub, color: '#181717', size: 22 },
      { name: 'Cloudinary', icon: SiCloudinary, color: '#3448C5', size: 22 },
      { name: 'Vercel', icon: SiVercel, color: '#000000', size: 20 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', size: 24 },
    ],
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

const SkillChip = ({ skill, index }: { skill: Skill; index: number }) => {
  const Icon = skill.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      variants={chipVariants}
      whileHover={{ scale: 1.08, y: -3 }}
      className="flex flex-col items-center gap-2"
    >
      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center border border-[#0C0C0C]/10 bg-white shadow-sm"
      >
        <Icon size={skill.size ?? 24} color={skill.color} />
      </div>
      <span className="text-[10px] sm:text-xs font-medium text-[#0C0C0C]/70 text-center leading-tight">
        {skill.name}
      </span>
    </motion.div>
  );
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

        <div className="grid grid-cols-4 sm:grid-cols-3 gap-x-3 gap-y-4 mt-auto">
          {category.skills.map((skill, i) => (
            <SkillChip key={skill.name} skill={skill} index={i} />
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
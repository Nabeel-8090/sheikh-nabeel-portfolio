import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FadeIn from './FadeIn';
import LiveProjectButton from './LiveProjectButton';

interface Project {
  number: string;
  category: string;
  name: string;
  description: string;
  stack: string[];
  githubUrl: string;
  liveUrl: string;
  image: string;
}

const PROJECTS: Project[] = [
  {
    number: '01',
    category: 'Client Project',
    name: 'METALEDGE',
    description:
      'Website for a metal fabrication business. Built with React and Vite. Has product pages, image galleries, WhatsApp ordering, and a Firebase-powered admin dashboard.',
    stack: ['React', 'Vite', 'React Router', 'CSS Module', 'Frontend Design', 'Firebase', 'Cloudinary'],
    githubUrl: 'https://github.com/Nabeel-8090/metaledge',
    liveUrl: 'https://metaledge-ss.vercel.app/',
    image: '/projects/metaledge.png',
  },
  {
    number: '02',
    category: 'Personal Project',
    name: 'PinBoard',
    description:
      'A full-stack visual pin sharing platform where users can upload images, create boards, like & comment on posts, and explore content by category.',
    stack: ['Next.js', 'PostgreSQL', 'Prisma', 'NextAuth.js', 'Cloudinary'],
    githubUrl: 'https://github.com/Nabeel-8090/pinboard-nextjs',
    liveUrl: 'https://pinboard-nextjs.vercel.app/',
    image: '/projects/pinboard.jpg',
  },
  {
    number: '03',
    category: 'Personal Project',
    name: 'Amazon Clone',
    description:
      'A fully functional Amazon e-commerce clone with product browsing, search, cart management, checkout, order history, and order tracking.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Jasmine', 'REST API'],
    githubUrl: 'https://github.com/Nabeel-8090/javascript-learning/tree/main/L13_Amazon_Project/amazon-project',
    liveUrl: 'https://amazon-clone-live-wine.vercel.app/',
    image: '/projects/amazon.png',
  },
  {
    number: '04',
    category: 'Personal Project',
    name: 'CryptX',
    description:
      'A DSA project that compresses/decompresses files using Huffman Coding, encrypts/decrypts data with XOR cipher, and tracks actions with stacks and linked lists.',
    stack: ['C++', 'DSA', 'Huffman Coding', 'XOR Cipher'],
    githubUrl: 'https://github.com/Nabeel-8090/CryptX-DSA-Project',
    liveUrl: '#projects',
    image: '/projects/cryptx.jpg',
  },
  {
    number: '05',
    category: 'Personal Project',
    name: 'TypistIQ',
    description:
      'A responsive typing speed test app with real-time WPM and accuracy tracking, featuring a clean interface and smooth user experience.',
    stack: ['C++', 'SFML'],
    githubUrl: 'https://github.com/Nabeel-8090/typistiq-typing-speed-test',
    liveUrl: 'https://drive.google.com/file/d/1PhROhF2xEkDfHRwDa_Ol_dDxHG7zmblK/view',
    image: '/projects/typistiq.jpeg',
  },
  {
    number: '06',
    category: 'Personal Project',
    name: 'AI Voice Search',
    description:
      'A Python-based voice assistant that automates web searches through simple speech commands, making browsing hands-free and efficient.',
    stack: ['Python', 'SpeechRecognition', 'PyAudio', 'Tkinter'],
    githubUrl: 'https://github.com/Nabeel-8090/ai-voice-search-assistant',
    liveUrl: 'https://drive.google.com/file/d/1Fal80GdpcP-SxxmrLQteIlHyBhR8ZjbZ/view',
    image: '/projects/ai-voice.webp',
  },
  {
    number: '07',
    category: 'Personal Project',
    name: 'File Organizer',
    description:
      'A Python automation tool that organizes files by type and removes duplicates using hashing to keep directories clean and efficient.',
    stack: ['Python', 'OOP', 'File Automation'],
    githubUrl: 'https://github.com/Nabeel-8090/file-organizer-cleaner',
    liveUrl: 'https://drive.google.com/file/d/1ZZ93nDrdHc4i-_iCLVrFWg9cLtcbJnBK/view',
    image: '/projects/file-organizer.jpg',
  },
];

const TOTAL_CARDS = PROJECTS.length;

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const targetScale = 1 - (TOTAL_CARDS - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={cardRef}
      className="sticky top-24 md:top-32 min-h-[70vh] sm:min-h-[65vh] flex items-center"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-8 md:p-10 flex flex-col gap-8 md:gap-10 origin-top"
      >
        {/* Top row */}
        <div className="flex items-start justify-between flex-wrap gap-6">
          <div className="flex items-center gap-4 sm:gap-6">
            <span
              className="text-[#0C0C0C] font-black leading-none"
              style={{
                fontSize: 'clamp(3rem, 10vw, 140px)',
                WebkitTextStroke: '1.5px #D7E2EA',
              }}
            >
              {project.number}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[#D7E2EA] uppercase tracking-widest text-xs sm:text-sm opacity-60">
                {project.category}
              </span>
              <h3 className="text-[#D7E2EA] font-medium uppercase text-xl sm:text-2xl md:text-3xl">
                {project.name}
              </h3>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <LiveProjectButton href={project.githubUrl} className="!px-6 !py-2.5 !text-sm">
              View Code
            </LiveProjectButton>
            <LiveProjectButton href={project.liveUrl} />
          </div>
        </div>

        {/* Content row */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-10">
          <div
            className="flex items-center justify-center rounded-[32px] sm:rounded-[40px] flex-shrink-0"
            style={{
              width: '100%',
              maxWidth: '280px',
              aspectRatio: '1 / 1',
              background:
                'linear-gradient(160deg, rgba(182,0,168,0.15) 0%, rgba(118,33,176,0.12) 50%, rgba(190,76,0,0.1) 100%)',
              border: '1px solid rgba(215, 226, 234, 0.15)',
            }}
          >
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover rounded-[32px] sm:rounded-[40px]"
            />
          </div>

          <div className="flex flex-col justify-center gap-5">
            <p className="text-[#D7E2EA]/80 leading-relaxed text-sm sm:text-base md:text-lg max-w-xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full px-4 py-1.5 text-xs sm:text-sm text-[#D7E2EA]/80 border border-[#D7E2EA]/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
    >
      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-24"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Projects
        </h2>
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.number} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

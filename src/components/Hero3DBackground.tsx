import { motion } from 'framer-motion';

const Hero3DBackground = () => {
  const ringCount = 6;

  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center"
      style={{ perspective: '1200px' }}
      aria-hidden="true"
    >
      <motion.div
        className="relative"
        style={{
          width: 'min(70vw, 620px)',
          height: 'min(70vw, 620px)',
          transformStyle: 'preserve-3d',
        }}
        animate={{ rotateY: 360, rotateX: 15 }}
        transition={{
          rotateY: { duration: 26, ease: 'linear', repeat: Infinity },
          rotateX: { duration: 0 },
        }}
      >
        {Array.from({ length: ringCount }).map((_, i) => {
          const rotation = (360 / ringCount) * i;
          return (
            <div
              key={i}
              className="absolute inset-0 rounded-full"
              style={{
                border: '1px solid rgba(187, 204, 215, 0.18)',
                transform: `rotateY(${rotation}deg)`,
                transformStyle: 'preserve-3d',
              }}
            />
          );
        })}

        {/* Core glow */}
        <div
          className="absolute rounded-full"
          style={{
            width: '38%',
            height: '38%',
            top: '31%',
            left: '31%',
            background:
              'radial-gradient(circle, rgba(182,0,168,0.25) 0%, rgba(118,33,176,0.12) 45%, transparent 75%)',
            filter: 'blur(6px)',
          }}
        />
      </motion.div>

      {/* Floating particles for depth */}
      {Array.from({ length: 14 }).map((_, i) => {
        const size = 2 + (i % 3);
        const left = (i * 137) % 100;
        const top = (i * 71) % 100;
        const delay = (i % 7) * 0.6;
        return (
          <motion.span
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              background: '#BBCCD7',
              opacity: 0.35,
            }}
            animate={{ y: [0, -18, 0], opacity: [0.15, 0.5, 0.15] }}
            transition={{
              duration: 5 + (i % 4),
              repeat: Infinity,
              ease: 'easeInOut',
              delay,
            }}
          />
        );
      })}
    </div>
  );
};

export default Hero3DBackground;

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const Character = ({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      <span style={{ visibility: 'hidden' }}>{char}</span>
      <motion.span
        style={{ position: 'absolute', left: 0, top: 0, opacity }}
        aria-hidden="true"
      >
        {char}
      </motion.span>
    </span>
  );
};

const AnimatedText = ({ text, className = '', style }: AnimatedTextProps) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  const totalChars = text.replace(/ /g, '').length;

  let globalIndex = 0;

  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wordIdx) => {
        const wordSpan = (
          <span
            key={wordIdx}
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {word.split('').map((char, i) => {
              const charIndex = globalIndex + i;
              return (
                <Character
                  key={i}
                  char={char}
                  index={charIndex}
                  total={totalChars}
                  progress={scrollYProgress}
                />
              );
            })}
          </span>
        );
        globalIndex += word.length;

        return wordIdx < words.length - 1 ? (
          <span key={`w-${wordIdx}`}>
            {wordSpan}{' '}
          </span>
        ) : (
          wordSpan
        );
      })}
    </p>
  );
};

export default AnimatedText;
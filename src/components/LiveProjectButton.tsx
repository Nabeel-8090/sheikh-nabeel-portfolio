import type { ReactNode } from 'react';

interface LiveProjectButtonProps {
  className?: string;
  children?: ReactNode;
  href?: string;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base transition-colors duration-200 hover:bg-[#D7E2EA]/10 whitespace-nowrap';

const LiveProjectButton = ({ className = '', children, href }: LiveProjectButtonProps) => {
  const label = children ?? 'Live Project';

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseClasses} ${className}`}
      >
        {label}
      </a>
    );
  }

  return <button className={`${baseClasses} ${className}`}>{label}</button>;
};

export default LiveProjectButton;

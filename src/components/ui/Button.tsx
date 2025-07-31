import React from 'react';

type PrimaryButtonProps = {
  label: string;
  onClick?: () => void;
  icon?: React.ReactNode;
  className?: string;
};

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  label,
  onClick,
  icon,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white font-semibold transition-all duration-300 transition-colors border border-black hover:bg-white hover:text-black hover:border hover:border-black  ${className}`}
    >
      {label}
      {icon}
    </button>
  );
};

export default PrimaryButton;

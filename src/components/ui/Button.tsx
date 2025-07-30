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
      className={`flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-white font-semibold transition-all duration-300 hover:bg-gray-800 hover:scale-105 ${className}`}
    >
      {label}
      {icon}
    </button>
  );
};

export default PrimaryButton;

import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

type Option = {
  label: string;
  value: string;
};

type SortDropdownProps = {
  options: Option[];
  onChange: (value: string) => void;
  defaultValue?: string;
  width?: string;
  sortbytext?: boolean;
};

const SortDropdown: React.FC<SortDropdownProps> = ({
  options,
  width,
  sortbytext,
  onChange,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>(defaultValue || options[0].value);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    setSelected(value);
    onChange(value);
    setIsOpen(false);
  };

  const selectedLabel = options.find((opt) => opt.value === selected)?.label;

  return (
    <div
      ref={dropdownRef}
      className={`relative inline-block text-left text-sm ${width}`}
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-between w-full rounded-full border-[1px] border-black px-5 py-[18px] bg-white text-black"
      >
        <span className='font-light text-sm'>
         {sortbytext ? "Sort by:" : ""} 
          <span className='font-semibold text-sm'>{selectedLabel}</span>
        </span>
        <ChevronDown size={16} className="ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md border border-gray-200 bg-white shadow-md">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={`cursor-pointer px-4 py-2 hover:bg-gray-100 ${
                option.value === selected ? 'font-semibold text-black' : 'text-gray-700'
              }`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SortDropdown;

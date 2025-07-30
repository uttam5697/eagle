import { useState } from 'react';
import { Logo } from '../../assets/Index';
import { FiArrowUpRight } from 'react-icons/fi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 md:border-b border-white/30 py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Eagle Logo" className="xl:h-[74px] lg:h-[64px] md:h-[54px] h-[44px]" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden navbar md:flex items-center 3xl:space-x-[50px] 2xl:space-x-[50px] xl:space-x-[50px] lg:space-x-[50px] md:space-x-[50px] space-x-[50px]">
            <a href="#" className="text-white transition-colors font-medium active">Home</a>
            <a href="#" className="text-gray-300 transition-colors">About Us</a>
            <a href="#" className="text-gray-300 transition-colors">Contact Us</a>
          </nav>

          {/* Desktop CTA Button */}
          <a href="#" className="hidden md:flex white-btn group">
            <span className='leading-none'>Get in touch</span>
            <FiArrowUpRight className='text-2sm group-hover:rotate-45 duration-300 transition-all'/>
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-white/30">
            <nav className="flex navbar flex-col space-y-6 pt-4">
              <a href="#" className="text-white transition-colors font-medium active">Home</a>
              <a href="#" className="text-gray-300 transition-colors">About Us</a>
              <a href="#" className="text-gray-300 transition-colors">Contact Us</a>
              <a href="#" className="flex white-btn group before:!hidden after:!hidden">
                <span className='leading-none'>Get in touch</span>
                <FiArrowUpRight className='text-2sm group-hover:rotate-45 duration-300 transition-all'/>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

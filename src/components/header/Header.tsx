import { useState } from 'react';
import { Logo } from '../../assets/Index';
import { FiArrowUpRight } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { HiMenuAlt3 } from 'react-icons/hi';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={`md:border-b border-white/30 py-3 absolute top-0 w-full z-20 header-navbar ${isMenuOpen ? 'nav-active' : ''}`}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="space-x-2">
            <img src={Logo} alt="Eagle Logo" className="xl:h-[74px] lg:h-[64px] md:h-[54px] h-[44px]" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden navbar md:flex items-center 3xl:space-x-[50px] 2xl:space-x-[50px] xl:space-x-[50px] lg:space-x-[50px] md:space-x-[50px] space-x-[50px]">
            <a href="#" className="text-white active">Home</a>
            <a href="#" className="text-white">About Us</a>
            <a href="#" className="text-white">Contact Us</a>
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
            <HiMenuAlt3 size={30} />
          </button>
        </div>

        {/* Mobile Navigation */}
          <div className="md:hidden border-t border-white/30 mobile-nemu fixed top-0 left-0 w-full bg-black h-full">
            <div className='container'>
              <div className='flex items-start pt-4 justify-between mb-4'>
                <a href='/' className="space-x-2">
                  <img src={Logo} alt="Eagle Logo" className="xl:h-[74px] lg:h-[64px] h-[54px]" />
                </a>
                <button 
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <CgClose size={24} />
                </button>
              </div>
              <nav className="flex navbar flex-col space-y-4">
                <a href="#" className="text-white transition-colors font-medium active">Home</a>
                <a href="#" className="text-gray-300 transition-colors">About Us</a>
                <a href="#" className="text-gray-300 transition-colors">Contact Us</a>
                <a href="#" className="flex white-btn group before:!hidden after:!hidden">
                  <span className='leading-none'>Get in touch</span>
                  <FiArrowUpRight className='text-2sm group-hover:rotate-45 duration-300 transition-all'/>
                </a>
              </nav>
            </div>
          </div>
      </div>
    </header>
  );
}

import { useState } from 'react';
import { Logo } from '../../assets/Index';
import { CgClose } from 'react-icons/cg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { PiShoppingCartLight, PiUserLight } from 'react-icons/pi';
import ShoppingCart from '../shoppingcart/ShoppingCart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = window.location.pathname

  return (
    <>
      <header className={`md:border-b border-white/30 py-3  ${pathname === '/' ? 'bg-transparent absolute top-0' : 'bg-black '} w-full z-20 header-navbar ${isMenuOpen ? 'nav-active before:bg-[#00000080] before:h-full before:w-full before:z-30 before:fixed before:top-0' : ''}`}>
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="/" className="space-x-2">
              <img src={Logo} alt="Eagle Logo" className="xl:h-[74px] lg:h-[64px] md:h-[54px] h-[44px]" />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden navbar md:flex items-center 3xl:space-x-[50px] 2xl:space-x-[50px] xl:space-x-[50px] lg:space-x-[50px] md:space-x-[50px] space-x-[50px] mx-auto">
              <a href="#" className="text-white active">Home</a>
              <a href="#" className="text-white">About Us</a>
              <a href="#" className="text-white">Contact Us</a>
              <a href="/product" className="text-white">Product</a>
            </nav>

            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="flex lg:w-[54px] md:w-[44px] w-[34px] lg:h-[54px] md:h-[44px] h-[34px] white-btn group p-0 justify-center border-white/30 lg:gap-6 md:gap-5 gap-4 bg-white-light-gradient bg-transparent hover:bg-white hover:text-black text-white mr-4 md:ml-0 ml-auto"
            >
              <PiShoppingCartLight className="lg:text-[22px] md:text-[20px] text-[18px]" />
            </button>

            <a href="#" className="flex white-btn group lg:gap-6 md:gap-5 gap-4 lg:px-5 md:px-4 px-3 mr-4 md:mr-0 lg:py-[18px] md:py-3 py-2">
              <span className='leading-none'>Login</span>
              <PiUserLight className='text-2sm font-bold duration-300 transition-all'/>
            </a>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <HiMenuAlt3 size={30} />
            </button>
          </div>

          {/* Mobile Navigation */}
            <div className="md:hidden border-t border-white/30 mobile-nemu fixed top-0 right-0 max-w-[300px] w-full bg-black h-full z-30">
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
                  <a href="#" className="text-white transition-colors">About Us</a>
                  <a href="#" className="text-white transition-colors">Contact Us</a>
                  <a href="/product" className="text-white">Product</a>
                </nav>
              </div>
            </div>
        </div>
      </header>
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

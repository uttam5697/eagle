import { useState } from 'react';
import { Logo } from '../../assets/Index';
import { CgClose } from 'react-icons/cg';
import { HiMenuAlt3 } from 'react-icons/hi';
import { PiShoppingCartLight } from 'react-icons/pi';
import ShoppingCart from '../shoppingcart/ShoppingCart';
import { Link, useLocation } from 'react-router-dom';
import AuthDropdown from './components/AuthDropdown';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const pathname = useLocation().pathname

  return (

    <>
      <header
        className={`md:border-b border-white/30 py-3 
          ${(pathname === '/' || pathname === '/about-us')
            ? 'bg-transparent absolute top-0'
            : 'bg-black'} 
          w-full z-20 header-navbar 
          ${isMenuOpen
            ? 'nav-active before:bg-[#00000080] before:h-full before:w-full before:z-30 before:fixed before:top-0'
            : ''}`
        }
      >  <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="space-x-2">
              <img src={Logo} alt="Eagle Logo" className="xl:h-[74px] lg:h-[64px] md:h-[54px] h-[44px]" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden navbar md:flex items-center 3xl:space-x-[50px] 2xl:space-x-[50px] xl:space-x-[50px] lg:space-x-[50px] md:space-x-[50px] space-x-[50px] mx-auto">
              <Link to="/" className={`text-white ${pathname === '/' ? 'active' : ''}`}>Home</Link>
              <Link to="/about-us" className={`text-white ${pathname === '/about-us' ? 'active' : ''}`}>About Us</Link>
              <Link to="/contact-us" className={`text-white ${pathname === '/contact-us' ? 'active' : ''}`}>Contact Us</Link>
              <Link to="/?product" className={`text-white ${pathname === '/?product' ? 'active' : ''}`}>Product</Link>
            </nav>

            <button
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="flex lg:w-[54px] md:w-[44px] w-[34px] lg:h-[54px] md:h-[44px] h-[34px] white-btn group p-0 justify-center border-white/30 lg:gap-6 md:gap-5 gap-4 bg-white-light-gradient bg-transparent hover:bg-white hover:text-black text-white mr-4 md:ml-0 ml-auto"
            >
              <PiShoppingCartLight className="lg:text-[22px] md:text-[20px] text-[18px]" />
            </button>
            <AuthDropdown  />
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
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="space-x-2">
                  <img src={Logo} alt="Eagle Logo" className="xl:h-[74px] lg:h-[64px] h-[54px]" />
                </Link>
                <button
                  className="md:hidden text-white"
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                  <CgClose size={24} />
                </button>
              </div>
              <nav className="flex navbar flex-col space-y-4">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className={`text-white transition-colors font-medium ${pathname === '/' ? 'active' : ''}`}>
                  Home
                </Link>
                <Link to="/about-us" onClick={() => setIsMenuOpen(false)} className={`text-white transition-colors ${pathname === '/about-us' ? 'active' : ''}`}>
                  About Us
                </Link>
                <Link to="/contact-us" onClick={() => setIsMenuOpen(false)} className={`text-white transition-colors ${pathname === '/contact-us' ? 'active' : ''}`}>
                  Contact Us
                </Link>
                <Link to="/products" onClick={() => setIsMenuOpen(false)} className={`text-white transition-colors ${pathname === '/products' ? 'active' : ''}`}>
                  Product
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </header>
      <ShoppingCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}

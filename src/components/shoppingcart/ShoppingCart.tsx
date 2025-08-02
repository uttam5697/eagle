import React from 'react';
import { CgClose } from 'react-icons/cg';

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
}

const ShoppingCart: React.FC<ShoppingCartProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 mr-0 ml-auto z-50 bg-white flex flex-col transition-all duration-300 max-w-[340px] w-full mx-4 ${
        isOpen
          ? "opacity-100 visible"
          : "opacity-0 invisible pointer-events-none translate-x-full"
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b border-gray-200">
        <h2 className="xl:text-2xl lg:text-xl md:text-base text-2sm font-bold text-black leading-none">Shopping cart</h2>
        <button
          onClick={onClose}
          className="flex items-center text-black hover:text-primary md:text-sm text-xs"
        >
          <CgClose className="lg:text-base md:text-2sm text-sm mr-2" />
          <span>Close</span>
        </button>
      </div>

      <div className="overflow-y-auto">
        <div className="p-4 border-b border-[#0000001b] last:border-none hover:bg-[#f7f7f7]">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <img
                src="/src/assets/images/sps-flooring/flooring-img.png"
                alt="ALPINE 22MIL BARRY OAK"
                className="w-16 h-12 object-cover rounded"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-black leading-none font-medium uppercase lg:text-sm md:text-[14px] text-[12px]">
                ALPINE 22MIL BARRY OAK
              </h3>
              <div className="flex items-center justify-between mt-2">
                <div className="text-black lg:text-sm md:text-[14px] text-[12px]">
                  <span>2 × </span>
                  <span className="text-primary font-semibold">$95.32</span>
                </div>
              </div>
            </div>
            <button className="text-black hover:text-primary">
              <CgClose className="lg:text-base md:text-2sm text-sm" />
            </button>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 border-t border-gray-200 mt-auto">
        <div className="flex justify-between items-center">
          <span className="font-bold text-black">Subtotal:</span>
          <span className="text-primary font-semibold text-lg">$95.32</span>
        </div>
      </div>

      <div className="px-6 space-y-3 md:pb-4 pb-2">
        <button className="w-full bg-gray-200 text-black py-3 px-4 rounded-lg font-medium hover:bg-gray-300 transition-colors">
          View cart
        </button>
        <button className="w-full bg-primary text-white py-3 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center">
          <span>Checkout</span>
        </button>
      </div>
    </div>
  );
};

export default ShoppingCart;

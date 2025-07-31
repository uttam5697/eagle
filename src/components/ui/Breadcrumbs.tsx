import React from 'react';
import { BiChevronRight } from 'react-icons/bi';
import { BsChevronDoubleRight, BsChevronRight } from 'react-icons/bs';
import { FaAnglesRight } from 'react-icons/fa6';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom'; // or 'next/link' if you're using Next.js

type BreadcrumbItem = {
  label: string;
  href?: string; // Optional – no href means it's the current page
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="text-sm md:text-base px-4 py-2 text-[#1a1a1a]">
      <ol className="flex items-center flex-wrap gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <React.Fragment key={index}>
              {item.href && !isLast ? (
                <li className='font-light'>
                  <Link to={item.href} className="hover:underline">
                    {item.label}
                  </Link>
                </li>
              ) : (
                <li>
                  <span className="font-semibold ">
                    {item.label}
                  </span>
                </li>
              )}
              {!isLast && (
                <li>
                  <span>
                    <BsChevronDoubleRight  /> 
                  </span>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;

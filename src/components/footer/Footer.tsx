import { FiMapPin, FiPhoneCall } from "react-icons/fi";
import { Logo, PayCard, PayCard2, PayCard3, PayCard4, PayCard5 } from "../../assets/Index";
import { PiEnvelopeSimple } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useFooter } from "../../api/home";

export default function Footer() {
   const { data: generaldata } = useFooter(false);
  return (
    <footer className="bg-black xl:py-[50px] lg:py-[40px] md:py-[30px] py-[20px] pb-8">
      <div className="container">
        <div className="grid grid-cols-12 gap-4 mb-8">
          <div className="xl:col-span-7 lg:col-span-5 md:col-span-4 sm:col-span-2 col-span-12">
            <img
              src={Logo}
              alt="Eagle Logo"
              className="xl:h-[112px] lg:h-[92px] md:h-[72px] h-[52px]"
            />
          </div>
          <div className="xl:col-span-5 lg:col-span-7 md:col-span-8 sm:col-span-10 col-span-12 grid grid-cols-3">
            <div>
              <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] leading-none 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base text-white font-playfairDisplay italic ">
                Link
              </h3>
              <ul className="space-y-2 navbar">
                <li>
                  <Link
                    to={"/"}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about-us"}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact-us"}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] leading-none 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base text-white font-playfairDisplay italic ">
                Social
              </h3>
              <ul className="space-y-2 navbar">
                <li>
                  <Link
                    to={generaldata?.linkedin}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    to={generaldata?.instagram}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to={generaldata?.twitter}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    Twitter
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] leading-none 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base text-white font-playfairDisplay italic ">
                Documents
              </h3>
              <ul className="space-y-2 navbar">
                <li>
                  <Link
                    to={"/privacy-policy"}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/terms-and-conditions"}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/contact-us"}
                    className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-x-4 md:gap-y-8 gap-y-6 xl:mb-[54px] lg:mb-[44px] md:mb-[34px] sm:mb-[24px] mb-[14px]">
          <div className="xl:col-span-7 lg:col-span-5 col-span-12">
            <div className="flex gap-3 items-center lg:mb-6 md:mb-5 sm:mb-4 mb-3">
              <span className="md:w-[38px] md:h-[38px] w-[30px] h-[30px] flex-none border border-white rounded-full text-white flex items-center justify-center">
                <FiMapPin className="lg:text-[18px] md:text-[16px] text-[14px]" />
              </span>
              <p className="text-white md:text-sm text-[14px]">
                {generaldata?.address}
              </p>
            </div>
            <div className="flex xl:gap-10 lg:gap-8 md:gap-6 gap-4 flex-wrap">
              <div className="flex gap-3 items-center">
                <span className="md:w-[38px] md:h-[38px] w-[30px] h-[30px] flex-none border border-white rounded-full text-white flex items-center justify-center">
                  <FiPhoneCall className="lg:text-[18px] md:text-[16px] text-[14px]" />
                </span>
                <a
                  className="text-white md:text-sm text-[14px]"
                  href={"tel:" + generaldata?.contact_no}
                >
                  {generaldata?.contact_no}
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <span className="md:w-[38px] md:h-[38px] w-[30px] h-[30px] flex-none border border-white rounded-full text-white flex items-center justify-center">
                  <PiEnvelopeSimple className="lg:text-[18px] md:text-[16px] text-[14px]" />
                </span>
                <a
                  className="text-white md:text-sm text-[14px]"
                  href={"mailto:" + generaldata?.email}
                >
                  {generaldata?.email}
                </a>
              </div>
            </div>
          </div>
          <div className="xl:col-span-5 lg:col-span-7 col-span-12">
            {/* <h3 className="text-white xl:text-xl lg:text-base md:text-2sm text-sm lg:mb-4 md:mb-3 mb-2">
              Sign up for Updates
            </h3> */}
            {/* <form className="flex items-center border border-white rounded-full overflow-hidden mb-[10px]">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 bg-black w-full text-white md:px-5 px-3 py-2 focus:outline-none"
                required
              />
              <button
                type="submit"
                className="flex white-btn md:text-sm text-[14px] group m-1 lg:gap-8 md:gap-6 gap-2 lg:p-4 md:p-3 p-2 font-medium"
              >
                <span className="leading-none">Submit</span>
                <FiArrowUpRight className="text-2sm group-hover:rotate-45 duration-300 transition-all" />
              </button>
            </form> */}
            <p className="text-white font-light text-[14px]">
              By submitting, you agree to our{" "}
              <Link to={"/privacy-policy"} className="font-semibold underline">
                Terms & Conditions
              </Link>{" "}
              and{" "}
              <Link to={"/terms-and-conditions"} className="font-semibold underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <hr className="border-t border-white/30" />
      <div className="container">
        <div className="flex items-center justify-between flex-wrap gap-4 xl:pt-10 lg:pt-8 md:pt-6 pt-4">
          <p className="font-light md:text-sm text-[14px] text-white">
            Copyright © 2025 Eagle Flooring Depot All Rights Reserved
          </p>
          <div className="flex lg:gap-[10px] md:gap-2 gap-1">
            <img src={PayCard} alt="PayCard" />
            <img src={PayCard2} alt="PayCard2" />
            <img src={PayCard3} alt="PayCard3" />
            <img src={PayCard4} alt="PayCard4" />
            <img src={PayCard5} alt="PayCard5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

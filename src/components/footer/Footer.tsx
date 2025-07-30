import { Logo } from "../../assets/Index";

export default function Footer() {
  return (
    <footer className="bg-black xl:py-[60px] lg:py-[50px] md:py-[40px] py-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-8">
          <div className="md:col-span-2">
            <img
              src={Logo}
              alt="Eagle Logo"
              className="xl:h-[112px] lg:h-[92px] md:h-[72px] h-[52px]"
            />
          </div>

          <div>
            <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] leading-none 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base text-white font-playfairDisplay italic ">Link</h3>
            <ul className="space-y-2 navbar">
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] leading-none 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base text-white font-playfairDisplay italic ">Social</h3>
            <ul className="space-y-2 navbar">
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] leading-none 2xl:text-3xl xl:text-2xl lg:text-2xl md:text-xl text-base text-white font-playfairDisplay italic ">Documents</h3>
            <ul className="space-y-2 navbar">
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white font-light before:!-bottom-1 after:!-bottom-1 transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

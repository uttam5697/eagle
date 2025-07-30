import { FooterLogo } from "../../assets/Index";

export default function Footer() {
  return (
    <footer className="bg-black xl:py-[60px] lg:py-[50px] md:py-[40px] py-[30px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-4 mb-8">
          <div className="md:col-span-2">
            <img
              src={FooterLogo}
              alt="Eagle Logo"
              className="lg:h-[100px] md:h-[80px] h-[50px]"
            />
          </div>

          <div>
            <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] 2xl:text-4xl xl:text-3xl md:text-xl text-base text-primary font-playfairDisplay italic ">Link</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] 2xl:text-4xl xl:text-3xl md:text-xl text-base text-primary font-playfairDisplay italic ">Social</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="lg:mb-[34px] md:mb-[24px] mb-[14px] 2xl:text-4xl xl:text-3xl md:text-xl text-base text-primary font-playfairDisplay italic ">Documents</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary transition-colors text-sm"
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

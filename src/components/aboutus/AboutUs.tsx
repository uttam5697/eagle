import { AboutUsImg } from "../../assets/Index";
import ShoppingBrand from "../shoppingbrand/ShoppingBrand";
import WhatOurClients from "../whatourclients/WhatOurClients";

export default function AboutUs() {
  return (
    <>
    <div className="flex xl:mb-[100px] lg:mb-[80px] md:mb-[60px] mb-[40px]">
        <div className="bg-cover bg-center w-full h-full 2xl:min-h-[990px] xl:min-h-[890px] lg:min-h-[790px] md:min-h-[690px] sm:min-h-[590px] min-h-[490px] relative before:bg-black-light-gradient before:absolute before:w-full before:h-full before:z-1 after:bg-black-dark-light-gradient after:absolute after:w-full after:h-full after:top-0 after:z-1" style={{ backgroundImage: `url(${AboutUsImg})` }}>
            <div className="container relative z-10">
              <div className="mt-[191px]">
                <div className="max-w-[950px]">
                  <h1
                    className="text-white -tracking-[0.48px] 2xl:text-5xl xl:text-4.5xl 2xl:leading-[90px] xl:leading-[60px] leading-none lg:text-4xl md:text-3xl text-2xl font-light"
                    data-swiper-parallax="-1000"
                  >
                    Buckeye Floors supplies surfacing products across
                  </h1>
                  <div
                    className="text-white italic -tracking-[0.48px] 2xl:text-5xl xl:text-4.5xl lg:text-4xl md:text-3xl text-2xl xl:leading-none leading-normal font-playfairDisplay"
                    data-swiper-parallax="-1000"
                  >
                    Northeast America
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
    <section className="xl:mb-[100px] lg:mb-[80px] md:mb-[60px] mb-[40px]">
        <div className="container">
            <div className="xl:mb-[50px] lg:mb-[40px] md:mb-[30px] mb-[20px]">
                <h1 className="font-extralight 2xl:text-4.5xl xl:text-4xl lg:text-3xl md:text-2xl text-base xl:leading-none leading-normal">About Eagle</h1>
                <h1 className="text-black italic 2xl:text-5xl xl:text-4.5xl lg:text-4xl md:text-3xl text-2xl xl:leading-none leading-normal font-playfairDisplay -mt-3">Buckeye Floors</h1>
            </div>
            <div className="flex flex-col gap-4">
                <p className="font-light xl:text-2sm lg:text-sm md:text-[14px] text-[12px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <p className="font-light xl:text-2sm lg:text-sm md:text-[14px] text-[12px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is  simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
        </div>
    </section>
    <WhatOurClients />
    <ShoppingBrand />
    </>
  )
}

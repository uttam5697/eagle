import SpsFlooring from "./spsflooring/SpsFlooring.js";
import WeeklyBestsellers from "./weeklybestsellers/WeeklyBestsellers.js";
import HeroSlider from "./heroslider/HeroSlider.js";
// import ShoppingBrand from "./shoppingbrand/ShoppingBrand.js";
import WhatOurClients from "./whatourclients/WhatOurClients.js";
import { useHome } from "../api/home.js";

const Home: React.FC = () => {
  const { data: articleData } = useHome(false);

  return <>
    <HeroSlider homedatabanner={articleData?.banner} />
    <SpsFlooring productCategory={articleData?.product_category
    } />
    <WeeklyBestsellers />
    <WhatOurClients />
    {/* <ShoppingBrand /> */}
  </>
}
export default Home;

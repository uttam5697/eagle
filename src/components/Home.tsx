import SpsFlooring from "./spsflooring/SpsFlooring.js";
import WeeklyBestsellers from "./weeklybestsellers/WeeklyBestsellers.js";
import HeroSlider from "./heroslider/HeroSlider.js";
// import ShoppingBrand from "./shoppingbrand/ShoppingBrand.js";
import WhatOurClients from "./whatourclients/WhatOurClients.js";

const Home: React.FC = () => {  return <>
  <HeroSlider />
  <SpsFlooring />
  <WeeklyBestsellers />
  <WhatOurClients />
  {/* <ShoppingBrand /> */}
  </>
}
export default Home;

import {SpsFlooring, HeroSlider,WeeklyBestsellers } from "./index.js";
import ShoppingBrand from "./shoppingbrand/ShoppingBrand.js";
import WhatOurClients from "./whatourclients/WhatOurClients.js";

export default function Home() {
  return <>
  <HeroSlider />
  <SpsFlooring />
  <WeeklyBestsellers />
  <WhatOurClients />
  <ShoppingBrand />
  </>
}


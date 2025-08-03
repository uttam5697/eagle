import React from "react";
import SpsFlooring from "./spsflooring/SpsFlooring";
import WeeklyBestsellers from "./weeklybestsellers/WeeklyBestsellers";
import HeroSlider from "./heroslider/HeroSlider";
import WhatOurClients from "./whatourclients/WhatOurClients";
import { useHome } from "../api/home";
import AnimatedSection from "./ui/AnimatedSection";

const Home: React.FC = () => {
  const { data: homescreenData } = useHome(false);

  return (
    <>
      <AnimatedSection direction="up" delay={0.2}>
        <HeroSlider homedatabanner={homescreenData?.banner} />
      </AnimatedSection>
      <AnimatedSection direction="up" delay={0.3}>
        <SpsFlooring productCategory={homescreenData?.product_category} />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.3}>
        <WeeklyBestsellers />
      </AnimatedSection>

      <AnimatedSection direction="up" delay={0.3}>
        <WhatOurClients />
      </AnimatedSection>
    </>
  );
};

export default Home;

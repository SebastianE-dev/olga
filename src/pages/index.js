import React from "react";
import { usePage } from "../hooks";
import {
  HeroSection,
  FeaturesSection,
  ExtraSection,
  ExtraFeatures,
} from "../components";

const Index = () => {
  const data = usePage();
  return (
    <div>
      {data.map(section => {
        const name = section.sectionName;
        switch (name) {
          case "hero":
            return <HeroSection {...section} key={section.id} />;
          case "faetures":
            return <FeaturesSection {...section} key={section.id} />;
          case "extra":
            return <ExtraSection {...section} key={section.id} />;
          case "extraFeatures":
            return <ExtraFeatures {...section} key={section.id} />;
          default:
            return <p key="error">upps</p>;
        }
      })}
    </div>
  );
};

export default Index;

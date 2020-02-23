import React from "react";
import { usePage } from "../hooks";
import { HeroSection } from "../components";

const Index = () => {
  const data = usePage();
  console.log(data);
  return (
    <div>
      {data.map(section => {
        const name = section.sectionName;
        switch (name) {
          case "hero":
            return <HeroSection {...section} key={section.id} />;
          default:
            return <p>upps</p>;
        }
      })}
    </div>
  );
};

export default Index;

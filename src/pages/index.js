import React from "react";
import { usePage } from "../hooks";

const Index = () => {
  const data = usePage();
  console.log(data);
  return <div></div>;
};

export default Index;

import React from "react";

import About from "../about";
import Contact from "../contact";
import Discount from "../discount"
import Home from "../home";
import Manu from "../manu";
import Service from "../service";

function Main() {
  return (
    <>
      <Home/>
      <About/>
      <Discount/>
      <Manu/>
      <Service/>
      <Contact/>
    </>
  );
}

export default Main;
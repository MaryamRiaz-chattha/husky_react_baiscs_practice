import React from "react";
import Image from "next/image";
import MyButton from "./components/button";

import { AboutPage } from "./components/aboutpage";
import Profile from "./components/displaydata";
import ConditionalRendering from "./components/conditionalrendering";
import RenderingList from "./components/renderinglist";

export default function Home() {
  return (
   <div>
    
      <MyButton />
      <MyButton/>
      <AboutPage />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <section>
          <AboutPage />
        </section>
      </div>

<Profile />
<ConditionalRendering/>
< RenderingList/>
    
   </div>
  );
}

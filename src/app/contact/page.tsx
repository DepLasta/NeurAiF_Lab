import Navbar from "@/components/mycomponents/navbar";
import { MyGoogleGeminiEffect } from "@/components/mycomponents/gemini";
import React from "react";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";

const page = () => {
  return (
    <div>
      <SmokeyCursor
        curl={10}
        splatForce={12000}
        densityDissipation={1.5}
        colorUpdateSpeed={20}
        backgroundColor={{ r: 0.8, g: 0.1, b: 0 }}
      />
      <Navbar />
      <MyGoogleGeminiEffect />
    </div>
  );
};

export default page;

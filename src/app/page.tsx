import Image from "next/image";
import AnimatedWave from "@/components/lightswind/AnimatedWave";
import { InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import Navbar from "@/components/mycomponents/navbar";
import { Piller } from "@/components/mycomponents/piller";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { Slogan } from "@/components/mycomponents/slogan";
import { GradientButton } from "@/components/lightswind/gradient-button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="font-nasalization">
      <SmokeyCursor
        curl={10}
        splatForce={12000}
        densityDissipation={1.5}
        colorUpdateSpeed={20}
        backgroundColor={{ r: 0.8, g: 0.1, b: 0 }}
      />

      <main className="flex flex-col">
        <Navbar />
        <div className="mt-20">
          <TextHoverEffect text="NeurAif" />
        </div>
        <div className="p-5">
          <Slogan />
        </div>
        <Link href="/about">
          <div className="flex items-center justify-center">
            <GradientButton variant="ghost" animationSpeed={1}>
              Explore our Vision
            </GradientButton>
          </div>
        </Link>
        <div className="relative bg-black rounded-4xl overflow-hidden m-20">
          <div className="relative w-full h-[400px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[400px] aspect-square">
            <AnimatedWave className="!relative !z-0 w-full h-full" />
            <h1 className="absolute inset-0 flex items-center justify-center z-1 text-2xl md:text-4xl lg:text-6xl text-white">
              Vector Space <InlineMath math=":\mathbb{R}^n" />
            </h1>
          </div>
        </div>
        <Piller />
        <div className="h-[40rem] flex items-center justify-center">
          <TextHoverEffect text="NeurAif" />
        </div>
      </main>
    </div>
  );
}

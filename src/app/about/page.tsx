"use client";
import React from "react";
import { Abouthead } from "@/components/mycomponents/abouthead";
import Navbar from "@/components/mycomponents/navbar";
import MagicLoader from "@/components/lightswind/magic-loader";
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline";
import { MyWorldMap } from "@/components/mycomponents/world";
import {
  GlowingCards,
  GlowingCard,
} from "@/components/lightswind/glowing-cards";
import SmokeyCursor from "@/components/lightswind/smokey-cursor";
const page = () => {
  return (
    <div className="bg-slate-950 text-white">
      <SmokeyCursor
        curl={10}
        splatForce={12000}
        densityDissipation={1.5}
        colorUpdateSpeed={20}
        backgroundColor={{ r: 0.8, g: 0.1, b: 0 }}
      />
      <Navbar />
      <Abouthead />
      <div className="flex flex-col items-center justify-center p-10 ">
        <GlowingCards
          enableGlow={true}
          glowRadius={30}
          glowOpacity={0.8}
          animationDuration={500}
          gap="3rem"
          responsive={true}
          className="max-w-4xl min-h-80">
          <GlowingCard glowColor="#8929ff">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-extrabold text-white">
                Our Mission
              </h1>
            </div>
            <p className="text-justify p-10 text-white/90">
              To develop neural-native AI systems that: Learn from real-time
              brain signals Visualize inner mental states Enhance and amplify
              human cognition Redefine what it means for a machine to be
              intelligent
            </p>
          </GlowingCard>
          <GlowingCard glowColor="#29b0ff">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-extrabold text-white">Our Vision</h1>
            </div>
            <p className="text-justify p-10 text-white/90">
              A future where AI is no longer disconnected from the mind, but
              emerges with it. Where thought is visualized, emotion is
              understood, and cognitive energy is amplified. In this future, AI
              does not replace us — it evolves with us.
            </p>
          </GlowingCard>
        </GlowingCards>
        <h1 className="text-4xl font-bold mb-8 mt-10">
          We are a cognitive architecture lab.
        </h1>
        <p className="text-lg text-gray-700 text-justify mt-2 max-w-4xl">
          We design new kinds of intelligence — not by simulating the brain, but
          by fusing with its signals. At the intersection of neuroscience and
          artificial intelligence, we are engineering architectures that grow,
          reflect, feel, and evolve. We work with neural data like EEG and
          fNIRS. We build architectures like Kolmogorov-Arnold Networks, spiking
          systems, and gradient-free models. We imagine minds — and then
          prototype them.
        </p>
        <h1 className="text-4xl font-bold mb-8 mt-10">What Do We Believe?</h1>
        <p className="text-lg text-gray-700 text-justify mt-2 max-w-4xl">
          Artificial Intelligence today is built to see and predict. We believe
          tomorrow’s AI must be built to think, dream, feel, and become.
          Perception is not cognition. Neural signals are not noise — they are
          code. Biological intelligence is dynamic, self-structuring, and
          energetic. AI should be too. We are not trying to commercialize
          consciousness. We are trying to understand it — and then co-create
          with it.
        </p>
      </div>
      <MagicLoader
        size={500}
        particleCount={3}
        speed={1.2}
        hueRange={[0, 40]}
      />
      <MyWorldMap />
      <ScrollTimeline
        events={events}
        title="The Journey"
        subtitle="Scroll to explore the timeline"
        progressIndicator={true}
        cardAlignment="alternating"
        revealAnimation="fade"
        animationOrder="sequential"
        cardEffect="glow"
        cardVariant="outlined"
        dateFormat="badge"
        className="bg-slate-950 text-white"
      />
    </div>
  );
};

export default page;

const events = [
  {
    year: "2023",
    title: "The Beginning",
    subtitle: "Neuraif Lab",
    description: "With the goal of creating a new kind of AI.",
  },
  {
    year: "2024",
    title: "First Breakthrough",
    subtitle: "Biological Intelligence",
    description: "Developed a prototype that learns from neural signals.",
  },
  {
    year: "2025",
    title: "First Publication",
    subtitle: "KANets",
    description: "Published our first paper on Kolmogorov-Arnold Networks.",
  },
  {
    year: "2026",
    title: "Next",
    subtitle: "Graph Neural Networks",
    description: "Exploring the potential of GNNs in cognitive architectures.",
  },
];

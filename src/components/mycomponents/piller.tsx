"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export function Piller() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-200 font-sans">
        Core Research Themes
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const NeuralDataCentricAI = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 md:p-14 rounded-3xl mb-2 shadow-lg">
      <p className="text-white/70 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-50">
          Signals become code. Brains become training sets.
        </span>{" "}
        Neuraif explores models that are trained not on pixels or text, but on
        neural data itself. We use EEG, fNIRS, and brainwave dynamics as raw
        material — designing architectures like Kolmogorov-Arnold Networks,
        temporal transformers, and spiking models that decode cognition at the
        signal level. This is intelligence that originates in biology, not
        statistics.
      </p>
    </div>
  );
};

const MachineCognition = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 md:p-14 rounded-3xl mb-2 shadow-lg">
      <p className="text-white/70 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-50">
          Perception is not enough. We build machines that think.
        </span>{" "}
        Our focus is meta-cognition: the mind’s ability to reflect on itself. We
        design models that simulate memory, internal dialogue, planning, and
        attention — integrating concepts from neuroscience, cognitive science,
        and symbolic reasoning into AI. These are not tools that classify. They
        are agents that wonder.
      </p>
    </div>
  );
};

const MindVisualization = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 md:p-14 rounded-3xl mb-2 shadow-lg">
      <p className="text-white/70 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-50">
          Render thought. Project intention. Visualize emotion.
        </span>{" "}
        What if you could see your mind? At Neuraif, we translate neural signals
        into interpretable visuals — waves of focus, color-mapped arousal, or
        generative renderings of thought patterns. We combine deep learning with
        neuroimaging to create maps of emotion, clarity, intention, and
        cognition. This is what your brain looks like — from the inside.
      </p>
    </div>
  );
};

const HyperhumanCognitiveEnhancement = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 md:p-14 rounded-3xl mb-2 shadow-lg">
      <p className="text-white/70 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-50">
          Architectures that evolve. Minds that grow.
        </span>{" "}
        We experiment with biologically inspired models that exhibit digital
        neurogenesis — dynamic networks that grow, self-structure, and adapt.
        Free from gradient descent, these systems evolve with logic closer to
        biology than backpropagation. Our goal: build agentic AI that
        collaborates with the human mind, not just imitates it.
      </p>
    </div>
  );
};

const EnergeticCognition = () => {
  return (
    <div className="bg-white/10 backdrop-blur-lg border border-white/30 p-8 md:p-14 rounded-3xl mb-2 shadow-lg">
      <p className="text-white/70 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-50">
          Flow. Fatigue. Clarity. Quantified.
        </span>{" "}
        The brain is not just a signal system — it is an energy system. We model
        transitions between mental states like burnout, focus, alertness, and
        rest — based on bioelectric signatures in EEG and biosignals. Our
        systems detect when the mind is drained or surging, and provide feedback
        to help users align with their peak cognitive rhythms.
      </p>
    </div>
  );
};

const data = [
  {
    category:
      "We train AI directly on neural signals.EEG, MEG, and fNIRS become the language of the machine.",
    title: "Neural Data-Centric AI",
    src: "/research1.jpg",
    content: <NeuralDataCentricAI />,
  },
  {
    category:
      "We move beyond vision and language.Toward reasoning, abstraction, self-awareness, and memory.",
    title: "Machine Cognition",
    src: "/research2.jpg",
    content: <MachineCognition />,
  },
  {
    category:
      "Thoughts become visuals.Emotions rendered in light.Intention seen — for the first time.",
    title: "Mind Visualization",
    src: "/research3.jpg",
    content: <MindVisualization />,
  },

  {
    category:
      "Self-growing networks.Architectures that learn without gradients.AI that co-thinks with humans.",
    title: "Hyperhuman Cognitive Enhancement",
    src: "/research4.jpg",
    content: <HyperhumanCognitiveEnhancement />,
  },
  {
    category:
      "Fatigue. Flow. Vitality.We model brain energy to optimize cognitive performance.",
    title: "Energetic Cognition",
    src: "/research5.jpg",
    content: <EnergeticCognition />,
  },
];

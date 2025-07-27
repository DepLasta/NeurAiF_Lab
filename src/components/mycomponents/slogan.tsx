"use client";
import { ScrollReveal } from "@/components/lightswind/scroll-reveal";
export const Slogan = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <ScrollReveal size="md" align="center" variant="accent">
        If Neuroscience fuses with Artificial Intelligence.
      </ScrollReveal>
      <ScrollReveal size="sm" align="center" variant="accent">
        We are not building another neural network. We are building intelligence
        born from neurons.
      </ScrollReveal>
      <ScrollReveal size="sm" align="center" variant="accent">
        AI that feels, reflects, dreams, and evolves.
      </ScrollReveal>
    </div>
  );
};

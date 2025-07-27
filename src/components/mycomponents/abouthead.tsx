"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";

export function Abouthead() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-6xl font-medium tracking-tight text-transparent md:text-7xl">
        ABOUT US
      </motion.h1>
    </LampContainer>
  );
}

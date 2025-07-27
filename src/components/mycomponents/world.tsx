"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function MyWorldMap() {
  return (
    <div className=" py-40 bg-slate-950 w-full p-10">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl text-slate-200">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}>
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          Break free from traditional boundaries. Work from anywhere, at the
          comfort of your own space.
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 50.1109,
              lng: 8.6821, // Frankfurt
            }, // Frankfurt
            end: {
              lat: 21.9588,
              lng: 96.0891,
            }, // Mandalay, Myanmar
          },
          {
            start: { lat: 21.9588, lng: 96.0891 }, // Mandalay, Myanmar
            end: { lat: 13.7563, lng: 100.5018 }, // Bangkok, Thailand
          },
          {
            start: {
              lat: 37.7749,
              lng: 122.4194,
            },
            end: { lat: 50.1109, lng: -8.6821 },
          },
        ]}
      />
    </div>
  );
}

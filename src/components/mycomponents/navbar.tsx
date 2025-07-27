"use client";

import { MorphingNavigation } from "@/components/lightswind/morphing-navigation";
import Image from "next/image";
export default function Navbar() {
  return (
    <MorphingNavigation
      links={[
        {
          id: "neuraif",
          label: "neuraif",
          href: "/",
        },
        {
          id: "about",
          label: "about",
          href: "/about", 
        },
        {
          id: "join",
          label: "join",
          href: "/join",
        },
        {
          id: "contact",
          label: "contact",
          href: "/contact",
        },
      ]}
      theme="glass"
      backgroundColor="rgba(0, 0, 0, 0.05)"
      textColor="#ffffff"
      borderColor="rgba(59, 130, 246, 0.3)"
      scrollThreshold={100}
      animationDuration={1.5}
      enablePageBlur={true}
      onMenuToggle={(isOpen) => console.log("Menu:", isOpen)}
      customHamburgerIcon={
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}>
          <Image
            src="/NeuraifLogo.svg"
            alt="Menu"
            width={24}
            height={24}
            style={{ filter: "invert(1)" }}
          />
        </div>
      }
    />
  );
}

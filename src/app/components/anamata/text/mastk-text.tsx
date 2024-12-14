"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

import { useMousePosition } from "../../../libs/helpers/useMousePosition";
import { cn } from "../../../libs/utils";

interface MaskTextProps extends React.HTMLAttributes<HTMLDivElement> {
  revealText: string;
  originalText: React.ReactNode | string;
}
export default function MaskText({
  revealText = "Hello World!",
  originalText = "Bye World!",
  className,
}: MaskTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });
  useMousePosition(containerRef, setMousePosition);
  const size = isHovered ? 100 : 10;

  const common = "flex  text-lg  leading-snug text-foreground";

  return (
    <div className={cn("relative", className)} ref={containerRef}>
      <motion.div
        className={cn(common, "absolute bg-purple-900")}
        style={{
          maskImage: "url(/circle.svg)",
          maskRepeat: "no-repeat",
          maskSize: "10px",
        }}
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      >
        <p
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {revealText}
        </p>
      </motion.div>

      <div className={common}>{originalText}</div>
    </div>
  );
}

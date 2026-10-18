"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  margin?: string;
}

export function MotionSection({
  children,
  delay = 0,
  direction = "up",
  className = "",
  margin = "-60px",
  ...props
}: MotionSectionProps) {
  const yOffset = direction === "up" ? 28 : direction === "down" ? -28 : 0;
  const xOffset = direction === "left" ? 28 : direction === "right" ? -28 : 0;

  return (
    <motion.section
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: margin as any }}
      transition={{
        duration: 0.65,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.section>
  );
}

export function MotionFadeIn({
  children,
  delay = 0,
  direction = "up",
  className = "",
  margin = "-50px",
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  margin?: string;
}) {
  const yOffset = direction === "up" ? 24 : direction === "down" ? -24 : 0;
  const xOffset = direction === "left" ? 24 : direction === "right" ? -24 : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: margin as any }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionCard({
  children,
  index = 0,
  className = "",
  hoverLift = true,
}: {
  children: ReactNode;
  index?: number;
  className?: string;
  hoverLift?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: 0.55,
        delay: Math.min(index * 0.08, 0.35),
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      whileHover={
        hoverLift
          ? {
              y: -5,
              transition: { duration: 0.22, ease: "easeOut" },
            }
          : undefined
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerContainer({
  children,
  className = "",
  staggerDelay = 0.09,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.21, 0.47, 0.32, 0.98],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0
    );
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "rgb(255, 255, 255)", // white
    "rgb(255, 255, 255)", // white
    "rgb(255, 255, 255)", // white
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgb(0, 128, 128), rgb(155, 207, 85))", // teal to lime
    "linear-gradient(to bottom right, rgb(0, 128, 128), rgb(155, 207, 85))", // teal to lime
    "linear-gradient(to bottom right, rgb(0, 128, 128), rgb(155, 207, 85))", // teal to lime
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(
    linearGradients[0]
  );

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <div className="w-full" ref={ref}>
      <motion.div
        animate={{
          backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        }}
        className="w-full flex justify-between relative gap-8 p-8 sm:p-12 lg:p-16"
      >
        <div className="flex-1 flex items-start px-4 max-w-2xl">
          <div className="w-full">
            {content.map((item, index) => (
              <div key={item.title + index} className="my-16 sm:my-20">
                <motion.h2
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-2xl sm:text-3xl font-bold text-teal-700"
                >
                  {item.title}
                </motion.h2>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: activeCard === index ? 1 : 0.3,
                  }}
                  className="text-base sm:text-lg text-gray-600 max-w-sm mt-10"
                >
                  {item.description}
                </motion.p>
              </div>
            ))}
            <div className="h-40" />
          </div>
        </div>
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "hidden lg:block h-80 w-96 rounded-md bg-white sticky top-20 overflow-hidden flex-shrink-0",
            contentClassName
          )}
        >
          {content[activeCard].content ?? null}
        </div>
      </motion.div>
    </div>
  );
};

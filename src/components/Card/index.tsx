"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
  KeyboardArrowLeftRounded,
  KeyboardArrowRightRounded,
} from "@mui/icons-material";

interface CardTypeProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export default function Card({ frontContent, backContent }: CardTypeProps) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      isFlipped ? setShowContent(true) : setShowContent(false);
    }, 300);
  }, [isFlipped]);

  return (
    <>
      <motion.div
        className="relative w-[400px] h-[268px] flex justify-center items-center rounded-large bg-custom-black overflow-hidden"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 1 }}
      >
        <KeyboardArrowLeftRounded
          onClick={() => setIsFlipped(!isFlipped)}
          className="animate-pulse text-white hover:cursor-pointer z-10"
        />
        <Image
          src="/background-card-stars.png"
          alt="I am not a robot."
          fill
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <Image
          src="/background-card-elipse.png"
          alt="I am not a robot."
          fill
          className="absolute top-0 left-0 h-full w-full object-cover"
        />
        <div className="flex align-center justify-center w-full">
          {!showContent ? frontContent : backContent}
        </div>
        <KeyboardArrowRightRounded
          onClick={() => setIsFlipped(!isFlipped)}
          className="animate-pulse text-white hover:cursor-pointer z-10"
        />
      </motion.div>
    </>
  );
}

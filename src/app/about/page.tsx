"use client";

import Card from "@/components/Card";
import CardBar from "@/components/CardBar";
import { Email, GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  const frontContent = (
    <>
      <Image
        src="/profile.png"
        alt="I am not a robot."
        width={190}
        height={300}
      />
      <CardBar name="Luan Oliveira" email="engluanoliv@gmail.com" />
    </>
  );

  // The card is updated with only the front content.
  // The back one was moved to CardBar.
  // const backContent = (
  //   <>
  //     <div className="flex items-center justify-center z-10 [transform:rotateY(180deg)]">
  //       <Link
  //         target="_blank"
  //         href={`https://instagram.com/engluanoliv`}
  //         className="hover:cursor-pointer text-white px-2 hover:scale-110"
  //       >
  //         <Instagram />
  //       </Link>
  //       <Link
  //         target="_blank"
  //         href={`https://linkedin.com/in/engluanoliv`}
  //         className="hover:cursor-pointer text-white px-2 hover:scale-110"
  //       >
  //         <LinkedIn />
  //       </Link>
  //       <Link
  //         target="_blank"
  //         href={`https://github.com/engluanoliv`}
  //         className="hover:cursor-pointer text-white px-2 hover:scale-110"
  //       >
  //         <GitHub />
  //       </Link>
  //       <Link
  //         target="_blank"
  //         href={`mailto:engluanoliv@gmail.com`}
  //         className="hover:cursor-pointer text-white px-2 hover:scale-110"
  //       >
  //         <Email />
  //       </Link>
  //     </div>
  //   </>
  // );

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex min-h-screen flex-col items-center justify-center p-20"
    >
      <Card frontContent={frontContent} />
    </motion.main>
  );
}

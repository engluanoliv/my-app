"use client";

import { motion } from "framer-motion";

interface TemplateTypeProps {
  children: React.ReactNode;
}

export default function Template({ children }: TemplateTypeProps) {
  return (
    <>
      <motion.div>{children}</motion.div>
    </>
  );
}

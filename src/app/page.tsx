"use client";

import Button from "@/components/Button";
import Modal from "@/components/Modal/intex";
import Link from "next/link";
import { useState } from "react";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [firstTypedCompleted, setFirstTypedCompleted] =
    useState<boolean>(false);
  const [secondTypedCompleted, setSecondTypedCompleted] =
    useState<boolean>(false);
  const [thirdTypedCompleted, setThirdTypedCompleted] =
    useState<boolean>(false);

  function handleOpenModal() {
    setShowModal((prevValue) => !prevValue);
  }

  function handleCloseModal() {
    setShowModal(false);
  }

  function handleThirdTypedCompleted() {}

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-20 ">
        <p className="text-8xl font-lato text-custom-green">
          <ReactTyped
            strings={["Hello,"]}
            typeSpeed={80}
            showCursor={false}
            onComplete={() => setFirstTypedCompleted(true)}
          />
        </p>
        {firstTypedCompleted && (
          <p className="text-2xl font-lato text-custom-green">
            <ReactTyped
              strings={["my name is Luan and I am a Full"]}
              typeSpeed={80}
              showCursor={false}
              onComplete={() => setSecondTypedCompleted(true)}
            />
          </p>
        )}
        {secondTypedCompleted && (
          <p className="text-2xl pb-4 font-lato text-custom-green">
            <ReactTyped
              strings={["Stack Developer from Brazil"]}
              typeSpeed={80}
              showCursor={false}
              onComplete={() => setThirdTypedCompleted(true)}
            />
          </p>
        )}
        {firstTypedCompleted && secondTypedCompleted && thirdTypedCompleted && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-start items-center"
          >
            <Link href="/about">
              <Button title="About" />
            </Link>
            <Button onClick={handleOpenModal} title="Contact" />
          </motion.div>
        )}
        <Modal showModal={showModal} onClose={handleCloseModal} />
      </main>
    </>
  );
}

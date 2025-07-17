// src/components/AboutClub.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutClub = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };

  // const textVariants = {
  //   hidden: { opacity: 0, y: 20 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.5, ease: "easeOut" },
  //   },
  // };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.4 },
    },
  };

  return (
    <section id="about" className="bg-black py-16 md:py-24 text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-7xl font-inter font-bold text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h3
            className="text-4xl sm:text-9xl md:text-9xl font-inter font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-rose-500"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: "200% 200%",
            }}
          >
            ReelsClub
          </motion.h3>
          <span>nima?</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12 items-center justify-center text-center">
          <motion.div
            className="md:w-1/2 text-center flex flex-col items-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="font-inter text-white mb-5 text-2xl md:text-3xl font-bold text-left">
              <h1 className="text-4xl mb-4 font-bold">Agar siz:</h1>
              <ol className="list-decimal list-inside flex flex-col gap-2 font-semibold">
                <li>Ekspertsiz yoki coach/bloggersiz</li>
                <li>Instagramda sistemali kontent qilmoqchisiz</li>
                <li>“Nima chiqarsam ekan?” deb har kuni o‘ylaysiz</li>
                <li>Reels orqali mijoz va obunachilarni jalb qilmoqchisiz</li>
                <li>
                  Yordamchi muhit, motivatsiya va real natijalar kerak bo‘lsa
                </li>
              </ol>

              <h1 className="text-3xl mt-6 font-bold text-center">
                <motion.h2
                  className="text-4xl sm:text-9xl md:text-9xl font-inter font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-rose-500 "
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  ReelsClub
                </motion.h2>
                siz uchun!
              </h1>
            </div>
          </motion.div>

          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center p-4 text-center"
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <img
              src="/assets/IMG_9713.PNG"
              alt="ReelsClub haqida"
              className="rounded-xl shadow-2xl w-full h-auto object-cover max-w-none md:max-w-[600px] lg:max-w-[700px]"
              style={{ maxHeight: "600px" }}
            />
            <motion.h1
              className="text-3xl md:text-4xl font-inter font-bold mb-4 bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Amir Temurovich
            </motion.h1>
            <p className="font-inter text-neutral-500 text-xl">
              ReelsClub asoschisi
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutClub;

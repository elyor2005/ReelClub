// src/components/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { ElegantImage, ElegantShape } from "../components/shared/ElegantShape";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden bg-black pt-24  md:pt-30">
      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={300}
          height={100}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />
        <ElegantShape
          delay={0.5}
          width={500}
          height={60}
          rotate={-15}
          gradient="from-rose-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />
        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-violet-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />
        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-amber-500/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />
        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-cyan-500/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />

        {/* Image 1 */}
        <div className="opacity-50 ">
          <ElegantImage
            src="/assets/IMG_9726.PNG"
            alt="Floating Hero Image"
            width={200}
            height={200}
            rotate={10}
            delay={0.6}
            className="left-[5%] top-[20%] md:left-[10%] md:top-[15%] blur-md "
          />
        </div>

        {/* Image 2 */}
        <ElegantImage
          src="/assets/IMG_9726.PNG"
          alt="Floating Hero Image"
          width={80}
          height={100}
          rotate={-10}
          delay={0.8}
          className="right-[4%] top-[28%] md:right-[8%] md:top-[30%] z-50 blur-sm"
        />

        {/* Image 3 */}
        <ElegantImage
          src="/assets/IMG_9726.PNG"
          alt="Floating Hero Image"
          width={300}
          height={300}
          rotate={-15}
          delay={1.0}
          className="left-[-25%] bottom-[5%] md:left-[20%] md:bottom-[10%] blur"
        />

        {/* Image 4 */}
        <ElegantImage
          src="/assets/IMG_9726.PNG"
          alt="Floating Hero Image"
          width={200}
          height={200}
          rotate={-5}
          delay={1.2}
          className="right-[-15%] bottom-[0%] md:right-[15%] md:bottom-[12%] blur-sm"
        />

        {/* Image 5 */}
        <ElegantImage
          src="/assets/IMG_9726.PNG"
          alt="Floating Hero Image"
          width={80}
          height={200}
          rotate={15}
          delay={1.4}
          className="left-[50%] top-[70%] translate-x-[-50%] md:left-[60%] md:top-[50%] md:translate-x-0 opacity-40 blur-sm"
        />
      </div>
      <motion.div
        className="relative z-20 p-4 max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-7xl lg:text-9xl md:text-7xl font-inter font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-400 to-rose-500  md:mt-24"
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
          variants={itemVariants}
        >
          ReelsClub
        </motion.h1>
        <motion.h2
          className="text-3xl sm:text-6xl  md:text-6xl font-inter font-bold leading-tight bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent py-6 px-2"
          variants={itemVariants}
        >
          Ekspertlar uchun Reels orqali o‘sish klubi
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl py-6 font-inter text-cyan-700 font-semibold"
          variants={itemVariants}
        >
          Endi har bir Reels siz uchun <br /> imkoniyatg aylanadi.
        </motion.p>

        {/* CTA  */}
        <motion.button
          className=" font-inter bg-yellow-400  font-bold py-3 px-8 rounded-full text-lg sm:text-xl
                     hover:bg-white text-black transition duration-300 transform hover:scale-105
                     shadow-lg"
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="#pricing">Klubga Qo'shiling</a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;

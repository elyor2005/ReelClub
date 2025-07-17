// src/components/Footer.jsx
import React from "react";
import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "./const";
import SocialLink from "./shared/social-link";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.footer
      className="bg-black text-white py-12 md:py-16"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-center text-3xl font-inter font-bold text-[#FFD700]">
          Amir Temurovich
        </h1>
        <ul className="flex flex-wrap justify-center items-center gap-4 py-10 px-2 w-full">
          {SOCIAL_LINKS.map((item, index) => (
            <li key={index}>
              <SocialLink href={item.link} name={item.name} />
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-gray-800 pb-10"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-500 text-sm gap-3">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-center"
          >
            &copy; {new Date().getFullYear()} ReelsClub. Barcha huquqlar
            himoyalangan.
          </motion.p>
        </div>

        {/* Developer Credit */}
        <div className="mt-6 text-center text-xl text-gray-600">
          Created by{" "}
          <a
            href="https://dev-fattokhov.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#FFD700] hover:underline"
          >
            dev-fattokhov
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

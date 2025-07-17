// src/components/Pricing.jsx
import React from "react";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    name: "START",
    price: "$39",
    description: "Mustaqil o'sishni boshlash uchun ideal.",
    features: [
      "Kanal ichidagi barcha kontent",
      "Har haftalik Reels g‘oyalar",
      " 1 marotaba oyiga mastermind",
      "Community chatga kirish",
    ],
    isFeatured: false,
    link: "https://t.me/ReelsClub_AT",
  },
  {
    name: "PRO",
    price: "$69",
    description: "Jamoaviy qo'llab-quvvatlash va feedback.",
    features: [
      "START tarifidagi barcha xususiyatlar",
      "2 ta Reels sessiya (g‘oya + suratga olish + montaj)",
      "Shaxsiy kontent strategiya",
      " Mini-treninglar va feedback",
    ],
    isFeatured: true,
    link: "https://t.me/ReelsClub_AT",
  },
  {
    name: "MENTOR",
    price: "$129",
    description: "Individual yondashuv va shaxsiy mentorlik.",
    features: [
      "PRO tarifidagi barcha xususiyatlar",
      "4 ta Reels sessiya",
      "Profil auditi va shaxsiy ko‘mak",
      "Ustuvor texnik yordam",
    ],
    isFeatured: false,
    link: "https://t.me/ReelsClub_AT",
  },
];

const Pricing = () => {
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
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="pricing" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-5xl md:text-5xl font-inter font-bold text-center text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Tanlovingizni qiling
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              className={`bg-[#1E1E1E] p-8 rounded-lg shadow-xl text-center font-inter 
                ${
                  tier.isFeatured
                    ? "border-4 border-[#FFD700] scale-105 shadow-2xl relative z-10"
                    : "border border-gray-700"
                }
                hover:shadow-2xl transition-all duration-300 flex flex-col h-full`}
              variants={itemVariants}
              whileHover={{ scale: tier.isFeatured ? 1.07 : 1.03 }}
            >
              {tier.isFeatured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FFD700] text-black text-sm font-bold py-1 px-4 rounded-full shadow-md font-inter">
                  Eng Mashhur
                </div>
              )}
              <h3 className="text-3xl font-inter font-bold text-white mb-4">
                {tier.name}
              </h3>
              <p className="text-gray-300 mb-6 text-lg font-inter">
                {tier.description}
              </p>
              <div className="text-5xl font-bold text-white mb-6 font-inter">
                {tier.price}
              </div>
              <ul className="text-gray-300 text-left space-y-3 mb-8 flex-grow">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <span className="text-[#FFD700] text-xl mr-3 font-inter">
                      ✓
                    </span>{" "}
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full py-3 rounded-full text-lg font-semibold transition-all duration-300 font-inter
                  ${
                    tier.isFeatured
                      ? "bg-[#FFD700] text-black hover:bg-yellow-400"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }
                  shadow-md`}
              >
                <a href={tier.link} black="_target">
                  {tier.isFeatured ? "Hoziroq Qo'shiling" : "Tanlash"}
                </a>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;

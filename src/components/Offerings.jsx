// src/components/Offerings.jsx
import React from "react";
import { motion } from "framer-motion";
import { MdChat, MdDone, MdFeedback, MdTrendingUp } from "react-icons/md";
import { FaBrain, FaLightbulb } from "react-icons/fa";
// Icons qo'shish uchun react-icons kutubxonasidan foydalanishingiz mumkin, masalan:

const offeringsData = [
  {
    icon: <MdDone style={{ color: "green", fontSize: "32px" }} />, // Siz buni React-icons bilan almashtirishingiz mumkin
    title: "Reels sessiyalar  ",
    description:
      "Bu yerda sizga har oy trenddagi, sizning yo‘nalishingizga mos Reels g‘oyalari beriladi. G‘oya bilan cheklanmaymiz — suratga olish usullari, rakurslar, svet va montaj bo‘yicha ham sizga yordam beramiz. Siz faqat kamerani yoqib, ishlashingiz kerak bo‘ladi.",
  },
  {
    icon: <FaLightbulb style={{ color: "#FFD700", fontSize: "40px" }} />,
    title: "Kontent strategiyasi ",
    description:
      "Har kuni “Nima post qilaman?” degan savol sizni charchatgan bo‘lsa, bu bo‘lim aynan siz uchun. Kunlik, haftalik va oylik kontent rejasi, nima haqida gapirish, qanday formatda va qanday call-to-action bilan chiqish — hammasi sizga moslashtiriladi.",
  },
  {
    icon: <MdTrendingUp style={{ color: "#2196f3", fontSize: "32px" }} />,
    title: "Online master-klasslar ",
    description:
      "Har oy klub a’zolari uchun Reels, storytelling, brending, prodyuserlik va sotuvchi kontent yaratish bo‘yicha master-klasslar o‘tkaziladi. Bu bilimlarni siz real hayotga oson qo‘llay olasiz. Qimmatli, zamonaviy, vaqtingizni tejaydigan treninglar.",
  },
  {
    icon: <FaBrain style={{ color: "#ff4081", fontSize: "40px" }} />,
    title: "Idea brainstormlar",
    description:
      "Har hafta yoki ikki haftada bir marta biz umumiy chaqiruvda yig‘ilamiz va a’zolar bilan birga kontent g‘oyalarini ishlab chiqamiz. Bu sessiyalarda siz nafaqat o‘zingizga, balki boshqalarga ham ilhom bo‘lasiz. Bu haqiqiy jamoaviy o‘sish!",
  },
  {
    icon: <MdFeedback style={{ color: "#2196f3", fontSize: "32px" }} />,
    title: "Community / chat ",
    description:
      "Bu siz yolg‘iz emassiz degan joy. Klub ichida yopiq Telegram chat bo‘ladi, bu yerda savol-javob, muhokama, yordam va ruhiy support bor. Muammo chiqsa — yechim bor. Pastga tushsangiz — ko‘taramiz.",
  },
  {
    icon: <MdChat style={{ color: "#2196f3", fontSize: "32px" }} />,
    title: "Shaxsiy feedback (tarifga qarab) ",
    description:
      "Siz qilgan Reels’lar yoki kontentni ko‘rib chiqamiz, nima ishlayapti, nima yo‘q — barchasiga aniq tahlil va takliflar beriladi. Katta auditoriya oldiga chiqishdan oldin, ishonchli turtki olasiz.",
  },
];

const Offerings = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Har bir kartochkani kechikish bilan animatsiya qilish
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="offerings" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-inter font-bold text-center text-white mb-12 md:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Siz bu yerda
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {offeringsData.map((offering, index) => (
            <motion.div
              key={index}
              className="bg-black p-8 rounded-lg shadow-xl border-t-[6px] border-t-[#FFD700] flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300 text-white font-inter"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }} // Ustiga kelganda kichik kattalashish
            >
              <div className="text-5xl text-accent-gold mb-4">
                {/* Agar react-icons ishlatsangiz, bu yerda ikonkani joylaysiz, masalan: <FaCheckCircle /> */}
                {offering.icon}
              </div>
              <h3 className="text-2xl  font-semibold text-primary-dark mb-3 font-inter">
                {offering.title}
              </h3>
              <p className="text-gray-500 text-base font-inter">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Offerings;

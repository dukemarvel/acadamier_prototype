import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";
import PersonImage from "../../assets/hero-person.png";
import BadgeIcon from "../../assets/badge-icon.svg";
import CombinedBadge from "./CombinedBadge";
import NotificationIcon from "../../assets/notification-icon.svg";
import DottedCircles from "../../assets/dot-circles.svg";

// Variants for staggering the text elements in the hero content
const contentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

function Hero() {
  return (
    <section className="hero">
      {/* Notification with a spring entrance */}
      <motion.div 
        className="hero-notification"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      >
        <img src={NotificationIcon} alt="Notification" />
      </motion.div>

      {/* LEFT: TEXT CONTENT with staggered animations */}
      <motion.div
        className="hero-content"
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h4 className="hero-subtitle" variants={textItemVariants}>
          For Individuals
        </motion.h4>
        <motion.h1 className="hero-title" variants={textItemVariants}>
          Our trade is helping <br /> you master yours
        </motion.h1>
        <motion.p className="hero-description" variants={textItemVariants}>
          There are many perks to upskilling yourself: you stand out among 
          your peers; you solve problems more efficiently; you expand 
          your career opportunities; you earn more, and, maybe, even reach 
          the top of the corporate ladder faster.
        </motion.p>
        <motion.button 
          className="hero-button" 
          variants={textItemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Register for an account
        </motion.button>
      </motion.div>

      {/* RIGHT: IMAGE + BADGES */}
      <motion.div 
        className="hero-image-wrapper"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated dotted circles background */}
        <motion.img 
          src={DottedCircles} 
          alt="Decorative dotted circles" 
          className="hero-dots"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* PERSON IMAGE with a fade-in/scale-up effect */}
        <motion.div 
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img 
            src={PersonImage} 
            alt="Person with backpack" 
            className="hero-image" 
          />
        </motion.div>

        <div className="hero-badge hero-badge-congrats">
          <img src={BadgeIcon} alt="Badge icon" />
        </div>

        
        <div className="hero-badge hero-badge-combined">
          <CombinedBadge />
        </div>


      </motion.div>
    </section>
  );
}

export default Hero;
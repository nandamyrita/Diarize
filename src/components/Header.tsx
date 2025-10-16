'use client';

import React from 'react';
import { motion } from 'motion/react';
import imgLogo from "figma:asset/12910f83a223833390ac48fdc2525b1c4466ce6b.png";

export function Header() {
  return (
    <motion.header 
      className="bg-white/95 backdrop-blur-sm border-b border-[#dde1e6] px-4 sm:px-8 lg:px-20 py-4 sticky top-0 z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div 
          className="flex items-center gap-1 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div 
            className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[92px] lg:h-[92px]"
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={imgLogo} 
              alt="Logo" 
              className="w-full h-full object-cover"
              style={{
                filter: 'brightness(0) saturate(100%) invert(36%) sepia(97%) saturate(4178%) hue-rotate(242deg) brightness(102%) contrast(101%)'
              }}
            />
          </motion.div>
          <h1 className="font-bold text-xl sm:text-2xl lg:text-[34px] text-[#615fff] leading-tight">Diarize</h1>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-2 lg:gap-4">
          <motion.button 
            className="px-2 py-4 text-[#0f161e] font-medium rounded-[40px] relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Home</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#615fff]/10 to-[#fe9a00]/10 rounded-[40px]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            className="px-2 py-4 text-[#0f161e] font-medium rounded-[40px] flex items-center gap-2 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              Serviços
              <motion.svg 
                className="w-[18px] h-[18px]" 
                fill="none" 
                viewBox="0 0 18 18"
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <path clipRule="evenodd" d="M3.9375 5.27551L9 10.338L14.0625 5.27551L15.2557 6.46875L9 12.7245L2.74426 6.46875L3.9375 5.27551Z" fill="#21272A" fillRule="evenodd" />
              </motion.svg>
            </span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#615fff]/10 to-[#fe9a00]/10 rounded-[40px]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            className="px-2 py-4 text-[#0f161e] font-medium rounded-[40px] relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Blog</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#615fff]/10 to-[#fe9a00]/10 rounded-[40px]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            className="px-2 py-4 text-[#0f161e] font-medium rounded-[40px] relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">About</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#615fff]/10 to-[#fe9a00]/10 rounded-[40px]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2 lg:gap-4">
          <motion.button 
            className="px-3 py-2 lg:px-4 lg:py-3 border border-[#9f9fa9] text-[#52525c] font-medium rounded-[40px] relative overflow-hidden group text-sm lg:text-base"
            whileHover={{ scale: 1.05, borderColor: "#615fff" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10 group-hover:text-[#615fff] transition-colors duration-300">Sign Up</span>
            <motion.div 
              className="absolute inset-0 bg-[#615fff]/5 rounded-[40px]"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button 
            className="px-3 py-2 lg:px-4 lg:py-3 bg-[#615fff] text-white font-medium rounded-[40px] relative overflow-hidden group shadow-lg text-sm lg:text-base"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px rgba(97, 95, 255, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <span className="relative z-10">Login</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#5347e6] to-[#615fff] rounded-[40px]"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>
      </div>
    </motion.header>
  );
}
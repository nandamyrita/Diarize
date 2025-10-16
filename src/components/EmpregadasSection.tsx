'use client';

import React from 'react';
import { motion } from 'motion/react';
import imgRotinaDomesticaDonaDeCasaSorridenteEmPeDeAventalNaCozinha11 from "figma:asset/15b9ece96093629098369826a296107ceb8f4380.png";

export function EmpregadasSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-[38px] font-medium leading-tight lg:leading-[1.4]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold text-[#615fff]">Empregadas Domésticas:</span>{' '}
                <span className="text-zinc-800">alcance novas oportunidades</span>
              </motion.h2>
              
              <motion.p 
                className="text-[#364153] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[1.42] max-w-full lg:max-w-[574px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Nosso sistema conecta empregadas domésticas a contratantes que valorizam seu trabalho. 
                Crie seu perfil, destaque suas experiências e encontre serviços seguros e perto de você.
              </motion.p>
            </div>
            
            <motion.button 
              className="bg-white border-2 border-[#615fff] text-[#615fff] font-semibold py-3 px-6 lg:py-4 lg:px-8 rounded-lg text-base lg:text-[18.21px] tracking-tight lg:tracking-[-0.64px] relative overflow-hidden group shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(97, 95, 255, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Ver oportunidades</span>
              <motion.div 
                className="absolute inset-0 bg-[#615fff] rounded-lg"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Background Decorations */}
            <motion.div 
              className="absolute top-[-10px] sm:top-[-15px] lg:top-[-20px] left-[15px] sm:left-[20px] lg:left-[27px] w-[60px] h-[64px] sm:w-[90px] sm:h-[96px] lg:w-[120px] lg:h-[128px] bg-[#615fff] rounded-[15.72px]"
              animate={{ 
                rotate: [0, 2, -2, 0],
                scale: [1, 1.02, 0.98, 1]
              }}
              transition={{ 
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute bottom-[-25px] sm:bottom-[-35px] lg:bottom-[-50px] right-[-15px] sm:right-[-20px] lg:right-[-30px] w-[90px] h-[84px] sm:w-[136px] sm:h-[126px] lg:w-[182px] lg:h-[168px] bg-[#615fff] rounded-[15.72px]"
              animate={{ 
                rotate: [0, -1, 1, 0],
                scale: [1, 0.98, 1.02, 1]
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            />
            
            {/* Main Image */}
            <motion.div 
              className="relative z-10 w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[532px] h-[250px] sm:h-[300px] lg:h-[354px] rounded-[15.37px] overflow-hidden group cursor-pointer mx-auto lg:mx-0"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(97, 95, 255, 0.3)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src={imgRotinaDomesticaDonaDeCasaSorridenteEmPeDeAventalNaCozinha11} 
                alt="Empregada doméstica sorridente" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-[#615fff]/20 to-transparent"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
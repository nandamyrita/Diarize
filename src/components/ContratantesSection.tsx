'use client';

import React from 'react';
import { motion } from 'motion/react';
import img21510992202 from "figma:asset/03af42d12bf8a3cbb9d568a20830e2d52a06da58.png";
import { img21510992201 } from "../imports/svg-k5zgt";

export function ContratantesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Background Decorations */}
            <motion.div 
              className="absolute bottom-[15px] sm:bottom-[20px] lg:bottom-[30px] left-[-25px] sm:left-[-35px] lg:left-[-50px] w-[72px] h-[67px] sm:w-[108px] sm:h-[101px] lg:w-[145px] lg:h-[135px] bg-[#fe9a00] rounded-[12.6px]"
              animate={{ 
                rotate: [0, -2, 2, 0],
                scale: [1, 1.05, 0.95, 1]
              }}
              transition={{ 
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div 
              className="absolute bottom-[-40px] sm:bottom-[-60px] lg:bottom-[-80px] right-[25px] sm:right-[35px] lg:right-[50px] w-[87px] h-[80px] sm:w-[130px] sm:h-[120px] lg:w-[174px] lg:h-[161px] bg-[#fe9a00] rounded-[15px]"
              animate={{ 
                rotate: [0, 1, -1, 0],
                scale: [1, 0.95, 1.05, 1]
              }}
              transition={{ 
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            />
            
            {/* Main Image */}
            <motion.div 
              className="relative z-10 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[544px] h-[250px] sm:h-[300px] lg:h-[362px] relative overflow-hidden rounded-lg group-hover:shadow-2xl transition-shadow duration-300 mx-auto lg:mx-0"
                style={{ 
                  maskImage: `url('${img21510992201}')`,
                  maskSize: '100% 100%',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat'
                }}
              >
                <img 
                  src={img21510992202} 
                  alt="Contratante usando laptop" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-[#fe9a00]/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <motion.h2 
                className="text-2xl sm:text-3xl lg:text-[38px] font-medium leading-tight lg:leading-[1.4]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <span className="font-semibold text-[#fe9a00]">Contratantes:</span>{' '}
                <span className="text-zinc-800">alcance novas oportunidades</span>
              </motion.h2>
              
              <motion.p 
                className="text-[#364153] text-sm sm:text-base lg:text-[16px] leading-relaxed lg:leading-[1.42] max-w-full lg:max-w-[574px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                Nosso sistema conecta empregadas domésticas a contratantes que valorizam seu trabalho. 
                Crie seu perfil, destaque suas experiências e encontre serviços seguros e perto de você.
              </motion.p>
            </div>
            
            <motion.button 
              className="bg-white border-2 border-[#fe9a00] text-[#fe9a00] font-semibold py-3 px-6 lg:py-4 lg:px-8 rounded-lg text-base lg:text-[18.21px] tracking-tight lg:tracking-[-0.64px] relative overflow-hidden group shadow-lg w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(254, 154, 0, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              viewport={{ once: true }}
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">Contratar agora</span>
              <motion.div 
                className="absolute inset-0 bg-[#fe9a00] rounded-lg"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
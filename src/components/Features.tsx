'use client';

import React from 'react';
import { motion } from 'motion/react';
import svgPaths from "../imports/svg-l4qyzl5g7s";

const features = [
  {
    title: "Conexões Confiáveis",
    description: "Profissionais verificadas, garantindo segurança e confiança para todos",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 99 99">
        <path d="M45.5482 82.2237C40.7606 81.7712 36.0922 80.4679 31.7625 78.3751L12.375 82.5001L17.7375 66.4126C8.151 52.235 11.8553 33.9406 26.4 23.6199C40.9447 13.3032 61.8337 14.1489 75.2606 25.5999C84.0345 33.0826 87.8501 43.5849 86.3734 53.6829M61.875 78.375L70.125 86.625L86.625 70.125" stroke="#615FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.08333" />
      </svg>
    )
  },
  {
    title: "Mais oportunidades",
    description: "Empregadas têm acesso fácil a novos trabalhos e visibilidade constante.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 79 74">
        <path d="M65.1579 35.0342H73.0526L37.5263 2L2 35.0342H9.89474V60.7274C9.89474 62.6743 10.7265 64.5415 12.2071 65.9182C13.6876 67.2949 15.6957 68.0683 17.7895 68.0683H39.5M25.6842 68.0683V46.0455C25.6842 44.0986 26.516 42.2314 27.9965 40.8547C29.4771 39.478 31.4851 38.7046 33.5789 38.7046H41.4737C43.5675 38.7046 45.5756 39.478 47.0561 40.8547C48.5367 42.2314 49.3684 44.0986 49.3684 46.0455M53.3158 60.7274H77M65.1579 49.716V71.7388" stroke="#615FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.84615" />
      </svg>
    )
  },
  {
    title: "Contratação rápida",
    description: "Comunicação direta, sem burocracia, com detalhes claros de serviço.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 67 63">
        <path d="M40.5 41.0537V47.5627C40.5 48.4258 40.1313 49.2536 39.4749 49.8639C38.8185 50.4743 37.9283 50.8171 37 50.8171H12.5L2 60.5806V28.0358C2 27.1727 2.36875 26.3449 3.02513 25.7345C3.6815 25.1242 4.57174 24.7813 5.5 24.7813H12.5M65 37.7992L54.5 28.0358H30C29.0717 28.0358 28.1815 27.6929 27.5251 27.0826C26.8687 26.4723 26.5 25.6445 26.5 24.7813V5.25448C26.5 4.39133 26.8687 3.56355 27.5251 2.95321C28.1815 2.34288 29.0717 2 30 2H61.5C62.4283 2 63.3185 2.34288 63.9749 2.95321C64.6313 3.56355 65 4.39133 65 5.25448V37.7992Z" stroke="#615FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.40541" />
      </svg>
    )
  },
  {
    title: "Avaliações transparentes",
    description: "Feedbacks ajudam a manter a qualidade e a confiança na plataforma.",
    icon: (
      <svg className="w-full h-full" fill="none" viewBox="0 0 76 76">
        <g clipPath="url(#clip0_1_8881)">
          <path d="M37.9998 12.6666V22.1666M25.3331 12.6666V31.6666M50.6664 12.6666V31.6666" stroke="#615FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.86792" />
          <path d="M38 58.5834L28.5 63.3334L30.0833 52.25L23.75 45.9167L33.25 44.3334L38 34.8334L42.75 44.3334L52.25 45.9167L45.9167 52.25L47.5 63.3334L38 58.5834Z" stroke="#615FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.86792" />
        </g>
        <defs>
          <clipPath id="clip0_1_8881">
            <rect fill="white" height="76" width="76" />
          </clipPath>
        </defs>
      </svg>
    )
  }
];

export function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-2xl sm:text-3xl lg:text-[32px] font-semibold text-[#1e2939] text-center mb-8 sm:mb-12 lg:mb-16 tracking-tight lg:tracking-[-0.64px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Conectando confiança e oportunidade
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="border border-[#ffb86a] rounded-lg p-6 text-center group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(255, 184, 106, 0.2)"
              }}
              viewport={{ once: true }}
            >
              {/* Background hover effect */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-[#615fff]/5 to-[#fe9a00]/5 rounded-lg"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="w-12 h-12 sm:w-16 sm:h-16 lg:w-[76px] lg:h-[76px] mx-auto mb-4 sm:mb-6 text-[#615fff] relative z-10"
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5 
                }}
                transition={{ duration: 0.3 }}
              >
                {feature.icon}
              </motion.div>
              
              <h3 className="text-base sm:text-lg lg:text-[18px] font-semibold text-[#615fff] mb-3 sm:mb-4 leading-tight lg:leading-[34.3px] tracking-tight lg:tracking-[-0.64px] relative z-10 group-hover:text-[#5347e6] transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-sm sm:text-base lg:text-[16px] text-[#52525c] leading-relaxed lg:leading-[20px] relative z-10 group-hover:text-[#404040] transition-colors duration-300">
                {feature.description}
              </p>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-2 right-2 w-2 h-2 bg-[#ffb86a] rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              />
              <motion.div 
                className="absolute bottom-2 left-2 w-1 h-1 bg-[#615fff] rounded-full"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
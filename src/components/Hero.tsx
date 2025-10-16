'use client';

import React from 'react';
import { motion } from 'motion/react';
import imgRotinaDomesticaDonaDeCasaSorridenteEmPeDeAventalNaCozinha11 from "figma:asset/15b9ece96093629098369826a296107ceb8f4380.png";
import img594811 from "figma:asset/48f78457f1b7ef451c83872b486cd3928696676c.png";
import imgClean4197111 from "figma:asset/2e5be6b2f34631047df5bcd329235b4e7c9f1508.png";
import imgSponge135266201 from "figma:asset/acba209a7e7e0040e11e1ba143cc863d7cf3237d.png";
import { imgGroup } from "../imports/svg-k5zgt";

export function Hero() {
  return (
    <section className="relative bg-white overflow-hidden pt-6 pb-20">
      {/* Background Gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-[-100px] w-[600px] h-[600px]">
          <div className="absolute top-20 right-20 w-[294px] h-[294px] bg-[#FDC700] rounded-full opacity-30 blur-[200px]"></div>
          <div className="absolute top-0 right-40 w-[415px] h-[415px] bg-[#A2F4FD] rounded-full opacity-40 blur-[150px]"></div>
        </div>
        <div className="absolute top-40 left-[-100px] w-[500px] h-[500px]">
          <div className="absolute w-[310px] h-[310px] bg-[#A3B3FF] rounded-full opacity-40 blur-[175px]"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]">
          {/* Left Content */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-4">
              <motion.p 
                className="text-[#ffb900] font-bold text-[14px] tracking-[1.74px] uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Let's shift your business
              </motion.p>
              
              <motion.h1 
                className="text-3xl sm:text-4xl lg:text-[56px] font-semibold leading-tight lg:leading-[58px] text-zinc-800 tracking-tight lg:tracking-[-2.14px]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Conectando profissionais e famílias de forma simples
              </motion.h1>
              
              <motion.p 
                className="text-base sm:text-lg lg:text-[20px] text-[#505050] leading-relaxed lg:leading-[29px] tracking-tight lg:tracking-[-0.21px] max-w-full lg:max-w-[630px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Um espaço onde empregadas domésticas e contratantes encontram pessoas de confiança. 
                Cadastre-se, crie seu perfil e faça parte dessa conexão segura e prática.
              </motion.p>
            </div>
            
            <motion.button 
              className="bg-[#615fff] text-white font-bold py-3 px-6 lg:py-4 lg:px-8 rounded-lg text-base lg:text-[18.21px] tracking-tight lg:tracking-[-0.64px] relative overflow-hidden group shadow-xl w-full sm:w-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 15px 35px rgba(97, 95, 255, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Venha se conectar</span>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#5347e6] to-[#615fff] rounded-[8.57px]"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className="absolute inset-0 bg-white/20 rounded-[8.57px]"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>

          {/* Right Image */}
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Main Image with Mask */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] flex items-center justify-center">
              <motion.div 
                className="w-full max-w-[500px] sm:max-w-[700px] lg:max-w-[930px] h-[300px] sm:h-[450px] lg:h-[619px] transform rotate-[-4.7deg] mx-auto"
                style={{ 
                  maskImage: `url('${imgGroup}')`,
                  maskSize: '100% 100%',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat'
                }}
                whileHover={{ 
                  scale: 1.02,
                  rotate: -3
                }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={img594811} 
                  alt="Mulher sorridente" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Gradient Overlay */}
              <div 
                className="absolute w-[480px] h-[821px] bg-gradient-to-b from-[rgba(172,106,0,0.35)] to-[rgba(102,102,102,0)] transform rotate-[46.8deg]"
                style={{ 
                  maskImage: `url('${imgGroup}')`,
                  maskSize: '794px 776px',
                  maskPosition: '105.9px 22.5px',
                  maskRepeat: 'no-repeat'
                }}
              />

              {/* Sparkle Effect */}
              <motion.div 
                className="absolute top-[180px] right-[-20px] w-[54px] h-[55px]"
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 0.9, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <svg className="w-full h-full" fill="none" viewBox="0 0 54 55">
                  <g>
                    <path d="M43.13 26.6891C43.13 27.161 42.8501 27.586 42.4194 27.7565L35.7588 30.3711C33.4151 31.2914 31.5779 33.2095 30.7159 35.6307L28.1833 42.7701C28.1652 42.8234 28.1256 42.8618 28.0992 42.9094C28.0777 42.9492 28.0569 42.9883 28.0305 43.0238C27.9895 43.0786 27.9492 43.1283 27.8985 43.1731C27.8207 43.2441 27.7353 43.3067 27.6394 43.35C27.579 43.3735 27.5185 43.3962 27.4581 43.404C27.3977 43.4197 27.3373 43.4275 27.2768 43.4275L27.0802 43.404C27.0198 43.3962 26.9594 43.3728 26.899 43.35C26.7996 43.306 26.7121 43.242 26.6329 43.1688C26.5843 43.1255 26.5447 43.0771 26.5051 43.0245C26.4822 42.9933 26.4641 42.9606 26.4447 42.9272C26.4127 42.8739 26.369 42.8298 26.3474 42.7701L23.8149 35.6307C22.9605 33.2095 21.1232 31.2914 18.7796 30.3711L12.1189 27.7565C11.6883 27.586 11.4007 27.161 11.4007 26.6891C11.4007 26.1938 11.7181 25.7532 12.1794 25.6061L18.2725 23.6418C20.9107 22.7911 22.9897 20.7024 23.8822 18.0261L26.362 10.5314C26.3926 10.4461 26.4301 10.3686 26.4752 10.2997C26.5058 10.2535 26.5357 10.2066 26.5808 10.1682C26.6718 10.068 26.785 9.99053 26.9212 9.93652C26.9587 9.92089 27.0045 9.90525 27.0497 9.89815C27.1178 9.87469 27.1935 9.86688 27.2692 9.86688C27.3449 9.86688 27.4206 9.87469 27.4887 9.89815C27.5338 9.90596 27.5797 9.9216 27.6172 9.93652C27.738 9.98272 27.8436 10.0602 27.9346 10.1455C27.9721 10.1838 28.0027 10.2229 28.0326 10.2613C28.093 10.3466 28.1458 10.4312 28.1763 10.5321L30.6561 18.0268C31.5404 20.7032 33.627 22.7911 36.2582 23.6425L42.3513 25.6068C42.8202 25.7532 43.13 26.1945 43.13 26.6891Z" fill="#FFC229" />
                    <path d="M18.6567 9.89109C18.6567 10.1682 18.492 10.4184 18.2385 10.5186L14.3223 12.0558C12.9441 12.5973 11.864 13.7251 11.3576 15.1479L9.86839 19.3451C9.85797 19.3764 9.83436 19.3991 9.81907 19.4276C9.80657 19.451 9.79407 19.4737 9.77878 19.4951C9.75447 19.5278 9.73086 19.5562 9.70099 19.5825C9.65514 19.6244 9.60513 19.6607 9.54817 19.6862C9.51275 19.6997 9.47732 19.7132 9.4412 19.7182C9.40578 19.7275 9.37035 19.7317 9.33423 19.7317L9.21893 19.7182C9.1835 19.7139 9.14807 19.6997 9.11265 19.6862C9.0543 19.6599 9.0029 19.623 8.95636 19.5796C8.92788 19.554 8.90426 19.5256 8.88134 19.4951C8.86814 19.4766 8.85703 19.4574 8.84592 19.4375C8.82716 19.4062 8.80146 19.3806 8.78826 19.3451L7.29901 15.1479C6.7968 13.7244 5.71668 12.5966 4.33856 12.0558L0.422324 10.5186C0.16879 10.4184 0 10.1682 0 9.89109C0 9.59971 0.186852 9.34103 0.457751 9.25433L4.04057 8.09949C5.59165 7.59918 6.81417 6.37115 7.3386 4.79773L8.7966 0.39087C8.81466 0.341123 8.83689 0.295639 8.86328 0.254421C8.88134 0.227415 8.89871 0.199693 8.9258 0.176951C8.97928 0.117966 9.04597 0.0724931 9.12585 0.040513C9.14808 0.0312743 9.17447 0.0220264 9.20156 0.0177624C9.24185 0.00425967 9.2863 0 9.33076 0C9.37521 0 9.41967 0.00425967 9.45996 0.0177624C9.48635 0.0220264 9.51344 0.0312743 9.53567 0.040513C9.60652 0.0675184 9.66904 0.112993 9.72252 0.163451C9.74475 0.186192 9.76281 0.208939 9.78017 0.231681C9.8156 0.281428 9.84686 0.331884 9.86492 0.39087L11.3229 4.79773C11.8432 6.37115 13.0699 7.59918 14.6168 8.09949L18.1996 9.25433C18.4747 9.34103 18.6567 9.60042 18.6567 9.89109Z" fill="#FFE6A1" />
                  </g>
                </svg>
              </motion.div>
            </div>

            {/* Floating Icons */}
            {/* Clean Icon Top Right */}
            <motion.div 
              className="absolute top-[200px] sm:top-[280px] lg:top-[340px] right-[-30px] sm:right-[-40px] lg:right-[-50px] w-[80px] h-[76px] sm:w-[120px] sm:h-[114px] lg:w-[156px] lg:h-[148px]"
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-full h-full bg-[#D9FCFF] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <motion.img 
                  src={imgClean4197111} 
                  alt="Clean" 
                  className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[83px] lg:h-[83px]"
                  whileHover={{ rotate: 15 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>

            {/* Sparkle Icon Top */}
            <motion.div 
              className="absolute top-[60px] sm:top-[80px] lg:top-[110px] right-[30px] sm:right-[40px] lg:right-[50px] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] lg:w-[87px] lg:h-[87px]"
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 10, -5, 0]
              }}
              transition={{ 
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              whileHover={{ scale: 1.15 }}
            >
              <div className="relative w-full h-full">
                <div className="w-full h-full bg-white rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-shadow duration-300">
                  <motion.svg 
                    className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" 
                    fill="none" 
                    viewBox="0 0 32 32"
                    animate={{ rotate: [0, 360] }}
                    transition={{ 
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <path d="M16 4L17.5 9.5L23 8L21.5 13.5L27 15L21.5 16.5L23 22L17.5 20.5L16 26L14.5 20.5L9 22L10.5 16.5L5 15L10.5 13.5L9 8L14.5 9.5L16 4Z" fill="#FFC229"/>
                  </motion.svg>
                </div>
              </div>
            </motion.div>

            {/* Sponge Icon Bottom */}
            <motion.div 
              className="absolute bottom-[40px] sm:bottom-[50px] lg:bottom-[70px] right-[30px] sm:right-[40px] lg:right-[50px] w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] lg:w-[134px] lg:h-[134px]"
              animate={{ 
                y: [0, -8, 0],
                x: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              whileHover={{ scale: 1.1 }}
            >
              <div className="w-full h-full bg-[#FFEED2] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                <motion.img 
                  src={imgSponge135266201} 
                  alt="Sponge" 
                  className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[83px] lg:h-[83px]"
                  whileHover={{ rotate: -10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
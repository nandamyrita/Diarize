'use client';

import React from 'react';
import { motion } from 'motion/react';
import imgLogo from "figma:asset/12910f83a223833390ac48fdc2525b1c4466ce6b.png";

export function Footer() {
  return (
    <footer className="bg-zinc-800 text-white py-12 sm:py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Logo and Description */}
          <div className="space-y-6 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-[59px] lg:h-[59px]">
                <img 
                  src={imgLogo} 
                  alt="Logo" 
                  className="w-full h-full object-cover"
                  style={{
                    filter: 'brightness(0) saturate(100%) invert(53%) sepia(38%) saturate(1057%) hue-rotate(173deg) brightness(94%) contrast(87%)'
                  }}
                />
              </div>
              <h3 className="font-bold text-lg sm:text-xl lg:text-[22px] text-[#5a91d3] leading-tight">Diarize</h3>
            </div>
            <p className="text-[#dddddd] text-xs sm:text-sm lg:text-[13.2px] leading-relaxed lg:leading-[22.6px] max-w-full lg:max-w-[504px]">
              Lörem ipsum od ohet dilogi. Bell trabel, samuligt, ohöbel utom diska. Jinesade bel när feras redorade i belogi. 
              FAR paratyp i muvåning, och pesask vyfisat. Viktiga poddradio har un mad och inde.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {/* Facebook */}
              <motion.div 
                className="w-[22.6px] h-[22.6px] flex items-center justify-center cursor-pointer p-2 rounded-full"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-[6.6px] h-[13.2px]" fill="none" viewBox="0 0 7 14">
                  <path d="M1.68604 13.2094V7.01117H1.46697e-05V4.77951H1.68604V2.87338C1.68604 1.37552 2.68199 0 4.97685 0C5.90601 0 6.59308 0.0865877 6.59308 0.0865877L6.53894 2.17058C6.53894 2.17058 5.83824 2.16395 5.07361 2.16395C4.24604 2.16395 4.11346 2.53467 4.11346 3.14998V4.77951H6.60472L6.49632 7.01117H4.11346V13.2094H1.68604" fill="white" />
                </svg>
              </motion.div>
              
              {/* Twitter */}
              <motion.div 
                className="w-[22.6px] h-[22.6px] flex items-center justify-center cursor-pointer p-2 rounded-full"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-[17px] h-[13.2px]" fill="none" viewBox="0 0 17 14">
                  <path d="M16.9835 1.6085C16.3476 1.87691 15.673 2.05309 14.9823 2.13119C15.7018 1.72037 16.2542 1.06982 16.5143 0.2947C15.8304 0.681366 15.0821 0.953797 14.3017 1.10022C13.6661 0.455109 12.7606 0.0519373 11.7584 0.0519373C9.83407 0.0519373 8.27391 1.53822 8.27391 3.37135C8.27391 3.63156 8.30476 3.88488 8.36414 4.12789C5.46831 3.98941 2.90088 2.66791 1.18229 0.65957C0.882427 1.14983 0.710601 1.72011 0.710601 2.32838C0.710601 3.48006 1.32579 4.49605 2.26068 5.09136C1.70735 5.07485 1.1662 4.93247 0.682406 4.67611C0.682207 4.69002 0.682207 4.70392 0.682207 4.71789C0.682207 6.32622 1.88326 7.66789 3.47719 7.97284C2.96409 8.10578 2.42589 8.12524 1.90369 8.02972C2.34706 9.34852 3.63389 10.3082 5.15856 10.335C3.96607 11.2253 2.46362 11.756 0.831211 11.756C0.549921 11.756 0.272612 11.7403 1.27832e-05 11.7096C1.542 12.6515 3.3735 13.201 5.3412 13.201C11.7503 13.201 15.2549 8.14286 15.2549 3.75632C15.2549 3.61235 15.2516 3.46919 15.2449 3.32686C15.927 2.85706 16.5158 2.27517 16.9835 1.6085" fill="white" />
                </svg>
              </motion.div>
              
              {/* LinkedIn */}
              <motion.div 
                className="w-[22.6px] h-[22.6px] flex items-center justify-center cursor-pointer p-2 rounded-full"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-[15.1px] h-[14.2px]" fill="none" viewBox="0 0 16 15">
                  <path d="M3.42755 14.1529V4.60392H0.190957V14.1529H3.42755ZM1.80967 3.29938C2.93833 3.29938 3.64086 2.56613 3.64086 1.64982C3.61983 0.712834 2.93837 -6.37172e-05 1.83109 -6.37172e-05C0.723981 -6.37172e-05 0 0.712848 0 1.64982C0 2.56618 0.702361 3.29938 1.78854 3.29938H1.80957H1.80967ZM5.21899 14.1529H8.45558V8.82028C8.45558 8.53488 8.47661 8.24978 8.56208 8.04577C8.79606 7.47556 9.32861 6.88499 10.2227 6.88499C11.3939 6.88499 11.8624 7.76066 11.8624 9.04433V14.1528H15.0988V8.67753C15.0988 5.74446 13.502 4.37973 11.3726 4.37973C9.62655 4.37973 8.85994 5.33678 8.43405 5.98863H8.45565V4.60372H5.21906C5.26154 5.49974 5.21906 14.1527 5.21906 14.1527L5.21899 14.1529Z" fill="white" />
                </svg>
              </motion.div>
              
              {/* Instagram */}
              <motion.div 
                className="w-[22.6px] h-[22.6px] flex items-center justify-center cursor-pointer p-2 rounded-full"
                whileHover={{ 
                  scale: 1.2,
                  backgroundColor: "rgba(255, 255, 255, 0.1)"
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <svg className="w-[15.1px] h-[17px]" fill="none" viewBox="0 0 16 17">
                  <path d="M7.5515 4.6772C5.40835 4.6772 3.67967 6.37887 3.67967 8.48854C3.67967 10.5982 5.40835 12.2999 7.5515 12.2999C9.69466 12.2999 11.4233 10.5982 11.4233 8.48854C11.4233 6.37887 9.69466 4.6772 7.5515 4.6772ZM7.5515 10.9664C6.16654 10.9664 5.0343 9.85518 5.0343 8.48854C5.0343 7.1219 6.16317 6.01067 7.5515 6.01067C8.93984 6.01067 10.0687 7.1219 10.0687 8.48854C10.0687 9.85518 8.93647 10.9664 7.5515 10.9664V10.9664ZM12.4848 4.5213C12.4848 5.01554 12.0804 5.41028 11.5817 5.41028C11.0796 5.41028 10.6786 5.01223 10.6786 4.5213C10.6786 4.03037 11.083 3.63232 11.5817 3.63232C12.0804 3.63232 12.4848 4.03037 12.4848 4.5213ZM15.0492 5.42355C14.9919 4.23271 14.7156 3.17787 13.8293 2.3088C12.9465 1.43972 11.8749 1.16772 10.6651 1.10801C9.41834 1.03835 5.6813 1.03835 4.43449 1.10801C3.22812 1.1644 2.15654 1.4364 1.2703 2.30548C0.384056 3.17456 0.111106 4.22939 0.0504511 5.42023C-0.0203136 6.64755 -0.0203136 10.3262 0.0504511 11.5535C0.107737 12.7444 0.384056 13.7992 1.2703 14.6683C2.15654 15.5374 3.22475 15.8094 4.43449 15.8691C5.6813 15.9387 9.41834 15.9387 10.6651 15.8691C11.8749 15.8127 12.9465 15.5407 13.8293 14.6683C14.7122 13.7992 14.9885 12.7444 15.0492 11.5535C15.12 10.3262 15.12 6.65087 15.0492 5.42355V5.42355ZM13.4384 12.8704C13.1756 13.5206 12.6668 14.0215 12.0029 14.2835C11.0089 14.6716 8.65004 14.582 7.5515 14.582C6.45297 14.582 4.09078 14.6683 3.10007 14.2835C2.4396 14.0248 1.93077 13.5239 1.66456 12.8704C1.2703 11.8919 1.36128 9.56991 1.36128 8.48854C1.36128 7.40717 1.27367 5.08189 1.66456 4.10666C1.9274 3.45651 2.43623 2.95563 3.10007 2.69358C4.09415 2.30548 6.45297 2.39504 7.5515 2.39504C8.65004 2.39504 11.0122 2.3088 12.0029 2.69358C12.6634 2.95231 13.1722 3.45319 13.4384 4.10666C13.8327 5.0852 13.7417 7.40717 13.7417 8.48854C13.7417 9.56991 13.8327 11.8952 13.4384 12.8704Z" fill="white" />
                </svg>
              </motion.div>
            </div>
          </div>

          {/* Páginas */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-[17px]">Páginas</h4>
            <div className="space-y-6 text-[13.2px] font-normal">
              <motion.div 
                className="cursor-pointer hover:text-[#5a91d3] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Home
              </motion.div>
              <motion.div 
                className="cursor-pointer hover:text-[#5a91d3] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Objetivos
              </motion.div>
              <motion.div 
                className="cursor-pointer hover:text-[#5a91d3] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Empregadas domesticas
              </motion.div>
              <motion.div 
                className="cursor-pointer hover:text-[#5a91d3] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Contratante
              </motion.div>
            </div>
          </div>

          {/* Serviços */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-[17px]">Serviços</h4>
            <div className="space-y-6 text-[#dddddd] text-[13.2px] font-normal">
              <motion.div 
                className="cursor-pointer hover:text-[#5a91d3] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Cadastro
              </motion.div>
              <motion.div 
                className="cursor-pointer hover:text-[#5a91d3] transition-colors duration-200"
                whileHover={{ x: 5 }}
              >
                Login
              </motion.div>
            </div>
          </div>

          {/* Contato */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-[17px]">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-[22.6px] h-[22.6px] flex items-center justify-center">
                  <svg className="w-full h-full transform rotate-180 scale-y-[-1]" fill="none" viewBox="0 0 23 23">
                    <path d="M19.5842 5.09068L17.2291 2.73776C17.0629 2.57089 16.8655 2.4385 16.648 2.34817C16.4306 2.25785 16.1974 2.21139 15.9619 2.21144C15.4821 2.21144 15.0309 2.39941 14.6926 2.73776L12.1583 5.27202C11.9915 5.43815 11.8591 5.63562 11.7687 5.85307C11.6784 6.07052 11.632 6.30368 11.632 6.53915C11.632 7.01902 11.82 7.47015 12.1583 7.80849L14.0115 9.66164C13.5777 10.6178 12.9746 11.4876 12.2313 12.2291C11.4899 12.9742 10.6201 13.5795 9.66387 14.0159L7.81072 12.1627C7.64459 11.9959 7.44712 11.8635 7.22967 11.7731C7.01221 11.6828 6.77905 11.6364 6.54359 11.6364C6.06372 11.6364 5.61259 11.8244 5.27425 12.1627L2.73777 14.6948C2.57071 14.8612 2.4382 15.0591 2.34787 15.2769C2.25755 15.4947 2.21119 15.7283 2.21146 15.9641C2.21146 16.444 2.39943 16.8951 2.73777 17.2335L5.08849 19.5842C5.62807 20.126 6.37331 20.4334 7.13845 20.4334C7.29989 20.4334 7.45468 20.4201 7.60727 20.3935C10.5882 19.9026 13.5449 18.317 15.931 15.9332C18.3149 13.5515 19.8982 10.5971 20.3958 7.60725C20.5462 6.69394 20.2432 5.7541 19.5842 5.09068V5.09068Z" fill="white" />
                  </svg>
                </div>
                <span className="text-[#dddddd] text-[13.2px]">(406) 555-0120</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-[22.6px] h-[22.6px] flex items-center justify-center">
                  <svg className="w-full h-full" fill="none" viewBox="0 0 23 23">
                    <path d="M4.38149 4.52897H19.3836C20.7989 4.52897 21.5122 5.19699 21.5122 6.55567V16.0891C21.5122 17.4365 20.7989 18.1158 19.3836 18.1158H4.38149C2.96619 18.1158 2.25288 17.4365 2.25288 16.0891V6.55567C2.25288 5.19699 2.96619 4.52897 4.38149 4.52897ZM11.8769 14.2662L19.5081 8.00493C19.7799 7.77849 19.995 7.25766 19.6553 6.79344C19.327 6.32922 18.7269 6.3179 18.3306 6.60096L11.8769 10.9714L5.43446 6.60096C5.03818 6.3179 4.4381 6.32922 4.10975 6.79344C3.77008 7.25766 3.9852 7.77849 4.25694 8.00493L11.8769 14.2662Z" fill="white" />
                  </svg>
                </div>
                <span className="text-[#dddddd] text-[13.2px]">mangcoding123@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="border-t border-white w-full mb-6"></div>
        
        {/* Copyright */}
        <div className="text-center">
          <p className="text-[#9f9fa9] text-[17.2px] leading-[32.4px]">
            © Copyright 2025. Desenvolvido por Nicolas Yanase e Maria Fernanda
          </p>
        </div>
      </div>
    </footer>
  );
}
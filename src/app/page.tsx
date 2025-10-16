'use client';

import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { EmpregadasSection } from '../components/EmpregadasSection';
import { ContratantesSection } from '../components/ContratantesSection';
import { Footer } from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <EmpregadasSection />
      <ContratantesSection />
      <Footer />
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import FeaturesGrid from "./components/FeaturesGrid";
import SearchModal from "./components/SearchModal";
import CourseCategories from "./components/CourseCategories";
import Accreditation from "./components/Accreditation";
import Contact from "./components/Contact";

export default function Home() {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const heroButtonWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroButtonWrapperRef.current) {
        // getBoundingClientRect() pega a posição exata (em pixels) do elemento na tela atual
        const rect = heroButtonWrapperRef.current.getBoundingClientRect();

        // O nosso cabeçalho fixo tem cerca de 80px de altura.
        // Se a parte inferior do botão for menor que 80px, significa que ele foi "engolido" pelo cabeçalho / topo da tela.
        if (rect.bottom < 80) {
          setShowFloatingButton(true);
        } else {
          setShowFloatingButton(false);
        }
      }
    };

    // Adiciona o ouvinte de rolagem da tela
    window.addEventListener("scroll", handleScroll);

    // Executa uma vez assim que a página carrega para garantir o estado inicial correto
    handleScroll();

    // Limpeza padrão do React
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f9fa] pb-20 md:pb-0 relative">

      <Header onOpenSearch={() => setIsSearchModalOpen(true)} />

      {/* O Ref sendo passado para o Hero */}
      <Hero ref={heroButtonWrapperRef} onOpenSearch={() => setIsSearchModalOpen(true)} />

      <FeaturesGrid />

      <CourseCategories />

      <Accreditation />

      <Contact />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      {/* BOTÃO FLUTUANTE MOBILE */}
      {/* A animação agora acontece mudando a classe diretamente, garantindo que ele suma de verdade */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-center px-4 py-3 z-[40] bg-white/90 backdrop-blur-md border-t border-gray-200 transition-all duration-300 ease-in-out ${showFloatingButton ? "translate-y-0 opacity-100 visible" : "translate-y-full opacity-0 invisible"
          }`}
      >
        <button
          onClick={() => setIsSearchModalOpen(true)}
          className="flex items-center justify-center mx-2 my-1 py-4 px-1 bg-[#ea005f] shadow-lg font-bold text-white text-[0.9rem] w-full rounded-full z-10"
          aria-label="Encontre sua pós-graduação"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <span>ESCOLHA SUA PÓS-GRADUAÇÃO</span>
        </button>
      </div>
    </main>
  );
}
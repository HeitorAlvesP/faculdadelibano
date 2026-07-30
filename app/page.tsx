"use client";

import { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturesGrid from "../components/FeaturesGrid";
import SearchModal from "../components/SearchModal";
import CourseCategories from "../components/CourseCategories";
import Accreditation from "../components/Accreditation";
import Contact from "../components/Contact";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";

import FloatingWidgets from "../components/FloatingWidgets";

export default function Home() {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  
  const heroButtonWrapperRef = useRef<HTMLDivElement>(null);
  const faqAndFooterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroButtonWrapperRef.current) {
        const heroRect = heroButtonWrapperRef.current.getBoundingClientRect();
        let isVisible = false;

        if (heroRect.bottom < 80) {
          isVisible = true;
        }

        if (faqAndFooterRef.current) {
          const faqRect = faqAndFooterRef.current.getBoundingClientRect();
          if (faqRect.top < window.innerHeight) {
            isVisible = false;
          }
        }

        setShowFloatingButton(isVisible);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f8f9fa] relative">

      <Header onOpenSearch={() => setIsSearchModalOpen(true)} />
      <Hero ref={heroButtonWrapperRef} onOpenSearch={() => setIsSearchModalOpen(true)} />
      <FeaturesGrid />
      <CourseCategories />
      <Accreditation />
      <Contact />
      
      <div ref={faqAndFooterRef}>
        <FAQ />
        <Footer /> 
      </div>

      <FloatingWidgets/>

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />

      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 flex items-center justify-center px-4 py-3 z-[40] bg-white/30 backdrop-blur-lg border-t border-gray-200 transition-all duration-300 ease-in-out ${showFloatingButton ? "translate-y-0 opacity-100 visible" : "translate-y-full opacity-0 invisible"
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
          <span><strong>ESCOLHA SUA PÓS-GRADUAÇÃO</strong></span>
        </button>
      </div>
    </main>
  );
}
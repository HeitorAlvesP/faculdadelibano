"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchModal from "./SearchModal";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault(); 
    setIsMobileMenuOpen(false); 
    
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Faixa Superior Promocional (Agora rola junto com a página) */}
      <div className="flex flex-row bg-[#0B182F] py-[10px] text-[1rem] leading-[27.2px] text-center justify-center max-md:px-[5px] w-full">
        <div className="flex items-center max-md:gap-x-3">
          <div>
            <span className="max-[374px]:flex max-[374px]:items-center bg-[#ea005f] px-[10px] py-[5px] rounded-[3px] mr-[7px] text-white text-[0.6875rem] font-bold">
              Em <span className="capitalize">julho</span>:
            </span>
          </div>
          <div className="flex max-md:max-w-[65vw]">
            <span role="text" className="text-white">
              <strong>Matricule-se em uma pós e ganhe outra de presente. </strong>
              <span role="img" className="text-[1rem]" aria-label="Gift">🎁</span>
            </span>
          </div>
        </div>
      </div>

      {/* Cabeçalho Principal (Fixo apenas no computador) */}
      <header className="md:sticky md:top-0 relative z-50 w-full bg-white shadow-sm md:shadow-md">
        <div id="mainHeader" className="max-md:hidden w-full pointer-events-auto px-[48px] py-[6px] max-[1290px]:px-1">
          <div className="w-full flex px-3 max-md:px-0 py-1 items-center justify-between">
            <div className="hidden md:flex items-center space-x-2 w-1/3">
              <Link href="/">
                <div className="min-w-[140px]">
                  <Image alt="Logo" priority width={130} height={130} className="w-full h-auto max-w-[130px]" src="/images/logo-website-colorida.webp" />
                </div>
              </Link>
            </div>

            <div className="flex items-center justify-center w-full md:w-1/3">
              <button 
                onClick={() => setIsSearchModalOpen(true)}
                className="flex items-center justify-center bg-white border border-solid border-gray-200 shadow-md font-medium text-sm text-[#0B1933] px-4 py-2 rounded-full w-[330px] h-[58px] hover:text-[#ea005f] hover:-translate-y-[2px] transition-all duration-[350ms]" 
                aria-label="Encontre sua pós-graduação"
              >
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-[#ea005f] text-lg mr-2" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
                </svg>
                Encontre sua pós-graduação
              </button>
            </div>

            <div className="hidden md:flex items-center justify-end w-1/3 font-bold text-sm tracking-[0.3px] space-x-6">
              <Link className="flex items-center justify-center px-4 py-2 rounded-full w-[193px] h-[58px] relative transition-all duration-[350ms] group hover:shadow-md hover:bg-[#0B1933] hover:-translate-y-[2px] bg-[#e6e7e8]" aria-label="JA SOU ALUNO" href="https://portal.faculdadelibano.edu.br/login">
                <div className="flex items-center justify-center">
                  <span className="group-hover:text-white group-hover:translate-x-[-6px] text-[#0B1933] transition duration-[350ms] text-sm text-center">JA SOU ALUNO</span>
                  <div className="absolute right-4 transform mr-4 transition duration-[350ms] group-hover:opacity-100 group-hover:translate-x-2 text-white opacity-0 -translate-x-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg>
                  </div>
                </div>
              </Link>
              <Link className="flex items-center justify-center px-4 py-2 rounded-full w-[193px] h-[58px] relative transition-all duration-[350ms] group hover:shadow-md hover:bg-white hover:-translate-y-[2px] bg-[#ea005f]" aria-label="Matricule-se" href="https://faculdadelibano.com.br/matricula/dados-iniciais">
                <div className="flex items-center justify-center">
                  <span className="group-hover:text-[#ea005f] group-hover:translate-x-[-6px] text-white transition duration-[350ms] text-sm text-center">MATRICULE-SE</span>
                  <div className="absolute right-4 transform mr-4 transition duration-[350ms] group-hover:opacity-100 group-hover:translate-x-2 text-[#ea005f] opacity-0 -translate-x-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" /></svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="md:hidden flex flex-col bg-[#f6f6f6] w-full relative z-20">
          <div className="flex items-center justify-between px-5 py-[15px]">
            <Link href="/" className="flex items-center my-2">
              <div className="min-w-[130px]">
                <Image alt="Website Logo" priority width={256} height={54} className="w-full h-auto max-w-[130px]" src="/images/logo-website-colorida.webp" />
              </div>
            </Link>
            <div className="flex items-center">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-[#0B1933] text-3xl focus:outline-none" aria-label="Abrir menu">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  {isMobileMenuOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                  ) : (
                    <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className={`bg-[#f6f6f6] shadow-lg absolute top-full left-0 right-0 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[300px]' : 'max-h-0'}`}>
            <ul className="text-[#0B1933] font-medium py-2 px-4">
              <li className="py-4 px-4 border-b border-gray-200/50">
                <a href="#courses" onClick={(e) => handleAnchorClick(e, 'courses')} className="block w-full text-left">Nossas Pós e MBA's</a>
              </li>
              <li className="py-4 px-4 border-b border-gray-200/50">
                <a href="#contact" onClick={(e) => handleAnchorClick(e, 'contact')} className="block w-full text-left">Contato</a>
              </li>
              <li className="py-4 px-4 border-b border-gray-200/50">
                <Link href="https://portal.faculdadelibano.edu.br/login" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left">Já sou aluno</Link>
              </li>
              <li className="py-4 px-4">
                <Link href="https://faculdadelibano.com.br/matricula/dados-iniciais" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-left">Matricule-se</Link>
              </li>
            </ul>
          </div>
        </div>

        <div role="separator" aria-hidden="true" className="h-[0.0625rem] bg-white w-full relative overflow-hidden flex items-center justify-center">
          <div className="absolute bg-[#EBEBEB] h-[0.0625rem] w-[85%]"></div>
        </div>
      </header>

      <SearchModal 
        isOpen={isSearchModalOpen} 
        onClose={() => setIsSearchModalOpen(false)} 
      />
    </>
  );
}
"use client";

import { forwardRef } from "react";

interface HeroProps {
  onOpenSearch: () => void;
}

const Hero = forwardRef<HTMLDivElement, HeroProps>(({ onOpenSearch }, ref) => {
  return (
    <section className="flex justify-center w-full bg-[#f8f9fa]">
      <div className="flex flex-col max-w-[1170px] w-full max-md:px-[5vw] justify-center items-center h-auto text-center pt-10">
        
        <div className="w-full flex justify-center md:hidden mb-4">
          <img 
            alt="Nota máxima no MEC!" 
            loading="lazy" 
            className="w-[170px] h-[94px] object-contain" 
            src="https://faculdadelibano.com.br/CF_CERTIFIER/faculdadelibano/images/first-section/common/mec-max.svg" 
          />
        </div>

        <div className="flex flex-col relative mt-2 mb-8 items-center w-full">
          <span role="heading" aria-level={1} className="my-[0.5rem] uppercase text-[0.875rem] font-medium tracking-[2.1px] leading-[1.006rem] text-[#ea005f]">
            MATRÍCULAS ABERTAS!
          </span>
          <h1 className="text-[#0B182F] font-bold text-[3.25rem] leading-[4.0875rem] max-md:text-[2.1875rem] max-md:leading-[2.625rem] md:max-w-[70%]">
            Inicie o 2º semestre com uma oferta de <span className="text-[#ea005f]">Pós-Graduação</span>
          </h1>
          <p className="mt-6 flex gap-1 items-center max-md:flex-col text-[#3C4043]">
            Em Julho, ao se matricular em uma Pós você leva outra de presente.
          </p>
          <img 
            alt="Nota máxima no MEC!" 
            loading="lazy" 
            className="pointer-events-none absolute h-auto right-0 mt-[30px] hidden md:block w-[170px] object-contain" 
            src="https://faculdadelibano.com.br/CF_CERTIFIER/faculdadelibano/images/first-section/common/mec-max.svg" 
          />
        </div>

        <div ref={ref} className="w-full flex justify-center items-center mb-10 h-[58px]">
          <button 
            onClick={onOpenSearch}
            className="text-white px-8 py-2 rounded-full relative transition-all duration-[350ms] font-bold tracking-[0.0875rem] h-[58px] w-fit max-[415px]:w-full group hover:shadow-lg hover:bg-white hover:-translate-y-[2px] bg-[#ea005f] flex items-center justify-center cursor-pointer"
            aria-label="Escolha sua pós-graduação"
          >
            <span className="group-hover:text-[#ea005f] group-hover:translate-x-[-6px] transition duration-[350ms] max-md:py-[0.8rem] text-white text-[0.875rem] text-center">
              ESCOLHA SUA PÓS-GRADUAÇÃO
            </span>
            <div className="absolute right-4 transform mr-4 leading-[1.5313rem] transition duration-[350ms] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-4 group-hover:text-[#ea005f]">
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
              </svg>
            </div>
          </button>
        </div>
        
      </div>
    </section>
  );
});

Hero.displayName = "Hero";
export default Hero;
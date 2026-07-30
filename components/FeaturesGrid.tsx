"use client";

export default function FeaturesGrid() {
  return (
    <section className="flex justify-center w-full bg-[#f8f9fa] pb-16">
      <div className="flex flex-col max-w-[1170px] w-full max-md:px-[5vw]">
        
        <div className="flex flex-col md:flex-row items-center h-full text-[#0B182F] text-left mb-7">
          <div className="bg-white rounded-[25px] shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full flex flex-col justify-center p-10 md:w-1/2 mb-7 md:mb-0 mr-0 md:mr-7 cursor-default">
            <div className="w-full h-full flex justify-center items-center">
              <img 
                alt="Formatura presencial" 
                className="pointer-events-none select-none rounded-2xl object-cover h-auto w-full scale-105 md:aspect-[1.31]" 
                src="https://faculdadelibano.com.br/_next/image?url=%2FCF_CERTIFIER%2Ffaculdadelibano%2Fimages%2Ffirst-section%2Foutubro-23%2Foutubro23-1-1-5.webp&w=1080&q=75" 
              />
            </div>
            <p className="py-5 font-bold text-2xl leading-tight">
              Centenas de alunos formados <br className="hidden md:block" /> todos os meses na Líbano.
            </p>
            <div className="flex flex-col md:flex-row md:items-center">
              <img 
                alt="Alunos por todo o Brasil!" 
                className="w-full md:w-[45%] max-w-[260px] h-auto pointer-events-none select-none" 
                src="https://faculdadelibano.com.br/_next/image?url=%2FCF_CERTIFIER%2Ffaculdadelibano%2Fimages%2Ffirst-section%2Foutubro-23%2Foutubro23-1-2.webp&w=1080&q=75" 
              />
              <p className="md:ml-5 leading-4 tracking-[0.15px] text-[#3C4043] font-normal text-[0.9375rem] pt-5 md:pt-1">
                Mais de 225.000 <br className="hidden md:block" /> alunos pelo Brasil.
              </p>
            </div>
          </div>

          <div className="flex flex-col h-full justify-center items-center gap-y-7 md:w-1/2">
            
            <div className="bg-white rounded-[25px] shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full p-10 md:p-6 flex flex-col-reverse md:grid md:grid-cols-2 w-full cursor-default">
              <div className="md:col-span-1 flex flex-col w-full gap-y-3 py-4 justify-center items-center md:justify-start md:items-start md:pr-7">
                <p className="font-bold text-2xl leading-tight flex text-center md:text-left">
                  Metodologia para conclusão rápida em 6 meses.
                </p>

                <div className="w-full flex justify-center mt-6">
                  <style>{`
                    @keyframes rotateEndStick {
                      0% { transform: rotate(-44deg); }
                      100% { transform: rotate(44deg); } 
                    }
                    /* O avião agora viaja junto com a linha e trava em 50% (0deg) */
                    @keyframes rotateHalfStick {
                      0% { transform: rotate(-44deg); }
                      50% { transform: rotate(0deg); }
                      100% { transform: rotate(0deg); } 
                    }
                    @keyframes revealDashed {
                      0% { width: 0%; }
                      100% { width: 100%; }
                    }
                    @keyframes revealDashedContainer {
                      0% { opacity: 0; }
                      10% { opacity: 1; }
                      100% { opacity: 1; }
                    }
                    @keyframes colorChange {
                      0% { background-color: white; border-color: #ea005f; }
                      100% { background-color: #e978a5; border-color: #e978a5;; }
                    }
                    .opacity-animated { opacity: 0; animation: fadeIn 1s ease-in forwards; }
                    .delayed-opacity { opacity: 0; animation: fadeIn 1s ease-in 2.5s forwards; }
                    @keyframes fadeIn { to { opacity: 1; } }
                  `}</style>

                  <div className="min-w-[226px] max-w-[226px] h-[86px] relative text-[#0B182F]">

                    <div className="absolute bottom-0 left-0">
                      <span className="text-[1.25rem] font-semibold relative opacity-animated">
                        2026<span className="absolute -bottom-2 flex text-[0.6rem] w-full items-center justify-center text-center text-[#717171] uppercase tracking-wide">Julho</span>
                      </span>
                    </div>
                    <div className="absolute bottom-0 right-0">
                      <span className="text-[1.25rem] font-semibold relative delayed-opacity">
                        2026<span className="absolute -bottom-2 flex text-[0.6rem] w-full items-center justify-center text-center text-[#ea005f] uppercase tracking-wide">Dezembro</span>
                      </span>
                    </div>

                    <div id="circle-go-to-final-container" className="w-[226px] h-[226px] rounded-full absolute top-4">
                      <div id="stick-go-to-final" className="w-[1px] h-[125px] top-0 relative left-[112.5px] origin-bottom-right" style={{ animation: '3s ease-out 0s 1 normal forwards running rotateEndStick' }}>
                        <div id="final-point" className="w-[8px] h-[8px] border rounded-full absolute top-[-4px] left-[-4px] border-[#ea005f] bg-white" style={{ animation: '3s ease-out 0s 1 normal forwards running colorChange' }}></div>
                      </div>
                    </div>

                    <div id="circle-go-to-50-container" className="w-[226px] h-[226px] rounded-full absolute top-4">
                      <div id="stick-go-to-50" className="w-[1px] z-[1] h-[125px] top-0 relative left-[112.5px] origin-bottom-right" style={{ animation: '3s ease-out 0s 1 normal forwards running rotateHalfStick' }}>

                        <div id="plane-container" className="flex items-center justify-center w-[32px] h-[32px] bg-[#ea005f] rounded-full absolute top-[-27px] left-[-15.5px]">
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white mb-[1px]" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                            <path d="M407.7 224c-3.4 0-14.8.1-18 .3l-64.9 1.7c-.7 0-1.4-.3-1.7-.9L225.8 79.4c-2.9-4.6-8.1-7.4-13.5-7.4h-23.7c-5.6 0-7.5 5.6-5.5 10.8l50.1 142.8c.5 1.3-.4 2.7-1.8 2.7L109 230.1c-2.6.1-5-1.1-6.6-3.1l-37-45c-3-3.9-7.7-6.1-12.6-6.1H36c-2.8 0-4.7 2.7-3.8 5.3l19.9 68.7c1.5 3.8 1.5 8.1 0 11.9l-19.9 68.7c-.9 2.6 1 5.3 3.8 5.3h16.7c4.9 0 9.6-2.3 12.6-6.1L103 284c1.6-2 4.1-3.2 6.6-3.1l121.7 2.7c1.4.1 2.3 1.4 1.8 2.7L183 429.2c-2 5.2-.1 10.8 5.5 10.8h23.7c5.5 0 10.6-2.8 13.5-7.4L323.1 287c.4-.6 1-.9 1.7-.9l64.9 1.7c3.3.2 14.6.3 18 .3 44.3 0 72.3-14.3 72.3-32S452.1 224 407.7 224z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div id="circle-start-container" className="w-[226px] h-[226px] rounded-full absolute top-4">
                      <div id="stick-start" className="w-[1px] h-[125px] top-0 relative left-[112.5px] origin-bottom-right rotate-[-44deg]">
                        <div id="start-point" className="w-[8px] h-[8px] border rounded-full absolute top-[-4px] left-[-4px] border-[#ea005f] bg-[#ea005f]"></div>
                      </div>
                    </div>

                    <div className="relative h-[48px] overflow-hidden">
                      <div 
                        id="dashed-reveal" 
                        className="absolute top-0 left-0 h-full md:overflow-hidden" 
                        style={{ animation: '3s ease-out 0s 1 normal forwards running revealDashed', marginLeft: '24px' }}
                      >
                        <svg 
                          id="circle-dashed-container" 
                          viewBox="0 0 226 226" 
                          xmlns="http://www.w3.org/2000/svg" 
                          className="w-[226px] h-[226px] absolute -left-[24px]" 
                          style={{ 
                            WebkitMaskImage: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 90%, rgba(255, 255, 255, 0) 100%)',
                            maskImage: 'linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.2) 90%, rgba(255, 255, 255, 0) 100%)', 
                            animation: '3s ease-out 0s 1 normal forwards running revealDashedContainer' 
                          }}
                        >
                          <circle cx="113" cy="113" r="114" stroke="#ea005f" strokeWidth="2" fill="none" strokeDasharray="10, 10"></circle>
                        </svg>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
              <div className="md:col-span-1 w-full h-full mb-5 md:mb-0 flex justify-center items-center">
                <img 
                  alt="Somente 6 meses!" 
                  className="w-[280px] md:w-full h-auto object-contain" 
                  src="https://faculdadelibano.com.br/_next/image?url=%2FCF_CERTIFIER%2Ffaculdadelibano%2Fimages%2Ffirst-section%2Foutubro-23%2Foutubro23-2-1-1.webp&w=1080&q=75" 
                />
              </div>
            </div>

            <div className="bg-white rounded-[25px] shadow-[0_4px_20px_rgb(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] h-full w-full p-10 md:p-6 flex flex-col-reverse md:grid md:grid-cols-2 cursor-default">
              <div className="md:col-span-1 flex flex-col justify-end w-full py-4 gap-y-5 md:pr-7">
                <p className="font-bold text-2xl leading-tight text-center md:text-left">
                  Estude como se assistisse sua série favorita.
                </p>
                <img 
                  alt="Sua plataforma de estudos" 
                  className="pointer-events-none select-none w-full scale-105 md:scale-100 md:w-[90%] md:h-auto mb-5 md:mb-0 mx-auto md:mx-0" 
                  src="https://faculdadelibano.com.br/_next/image?url=%2FCF_CERTIFIER%2Ffaculdadelibano%2Fimages%2Ffirst-section%2Foutubro-23%2Foutubro23-3-2.webp&w=1080&q=75" 
                />
              </div>
              <div className="md:col-span-1 w-full h-full flex justify-center items-center">
                <img 
                  alt="Plataforma totalmente EaD!" 
                  className="pointer-events-none select-none w-full h-auto scale-110" 
                  src="https://faculdadelibano.com.br/_next/image?url=%2FCF_CERTIFIER%2Ffaculdadelibano%2Fimages%2Ffirst-section%2Foutubro-23%2Foutubro23-3-1-3.webp&w=1080&q=75" 
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
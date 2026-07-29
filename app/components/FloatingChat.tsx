"use client";

import { useState } from "react";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* BOTÃO FLUTUANTE */}
      <div 
        onClick={() => setIsOpen(true)}
        className={`fixed right-[30px] bottom-[30px] mb-[84px] max-md:right-[20px] max-md:bottom-[20px] max-md:mb-[70px] aspect-square w-[60px] h-[60px] rounded-full flex items-center justify-center bg-gradient-to-r from-[#ea005f] to-[#ff3f94] shadow-lg transition-all duration-300 ease-in-out origin-center cursor-pointer z-[60] hover:scale-110 pointer-events-auto ${isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="fill-white" height="34" width="34" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd"></path>
        </svg>
      </div>

      {/* CONTAINER DO CHAT */}
      <div className={`fixed right-[30px] bottom-[30px] mb-[84px] max-md:inset-0 max-md:mb-0 max-md:p-0 z-[70] transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'}`}>
        
        <form 
          id="form_chat_lead" 
          method="post" 
          className="w-[336px] max-md:w-full max-md:!h-full bg-white drop-shadow-2xl md:rounded-se-[50px] md:rounded-2xl shadow-lg flex flex-col relative max-md:rounded-none" 
          style={{ fontFamily: 'system-ui', height: '500px' }}
        >
          {/* Botão Fechar - Desktop */}
          <button 
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Fechar conversa" 
            className="absolute left-[-33px] top-[45px] max-md:hidden -translate-y-1/2 bg-white/80 hover:bg-white/90 rounded-full transition-all"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-[#434d55] opacity-90 hover:opacity-100" height="27" width="27" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
            </svg>
          </button>

          <div className="w-full h-full flex flex-col justify-between overflow-hidden">
            
            {/* Cabeçalho do Chat */}
            <div className="h-[4.375rem] bg-gradient-to-r from-[#ea005f] to-[#ff3f94] w-full max-md:px-5 rounded-se-[36px] md:rounded-ss-[10px] flex items-center justify-between px-4 flex-shrink-0 max-md:rounded-none relative">
              <img alt="detalhe superior" loading="lazy" className="absolute left-0 top-0 z-[5] w-[65px] h-auto" src="https://faculdadelibano.com.br/root/acima.webp" />
              <img alt="detalhe inferior" loading="lazy" className="absolute right-0 bottom-0 z-10 w-[65px] h-auto" src="https://faculdadelibano.com.br/root/abaixo.webp" />
              
              <div className="flex items-center gap-2 z-20">
                {/* Botão Fechar - Mobile */}
                <div className="flex items-center gap-2 pr-4 md:hidden" onClick={() => setIsOpen(false)}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="cursor-pointer text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </div>
                
                <div className="rounded-full flex items-center justify-center relative w-10 h-10 max-md:w-8 max-md:h-8">
                  <img alt="Everton Teles" loading="lazy" className="object-cover rounded-full w-full h-full" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                  <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
                    <div className="w-2 h-2 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-[#ea005f]"></div>
                  </div>
                </div>
                
                <div className="flex flex-col">
                  <p className="text-white text-[15px] leading-[18px] mb-1">Everton Teles</p>
                  <p className="text-white text-[13px] opacity-50 leading-[14px]">Consultor Educacional</p>
                </div>
              </div>
            </div>

            {/* Área de Mensagens */}
            <div id="chat-container" className="h-full flex flex-col pr-[1px] max-md:p-5 pt-12 overflow-y-auto relative md:border-b border-[#eee]" style={{ paddingBottom: '1rem' }}>
              
              <div className="w-full flex justify-start">
                <div className="flex pl-4 max-md:pl-0 items-end gap-2 pb-0.5">
                  <div className="w-8 h-8"></div>
                  <div className="flex flex-col">
                    <p className="text-[0.8125rem] text-[#959da5] ml-2 mb-1">Everton Teles</p>
                    <div className="flex flex-col items-start">
                      <div className="relative px-4 pt-3 pb-3 text-[#222d38] text-[0.9375rem] rounded-xl bg-[#f1f0f0]">
                        <p className="whitespace-pre-wrap break-words" style={{ maxWidth: '191px' }}>
                          <span>Olá, tudo bem?</span>
                          <span className="float-right mt-2 text-[0.75rem] text-[#9d9e9f] ml-2 leading-none select-none">10:52</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full pb-3 flex justify-start">
                <div className="flex pl-4 max-md:pl-0 items-end gap-2 pb-0.5">
                  <div className="self-end mb-[6px]">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center relative w-8 h-8">
                      <img alt="Everton" loading="lazy" className="object-cover rounded-full w-full h-full" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start">
                      <div className="relative px-4 pt-3 pb-3 text-[#222d38] text-[0.9375rem] rounded-xl bg-[#f1f0f0]">
                        <p className="whitespace-pre-wrap break-words" style={{ maxWidth: '191px' }}>
                          <span>Já terminou a faculdade?</span>
                          <span className="float-right mt-2 text-[0.75rem] text-[#9d9e9f] ml-2 leading-none select-none">10:52</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Botões de Ação Rapida */}
              <div className="flex items-end justify-end w-full gap-[6px] pr-3">
                <button type="button" className="w-fit px-4 h-[34px] font-medium bg-white hover:bg-[#445669] hover:text-white transition-all duration-300 ease-in border border-[#445669] text-[#445669] shadow-md rounded-full flex items-center justify-center text-sm">Sim</button>
                <button type="button" className="w-fit px-4 h-[34px] font-medium bg-white hover:bg-[#445669] hover:text-white transition-all duration-300 ease-in border border-[#445669] text-[#445669] shadow-md rounded-full flex items-center justify-center text-sm">Não</button>
              </div>
            </div>

            {/* Input de Mensagem */}
            <div id="input-container" className="bg-white h-fit w-full bottom-0 px-5 max-md:px-2 py-2">
              <div className="flex justify-end items-center w-full gap-2 h-full max-md:rounded-full max-md:px-2 max-md:bg-[#f1f0f0]">
                <input 
                  id="chat-input" 
                  type="text" 
                  disabled 
                  placeholder="Digite a sua mensagem" 
                  aria-label="Digite a sua mensagem" 
                  className="w-full rounded-xl outline-none h-full py-3 max-md:py-[13px] max-md:px-3 max-md:bg-[#f1f0f0] bg-white text-[#3c4043]" 
                />
                <button 
                  type="button" 
                  disabled 
                  aria-label="Enviar mensagem" 
                  className="w-[34px] h-[34px] flex items-center justify-center flex-shrink-0 text-white rounded-full text-sm cursor-not-allowed md:bg-[#58708833]"
                >
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="md:flex max-md:hidden" height="30" width="30" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"></path>
                  </svg>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="md:hidden text-gray-400" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path d="m21.426 11.095-17-8A1 1 0 0 0 3.03 4.242l1.212 4.849L12 12l-7.758 2.909-1.212 4.849a.998.998 0 0 0 1.396 1.147l17-8a1 1 0 0 0 0-1.81z"></path>
                  </svg>
                </button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  );
}
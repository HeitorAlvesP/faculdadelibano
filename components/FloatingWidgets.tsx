"use client";

import { useState, useEffect } from "react";

export default function FloatingWidgets() {
  const [activeWidget, setActiveWidget] = useState<"chat" | "whats" | null>(null);
  const [showPromo, setShowPromo] = useState(true);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const isWhatsValid = name.trim().length > 2 && phone.replace(/\D/g, '').length >= 10;

  useEffect(() => {
    const footer = document.getElementById("main-footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, ""); 
    v = v.slice(0, 11); 

    let formatted = v;
    if (v.length > 7) {
      formatted = `(${v.slice(0, 2)}) ${v.slice(2, 3)} ${v.slice(3, 7)}-${v.slice(7)}`;
    } else if (v.length > 3) {
      formatted = `(${v.slice(0, 2)}) ${v.slice(2, 3)} ${v.slice(3)}`;
    } else if (v.length > 2) {
      formatted = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      formatted = `(${v}`;
    }

    setPhone(formatted);
  };

  const handleWhatsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isWhatsValid) {
      const text = encodeURIComponent(`Olá, me chamo ${name} e gostaria de atendimento.`);
      window.open(`https://wa.me/5599999999999?text=${text}`, '_blank');
      setActiveWidget(null);
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes pulse-border {
          0% { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        .floatwp::before {
          content: '';
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border-radius: 50%;
          border: 2px solid #25d366;
          animation: pulse-border 1.8s infinite ease-out;
          z-index: -1;
        }
      `}} />

      <div className={isFooterVisible ? 'hidden' : 'block'}>

        <div 
          className={`fixed inset-0 bg-black/30 backdrop-blur-[3px] z-[999990] transition-opacity duration-300 md:hidden ${activeWidget ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setActiveWidget(null)}
        />

        <div 
          onClick={() => setActiveWidget(activeWidget === 'whats' ? null : 'whats')}
          className="floatwp fixed z-[60] cursor-pointer w-[60px] h-[60px] bg-[#25d366] rounded-full flex items-center justify-center transition-all duration-300 md:bottom-[8vw] md:right-[5%] max-md:bottom-[100px] max-md:right-[20px]"
        >
          <span aria-label="Contato por WhatsApp" className="hidden">Contato por WhatsApp</span>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white w-[27px] h-[27px] m-[24%]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
          </svg>
        </div>

        <form 
          onSubmit={handleWhatsSubmit} 
          id="form_whats_lead" 
          className={`transition-all duration-300 ease-in-out fixed z-[999999] md:bottom-[8vw] md:right-[calc(5%+76px)] w-[336px] md:origin-bottom-right max-md:inset-0 max-md:m-auto max-md:w-[calc(100vw-40px)] max-md:h-[calc(100dvh-40px)] max-md:max-h-[600px] max-md:origin-center ${activeWidget === 'whats' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'}`}
        >
          <input type="hidden" name="name" value={name} />
          
          <div className="select-none bg-[#F5F1EB] shadow-2xl overflow-hidden rounded-2xl h-[384px] max-md:h-full relative">
            <div className="flex flex-col h-full relative">
  
              <div className="flex gap-2 justify-between items-center p-2 bg-[#005C4B]/90 shadow-lg relative z-20">
                <div className="flex gap-2 items-center">
                  <img alt="Logo" loading="lazy" className="rounded-full w-10 h-10 object-cover" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                  <div className="flex flex-col text-white">
                    <span className="text-[0.9375rem] font-semibold">Everton Teles</span>
                    <span className="text-xs opacity-60">Consultor Educacional</span>
                  </div>
                </div>
                <div onClick={() => setActiveWidget(null)} className="flex items-center gap-2 p-1.5 cursor-pointer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white z-10 hover:opacity-80" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
                </div>
              </div>

              <div className="flex-1 flex flex-col p-2 pt-4 h-full overflow-y-auto overflow-x-hidden w-full pb-[80px] relative z-10" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="absolute inset-0 bg-white/70 -z-10"></div>
                
                <div className="flex mb-4">
                  <div className="flex ml-3 w-full max-w-[80%]">
                    <div className="flex shrink-0 w-[36px] h-full items-end pb-1">
                      <img alt="Logo" loading="lazy" className="rounded-full w-[30px] h-[30px] mr-2 aspect-square z-10 object-cover" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                    </div>
                    <p className="relative font-message rounded-lg p-2 w-fit rounded-bl-none bg-white text-black before:content-[''] before:absolute before:top-0 before:-left-2 before:border-r-[8px] before:border-r-white text-[0.9375rem] shadow-sm">
                      Oi, tudo bem?
                    </p>
                  </div>
                </div>

                <div className="flex relative ml-3 w-full max-w-[80%]">
                  <div className="flex shrink-0 w-[36px] h-full items-end pb-1">
                    <img alt="Logo" loading="lazy" className="rounded-full w-[30px] h-[30px] mr-2 aspect-square object-cover" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                  </div>
                  <div className="font-message bg-white rounded-lg p-3 w-fit rounded-bl-none max-w-[100%] shadow-sm">
                    <p className="text-[0.9375rem]">Para agilizar o seu atendimento, informe os seus dados abaixo 👇</p>
                    <div className="flex flex-col pt-3 gap-3 max-w-[100%]">
                      <input 
                        placeholder="Nome" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl outline-none p-[8px] border-[1px] text-[0.938rem] text-[#3c4043] border-[#e7e6eb] focus:border-[#25d366]" 
                      />
                      <input 
                        placeholder="(99) 9 9999-9999" 
                        type="tel" 
                        value={phone}
                        onChange={handlePhoneChange}
                        className="rounded-xl outline-none p-[8px] border-[1px] text-[0.938rem] text-[#3c4043] border-[#e7e6eb] focus:border-[#25d366]" 
                        maxLength={16} 
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-4 z-20 flex flex-col w-full items-center">
                <button 
                  type="submit"
                  disabled={!isWhatsValid} 
                  className={`flex items-center justify-center gap-3 relative py-3 px-4 text-white rounded-full font-medium text-[0.875rem] w-full transition-all duration-300 shadow-sm ${isWhatsValid ? 'bg-[#005C4B] opacity-100 hover:-translate-y-[2px] cursor-pointer' : 'bg-gray-400 cursor-not-allowed opacity-60'}`}
                >
                  <div className="flex items-center gap-3">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path></svg> <span>Iniciar Atendimento</span></div>
                </button>
              </div>

            </div>
          </div>
        </form>

        <div 
          onClick={() => setActiveWidget(activeWidget === 'chat' ? null : 'chat')}
          className="fixed z-[60] cursor-pointer w-[60px] h-[60px] bg-gradient-to-r from-[#ea005f] to-[#ff3f94] shadow-lg rounded-full flex items-center justify-center transition-all duration-300 ease-in-out origin-center hover:scale-110 md:bottom-[calc(8vw+80px)] md:right-[5%] max-md:bottom-[176px] max-md:right-[20px]"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" aria-hidden="true" className="fill-white" height="34" width="34" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M5.337 21.718a6.707 6.707 0 01-.533-.074.75.75 0 01-.44-1.223 3.73 3.73 0 00.814-1.686c.023-.115-.022-.317-.254-.543C3.274 16.587 2.25 14.41 2.25 12c0-5.03 4.428-9 9.75-9s9.75 3.97 9.75 9c0 5.03-4.428 9-9.75 9-.833 0-1.643-.097-2.417-.279a6.721 6.721 0 01-4.246.997z" clipRule="evenodd"></path>
          </svg>
        </div>

        {/* Formulário Chat Rosa Modal */}
        <form 
          id="form_chat_lead" 
          className={`transition-all duration-300 ease-in-out fixed z-[999999] md:bottom-[8vw] md:right-[calc(5%+76px)] w-[336px] h-[500px] flex flex-col md:origin-bottom-right max-md:inset-0 max-md:m-auto max-md:w-[calc(100vw-40px)] max-md:h-[calc(100dvh-40px)] max-md:max-h-[600px] max-md:origin-center ${activeWidget === 'chat' ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'}`}
          style={{ fontFamily: 'system-ui' }}
        >
          <button 
            type="button" 
            onClick={() => setActiveWidget(null)} 
            className="absolute left-[-33px] top-[40px] z-[60] max-md:hidden -translate-y-1/2 bg-white/90 hover:bg-white rounded-full transition-all shadow-md p-1"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-[#434d55] opacity-90 hover:opacity-100" height="23" width="23" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
          </button>

          <div className="w-full h-full flex flex-col justify-between overflow-hidden relative bg-white shadow-2xl rounded-2xl md:rounded-se-[50px]">
            <div className="h-[4.375rem] bg-gradient-to-r from-[#ea005f] to-[#ff3f94] w-full max-md:px-5 flex items-center justify-between px-4 flex-shrink-0 relative">
              <img alt="detalhe superior" loading="lazy" className="absolute left-0 top-0 z-[5] w-[65px] h-auto" src="https://faculdadelibano.com.br/root/acima.webp" />
              <img alt="detalhe inferior" loading="lazy" className="absolute right-0 bottom-0 z-10 w-[65px] h-auto" src="https://faculdadelibano.com.br/root/abaixo.webp" />
              <div className="flex items-center gap-2 z-20">
                <div className="flex items-center gap-2 pr-4 md:hidden" onClick={() => setActiveWidget(null)}>
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="cursor-pointer text-white" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path></svg>
                </div>
                <div className="rounded-full flex items-center justify-center relative w-10 h-10 max-md:w-8 max-md:h-8">
                  <img alt="avatar" loading="lazy" className="object-cover rounded-full w-full h-full" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                  <div className="w-2 h-2 rounded-full bg-green-400 absolute top-0 right-0 border-2 border-[#ea005f]"></div>
                </div>
                <div className="flex flex-col">
                  <p className="text-white text-[15px] leading-[18px] mb-1">Everton Teles</p>
                  <p className="text-white text-[13px] opacity-50 leading-[14px]">Consultor Educacional</p>
                </div>
              </div>
            </div>
            
            <div className="h-full flex flex-col pr-[1px] max-md:p-5 pt-12 overflow-y-auto relative md:border-b border-[#eee]" style={{ paddingBottom: '1rem' }}>
              <div className="w-full flex justify-start">
                <div className="flex pl-4 max-md:pl-0 items-end gap-2 pb-0.5">
                  <div className="w-8 h-8"></div>
                  <div className="flex flex-col">
                    <p className="text-[0.8125rem] text-[#959da5] ml-2 mb-1">Everton Teles</p>
                    <div className="relative px-4 pt-3 pb-3 text-[#222d38] text-[0.9375rem] rounded-xl bg-[#f1f0f0]">
                      <p className="whitespace-pre-wrap break-words" style={{ maxWidth: '191px' }}>
                        <span>Olá, tudo bem?</span>
                        <span className="float-right mt-2 text-[0.75rem] text-[#9d9e9f] ml-2 leading-none select-none">15:51</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full pb-3 flex justify-start mt-2">
                <div className="flex pl-4 max-md:pl-0 items-end gap-2 pb-0.5">
                  <div className="self-end mb-[6px]">
                    <img alt="avatar" loading="lazy" className="object-cover rounded-full w-8 h-8" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                  </div>
                  <div className="flex flex-col">
                    <div className="relative px-4 pt-3 pb-3 text-[#222d38] text-[0.9375rem] rounded-xl bg-[#f1f0f0]">
                      <p className="whitespace-pre-wrap break-words" style={{ maxWidth: '191px' }}>
                        <span>Já terminou a faculdade?</span>
                        <span className="float-right mt-2 text-[0.75rem] text-[#9d9e9f] ml-2 leading-none select-none">15:51</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-end w-full gap-[6px] pr-3">
                <button type="button" className="w-fit px-4 h-[34px] font-medium bg-white hover:bg-[#445669] hover:text-white transition-all duration-300 ease-in border border-[#445669] text-[#445669] shadow-md rounded-full text-sm cursor-pointer">Sim</button>
                <button type="button" className="w-fit px-4 h-[34px] font-medium bg-white hover:bg-[#445669] hover:text-white transition-all duration-300 ease-in border border-[#445669] text-[#445669] shadow-md rounded-full text-sm cursor-pointer">Não</button>
              </div>
            </div>

            <div className="bg-white h-fit w-full bottom-0 px-5 max-md:px-2 py-2">
              <div className="flex justify-end items-center w-full gap-2 h-full max-md:rounded-full max-md:px-2 max-md:bg-[#f1f0f0]">
                <input disabled placeholder="Digite a sua mensagem" className="w-full rounded-xl outline-none h-full py-3 max-md:py-[13px] max-md:px-3 max-md:bg-[#f1f0f0] bg-white text-[#3c4043]" />
                <button type="button" disabled className="w-[34px] h-[34px] flex items-center justify-center flex-shrink-0 text-white rounded-full text-sm cursor-not-allowed md:bg-[#58708833]">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="md:flex max-md:hidden" height="30" width="30" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </form>


      </div>
    </>
  );
}
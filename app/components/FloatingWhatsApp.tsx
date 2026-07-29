"use client";

import { useState } from "react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  // Validação simples: libera o botão se o nome tiver mais de 2 letras e o telefone for preenchido
  const isValid = name.trim().length > 2 && phone.trim().length > 8;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValid) {
      // Aqui você pode disparar a ação para o seu WhatsApp (ex: window.open)
      const text = encodeURIComponent(`Olá, me chamo ${name} e gostaria de atendimento.`);
      window.open(`https://wa.me/5599999999999?text=${text}`, '_blank');
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* BOTÃO FLUTUANTE DO WHATSAPP (Fica na parte inferior, abaixo do outro chat) */}
      <div 
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed right-[30px] bottom-[30px] max-md:right-[20px] max-md:bottom-[20px] aspect-square w-[60px] h-[60px] rounded-full flex items-center justify-center bg-[#25d366] shadow-lg transition-all duration-300 ease-in-out origin-center cursor-pointer z-[50] hover:scale-110 pointer-events-auto ${isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'opacity-100 scale-100'}`}
      >
        <span aria-label="Contato por WhatsApp" className="hidden">Contato por WhatsApp</span>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white w-[32px] h-[32px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
        </svg>
      </div>

      {/* JANELA DO CHAT */}
      <div className={`fixed z-[80] md:bottom-[100px] right-[30px] max-md:right-[20px] md:right-[90px] max-md:left-0 max-md:top-0 w-[336px] max-md:w-full max-md:h-full transition-all duration-300 ease-in-out origin-bottom-right ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-50 pointer-events-none'}`}>
        
        <form onSubmit={handleSubmit} id="form_whats_lead" className="w-full h-full">
          <input type="hidden" name="name" value={name} />
          <input type="hidden" name="phone" value={phone} />
          
          <div className="select-none bg-[#F5F1EB] shadow-xl overflow-hidden md:rounded-xl max-md:h-full h-[384px] relative">
            <div className="flex flex-col h-full">
              
              {/* Topo do WhatsApp */}
              <div className="flex gap-2 justify-between items-center p-3 md:rounded-t-lg bg-[#005C4B] shadow-lg shrink-0">
                <div className="flex gap-3 items-center">
                  <img 
                    alt="Everton" 
                    loading="lazy" 
                    className="rounded-full w-10 h-10 object-cover" 
                    src="https://faculdadelibano.com.br/images/chat/everton.webp" 
                  />
                  <div className="flex flex-col text-white">
                    <span className="text-[0.9375rem] font-semibold">Everton Teles</span>
                    <span className="text-xs opacity-80">Consultor Educacional</span>
                  </div>
                </div>
                {/* Botão Fechar */}
                <div onClick={() => setIsOpen(false)} className="flex items-center gap-2 p-1.5 cursor-pointer">
                  <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="text-white z-10 opacity-80 hover:opacity-100 transition-opacity" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                  </svg>
                </div>
              </div>

              {/* Área de Mensagens (Fundo claro clássico do Whats) */}
              <div className="flex flex-col p-2 pt-4 h-full overflow-y-auto w-full pb-[80px] relative z-10" style={{ backgroundImage: "url('https://i.pinimg.com/736x/8c/98/99/8c98994518b575bfd8c949e91d20548b.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
                
                {/* Overlay branco translúcido para clarear o fundo (opcional) */}
                <div className="absolute inset-0 bg-white/60 -z-10"></div>

                <div className="flex mb-4">
                  <div className="flex ml-2 w-full max-w-[85%]">
                    <div className="flex shrink-0 w-[36px] items-end pb-1">
                      <img alt="Everton" loading="lazy" className="rounded-full w-7 h-7 mr-2 aspect-square z-10 object-cover" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                    </div>
                    <p className="relative rounded-lg p-2.5 w-fit rounded-bl-none bg-white text-[#111b21] shadow-sm text-[0.9375rem] before:content-[''] before:absolute before:top-0 before:-left-2 before:border-r-[8px] before:border-t-[0px] before:border-b-[10px] before:border-r-white before:border-b-transparent">
                      Oi, tudo bem?
                    </p>
                  </div>
                </div>

                <div className="flex relative ml-2 w-full max-w-[85%]">
                  <div className="flex shrink-0 w-[36px] items-end pb-1">
                    <img alt="Everton" loading="lazy" className="rounded-full w-7 h-7 mr-2 aspect-square object-cover" src="https://faculdadelibano.com.br/images/chat/everton.webp" />
                  </div>
                  
                  <div className="bg-white rounded-lg p-3 w-fit rounded-bl-none shadow-sm w-full">
                    <p className="text-[#111b21] text-[0.9375rem] mb-3">
                      Para agilizar o seu atendimento, informe os seus dados abaixo 👇
                    </p>
                    
                    <div className="flex flex-col gap-2 w-full">
                      <input 
                        placeholder="Nome" 
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="rounded-xl outline-none p-[10px] border-[1px] text-[0.9375rem] text-[#3c4043] border-[#e7e6eb] focus:border-[#25d366] transition-colors" 
                      />
                      <input 
                        placeholder="(99) 9 9999-9999" 
                        type="tel" 
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="rounded-xl outline-none p-[10px] border-[1px] text-[0.9375rem] text-[#3c4043] border-[#e7e6eb] focus:border-[#25d366] transition-colors" 
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Rodapé e Botão Enviar */}
              <div className="flex flex-col w-full items-center absolute bottom-0 left-0 right-0 p-4 z-20 bg-gradient-to-t from-[#F5F1EB] via-[#F5F1EB] to-transparent">
                <button 
                  type="submit"
                  disabled={!isValid} 
                  className={`group flex items-center justify-center gap-3 py-3 px-4 text-white rounded-full font-medium text-[0.9375rem] w-full transition-all duration-300 shadow-md ${isValid ? 'bg-[#005C4B] cursor-pointer opacity-100 hover:-translate-y-1' : 'bg-gray-400 cursor-not-allowed opacity-60'}`}
                >
                  <div className="flex items-center gap-2">
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="18" width="18" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path>
                    </svg> 
                    <span>Iniciar Atendimento</span>
                  </div>
                </button>
              </div>

            </div>
          </div>
        </form>
      </div>
    </>
  );
}
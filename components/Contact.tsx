"use client";

const contactCards = [
  {
    id: 'whatsapp',
    title: 'Envie um WhatsApp',
    status: 'Estamos Online',
    desc: 'Inicie uma conversa com nossos consultores educacionais.',
    img: 'https://faculdadelibano.com.br/images/Contact/envie-um-whatsapp.webp',
    link: 'https://faculdadelibano.com.br/whatsapp',
    actionText: 'ENVIAR MENSAGEM',
    external: false
  },
  {
    id: 'email',
    title: 'Envie um e-mail',
    status: 'Estamos Online',
    desc: 'Envie para: pos@faculdadelibano.com.br',
    isEmail: true,
    img: 'https://faculdadelibano.com.br/images/Contact/envie-um-email.webp',
    link: 'mailto:pos@faculdadelibano.com.br',
    actionText: 'ENVIAR E-MAIL',
    external: true
  },
  {
    id: 'chat',
    title: 'Envie um Chat',
    status: 'Estamos Online',
    desc: 'Inicie uma conversa com nossos consultores educacionais.',
    img: 'https://faculdadelibano.com.br/images/Contact/envie-um-chat.webp',
    link: '#',
    actionText: 'INICIAR CHAT ONLINE',
    external: false
  }
];

export default function Contact() {
  
  const handleCardClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (id === 'chat') {
      e.preventDefault(); 
      
      const whatsBtn = document.querySelector('.floatwp') as HTMLElement;
      if (whatsBtn) {
        whatsBtn.click();
      }
    }
  };

  return (
    <section id="contact" className="flex flex-col items-center px-5 md:px-[30px] my-16">
      
      <h2 
        className="sectionTitle text-[#0B182F] text-center mb-[30px] pb-[30px] text-[2.75rem] font-bold leading-[57.2px] max-md:text-[35px] max-md:leading-[42px]" 
        aria-label="Ainda está com dúvidas?"
      >
        Ainda está com dúvidas?
      </h2>

      <div className="w-full max-w-[1170px] grid grid-cols-3 justify-center max-md:grid-cols-1">
        
        {contactCards.map((card) => (
          <div key={card.id} className="w-[95%] max-md:ml-0 ml-[2.5%] pb-[30px] flex-col justify-center max-md:w-auto">
            
            <a 
              href={card.link} 
              target={card.external ? "_blank" : "_self"} 
              rel={card.external ? "noopener noreferrer" : ""} 
              className="cursor-pointer"
              onClick={(e) => handleCardClick(e, card.id)} 
            >
              <div className="group w-full min-[1200px]:h-[488px] bg-white drop-shadow duration-300 max-md:w-full max-md:h-auto hover:drop-shadow-lg hover:-translate-y-1">
                
                <div className="overflow-hidden w-full bg-cover">
                  <img 
                    alt={card.title} 
                    loading="lazy" 
                    decoding="async" 
                    className="pointer-events-none w-full h-auto transform transition group-hover:ease-linear group-hover:duration-[5000ms] group-hover:scale-125 duration-[500ms] ease-out" 
                    src={card.img} 
                  />
                </div>

                <div className="max-[1199px]:min-h-[183px] min-[1200px]:h-[183px] p-8 max-md:h-auto">
                  <h3 className="text-[#0B182F] font-bold text-2xl leading-tight cursor-pointer">{card.title}</h3>
                  <h4 className="text-[#00A859] font-bold text-base pt-5">{card.status}</h4>
                  
                  <div className="tracking-[0.15px] text-[#3C4043] font-normal text-sm pt-1 mr-7">
                    {card.isEmail ? (
                      <p className="text-[#3C4043] font-normal text-[0.9375rem] pt-1 max-md:mr-0">
                        Envie para: <b>pos@faculdadelibano.com.br</b>
                      </p>
                    ) : (
                      <p className="text-[#3C4043] font-normal text-[0.9375rem] pt-1 max-md:mr-0">
                        {card.desc}
                      </p>
                    )}
                  </div>
                </div>
                
                <hr aria-hidden="true" className="border-gray-100" />
                
                <div className="flex justify-center items-center py-4 cursor-pointer">
                  <span className="text-[#ea005f] font-bold flex justify-center text-[0.875rem] tracking-wider">
                    {card.actionText}
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="ml-2 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                    </svg>
                  </span>
                </div>

              </div>
            </a>
            
            <div className="min-[1200px]:hidden h-full w-full"></div>
          </div>
        ))}

      </div>
    </section>
  );
}
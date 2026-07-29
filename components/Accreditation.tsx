"use client";

export default function Accreditation() {
  return (
    <section id="accreditation" className="flex justify-center items-center px-5 md:px-0 mt-8 md:mt-[50px]">
      <div className="w-full max-w-[1170px] bg-white border border-[#00000012] rounded-[25px] shadow-[0_4px_20px_rgb(0,0,0,0.05)] flex flex-col-reverse md:flex-row items-center overflow-hidden">
        
        <div className="w-full md:w-1/2 pl-6 pr-6 md:pl-20 md:pr-14 py-8 md:py-10 flex flex-col justify-center">
          
          <div className="w-[210px] h-auto mb-4">
            <img 
              alt="Logo do MEC" 
              loading="lazy" 
              className="w-[50%] h-auto object-contain" 
              src="https://faculdadelibano.com.br/images/InfoMEC/emec-check.png" 
            />
          </div>

          <h2 className="text-[#0B182F] font-bold text-[2rem] md:text-[2.75rem] leading-tight md:leading-[52px] my-[0.7rem] text-left">
            Este será o seu Certificado com Nota Máxima no MEC
          </h2>

          <p className="text-[#3C4043] font-normal text-[0.9375rem] pt-1 mb-3 leading-relaxed">
            Certificamos que este curso atingiu a Nota Máxima (5 de 5) no Ministério da Educação (MEC), isso representa o mais alto padrão de qualidade educacional. Portaria da Faculdade Líbano nª 1.881 de 29/10/2019.
          </p>

          <span className="flex items-center pt-2">
            <a 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#ea005f] font-bold flex items-center text-sm tracking-wider cursor-pointer hover:underline" 
              aria-label="Conferir credenciamento do curso no MEC" 
              href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjI0NTU"
            >
              CONFERIR CREDENCIAMENTO
              <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="ml-2 text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
              </svg>
            </a>
          </span>

        </div>

        <div className="w-full max-w-full md:w-1/2 p-6 md:pl-2 md:pr-10 md:py-10 max-md:h-auto flex justify-center items-center">
          <img 
            alt="Certificado — Este será o seu Certificado com Nota Máxima no MEC" 
            loading="lazy" 
            className="pointer-events-none min-[769px]:w-full max-md:w-screen rounded-[25px] object-cover scale-105 transition-transform duration-300" 
            src="https://faculdadelibano.com.br/CF_CERTIFIER/faculdadelibano/images/certificate.webp" 
          />
        </div>

      </div>
    </section>
  );
}
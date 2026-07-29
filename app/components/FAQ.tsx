"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Quais os pré-requisitos para fazer uma pós-graduação?",
    answer: "Para fazer uma pós-graduação na Líbano, é necessário possuir um curso de graduação Bacharelado, Licenciatura ou Tecnólogo, presencial ou a distância, devidamente autorizado ou reconhecido pelo poder público."
  },
  {
    question: "Preciso ir à algum local para realizar minha pós-graduação?",
    answer: "Não. Os cursos são 100% online, incluindo avaliações e TCC. Tudo pra você fazer no conforto da sua casa ou no local que você quiser!"
  },
  {
    question: "Qual é a instituição responsável pelo meu certificado?",
    answer: (
      <>
        O certificado é emitido pela Faculdade Líbano, instituição devidamente credenciada pelo MEC. Você pode verificar o credenciamento e demais portarias através dos links abaixo:{" "}
        <a 
          href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjI0NTU=" 
          style={{ color: "#EA005F" }} 
          target="_blank" 
          rel="noopener noreferrer"
        >
          Link do E-mec : e-MEC - Sistema de Regulação do Ensino Superior Portarias: PORTARIA Nº 1.881, DE 29 DE OUTUBRO DE 2019 - Imprensa Nacional (in.gov.br)
        </a>
      </>
    )
  },
  {
    question: "Quais são os documentos necessários para iniciar meu curso de pós-graduação?",
    answer: "São necessários os seguintes documentos: • CPF • Carteira de Identidade • Comprovante de Residência • Diploma de Graduação. Você poderá fazer o upload de seus documentos no Portal do Aluno em até 30 dias após a data de sua matrícula."
  },
  {
    question: "Como funciona a liberação do curso?",
    answer: "Após a confirmação do pagamento da taxa de matrícula e assinatura do seu contrato do aluno, seu curso será liberado imediatamente."
  },
  {
    question: "Posso trancar meu curso de pós-graduação?",
    answer: "O cancelamento do curso de pós-graduação poderá ser feito dentro de 7 dias sem custo algum para o aluno. Após esse período, caso o aluno deseje cancelar, haverá uma taxa de R$105,00 para seguir com a rescisão contratual e deverá estar com as mensalidades em dia. Além disso, não será restituído nenhum valor já pago. Para realizar o cancelamento do curso, o aluno deverá fazer a solicitação no e-mail da Ouvidoria, através do endereço ouvidoria@libanoeducacional.com.br e aguardar as orientações do setor responsável."
  },
  {
    question: "E se eu quiser cancelar minha pós, como faço?",
    answer: "O cancelamento do curso de pós-graduação poderá ser feito dentro de 7 dias sem custo algum para o aluno. Após esse período, caso o aluno deseje cancelar, haverá uma taxa de R$105,00 para seguir com a rescisão contratual e deverá estar com as mensalidades em dia. Além disso, não será restituído nenhum valor já pago."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="items-center px-4 md:px-[60px] my-16 flex flex-col" itemScope itemType="https://schema.org/FAQPage">
      <div className="flex flex-col items-center w-full max-w-[1170px]">

        <div className="flex flex-col w-full text-center items-center justify-center">
          <h2 className="sectionTitle mb-[17.5px] text-[#0B182F] text-[2.75rem] font-bold leading-[57.2px] max-md:text-[35px] max-md:leading-[42px]" aria-label="Respostas para as suas perguntas">
            Respostas para as suas perguntas
          </h2>
        </div>

        <div className="flex flex-col w-full max-w-[1170px] max-md:max-w-full divide-y divide-gray-200 mt-6">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="text-[#3C4043] text-xl max-md:mr-4 py-4" 
                itemScope 
                itemProp="mainEntity" 
                itemType="https://schema.org/Question"
              >
                <div 
                  onClick={() => toggleAccordion(index)}
                  className="flex cursor-pointer justify-between items-center pt-[20px] select-none"
                >
                  <h3 className="font-bold select-none text-xl text-[#0B182F]" itemProp="name">
                    {item.question}
                  </h3>
                  
                  <svg 
                    stroke="currentColor" 
                    fill="currentColor" 
                    strokeWidth="0" 
                    viewBox="0 0 512 512" 
                    className={`transform transition-transform duration-200 text-lg flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                    height="1em" 
                    width="1em" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z"></path>
                  </svg>
                </div>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 pt-3 pb-2' : 'max-h-0 opacity-0'}`}
                  itemScope 
                  itemProp="acceptedAnswer" 
                  itemType="https://schema.org/Answer"
                >
                  <span itemProp="text" className="text-[#3C4043] text-base block leading-relaxed">
                    {item.answer}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
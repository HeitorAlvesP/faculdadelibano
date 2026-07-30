"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

// Cursos em Destaque (Pesquisas em Alta)
const highlightedCourses = [
  { title: "Serviço Social na Saúde", link: "/pos-graduacao/servico-social/curso/servico-social-na-saude" },
  { title: "Políticas Públicas, Gestão e Serviços Sociais", link: "/pos-graduacao/servico-social/curso/politicas-publicas-gestao-e-servicos-sociais" },
  { title: "Ciências Políticas", link: "/pos-graduacao/servico-social/curso/ciencias-politicas" },
  { title: "Serviço Social na Educação", link: "/pos-graduacao/servico-social/curso/servico-social-na-educacao" },
  { title: "Serviço Social e Políticas Públicas", link: "/pos-graduacao/servico-social/curso/servico-social-e-politicas-publicas" },
];

// Lista completa de cursos da área
const regularCourses = [
  { title: "Ciência Política e Estudos Socioantropológicos", link: "/pos-graduacao/servico-social/curso/ciencia-politica-e-estudos-socioantropologicos" },
  { title: "Ciências Políticas", link: "/pos-graduacao/servico-social/curso/ciencias-politicas" },
  { title: "Direitos Humanos, Cidadania e Justiça Global", link: "/pos-graduacao/servico-social/curso/direitos-humanos-cidadania-e-justica-global" },
  { title: "Educação Social e Intervenção no Serviço Social", link: "/pos-graduacao/servico-social/curso/educacao-social-e-intervencao-no-servico-social" },
  { title: "Gestão Pública e Social", link: "/pos-graduacao/servico-social/curso/gestao-publica-e-social" },
  { title: "Gestão de Políticas Públicas", link: "/pos-graduacao/servico-social/curso/gestao-de-politicas-publicas" },
  { title: "Gestão de Serviço Social", link: "/pos-graduacao/servico-social/curso/gestao-de-servico-social" },
  { title: "Gestão do Terceiro Setor", link: "/pos-graduacao/servico-social/curso/gestao-do-terceiro-setor" },
  { title: "Instrumentalidade do Serviço Social", link: "/pos-graduacao/servico-social/curso/instrumentalidade-do-servico-social" },
  { title: "Movimentos Sociais e Políticas Públicas", link: "/pos-graduacao/servico-social/curso/movimentos-sociais-e-politicas-publicas" },
  { title: "Política Social e Projetos de Impacto", link: "/pos-graduacao/servico-social/curso/politica-social-e-projetos-de-impacto" },
  { title: "Políticas Públicas, Gestão e Serviços Sociais", link: "/pos-graduacao/servico-social/curso/politicas-publicas-gestao-e-servicos-sociais" },
  { title: "Políticas Sociais", link: "/pos-graduacao/servico-social/curso/politicas-sociais" },
  { title: "Políticas Sociais E Seguridade Social", link: "/pos-graduacao/servico-social/curso/politicas-sociais-e-seguridade-social" },
  { title: "Políticas Sociais Integradas", link: "/pos-graduacao/servico-social/curso/politicas-sociais-integradas" },
  { title: "Políticas Sociais e Gestão de Serviços Sociais", link: "/pos-graduacao/servico-social/curso/politicas-sociais-e-gestao-de-servicos-sociais" },
  { title: "Serviço Social e Políticas Públicas", link: "/pos-graduacao/servico-social/curso/servico-social-e-politicas-publicas" },
  { title: "Serviço Social e Previdência", link: "/pos-graduacao/servico-social/curso/servico-social-e-previdencia" },
  { title: "Serviço Social em Saúde Mental e Atenção Psicossocial", link: "/pos-graduacao/servico-social/curso/servico-social-em-saude-mental-e-atencao-psicossocial" },
  { title: "Serviço Social na Educação", link: "/pos-graduacao/servico-social/curso/servico-social-na-educacao" },
  { title: "Serviço Social na Saúde", link: "/pos-graduacao/servico-social/curso/servico-social-na-saude" },
  { title: "Serviço Social, Ética e Direitos Humanos", link: "/pos-graduacao/servico-social/curso/servico-social-etica-e-direitos-humanos" },
];

export default function ServicoSocialList({ onBack }: CourseListProps) {
  return (
    <section className="flex flex-col w-full h-full pr-[5px] overflow-y-scroll bg-white">
      
      <div className="pt-[48px] pb-[28px] pl-[16px] pr-[16px] shrink-0 sticky top-0 bg-white z-20">
        <div spellCheck="false" className="relative flex items-center w-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-5 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#3c4043]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 21l-4.35-4.35"></path><circle cx="11" cy="11" r="8"></circle>
          </svg>
          <input 
            autoComplete="off" 
            type="text" 
            name="findCourse" 
            id="findCourse" 
            className="w-full border rounded-full border-solid border-[#d9d3d3] text-[#3c4043] outline-none text-[1rem] font-normal h-[48px] leading-[1.25rem] pl-[50px] pr-[36px] mr-[1.25rem] placeholder:text-[#3c404395] placeholder:font-medium max-md:tracking-[-0.02rem]" 
            placeholder="Pesquisar" 
            autoFocus
          />
          <div onClick={onBack} className="text-black select-none cursor-pointer font-medium hover:text-[#ea005f] transition-colors whitespace-nowrap">
            Cancelar
          </div>
        </div>
      </div>

      <div className="w-full bg-[#EDEDED] text-[#3c4043] text-[0.8rem] font-bold tracking-[.12em] max-md:tracking-[.13em] py-[8px] px-[24px] uppercase shrink-0">
        PESQUISAS EM ALTA NO SERVIÇO SOCIAL
        <span className="ml-1 pointer-events-none text-[#3c4043] text-[0.6rem] font-light italic transition-all duration-300 opacity-0">(Cursos copiados para a área de transferência)</span>
      </div>

      <div className="flex flex-col">
        {highlightedCourses.map((course, index) => (
          <div key={`high-${index}`}>
            <div className="flex flex-row items-center px-4 hover:bg-gray-50 transition-colors">
              <div className="overflow-hidden ml-[2px] min-w-[46px] h-[48px] rounded-lg">
                <img alt="Curso" loading="lazy" className="object-cover rounded-lg w-[45px] h-[45px]" src="https://faculdadelibano.com.br/images/ChooseSection/listCourses.webp" />
              </div>
              <div className="flex items-center justify-center overflow-hidden min-w-[37px] h-[18px] ml-[2px] rounded-lg">
                <img alt="(em destaque)" loading="lazy" className="object-cover w-[20px]" src="https://faculdadelibano.com.br/images/ChooseSection/up.png" />
              </div>
              <Link aria-label={`Saiba mais sobre o curso de ${course.title}`} className="cursor-pointer w-full py-4" href={course.link}>
                <div className="flex items-center text-[1rem] leading-[1.25rem] pl-4 min-h-[45px]">
                  <span className="text-[#222222]">{course.title}</span>
                </div>
              </Link>
            </div>
            <hr className="w-[97%] ml-4 border-gray-100" />
          </div>
        ))}
      </div>

      <div className="w-full bg-[#EDEDED] text-[#3c4043] text-[0.8rem] font-bold tracking-[.12em] max-md:tracking-[.13em] py-[8px] px-[24px] uppercase shrink-0 mt-4">
        MAIS {regularCourses.length} CURSOS NO SERVIÇO SOCIAL
      </div>

      <div className="flex flex-col pb-10">
        {regularCourses.map((course, index) => (
          <div key={`reg-${index}`}>
            <div className="flex flex-row items-center px-4 hover:bg-gray-50 transition-colors">
              <div className="overflow-hidden ml-[2px] min-w-[46px] h-[48px] rounded-lg">
                <img alt="Curso" loading="lazy" className="object-cover rounded-lg w-[45px] h-[45px]" src="https://faculdadelibano.com.br/images/ChooseSection/listCourses.webp" />
              </div>
              <Link aria-label={`Saiba mais sobre o curso de ${course.title}`} className="cursor-pointer w-full py-4" href={course.link}>
                <div className="flex items-center text-[1rem] leading-[1.25rem] pl-4 min-h-[45px]">
                  <span className="text-[#222222]">{course.title}</span>
                </div>
              </Link>
            </div>
            <hr className="w-[97%] ml-4 border-gray-100" />
          </div>
        ))}
      </div>

    </section>
  );
}
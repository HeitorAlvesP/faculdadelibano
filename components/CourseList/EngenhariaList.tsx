"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

// Cursos em Destaque (Pesquisas em Alta)
const highlightedCourses = [
  { title: "Engenharia de Segurança do Trabalho", link: "/pos-graduacao/engenharia/curso/engenharia-de-seguranca-do-trabalho" },
  { title: "Gestão em Orçamento, Planejamento e Controle na Construção Civil", link: "/pos-graduacao/engenharia/curso/gestao-em-orcamento-planejamento-e-controle-na-construcao-civil" },
  { title: "Instalações Elétricas de Baixa, Média e Alta Tensão", link: "/pos-graduacao/engenharia/curso/instalacoes-eletricas-de-baixa-media-e-alta-tensao" },
];

// Lista completa de cursos da área
const regularCourses = [
  { title: "Agrimensura", link: "/pos-graduacao/engenharia/curso/agrimensura" },
  { title: "Arquitetura Escolar", link: "/pos-graduacao/engenharia/curso/arquitetura-escolar" },
  { title: "Arquitetura Hospitalar", link: "/pos-graduacao/engenharia/curso/arquitetura-hospitalar" },
  { title: "Auditoria E Controle Da Qualidade Industrial", link: "/pos-graduacao/engenharia/curso/auditoria-e-controle-de-qualidade-industrial" },
  { title: "Automação Industrial", link: "/pos-graduacao/engenharia/curso/automacao-industrial" },
  { title: "BIM e Projetos Aplicados à Construção Civil", link: "/pos-graduacao/engenharia/curso/bim-e-projetos-aplicados-a-construcao-civil" },
  { title: "Conforto Ambiental nas Edificações", link: "/pos-graduacao/engenharia/curso/conforto-ambiental-nas-edificacoes" },
  { title: "Construção de Edifícios", link: "/pos-graduacao/engenharia/curso/construcao-de-edificios" },
  { title: "Cálculo Estrutural em Construção Civil", link: "/pos-graduacao/engenharia/curso/calculo-estrutural-em-construcao-civil" },
  { title: "Desenho Técnico e Projetos Elétricos", link: "/pos-graduacao/engenharia/curso/desenho-tecnico-e-projetos-eletricos" },
  { title: "Desenho Técnico e Projetos em Edificações", link: "/pos-graduacao/engenharia/curso/desenho-tecnico-e-projetos-em-edificacoes" },
  { title: "Desenho Técnico e Projetos em Mecânica", link: "/pos-graduacao/engenharia/curso/desenho-tecnico-e-projetos-em-mecanica" },
  { title: "Desenho Técnico e Usinagem", link: "/pos-graduacao/engenharia/curso/desenho-tecnico-e-usinagem" },
  { title: "Desenho Técnico em Topografia", link: "/pos-graduacao/engenharia/curso/desenho-tecnico-em-topografia" },
  { title: "Engenharia Ambiental", link: "/pos-graduacao/engenharia/curso/engenharia-ambiental" },
  { title: "Engenharia Ambiental com Ênfase em Saneamento Básico", link: "/pos-graduacao/engenharia/curso/engenharia-ambiental-com-enfase-em-saneamento-basico" },
  { title: "Engenharia Ambiental e Energias Renováveis", link: "/pos-graduacao/engenharia/curso/engenharia-ambiental-e-energias-renovaveis" },
  { title: "Engenharia Econômica e Financeira", link: "/pos-graduacao/engenharia/curso/engenharia-economica-e-financeira" },
  { title: "Engenharia Logística", link: "/pos-graduacao/engenharia/curso/engenharia-logistica" },
  { title: "Engenharia da Qualidade", link: "/pos-graduacao/engenharia/curso/engenharia-da-qualidade" },
  { title: "Engenharia de Negócios", link: "/pos-graduacao/engenharia/curso/engenharia-de-negocios" },
  { title: "Engenharia de Produção e Gerenciamento de Projetos", link: "/pos-graduacao/engenharia/curso/engenharia-de-producao-e-gerenciamento-de-projetos" },
  { title: "Engenharia de Redes e Segurança de Dados", link: "/pos-graduacao/engenharia/curso/engenharia-de-redes-e-seguranca-de-dados" },
  { title: "Engenharia de Segurança Contra Incêndio e Pânico", link: "/pos-graduacao/engenharia/curso/engenharia-de-seguranca-contra-incendio-e-panico" },
  { title: "Engenharia de Segurança do Trabalho", link: "/pos-graduacao/engenharia/curso/engenharia-de-seguranca-do-trabalho" },
  { title: "Engenharia de Software", link: "/pos-graduacao/engenharia/curso/engenharia-de-software" },
  { title: "Engenharia de Software Com Métodos Ágeis", link: "/pos-graduacao/engenharia/curso/engenharia-de-software-com-metodos-ageis" },
  { title: "Engenharia de Suprimentos", link: "/pos-graduacao/engenharia/curso/engenharia-de-suprimentos" },
  { title: "Engenharia e Gerenciamento de Manutenção", link: "/pos-graduacao/engenharia/curso/engenharia-e-gerenciamento-de-manutencao" },
  { title: "Equipamentos, Instalações e Controle de Qualidade Industrial", link: "/pos-graduacao/engenharia/curso/equipamentos-instalacoes-e-controle-de-qualidade-industrial" },
  { title: "Geoprocessamento", link: "/pos-graduacao/engenharia/curso/geoprocessamento" },
  { title: "Gerenciamento de Obras", link: "/pos-graduacao/engenharia/curso/gerenciamento-de-obras" },
  { title: "Gestão em Orçamento, Planejamento e Controle na Construção Civil", link: "/pos-graduacao/engenharia/curso/gestao-em-orcamento-planejamento-e-controle-na-construcao-civil" },
  { title: "Instalações Elétricas de Baixa, Média e Alta Tensão", link: "/pos-graduacao/engenharia/curso/instalacoes-eletricas-de-baixa-media-e-alta-tensao" },
  { title: "Processamento Industrial de Alimentos", link: "/pos-graduacao/engenharia/curso/processamento-industrial-de-alimentos" },
  { title: "Produção Industrial", link: "/pos-graduacao/engenharia/curso/producao-industrial" },
  { title: "Projetos Mecânicos e Usinagem", link: "/pos-graduacao/engenharia/curso/projetos-mecanicos-e-usinagem" },
  { title: "Proteção de Sistemas Elétricos", link: "/pos-graduacao/engenharia/curso/protecao-de-sistemas-eletricos" },
  { title: "Segurança Em Instalações Elétricas", link: "/pos-graduacao/engenharia/curso/seguranca-em-instalacoes-eletricas" },
  { title: "Sustentabilidade na Construção Civil", link: "/pos-graduacao/engenharia/curso/sustentabilidade-na-construcao-civil" },
  { title: "Topografia e Sensoriamento Remoto", link: "/pos-graduacao/engenharia/curso/topografia-e-sensoriamento-remoto" },
];

export default function EngenhariaList({ onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NA ENGENHARIA
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
        MAIS {regularCourses.length} CURSOS DA ENGENHARIA
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
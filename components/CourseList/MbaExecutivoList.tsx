"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

// Cursos em Destaque (Pesquisas em Alta)
const highlightedCourses = [
  { title: "MBA em Gestão de Pessoas e Liderança", link: "/pos-graduacao/mba-executivo/curso/mba-em-gestao-de-pessoas-e-lideranca" },
  { title: "MBA em Auditoria, Compliance e Gestão de Riscos", link: "/pos-graduacao/mba-executivo/curso/mba-em-auditoria-compliance-e-gestao-de-riscos" },
  { title: "MBA em Gestão de Departamento Pessoal e Relações Trabalhistas", link: "/pos-graduacao/mba-executivo/curso/mba-em-gestao-de-departamento-pessoal-e-relacoes-trabalhistas" },
  { title: "MBA em Gestão De Projetos", link: "/pos-graduacao/mba-executivo/curso/mba-em-gestao-de-projetos" },
  { title: "MBA em Inteligência Artificial", link: "/pos-graduacao/mba-executivo/curso/mba-em-inteligencia-artificial" },
];

// Lista completa / otimizada de cursos da área
const regularCourses = [
  { title: "MBA Em Finanças, Auditoria e Controladoria", link: "/pos-graduacao/mba-executivo/curso/mba-em-financas-auditoria-e-controladoria" },
  { title: "MBA Executivo em Consultoria e Planejamento Empresarial", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-consultoria-e-planejamento-empresarial" },
  { title: "MBA Executivo em Gerenciamento de Projetos", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gerenciamento-de-projetos" },
  { title: "MBA Executivo em Gestão Competitiva e Business Intelligence (BI)", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-competitiva-e-business-intelligence-bi" },
  { title: "MBA Executivo em Gestão Empresarial e Planejamento Tributário", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-empresarial-e-planejamento-tributario" },
  { title: "MBA Executivo em Gestão Financeira", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-financeira" },
  { title: "MBA Executivo em Gestão Financeira e Controladoria", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-financeira-e-controladoria" },
  { title: "MBA Executivo em Gestão Financeira, Controladoria e Auditoria", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-financeira-controladoria-e-auditoria" },
  { title: "MBA Executivo em Gestão Industrial, Logística e Qualidade", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-industrial-logistica-e-qualidade" },
  { title: "MBA Executivo em Gestão Pública", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-publica" },
  { title: "MBA Executivo em Gestão Tributária", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-tributaria" },
  { title: "MBA Executivo em Gestão da Produção e Qualidade", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-de-producao-e-qualidade" },
  { title: "MBA Executivo em Gestão de Equipe e Gestão da Qualidade", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-de-equipe-e-gestao-da-qualidade" },
  { title: "MBA Executivo em Gestão de Materiais e Suprimentos", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-de-materiais-e-suprimentos" },
  { title: "MBA Executivo em Gestão de Negócios e Marketing", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-de-negocios-e-marketing" },
  { title: "MBA Executivo em Gestão de Pessoas e RH", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-gestao-de-pessoas-e-rh" },
  { title: "MBA Executivo em Hotelaria Hospitalar", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-hotelaria-hospitalar" },
  { title: "MBA Executivo em Liderança e Desenvolvimento de Pessoas", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-lideranca-e-desenvolvimento-de-pessoas" },
  { title: "MBA Executivo em Marketing Digital", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-marketing-digital" },
  { title: "MBA Executivo em Marketing e Gestão de Equipes", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-marketing-e-gestao-de-equipes" },
  { title: "MBA Executivo em Segurança no Trabalho e Meio Ambiente", link: "/pos-graduacao/mba-executivo/curso/mba-executivo-em-seguranca-no-trabalho-e-meio-ambiente" },
  { title: "MBA em Acreditação e Gestão da Qualidade Em Saúde", link: "/pos-graduacao/mba-executivo/curso/mba-em-acreditacao-e-gestao-da-qualidade-em-saude" },
  { title: "MBA em Administração Estratégica", link: "/pos-graduacao/mba-executivo/curso/mba-em-administracao-estrategica" },
  { title: "MBA em Administração Pública", link: "/pos-graduacao/mba-executivo/curso/mba-em-administracao-publica" },
  { title: "MBA em Administração de Empresas", link: "/pos-graduacao/mba-executivo/curso/mba-em-administracao-de-empresas-" },
  { title: "MBA em Administração de Pessoal", link: "/pos-graduacao/mba-executivo/curso/mba-em-administracao-de-pessoal" },
  { title: "MBA em Administração e Contabilidade Tributária", link: "/pos-graduacao/mba-executivo/curso/mba-em-administracao-e-contabilidade-tributaria-" },
  { title: "MBA em Administração, Contabilidade e Finanças", link: "/pos-graduacao/mba-executivo/curso/mba-em-administracao-contabilidade-e-financas" },
  { title: "MBA em Agronegócio", link: "/pos-graduacao/mba-executivo/curso/mba-em-agronegocio" },
  { title: "MBA em Agronegócios: Indústria, Produto e Inovação", link: "/pos-graduacao/mba-executivo/curso/mba-em-agronegocios-industria-produto-e-inovacao" },
  { title: "MBA em Análise de Dados", link: "/pos-graduacao/mba-executivo/curso/mba-em-analise-de-dados" },
  { title: "MBA em Análise de Marketing e Ciência de Dados", link: "/pos-graduacao/mba-executivo/curso/mba-em-analise-de-marketing-e-ciencia-de-dados" },
  { title: "MBA em Assessoria Executiva", link: "/pos-graduacao/mba-executivo/curso/mba-em-assessoria-executiva" },
  { title: "MBA em Auditoria Contábil", link: "/pos-graduacao/mba-executivo/curso/mba-em-auditoria-contabil" },
  { title: "MBA em Auditoria de Sistemas de Saúde", link: "/pos-graduacao/mba-executivo/curso/mba-em-auditoria-de-sistemas-de-saude" },
  { title: "MBA em Auditoria, Compliance e Gestão de Riscos", link: "/pos-graduacao/mba-executivo/curso/mba-em-auditoria-compliance-e-gestao-de-riscos" },
  { title: "MBA em Branding - Comunicação e Gestão Estratégica de Marcas", link: "/pos-graduacao/mba-executivo/curso/mba-em-branding-comunicacao-e-gestao-estrategica-de-marcas" },
  { title: "MBA em Coaching", link: "/pos-graduacao/mba-executivo/curso/mba-em-coaching" },
  { title: "MBA em Comercial e Estratégia de Mercado", link: "/pos-graduacao/mba-executivo/curso/mba-em-comercial-e-estrategia-de-mercado" },
  { title: "MBA em Comunicação Eleitoral e Marketing Político", link: "/pos-graduacao/mba-executivo/curso/mba-em-comunicacao-eleitoral-e-marketing-politico" },
  { title: "MBA em Comunicação Empresarial", link: "/pos-graduacao/mba-executivo/curso/mba-em-comunicacao-empresarial" },
  { title: "MBA em Comunicação Institucional e Gestão de Marcas", link: "/pos-graduacao/mba-executivo/curso/mba-em-comunicacao-institucional-e-gestao-de-marcas" },
  { title: "MBA em Comunicação e Marketing de Serviços", link: "/pos-graduacao/mba-executivo/curso/mba-em-comunicacao-e-marketing-de-servicos" },
  { title: "MBA em Comunicação e Marketing de Turismo", link: "/pos-graduacao/mba-executivo/curso/mba-em-comunicacao-e-marketing-de-turismo" },
  { title: "MBA em Comunicação e Marketing de Varejo", link: "/pos-graduacao/mba-executivo/curso/mba-em-comunicacao-e-marketing-de-varejo" },
  { title: "MBA em Contabilidade Gerencial", link: "/pos-graduacao/mba-executivo/curso/mba-em-contabilidade-gerencial" },
  { title: "MBA em Controladoria E Finanças", link: "/pos-graduacao/mba-executivo/curso/mba-em-controladoria-e-financas" },
  { title: "MBA em Controladoria e Auditoria", link: "/pos-graduacao/mba-executivo/curso/mba-em-controladoria-e-auditoria" },
  { title: "MBA em Controladoria, Auditoria e Compliance", link: "/pos-graduacao/mba-executivo/curso/mba-em-controladoria-auditoria-e-compliance" }
];

export default function MbaExecutivoList({ onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NA MBA EXECUTIVO
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
        MAIS {regularCourses.length} CURSOS DA MBA EXECUTIVO
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
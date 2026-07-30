"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

// Cursos em Destaque (Pesquisas em Alta)
const highlightedCourses = [
  { title: "Inteligência Artificial", link: "/pos-graduacao/empresarial/curso/inteligencia-artificial" },
  { title: "Departamento Pessoal e Recursos Humanos", link: "/pos-graduacao/empresarial/curso/departamento-pessoal-e-recursos-humanos" },
  { title: "Avaliação e Perícia de Imóveis", link: "/pos-graduacao/empresarial/curso/avaliacao-e-pericia-de-imoveis" },
  { title: "Gestão de Pessoas e Psicologia Organizacional", link: "/pos-graduacao/empresarial/curso/gestao-de-pessoas-e-psicologia-organizacional" },
  { title: "Gestão de Pessoas", link: "/pos-graduacao/empresarial/curso/gestao-de-pessoas" },
];

// Lista de cursos da área (seleção otimizada)
const regularCourses = [
  { title: "Accountability e Controle na Gestão Pública", link: "/pos-graduacao/empresarial/curso/accountability-e-controle-na-gestao-publica" },
  { title: "Administração", link: "/pos-graduacao/empresarial/curso/administracao" },
  { title: "Administração Aplicada e Gestão Empresarial", link: "/pos-graduacao/empresarial/curso/administracao-aplicada-e-gestao-empresarial" },
  { title: "Administração Estratégica Em Gestão Empresarial", link: "/pos-graduacao/empresarial/curso/administracao-estrategica-em-gestao-empresarial" },
  { title: "Administração Estratégica em Finanças", link: "/pos-graduacao/empresarial/curso/administracao-estrategica-em-financas" },
  { title: "Administração Financeira", link: "/pos-graduacao/empresarial/curso/administracao-financeira" },
  { title: "Administração Financeira e Contábil", link: "/pos-graduacao/empresarial/curso/administracao-financeira-e-contabil" },
  { title: "Administração Hospitalar", link: "/pos-graduacao/empresarial/curso/administracao-hospitalar" },
  { title: "Administração Hospitalar e Gestão da Produção", link: "/pos-graduacao/empresarial/curso/administracao-hospitalar-e-gestao-da-producao" },
  { title: "Administração Hospitalar e Recursos Humanos", link: "/pos-graduacao/empresarial/curso/administracao-hospitalar-e-recursos-humanos" },
  { title: "Administração Pública", link: "/pos-graduacao/empresarial/curso/administracao-publica" },
  { title: "Administração Pública e Gestão Estratégica", link: "/pos-graduacao/empresarial/curso/administracao-publica-e-gestao-estrategica" },
  { title: "Administração Pública e Gestão de Pessoas", link: "/pos-graduacao/empresarial/curso/administracao-publica-e-gestao-de-pessoas" },
  { title: "Administração de Banco de Dados", link: "/pos-graduacao/empresarial/curso/administracao-de-banco-de-dados" },
  { title: "Administração de Dados", link: "/pos-graduacao/empresarial/curso/administracao-de-dados" },
  { title: "Administração de Imobiliárias e Condomínios", link: "/pos-graduacao/empresarial/curso/administracao-de-imobiliarias-e-condominios" },
  { title: "Administração de Recursos Humanos", link: "/pos-graduacao/empresarial/curso/administracao-de-recursos-humanos" },
  { title: "Administração de Recursos Humanos no Setor Público", link: "/pos-graduacao/empresarial/curso/administracao-de-recursos-humanos-no-setor-publico" },
  { title: "Administração de Redes", link: "/pos-graduacao/empresarial/curso/administracao-de-redes" },
  { title: "Administração de Servidores Linux", link: "/pos-graduacao/empresarial/curso/administracao-de-servidores-linux" },
  { title: "Administração de Servidores Windows", link: "/pos-graduacao/empresarial/curso/administracao-de-servidores-windows" },
  { title: "Administração do Setor Público", link: "/pos-graduacao/empresarial/curso/administracao-do-setor-publico" },
  { title: "Administração e Auditoria em Serviços da Saúde", link: "/pos-graduacao/empresarial/curso/administracao-e-auditoria-em-servicos-da-saude" },
  { title: "Administração e Supervisão Escolar", link: "/pos-graduacao/empresarial/curso/administracao-e-supervisao-escolar" },
  { title: "Administração, Contabilidade e Finanças", link: "/pos-graduacao/empresarial/curso/administracao-contabilidade-e-financas" },
  { title: "Agilidade Estratégica e Inteligência Analítica", link: "/pos-graduacao/empresarial/curso/agilidade-estrategica-e-inteligencia-analitica" },
  { title: "Análise Financeira e Econômica de Projetos", link: "/pos-graduacao/empresarial/curso/analise-financeira-e-economica-de-projetos" },
  { title: "Análise Fundamentalista e Gestão de Investimentos", link: "/pos-graduacao/empresarial/curso/analise-fundamentalista-e-gestao-de-investimentos" },
  { title: "Análise de Dados", link: "/pos-graduacao/empresarial/curso/analise-de-dados" },
  { title: "Análise do Cenário Econômico, Político e Social", link: "/pos-graduacao/empresarial/curso/analise-do-cenario-economico-politico-e-social" },
  { title: "Análise e Desenvolvimento de Sistemas", link: "/pos-graduacao/empresarial/curso/analise-e-desenvolvimento-de-sistemas" },
  { title: "Análise e Projeto de Software", link: "/pos-graduacao/empresarial/curso/analise-e-projeto-de-software" },
  { title: "Análise e Visualização de Dados para Negócios", link: "/pos-graduacao/empresarial/curso/analise-e-visualizacao-de-dados-para-negocios" },
  { title: "Arte e Estética Visual", link: "/pos-graduacao/empresarial/curso/arte-e-estetica-visual" },
  { title: "Assessment e Gestão Estratégica de Pessoas", link: "/pos-graduacao/empresarial/curso/assessment-e-gestao-estrategica-de-pessoas" },
  { title: "Assessoria de Comunicação", link: "/pos-graduacao/empresarial/curso/assessoria-de-comunicacao" },
  { title: "Auditoria Contábil e Gestão de Riscos", link: "/pos-graduacao/empresarial/curso/auditoria-contabil-e-gestao-de-riscos" },
  { title: "Auditoria Governamental", link: "/pos-graduacao/empresarial/curso/auditoria-governamental" },
  { title: "Auditoria de RH", link: "/pos-graduacao/empresarial/curso/auditoria-de-rh" },
  { title: "Auditoria e Contabilidade Pública", link: "/pos-graduacao/empresarial/curso/auditoria-e-contabilidade-publica" },
  { title: "Auditoria e Controladoria", link: "/pos-graduacao/empresarial/curso/auditoria-e-controladoria" },
  { title: "Auditoria e Controladoria Financeira", link: "/pos-graduacao/empresarial/curso/auditoria-e-controladoria-financeira" },
  { title: "Auditoria e Planejamento Tributário", link: "/pos-graduacao/empresarial/curso/auditoria-e-planejamento-tributario" },
  { title: "Avaliação Financeira e Mercado", link: "/pos-graduacao/empresarial/curso/avaliacao-financeira-e-mercado" },
  { title: "Avaliação de Imóveis", link: "/pos-graduacao/empresarial/curso/avaliacao-de-imoveis" },
  { title: "Banco de Dados", link: "/pos-graduacao/empresarial/curso/banco-de-dados" },
  { title: "Banco de Dados e Business Intelligence", link: "/pos-graduacao/empresarial/curso/banco-de-dados-e-business-intelligence" },
  { title: "Big Data e Análise de Dados", link: "/pos-graduacao/empresarial/curso/big-data-e-analise-de-dados" },
  { title: "Big Data e Ciência de Dados", link: "/pos-graduacao/empresarial/curso/big-data-e-ciencia-de-dados" },
  { title: "Big Data e Marketing", link: "/pos-graduacao/empresarial/curso/big-data-e-marketing" },
  { title: "Branding", link: "/pos-graduacao/empresarial/curso/branding" },
  { title: "Branding e Gestão de Marcas", link: "/pos-graduacao/empresarial/curso/branding-e-gestao-de-marcas" },
  { title: "Business Intelligence", link: "/pos-graduacao/empresarial/curso/business-intelligence" },
  { title: "Business Intelligence com Ênfase em Power BI", link: "/pos-graduacao/empresarial/curso/business-intelligence-com-enfase-em-power-bi" },
  { title: "Compliance e Gestão de Riscos", link: "/pos-graduacao/empresarial/curso/compliance-e-gestao-de-riscos" },
  { title: "Compliance e Governança Corporativa", link: "/pos-graduacao/empresarial/curso/compliance-e-governanca-corporativa" },
  { title: "Contabilidade Gerencial", link: "/pos-graduacao/empresarial/curso/contabilidade-gerencial" },
  { title: "Controladoria Financeira", link: "/pos-graduacao/empresarial/curso/controladoria-financeira" },
  { title: "E-commerce", link: "/pos-graduacao/empresarial/curso/e-commerce" },
  { title: "Empreendedorismo Digital", link: "/pos-graduacao/empresarial/curso/empreendedorismo-digital" },
  { title: "Finanças Corporativas", link: "/pos-graduacao/empresarial/curso/financas-corporativas" },
  { title: "Gestão da Qualidade", link: "/pos-graduacao/empresarial/curso/gestao-de-qualidade" },
  { title: "Gestão de Projetos", link: "/pos-graduacao/empresarial/curso/gestao-de-projetos" },
  { title: "Gestão Empresarial", link: "/pos-graduacao/empresarial/curso/gestao-empresarial" },
  { title: "Marketing Digital", link: "/pos-graduacao/empresarial/curso/marketing-digital" }
];

export default function EmpresarialList({ onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NA EMPRESARIAL
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
        MAIS {regularCourses.length} CURSOS DA EMPRESARIAL
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
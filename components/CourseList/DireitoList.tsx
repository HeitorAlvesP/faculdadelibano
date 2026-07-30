"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

// Cursos em Destaque (Pesquisas em Alta)
const highlightedCourses = [
  { title: "Perícia Criminal", link: "/pos-graduacao/direito/curso/pericia-criminal" },
  { title: "Direito Penal e Processual Penal", link: "/pos-graduacao/direito/curso/direito-penal-e-processual-penal" },
  { title: "Direito Civil e Processual Civil", link: "/pos-graduacao/direito/curso/direito-civil-e-processual-civil" },
  { title: "Direito Previdenciário", link: "/pos-graduacao/direito/curso/direito-previdenciario" },
  { title: "Direito da Família e Sucessões", link: "/pos-graduacao/direito/curso/direito-da-familia-e-sucessoes" },
];

// Lista completa de cursos da área
const regularCourses = [
  { title: "Arbitragem e Mediação de Conflitos", link: "/pos-graduacao/direito/curso/arbitragem-e-mediacao-de-conflitos" },
  { title: "Compliance", link: "/pos-graduacao/direito/curso/compliance" },
  { title: "Criminologia", link: "/pos-graduacao/direito/curso/criminologia" },
  { title: "Direito Administrativo", link: "/pos-graduacao/direito/curso/direito-administrativo" },
  { title: "Direito Administrativo e Direito Tributário", link: "/pos-graduacao/direito/curso/direito-administrativo-e-direito-tributario" },
  { title: "Direito Administrativo e Gestão Orçamentária e Financeira no Setor Público", link: "/pos-graduacao/direito/curso/direito-administrativo-e-gestao-orcamentaria-e-financeira-no-setor-publico" },
  { title: "Direito Administrativo e Gestão Pública", link: "/pos-graduacao/direito/curso/direito-administrativo-e-gestao-publica" },
  { title: "Direito Administrativo e Gestão de Pessoas no Setor Público", link: "/pos-graduacao/direito/curso/direito-administrativo-e-gestao-de-pessoas-no-setor-publico" },
  { title: "Direito Administrativo e Licitações", link: "/pos-graduacao/direito/curso/direito-administrativo-e-licitacoes" },
  { title: "Direito Aduaneiro", link: "/pos-graduacao/direito/curso/direito-aduaneiro" },
  { title: "Direito Agrário e Ambiental", link: "/pos-graduacao/direito/curso/direito-agrario-e-ambiental" },
  { title: "Direito Ambiental", link: "/pos-graduacao/direito/curso/direito-ambiental" },
  { title: "Direito Aplicado aos Serviços de Saúde", link: "/pos-graduacao/direito/curso/direito-aplicado-aos-servicos-de-saude" },
  { title: "Direito Bancário", link: "/pos-graduacao/direito/curso/direito-bancario" },
  { title: "Direito Cibernético", link: "/pos-graduacao/direito/curso/direito-cibernetico" },
  { title: "Direito Civil", link: "/pos-graduacao/direito/curso/direito-civil" },
  { title: "Direito Civil E Consumidor", link: "/pos-graduacao/direito/curso/direito-civil-e-consumidor" },
  { title: "Direito Civil e Direito Empresarial", link: "/pos-graduacao/direito/curso/direito-civil-e-direito-empresarial" },
  { title: "Direito Civil e Processual Civil", link: "/pos-graduacao/direito/curso/direito-civil-e-processual-civil" },
  { title: "Direito Constitucional", link: "/pos-graduacao/direito/curso/direito-constitucional" },
  { title: "Direito Constitucional e Administrativo", link: "/pos-graduacao/direito/curso/direito-constitucional-e-administrativo" },
  { title: "Direito Constitucional e Público", link: "/pos-graduacao/direito/curso/direito-constitucional-e-publico" },
  { title: "Direito Contratual", link: "/pos-graduacao/direito/curso/direito-contratual" },
  { title: "Direito Contratual com Ênfase em Contratos de Seguros", link: "/pos-graduacao/direito/curso/direito-contratual-com-enfase-em-contratos-de-seguros" },
  { title: "Direito Digital", link: "/pos-graduacao/direito/curso/direito-digital" },
  { title: "Direito Digital e Compliance", link: "/pos-graduacao/direito/curso/direito-digital-e-compliance" },
  { title: "Direito Digital e Privacidade", link: "/pos-graduacao/direito/curso/direito-digital-e-privacidade" },
  { title: "Direito Digital e Proteção de Dados", link: "/pos-graduacao/direito/curso/direito-digital-e-protecao-de-dados" },
  { title: "Direito Do Agronegócio", link: "/pos-graduacao/direito/curso/direito-do-agronegocio" },
  { title: "Direito Educacional", link: "/pos-graduacao/direito/curso/direito-educacional" },
  { title: "Direito Eleitoral", link: "/pos-graduacao/direito/curso/direito-eleitoral" },
  { title: "Direito Empresarial", link: "/pos-graduacao/direito/curso/direito-empresarial" },
  { title: "Direito Empresarial e Processo Civil", link: "/pos-graduacao/direito/curso/direito-empresarial-e-processo-civil" },
  { title: "Direito Empresarial e Recuperação de Empresas", link: "/pos-graduacao/direito/curso/direito-empresarial-e-recuperacao-de-empresas" },
  { title: "Direito Imobiliário", link: "/pos-graduacao/direito/curso/direito-imobiliario" },
  { title: "Direito Internacional", link: "/pos-graduacao/direito/curso/direito-internacional" },
  { title: "Direito Internacional e Direitos Humanos", link: "/pos-graduacao/direito/curso/direito-internacional-e-direitos-humanos" },
  { title: "Direito Militar", link: "/pos-graduacao/direito/curso/direito-militar" },
  { title: "Direito Médico e Hospitalar", link: "/pos-graduacao/direito/curso/direito-medico-e-hospitalar" },
  { title: "Direito Médico e da Saúde", link: "/pos-graduacao/direito/curso/direito-medico-e-da-saude" },
  { title: "Direito Notarial e Registral", link: "/pos-graduacao/direito/curso/direito-notarial-e-registral" },
  { title: "Direito Penal", link: "/pos-graduacao/direito/curso/direito-penal" },
  { title: "Direito Penal e Criminologia", link: "/pos-graduacao/direito/curso/direito-penal-e-criminologia" },
  { title: "Direito Penal e Processual Penal", link: "/pos-graduacao/direito/curso/direito-penal-e-processual-penal" },
  { title: "Direito Previdenciário", link: "/pos-graduacao/direito/curso/direito-previdenciario" },
  { title: "Direito Processual Civil", link: "/pos-graduacao/direito/curso/direito-processual-civil" },
  { title: "Direito Processual Civil e Processo de Execução", link: "/pos-graduacao/direito/curso/direito-processual-civil-e-processo-de-execucao" },
  { title: "Direito Processual Tributário", link: "/pos-graduacao/direito/curso/direito-processual-tributario" },
  { title: "Direito Público", link: "/pos-graduacao/direito/curso/direito-publico" },
  { title: "Direito Público e Processo Legislativo", link: "/pos-graduacao/direito/curso/direito-publico-e-processo-legislativo" },
  { title: "Direito Público: Constitucional, Administrativo e Tributário", link: "/pos-graduacao/direito/curso/direito-publico-constitucional-administrativo-e-tributario" },
  { title: "Direito Trabalhista e Previdenciário", link: "/pos-graduacao/direito/curso/direito-trabalhista-e-previdenciario" },
  { title: "Direito Tributário", link: "/pos-graduacao/direito/curso/direito-tributario" },
  { title: "Direito Tributário e Contabilidade Tributária", link: "/pos-graduacao/direito/curso/direito-tributario-e-contabilidade-tributaria" },
  { title: "Direito Tributário e Processual Tributário", link: "/pos-graduacao/direito/curso/direito-tributario-e-processual-tributario" },
  { title: "Direito da Criança e do Adolescente", link: "/pos-graduacao/direito/curso/direito-da-crianca-e-do-adolescente" },
  { title: "Direito da Família", link: "/pos-graduacao/direito/curso/direito-da-familia" },
  { title: "Direito da Família e Sucessões", link: "/pos-graduacao/direito/curso/direito-da-familia-e-sucessoes" },
  { title: "Direito do Consumidor", link: "/pos-graduacao/direito/curso/direito-do-consumidor" },
  { title: "Direito do Consumidor e Comércio", link: "/pos-graduacao/direito/curso/direito-do-consumidor-e-comercio" },
  { title: "Direito do Trabalho", link: "/pos-graduacao/direito/curso/direito-do-trabalho" },
  { title: "Direito do Trabalho e Processo do Trabalho", link: "/pos-graduacao/direito/curso/direito-do-trabalho-e-processo-do-trabalho" },
  { title: "Direito dos Novos Negócios", link: "/pos-graduacao/direito/curso/direito-dos-novos-negocios" },
  { title: "Direito e Gestão Socioambiental", link: "/pos-graduacao/direito/curso/direito-e-gestao-socioambiental" },
  { title: "Direito e Novas Tecnologias", link: "/pos-graduacao/direito/curso/direito-e-novas-tecnologias" },
  { title: "Direito e Planejamento Tributário", link: "/pos-graduacao/direito/curso/direito-e-planejamento-tributario" },
  { title: "Direito e Processo Eleitoral", link: "/pos-graduacao/direito/curso/direito-e-processo-eleitoral" },
  { title: "Direito e Processo do Trabalho e Direito Previdenciário", link: "/pos-graduacao/direito/curso/direito-e-processo-do-trabalho-e-direito-previdenciario" },
  { title: "Direito e Relações Comerciais Internacionais", link: "/pos-graduacao/direito/curso/direito-e-relacoes-comerciais-internacionais" },
  { title: "Direitos Humanos e Acessibilidade", link: "/pos-graduacao/direito/curso/direitos-humanos-e-acessibilidade" },
  { title: "Gestão E Negociação De Contratos", link: "/pos-graduacao/direito/curso/gestao-e-negociacao-de-contratos" },
  { title: "Gestão Operacional em Ordem Social", link: "/pos-graduacao/direito/curso/gestao-operacional-em-ordem-social" },
  { title: "Gestão de Escritórios de Advocacia", link: "/pos-graduacao/direito/curso/gestao-de-escritorios-de-advocacia" },
  { title: "Gestão de Processos e Benefícios Previdenciários", link: "/pos-graduacao/direito/curso/gestao-de-processos-e-beneficios-previdenciarios" },
  { title: "Gestão do Ciclo das Licitações e Contratações Públicas", link: "/pos-graduacao/direito/curso/gestao-do-ciclo-das-licitacoes-e-contratacoes-publicas" },
  { title: "Gestão e Legislação Imobiliária", link: "/pos-graduacao/direito/curso/gestao-e-legislacao-imobiliaria" },
  { title: "Informática Forense", link: "/pos-graduacao/direito/curso/informatica-forense" },
  { title: "Lei Geral de Proteção de Dados - LGPD", link: "/pos-graduacao/direito/curso/lei-geral-de-protecao-de-dados---lgpd" },
  { title: "Licitações e Contratos", link: "/pos-graduacao/direito/curso/licitacoes-e-contratos" },
  { title: "Linguagem Jurídica", link: "/pos-graduacao/direito/curso/linguagem-juridica" },
  { title: "Perícia Criminal", link: "/pos-graduacao/direito/curso/pericia-criminal" },
  { title: "Perícia Forense em Crimes Cibernéticos", link: "/pos-graduacao/direito/curso/pericia-forense-em-crimes-ciberneticos" },
  { title: "Perícia Judicial e Extrajudicial", link: "/pos-graduacao/direito/curso/pericia-judicial-e-extrajudicial" },
  { title: "Política Criminal, Segurança Pública e Direito Penal", link: "/pos-graduacao/direito/curso/politica-criminal-seguranca-publica-e-direito-penal" },
  { title: "Práticas Jurídicas e Carreira Advocatícia", link: "/pos-graduacao/direito/curso/praticas-juridicas-e-carreira-advocaticia" },
  { title: "Segurança Pública", link: "/pos-graduacao/direito/curso/seguranca-publica" },
  { title: "Segurança Pública e Cidadania", link: "/pos-graduacao/direito/curso/seguranca-publica-e-cidadania" },
  { title: "Sociologia Jurídica e Direitos Humanos", link: "/pos-graduacao/direito/curso/sociologia-juridica-e-direitos-humanos" },
  { title: "Sociologia do Crime e da Violência", link: "/pos-graduacao/direito/curso/sociologia-do-crime-e-da-violencia" }
];

export default function DireitoList({ onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NO DIREITO
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
        MAIS {regularCourses.length} CURSOS NO DIREITO
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
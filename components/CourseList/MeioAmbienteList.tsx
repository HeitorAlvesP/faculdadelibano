"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

// Cursos em Destaque (Pesquisas em Alta)
const highlightedCourses = [
  { title: "Auditoria, Perícia e Licenciamento Ambiental", link: "/pos-graduacao/meio-ambiente/curso/auditoria-pericia-e-licenciamento-ambiental" },
  { title: "Gestão Ambiental", link: "/pos-graduacao/meio-ambiente/curso/gestao-ambiental" },
  { title: "Gerenciamento de Resíduos Sólidos e Efluentes", link: "/pos-graduacao/meio-ambiente/curso/gerenciamento-de-residuos-solidos-e-efluentes" },
  { title: "Sistemas de Abastecimento de Água e de Esgotamento Sanitário", link: "/pos-graduacao/meio-ambiente/curso/sistemas-de-abastecimento-de-agua-e--de-esgotamento-sanitario" },
  { title: "Gestão Ambiental e Sustentabilidade", link: "/pos-graduacao/meio-ambiente/curso/gestao-ambiental-e-sustentabilidade" },
];

// Lista completa de cursos da área
const regularCourses = [
  { title: "Adubação Verde e Fitossanidade Sustentável", link: "/pos-graduacao/meio-ambiente/curso/adubacao-verde-e-fitossanidade-sustentavel" },
  { title: "Agricultura Familiar e Cooperativismo", link: "/pos-graduacao/meio-ambiente/curso/agricultura-familiar-e-cooperativismo" },
  { title: "Agricultura Orgânica", link: "/pos-graduacao/meio-ambiente/curso/agricultura-organica" },
  { title: "Agroecologia e Conservação da Biodiversidade Agrícola", link: "/pos-graduacao/meio-ambiente/curso/agroecologia-e-conservacao-da-biodiversidade-agricola" },
  { title: "Agroecologia e Manejo da Fauna Agrícola", link: "/pos-graduacao/meio-ambiente/curso/agroecologia-e-manejo-da-fauna-agricola" },
  { title: "Agroecologia e Políticas Ambientais", link: "/pos-graduacao/meio-ambiente/curso/agroecologia-e-politicas-ambientais" },
  { title: "Agroecologia e Sustentabilidade", link: "/pos-graduacao/meio-ambiente/curso/agroecologia-e-sustentabilidade" },
  { title: "Agronegócio", link: "/pos-graduacao/meio-ambiente/curso/agronegocio" },
  { title: "Agronegócio, Legislação e Regulamentação Ambiental", link: "/pos-graduacao/meio-ambiente/curso/agronegocio-legislacao-e-regulamentacao-ambiental" },
  { title: "Auditoria e Licenciamento Ambiental", link: "/pos-graduacao/meio-ambiente/curso/auditoria-e-licenciamento-ambiental" },
  { title: "Auditoria e Perícia Ambiental", link: "/pos-graduacao/meio-ambiente/curso/auditoria-e-pericia-ambiental" },
  { title: "Auditoria, Perícia e Licenciamento Ambiental", link: "/pos-graduacao/meio-ambiente/curso/auditoria-pericia-e-licenciamento-ambiental" },
  { title: "Ciências Ambientais E Análise Ambiental", link: "/pos-graduacao/meio-ambiente/curso/ciencias-ambientais-e-analise-ambiental-" },
  { title: "Eficiência Energética e Bioenergia", link: "/pos-graduacao/meio-ambiente/curso/eficiencia-energetica-e-bioenergia" },
  { title: "Energia Eólica", link: "/pos-graduacao/meio-ambiente/curso/energia-eolica" },
  { title: "Energia Fotovoltaica e Meio Ambiente", link: "/pos-graduacao/meio-ambiente/curso/energia-fotovoltaica-e-meio-ambiente" },
  { title: "Fisiologia Vegetal e Farmacobotânica Aplicada", link: "/pos-graduacao/meio-ambiente/curso/fisiologia-vegetal-e-farmacobotanica-aplicada" },
  { title: "Geociências Aplicadas ao Meio Ambiente", link: "/pos-graduacao/meio-ambiente/curso/geociencias-aplicadas-ao-meio-ambiente" },
  { title: "Geodésia, Cartografia e Geoprocessamento", link: "/pos-graduacao/meio-ambiente/curso/geodesia-cartografia-e-geoprocessamento" },
  { title: "Geografia Econômica e Recursos Naturais", link: "/pos-graduacao/meio-ambiente/curso/geografia-economica-e-recursos-naturais" },
  { title: "Gerenciamento de Resíduos Sólidos e Efluentes", link: "/pos-graduacao/meio-ambiente/curso/gerenciamento-de-residuos-solidos-e-efluentes" },
  { title: "Gerenciamento de Resíduos Sólidos e Gestão Ambiental", link: "/pos-graduacao/meio-ambiente/curso/gerenciamento-de-residuos-solidos-e-gestao-ambiental" },
  { title: "Gestão Ambiental", link: "/pos-graduacao/meio-ambiente/curso/gestao-ambiental" },
  { title: "Gestão Ambiental e Energias Sustentáveis", link: "/pos-graduacao/meio-ambiente/curso/gestao-ambiental-e-energias-sustentaveis" },
  { title: "Gestão Ambiental e Sustentabilidade", link: "/pos-graduacao/meio-ambiente/curso/gestao-ambiental-e-sustentabilidade" },
  { title: "Gestão Climática e Produtiva no Agronegócio", link: "/pos-graduacao/meio-ambiente/curso/gestao-climatica-e-produtiva-no-agronegocio" },
  { title: "Gestão da Agroindústria", link: "/pos-graduacao/meio-ambiente/curso/gestao-da-agroindustria" },
  { title: "Gestão de Energias Renováveis", link: "/pos-graduacao/meio-ambiente/curso/gestao-de-energias-renovaveis" },
  { title: "Gestão de Recursos Hídricos e Meio Ambiente", link: "/pos-graduacao/meio-ambiente/curso/gestao-de-recursos-hidricos-e-meio-ambiente" },
  { title: "Gestão e Certificação de Produtos Orgânicos", link: "/pos-graduacao/meio-ambiente/curso/gestao-e-certificacao-de-produtos-organicos" },
  { title: "Gestão e Sustentabilidade em Sistemas Energéticos", link: "/pos-graduacao/meio-ambiente/curso/gestao-e-sustentabilidade-em-sistemas-energeticos" },
  { title: "Gestão e Tecnologia de Sementes no Agronegócio", link: "/pos-graduacao/meio-ambiente/curso/gestao-e-tecnologia-de-sementes-no-agronegocio" },
  { title: "Gestão em Auditoria, Perícia e Licenciamento Ambiental", link: "/pos-graduacao/meio-ambiente/curso/gestao-em-auditoria-pericia-e-licenciamento-ambiental" },
  { title: "Hidrologia Aplicada e Manejo de Bacias Hidrográficas", link: "/pos-graduacao/meio-ambiente/curso/hidrologia-aplicada-e-manejo-de-bacias-hidrograficas" },
  { title: "Limnologia Aplicada e Tratamento de Efluentes", link: "/pos-graduacao/meio-ambiente/curso/limnologia-aplicada-e-tratamento-de-efluentes" },
  { title: "Manejo Sustentável de Culturas", link: "/pos-graduacao/meio-ambiente/curso/manejo-sustentavel-de-culturas" },
  { title: "Meio Ambiente e Qualidade de Vida", link: "/pos-graduacao/meio-ambiente/curso/meio-ambiente-e-qualidade-de-vida" },
  { title: "Meio Ambiente e Sustentabilidade", link: "/pos-graduacao/meio-ambiente/curso/meio-ambiente-e-sustentabilidade" },
  { title: "Meio Ambiente, Desenvolvimento e Sustentabilidade", link: "/pos-graduacao/meio-ambiente/curso/meio-ambiente-desenvolvimento-e-sustentabilidade" },
  { title: "Monitoramento Ambiental e Qualidade do Ar", link: "/pos-graduacao/meio-ambiente/curso/monitoramento-ambiental-e-qualidade-do-ar" },
  { title: "Monitoramento e Controle da Poluição Ambiental", link: "/pos-graduacao/meio-ambiente/curso/monitoramento-e-controle-da-poluicao-ambiental" },
  { title: "Planejamento Urbano e Cidades Inteligentes", link: "/pos-graduacao/meio-ambiente/curso/planejamento-urbano-e-cidades-inteligentes" },
  { title: "Produção Vegetal", link: "/pos-graduacao/meio-ambiente/curso/producao-vegetal" },
  { title: "Projetos e Licenciamento Ambiental", link: "/pos-graduacao/meio-ambiente/curso/projetos-e-licenciamento-ambiental" },
  { title: "Qualidade Ambiental", link: "/pos-graduacao/meio-ambiente/curso/qualidade-ambiental" },
  { title: "Qualidade do Solo e Recuperação de Áreas Degradadas", link: "/pos-graduacao/meio-ambiente/curso/qualidade-do-solo-e-recuperacao-de-areas-degradadas" },
  { title: "Recuperação de Áreas Degradadas", link: "/pos-graduacao/meio-ambiente/curso/recuperacao-de-areas-degradadas" },
  { title: "Saneamento Ambiental e Gestão Integrada de Resíduos", link: "/pos-graduacao/meio-ambiente/curso/saneamento-ambiental-e-gestao-integrada-de-residuos" },
  { title: "Segurança do Trabalho e Gestão Ambiental", link: "/pos-graduacao/meio-ambiente/curso/seguranca-do-trabalho-e-gestao-ambiental" },
  { title: "Sistemas de Abastecimento de Água e de Esgotamento Sanitário", link: "/pos-graduacao/meio-ambiente/curso/sistemas-de-abastecimento-de-agua-e--de-esgotamento-sanitario" },
  { title: "Sistemas de Informações Geográficas", link: "/pos-graduacao/meio-ambiente/curso/sistemas-de-informacoes-geograficas" },
  { title: "Solos e Nutrição de Plantas", link: "/pos-graduacao/meio-ambiente/curso/solos-e-nutricao-de-plantas" },
  { title: "Tecnologias Sustentáveis no Agro", link: "/pos-graduacao/meio-ambiente/curso/tecnologias-sustentaveis-no-agro" },
  { title: "Tecnologias em Sistemas Agroindustriais e ILPF", link: "/pos-graduacao/meio-ambiente/curso/tecnologias-em-sistemas-agroindustriais-e-ilpf" },
  { title: "Água, Resíduos e Sustentabilidade", link: "/pos-graduacao/meio-ambiente/curso/agua-residuos-e-sustentabilidade" },
];

export default function MeioAmbienteList({ onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NO MEIO AMBIENTE
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
        MAIS {regularCourses.length} CURSOS NO MEIO AMBIENTE
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
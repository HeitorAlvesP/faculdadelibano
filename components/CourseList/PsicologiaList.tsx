"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

// Cursos em Destaque (Pesquisas em Alta)
const highlightedCourses = [
  { title: "Neuropsicologia", link: "/pos-graduacao/educacao/curso/neuropsicologia" },
  { title: "Terapia Cognitivo-Comportamental", link: "/pos-graduacao/educacao/curso/terapia-cognitivo-comportamental" },
  { title: "Avaliação Psicológica e Psicodiagnóstico", link: "/pos-graduacao/educacao/curso/avaliacao-psicologica-e-psicodiagnostico" },
  { title: "Psicologia Clínica", link: "/pos-graduacao/educacao/curso/psicologia-clinica" },
  { title: "Psicologia Organizacional E Do Trabalho", link: "/pos-graduacao/educacao/curso/psicologia-organizacional-e-do-trabalho" },
];

// Lista completa de cursos da área
const regularCourses = [
  { title: "ABA - Análise do Comportamento Aplicada", link: "/pos-graduacao/educacao/curso/aba---analise-do-comportamento-aplicada" },
  { title: "ABA - Análise do Comportamento Aplicada Ao Autismo", link: "/pos-graduacao/educacao/curso/aba---analise-do-comportamento-aplicada-ao-autismo" },
  { title: "ABA - Análise do Comportamento Aplicada II", link: "/pos-graduacao/educacao/curso/aba-analise-do-comportamento-aplicada-ii" },
  { title: "ABA - Análise do Comportamento Aplicada ao Autismo II", link: "/pos-graduacao/educacao/curso/aba-analise-do-comportamento-aplicada-ao-autismo-ii" },
  { title: "Autismo", link: "/pos-graduacao/educacao/curso/autismo" },
  { title: "Avaliação Psicológica", link: "/pos-graduacao/educacao/curso/avaliacao-psicologica" },
  { title: "Avaliação Psicológica e Psicodiagnóstico", link: "/pos-graduacao/educacao/curso/avaliacao-psicologica-e-psicodiagnostico" },
  { title: "Deficiência Intelectual", link: "/pos-graduacao/educacao/curso/deficiencia-intelectual" },
  { title: "Desenvolvimento Infantil", link: "/pos-graduacao/educacao/curso/desenvolvimento-infantil" },
  { title: "Dificuldades de Aprendizagem: Como Detectar e Atuar", link: "/pos-graduacao/educacao/curso/dificuldades-de-aprendizagem-como-detectar-e-atuar" },
  { title: "Gerontologia e Saúde Mental", link: "/pos-graduacao/educacao/curso/gerontologia-e-saude-mental" },
  { title: "Gestalt-Terapia", link: "/pos-graduacao/educacao/curso/gestalt-terapia" },
  { title: "Logoterapia", link: "/pos-graduacao/educacao/curso/logoterapia" },
  { title: "Neuroaprendizagem, Dificuldades e Transtornos", link: "/pos-graduacao/educacao/curso/neuroaprendizagem-dificuldades-e-transtornos" },
  { title: "Neurociência e Aprendizagem", link: "/pos-graduacao/educacao/curso/neurociencia-e-aprendizagem" },
  { title: "Neurociências e Comportamento", link: "/pos-graduacao/educacao/curso/neurociencias-e-comportamento" },
  { title: "Neuropsicologia", link: "/pos-graduacao/educacao/curso/neuropsicologia" },
  { title: "Neuropsicologia Aplicada ao Transtorno do Espectro Autista", link: "/pos-graduacao/educacao/curso/neuropsicologia-aplicada-ao-transtorno-do-espectro-autista" },
  { title: "Neuropsicologia II", link: "/pos-graduacao/educacao/curso/neuropsicologia-ii" },
  { title: "Neuropsicologia Infantil", link: "/pos-graduacao/educacao/curso/neuropsicologia-infantil" },
  { title: "Neuropsicologia e Psicopatologia Clínica", link: "/pos-graduacao/educacao/curso/neuropsicologia-e-psicopatologia-clinica" },
  { title: "Neuropsicopedagogia", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia" },
  { title: "Neuropsicopedagogia Clinica, Institucional e Hospitalar", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-clinica-institucional-e-hospitalar" },
  { title: "Neuropsicopedagogia II", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-ii" },
  { title: "Neuropsicopedagogia Institucional e Educação Especial Inclusiva", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-institucional-e-educacao-especial-inclusiva" },
  { title: "Neuropsicopedagogia e Educação Especial e Inclusiva", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-e-educacao-especial-e-inclusiva" },
  { title: "Neuropsicopedagogia e Psicomotricidade", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-e-psicomotricidade" },
  { title: "Psicanálise", link: "/pos-graduacao/educacao/curso/psicanalise" },
  { title: "Psicofarmacologia", link: "/pos-graduacao/educacao/curso/psicofarmacologia" },
  { title: "Psicologia Analítica-Junguiana", link: "/pos-graduacao/educacao/curso/psicologia-analitica-junguiana" },
  { title: "Psicologia Aplicada ao Desenvolvimento Humano", link: "/pos-graduacao/educacao/curso/psicologia-aplicada-ao-desenvolvimento-humano" },
  { title: "Psicologia Em Saúde", link: "/pos-graduacao/educacao/curso/psicologia-em-saude" },
  { title: "Psicologia Escolar e da Educação", link: "/pos-graduacao/educacao/curso/psicologia-escolar-e-da-educacao" },
  { title: "Psicologia Existencial", link: "/pos-graduacao/educacao/curso/psicologia-existencial" },
  { title: "Psicologia Forense", link: "/pos-graduacao/educacao/curso/psicologia-forense" },
  { title: "Psicologia Hospitalar", link: "/pos-graduacao/educacao/curso/psicologia-hospitalar" },
  { title: "Psicologia Hospitalar e da Saúde", link: "/pos-graduacao/educacao/curso/psicologia-hospitalar-e-da-saude" },
  { title: "Psicologia Humanista Com Abordagem Centrada na Pessoa", link: "/pos-graduacao/educacao/curso/psicologia-humanista-com-abordagem-centrada-na-pessoa" },
  { title: "Psicologia Infantil", link: "/pos-graduacao/educacao/curso/psicologia-infantil" },
  { title: "Psicologia Jurídica", link: "/pos-graduacao/educacao/curso/psicologia-juridica" },
  { title: "Psicologia Jurídica e Avaliação Psicológica", link: "/pos-graduacao/educacao/curso/psicologia-juridica-e-avaliacao-psicologica" },
  { title: "Psicologia Organizacional", link: "/pos-graduacao/educacao/curso/psicologia-organizacional" },
  { title: "Psicologia Organizacional E Do Trabalho", link: "/pos-graduacao/educacao/curso/psicologia-organizacional-e-do-trabalho" },
  { title: "Psicologia Positiva e Saúde Mental no Trabalho", link: "/pos-graduacao/educacao/curso/psicologia-positiva-e-saude-mental-no-trabalho" },
  { title: "Psicologia Positiva: Ciência do Bem-Estar e Autorrealização", link: "/pos-graduacao/educacao/curso/psicologia-positiva-ciencia-do-bem-estar-e-autorrealizacao" },
  { title: "Psicologia Positiva: Liderança Positiva", link: "/pos-graduacao/educacao/curso/psicologia-positiva-lideranca-positiva" },
  { title: "Psicologia Social", link: "/pos-graduacao/educacao/curso/psicologia-social" },
  { title: "Psicologia da Comunicação e Oratória", link: "/pos-graduacao/educacao/curso/psicologia-da-comunicacao-e-oratoria" },
  { title: "Psicologia da Educação", link: "/pos-graduacao/educacao/curso/psicologia-da-educacao" },
  { title: "Psicologia da Educação e Aprendizagem", link: "/pos-graduacao/educacao/curso/psicologia-da-educacao-e-aprendizagem" },
  { title: "Psicologia de Grupos", link: "/pos-graduacao/educacao/curso/psicologia-de-grupos" },
  { title: "Psicologia do Desenvolvimento e da Aprendizagem", link: "/pos-graduacao/educacao/curso/psicologia-do-desenvolvimento-e-da-aprendizagem" },
  { title: "Psicologia do Esporte", link: "/pos-graduacao/educacao/curso/psicologia-do-esporte" },
  { title: "Psicologia do Trabalho e Qualidade de Vida", link: "/pos-graduacao/educacao/curso/psicologia-do-trabalho-e-qualidade-de-vida" },
  { title: "Psicologia do Trânsito", link: "/pos-graduacao/educacao/curso/psicologia-do-transito" },
  { title: "Psicopatologia", link: "/pos-graduacao/educacao/curso/psicopatologia" },
  { title: "Psicopatologia e Saúde Mental", link: "/pos-graduacao/educacao/curso/psicopatologia-e-saude-mental" },
  { title: "Psicopedagogia", link: "/pos-graduacao/educacao/curso/psicopedagogia" },
  { title: "Psicopedagogia Clínica", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica" },
  { title: "Psicopedagogia Clínica e Institucional", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica-e-institucional" },
  { title: "Psicopedagogia Clínica, Institucional e Hospitalar", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica-institucional-e-hospitalar" },
  { title: "Psicopedagogia Clínica, Institucional e TGD", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica-institucional-e-tgd" },
  { title: "Psicopedagogia Escolar", link: "/pos-graduacao/educacao/curso/psicopedagogia-escolar" },
  { title: "Psicopedagogia II", link: "/pos-graduacao/educacao/curso/psicopedagogia-ii" },
  { title: "Psicopedagogia Institucional", link: "/pos-graduacao/educacao/curso/psicopedagogia-institucional" },
  { title: "Psicopedagogia Institucional, Clínica e Educação Especial", link: "/pos-graduacao/educacao/curso/psicopedagogia-institucional,-clinica-e-educacao-especial" },
  { title: "Psicopedagogia Institucional, Clínica e Ludopedagogia", link: "/pos-graduacao/educacao/curso/psicopedagogia-institucional-clinica-e-ludopedagogia" },
  { title: "Psicopedagogia com Ênfase em Educação Infantil e Series Iniciais", link: "/pos-graduacao/educacao/curso/psicopedagogia-com-enfase-em-educacao-infantil-e-series-iniciais" },
  { title: "Psicopedagogia e Educação Especial", link: "/pos-graduacao/educacao/curso/psicopedagogia-e-educacao-especial" },
  { title: "Psicopedagogia e Educação Infantil", link: "/pos-graduacao/educacao/curso/psicopedagogia-e-educacao-infantil" },
  { title: "Psicoterapia Breve", link: "/pos-graduacao/educacao/curso/psicoterapia-breve" },
  { title: "Psicoterapia na Infância e Adolescência", link: "/pos-graduacao/educacao/curso/psicoterapia-na-infancia-e-adolescencia" },
  { title: "Saúde Mental", link: "/pos-graduacao/educacao/curso/saude-mental" },
  { title: "Saúde Mental e Atenção Psicossocial", link: "/pos-graduacao/educacao/curso/saude-mental-e-atencao-psicossocial" },
  { title: "TEA - Transtorno do Espectro Autista", link: "/pos-graduacao/educacao/curso/tea---transtorno-do-espectro-autista" },
  { title: "Terapia Cognitivo-Comportamental", link: "/pos-graduacao/educacao/curso/terapia-cognitivo-comportamental" },
  { title: "Terapia Cognitivo-Comportamental II", link: "/pos-graduacao/educacao/curso/terapia-cognitivo-comportamental-ii" },
  { title: "Transtornos de Aprendizagem", link: "/pos-graduacao/educacao/curso/transtornos-de-aprendizagem" },
  { title: "Transtornos e Problemas na Aprendizagem", link: "/pos-graduacao/educacao/curso/transtornos-e-problemas-na-aprendizagem" },
];

export default function PsicologiaList({ onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NA PSICOLOGIA
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
        MAIS {regularCourses.length} CURSOS DA PSICOLOGIA
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
"use client";

import { useState } from "react";

// Componente auxiliar para os blocos de links (Acordeão no Mobile)
const FooterAccordion = ({ 
  title, 
  children, 
  id, 
  openId, 
  onToggle, 
  noBorder = false,
  hideOnMobile = false
}: { 
  title: string; 
  children: React.ReactNode; 
  id: string; 
  openId: string | null; 
  onToggle: (id: string) => void;
  noBorder?: boolean;
  hideOnMobile?: boolean;
}) => {
  const isOpen = openId === id;

  return (
    <div className={`grid gap-[16px] content-start ${hideOnMobile ? 'max-md:hidden' : ''} ${noBorder ? '' : 'max-md:border-t max-md:border-white/10 max-md:pt-[24px]'}`}>
      <button 
        type="button" 
        onClick={() => onToggle(id)}
        className="grid gap-[2px] text-left max-md:flex max-md:justify-between max-md:items-center max-md:gap-[12px] max-md:w-full max-md:cursor-pointer md:cursor-default"
      >
        <div>
          <span className="text-white opacity-50 text-[13px] font-bold leading-[19.5px] uppercase">{title}</span>
          <div className="w-[46px] h-[2px] bg-[#ea005f]"></div>
        </div>
        <svg 
          stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" 
          className={`text-[#8A95A5] w-[20px] h-[20px] shrink-0 transition-transform duration-300 md:hidden ${isOpen ? 'rotate-180' : ''}`} 
          height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
        </svg>
      </button>
      <div className={`grid gap-[1px] overflow-hidden transition-all duration-300 ease-in-out md:grid-rows-[1fr] md:opacity-100 ${isOpen ? 'max-md:grid-rows-[1fr] max-md:opacity-100' : 'max-md:grid-rows-[0fr] max-md:opacity-0'}`}>
        <div className="overflow-hidden min-h-0">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function Footer() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <section id="main-footer" className="flex justify-center bg-[#0b182f] w-full">
      <div className="grid grid-cols-1 gap-[48px] w-full max-w-[1280px] py-24 max-md:px-[5vw] max-md:py-12 xl:px-0 lg:px-8 px-5">
        
        {/* Topo do Rodapé: Logo, Frase, Redes Sociais e Menus */}
        <div className="grid gap-[60px] max-md:grid-cols-1 max-md:gap-[40px] md:grid-cols-[200px_1fr]">
          
          {/* Logo e Redes Sociais */}
          <div className="flex flex-col gap-[24px] content-start">
            <img 
              alt="Logo Faculdade Líbano" 
              loading="lazy" 
              className="w-full h-auto max-w-[160px]" 
              src="https://faculdadelibano.com.br/images/footer/logo-libano-branca.svg" 
            />
            <p className="text-white md:opacity-50 text-[16px] font-normal leading-[24px] md:max-w-[400px] max-md:italic">
              “Porventura não se converterá o Líbano, num breve momento, em campo fértil? E o campo fértil não se reputará por um bosque?”<br/>- Isaías 29:17
            </p>
            <div className="grid grid-cols-[repeat(4,24px)] gap-[20px] items-center">
              <a target="_blank" rel="noopener noreferrer" className="transition-all duration-[350ms] hover:opacity-70" aria-label="Facebook" href="https://www.facebook.com/faculdadelibano">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-white w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"></path></svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transition-all duration-[350ms] hover:opacity-70" aria-label="Instagram" href="https://www.instagram.com/faculdadelibano">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-white w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transition-all duration-[350ms] hover:opacity-70" aria-label="YouTube" href="https://www.youtube.com/channel/UCeKLTh0hRi94ZuVfcL1CfqQ">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 576 512" className="text-white w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg>
              </a>
              <a target="_blank" rel="noopener noreferrer" className="transition-all duration-[350ms] hover:opacity-70" aria-label="LinkedIn" href="https://br.linkedin.com/school/faculdadelibano">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" className="text-white w-[24px] h-[24px]" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg>
              </a>
            </div>
          </div>

          {/* Menus do Rodapé */}
          <div className="grid grid-cols-1 gap-[32px] md:grid-cols-4 md:gap-6">
            
            {/* Coluna 1 */}
            <div className="grid gap-[24px] content-start">
              <FooterAccordion title="PÓS-GRADUAÇÃO" id="pos" openId={openMenu} onToggle={toggleMenu} noBorder>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" >Pós em Educação</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" >Pós em Saúde</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" >Pós em Engenharia</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors">Pós em Direito</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors">Pós em Psicologia</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors">Pós em Empresarial</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors">Pós em Meio Ambiente</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors">Pós em Serviço Social</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors">MBA Executivo</a>
              </FooterAccordion>
            </div>

            {/* Coluna 2 */}
            <div className="grid gap-[24px] content-start md:border-l md:border-white/10 md:pl-[32px]">
              <FooterAccordion title="GRADUAÇÃO" id="grad" openId={openMenu} onToggle={toggleMenu}>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://graduacao.faculdadelibano.edu.br/graduacao/gestao-comercial">Gestão Comercial</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://graduacao.faculdadelibano.edu.br/graduacao/gestao-rh">Gestão RH</a>
              </FooterAccordion>
              <FooterAccordion title="CURSO TÉCNICO" id="tec" openId={openMenu} onToggle={toggleMenu}>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://tecnico.faculdadelibano.edu.br/curso/administracao">Administração</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://tecnico.faculdadelibano.edu.br/curso/contabilidade">Contabilidade</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://tecnico.faculdadelibano.edu.br/curso/logistica">Logística</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://tecnico.faculdadelibano.edu.br/curso/meio-ambiente">Meio Ambiente</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://tecnico.faculdadelibano.edu.br/curso/seguranca-do-trabalho">Segurança do Trabalho</a>
              </FooterAccordion>
            </div>

            {/* Coluna 3 */}
            <div className="grid gap-[24px] content-start md:border-l md:border-white/10 md:pl-[32px]">
              <FooterAccordion title="ÁREA DO ALUNO" id="aluno" openId={openMenu} onToggle={toggleMenu}>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://cutt.ly/3eSGz7YC">Portal do Aluno</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://portal.faculdadelibano.edu.br/checker">Validador de Certificado</a>
              </FooterAccordion>
              
              <FooterAccordion title="BAIXAR APLICATIVO" id="app" openId={openMenu} onToggle={toggleMenu} hideOnMobile>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <a target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-90" href="https://apps.apple.com/br/app/faculdade-l%C3%ADbano/id6776030388">
                    <img alt="App Store" loading="lazy" className="w-full h-auto" src="https://faculdadelibano.com.br/images/footer/app-store.svg" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-90" href="https://play.google.com/store/apps/details?id=edu.portal.faculdadelibano.portal">
                    <img alt="Google Play" loading="lazy" className="w-full h-auto" src="https://faculdadelibano.com.br/images/footer/play-store.svg" />
                  </a>
                </div>
              </FooterAccordion>

              <FooterAccordion title="ATENDIMENTO" id="atend" openId={openMenu} onToggle={toggleMenu}>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="/whatsapp">Enviar um WhatsApp</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="mailto:pos@faculdadelibano.com.br">Enviar um e-mail</a>
              </FooterAccordion>
            </div>

            {/* Coluna 4 */}
            <div className="grid gap-[24px] content-start md:border-l md:border-white/10 md:pl-[32px]">
              <FooterAccordion title="A LÍBANO" id="libano" openId={openMenu} onToggle={toggleMenu}>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="http://graduacao.faculdadelibano.edu.br/quem-somos">Sobre a Líbano</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjI0NTU">Reconhecimento MEC</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://graduacao.faculdadelibano.edu.br/mantenedora">Mantenedora</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://vagas.faculdadelibano.edu.br/">Trabalhe Conosco</a>
              </FooterAccordion>

              <FooterAccordion title="BLOG" id="blog" openId={openMenu} onToggle={toggleMenu}>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://artigos.libanoeducacional.com.br/categoria/crescimento-profissional">Crescimento profissional</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://artigos.libanoeducacional.com.br/categoria/guia-de-cursos">Guia de curso</a>
                <a className="block text-[#7a7a7a] text-[15px] font-normal leading-[32px] hover:text-[#ea005f] transition-colors" href="https://artigos.libanoeducacional.com.br/categoria/historias-de-sucesso">História de Sucesso</a>
              </FooterAccordion>
            </div>
          </div>
        </div>

        {/* Aplicativo Mobile (Aparece fora do acordeão em telas menores) */}
        <div className="grid gap-[16px] content-start md:hidden">
          <span className="text-white opacity-50 text-[13px] font-bold leading-[19.5px] uppercase">BAIXAR APLICATIVO</span>
          <div className="grid grid-cols-2 gap-2">
            <a target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-90" href="https://apps.apple.com/br/app/faculdade-l%C3%ADbano/id6776030388">
              <img alt="App Store" loading="lazy" className="w-full h-auto" src="https://faculdadelibano.com.br/images/footer/app-store.svg" />
            </a>
            <a target="_blank" rel="noopener noreferrer" className="transition-opacity duration-300 hover:opacity-90" href="https://play.google.com/store/apps/details?id=edu.portal.faculdadelibano.portal">
              <img alt="Google Play" loading="lazy" className="w-full h-auto" src="https://faculdadelibano.com.br/images/footer/play-store.svg" />
            </a>
          </div>
        </div>

        {/* Caixa de Selos e e-MEC */}
        <div className="flex flex-col max-md:gap-[48px]">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-[32px] items-center bg-[#17243a] rounded-[16px] p-[24px] w-full md:w-fit">
            
            {/* QR Code Desktop */}
            <div className="col-span-2 flex gap-3 max-md:hidden">
              <img alt="QR Code e-MEC" loading="lazy" className="rounded-[8px] w-24 aspect-square" src="https://faculdadelibano.com.br/images/footer/e-mec-qr.webp" />
              <div className="flex flex-col gap-1 justify-between max-md:justify-center">
                <span className="text-white text-[12px] font-semibold leading-[1.2] max-w-[218px]">Consulte aqui o Cadastro da Instituição no Sistema e-MEC</span>
                <a target="_blank" rel="noopener noreferrer" className="flex justify-center w-fit border border-white rounded-full px-6 py-2 text-white text-[14px] font-bold tracking-[0.7px] hover:bg-white/10 transition-colors duration-[350ms]" href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjI0NTU">ACESSE JÁ</a>
              </div>
            </div>

            {/* Selos de Confiança */}
            <div className="col-span-1 md:col-span-6 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[32px] items-center">
              <div className="flex flex-col gap-1 max-md:items-center">
                <span className="text-white text-[16px] font-medium leading-[1.2] whitespace-nowrap">Selos de confiança</span>
                <div className="w-[46px] h-[2px] bg-[#ea005f]"></div>
              </div>
              <div className="grid grid-cols-2 md:flex items-center gap-[16px] md:gap-[24px]">
                <div className="flex gap-[20px] items-center w-full justify-center">
                  <img alt="Reclame aqui" loading="lazy" className="w-[150px] max-w-full" src="https://faculdadelibano.com.br/images/footer/desktop/reclame-aqui.svg" />
                </div>
                <div className="flex gap-[20px] items-center w-full justify-center">
                  <div className="w-px h-12 bg-white/10 max-md:hidden"></div>
                  <img alt="Nota máxima no MEC" loading="lazy" className="w-[150px] max-w-full" src="https://faculdadelibano.com.br/images/footer/desktop/mec.svg" />
                </div>
                <div className="flex gap-[20px] items-center w-full justify-center">
                  <div className="w-px h-12 bg-white/10 max-md:hidden"></div>
                  <img alt="Google Meu Negócio" loading="lazy" className="w-[150px] max-w-full" src="https://faculdadelibano.com.br/images/footer/desktop/google.svg" />
                </div>
                <div className="flex gap-[20px] items-center w-full justify-center">
                  <div className="w-px h-12 bg-white/10 max-md:hidden"></div>
                  <img alt="Site Seguro" loading="lazy" className="w-[150px] max-w-full" src="https://faculdadelibano.com.br/images/footer/desktop/safe.svg" />
                </div>
              </div>
            </div>
          </div>
          
          {/* QR Code Mobile */}
          <div className="flex gap-6 md:hidden justify-center items-center">
            <img alt="QR Code e-MEC" loading="lazy" className="rounded-[8px] w-24 aspect-square" src="https://faculdadelibano.com.br/images/footer/e-mec-qr.webp" />
            <div className="flex flex-col gap-3 justify-center items-end">
              <span className="text-white text-[12px] font-semibold text-right">Consulte aqui o Cadastro da Instituição no Sistema e-MEC</span>
              <a target="_blank" rel="noopener noreferrer" className="flex justify-center w-fit border border-white rounded-full px-6 py-2 text-white text-[14px] font-bold tracking-[0.7px] hover:bg-white/10 transition-colors duration-[350ms]" href="https://emec.mec.gov.br/emec/consulta-cadastro/detalhamento/d96957f455f6405d14c6542552b0f6eb/MjI0NTU">ACESSE JÁ</a>
            </div>
          </div>

          {/* Rodapé Legal - Mobile (Removido o mt-8) */}
          <div className="grid gap-[12px] md:hidden text-center">
            <div className="flex justify-center gap-[24px]">
              <a className="text-[#7a7a7a] text-[14px] font-normal hover:text-[#ea005f] transition-colors" href="/politica-de-privacidade">Política de Privacidade</a>
              <a className="text-[#7a7a7a] text-[14px] font-normal hover:text-[#ea005f] transition-colors" href="/termos-de-uso">Termo de Uso</a>
            </div>
            <p className="text-[#7a7a7a] text-[12px] font-normal mt-2">Site operado por Libano Matriz (CNPJ 39.511.236/0001-28) em parceria com a Faculdade Líbano.</p>
            <p className="text-white text-[12px] font-normal">© 2026 Líbano | Todos os direitos reservados</p>
          </div>
        </div>

        {/* Rodapé Legal - Desktop (Removido o mt-8) */}
        <div className="grid gap-3 max-md:hidden">
          <div className="flex gap-[24px] items-center w-fit">
            <a className="text-[#7a7a7a] text-[14px] font-normal hover:text-[#ea005f] transition-colors" href="/politica-de-privacidade">Política de Privacidade</a>
            <div className="w-[2px] h-[20px] bg-white/10"></div>
            <a className="text-[#7a7a7a] text-[14px] font-normal hover:text-[#ea005f] transition-colors" href="/termos-de-uso">Termo de Uso</a>
          </div>
          <p className="text-[#7a7a7a] text-[12px] font-normal">Site operado por Libano Matriz (CNPJ 39.511.236/0001-28) em parceria com a Faculdade Líbano. © 2026 Líbano | Todos os direitos reservados</p>
        </div>

      </div>
    </section>
  );
}
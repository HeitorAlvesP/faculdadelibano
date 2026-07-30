"use client";

import Link from "next/link";

interface CourseListProps {
  category: string;
  onBack: () => void;
}

const highlightedCourses = [
  { title: "ABA - Análise do Comportamento Aplicada", link: "/pos-graduacao/educacao/curso/aba---analise-do-comportamento-aplicada" },
  { title: "Psicopedagogia Clínica e Institucional", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica-e-institucional" },
  { title: "Alfabetização e Letramento", link: "/pos-graduacao/educacao/curso/alfabetizacao-e-letramento" },
  { title: "Neuropsicopedagogia", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia" },
];

const regularCourses = [
  { title: "ABA - Análise do Comportamento Aplicada", link: "/pos-graduacao/educacao/curso/aba---analise-do-comportamento-aplicada" },
  { title: "ABA - Análise do Comportamento Aplicada Ao Autismo", link: "/pos-graduacao/educacao/curso/aba---analise-do-comportamento-aplicada-ao-autismo" },
  { title: "ABA - Análise do Comportamento Aplicada II", link: "/pos-graduacao/educacao/curso/aba-analise-do-comportamento-aplicada-ii" },
  { title: "ABA - Análise do Comportamento Aplicada ao Autismo II", link: "/pos-graduacao/educacao/curso/aba-analise-do-comportamento-aplicada-ao-autismo-ii" },
  { title: "AEE - Atendimento Educacional Especializado", link: "/pos-graduacao/educacao/curso/aee-atendimento-educacional-especializado" },
  { title: "AEE - Atendimento Educacional Especializado e Psicomotricidade", link: "/pos-graduacao/educacao/curso/aee-atendimento-educacional-especializado-e-psicomotricidade" },
  { title: "Administração Escolar", link: "/pos-graduacao/educacao/curso/administracao-escolar" },
  { title: "Administração Escolar e Orientação Educacional", link: "/pos-graduacao/educacao/curso/administracao-escolar-e-orientacao-educacional" },
  { title: "Alfabetização", link: "/pos-graduacao/educacao/curso/alfabetizacao" },
  { title: "Alfabetização e Letramento", link: "/pos-graduacao/educacao/curso/alfabetizacao-e-letramento" },
  { title: "Alfabetização e Letramento II", link: "/pos-graduacao/educacao/curso/alfabetizacao-e-letramento-ii" },
  { title: "Alfabetização, Letramento e Psicopedagogia", link: "/pos-graduacao/educacao/curso/alfabetizacao-letramento-e-psicopedagogia" },
  { title: "Alfabetização, Letramento e Psicopedagogia Institucional", link: "/pos-graduacao/educacao/curso/alfabetizacao-letramento-e-a-psicopedagogia-institucional" },
  { title: "Antropologia", link: "/pos-graduacao/educacao/curso/antropologia" },
  { title: "Antropologia Brasileira", link: "/pos-graduacao/educacao/curso/antropologia-brasileira" },
  { title: "Antropologia da Educação", link: "/pos-graduacao/educacao/curso/antropologia-da-educacao" },
  { title: "Antropologia e Fundamentos da Educação Social", link: "/pos-graduacao/educacao/curso/antropologia-e-fundamentos-da-educacao-social" },
  { title: "Arqueologia, Cultura e Sociedade", link: "/pos-graduacao/educacao/curso/arqueologia-cultura-e-sociedade" },
  { title: "Artes e Ludicidade", link: "/pos-graduacao/educacao/curso/artes-e-ludicidade" },
  { title: "Artes na Educação Infantil", link: "/pos-graduacao/educacao/curso/artes-na-educacao-infantil" },
  { title: "Arteterapia", link: "/pos-graduacao/educacao/curso/arteterapia" },
  { title: "Atendimento Educacional Especializado e Transtorno Global do Desenvolvimento", link: "/pos-graduacao/educacao/curso/atendimento-educacional-especializado-e-transtorno-global-do-desenvolvimento" },
  { title: "Atletismo", link: "/pos-graduacao/educacao/curso/atletismo" },
  { title: "Autismo", link: "/pos-graduacao/educacao/curso/autismo" },
  { title: "Avaliação Educacional", link: "/pos-graduacao/educacao/curso/avaliacao-educacional" },
  { title: "BNCC e Metodologias Ativas de Aprendizagem", link: "/pos-graduacao/educacao/curso/bncc-e-metodologias-ativas-de-aprendizagem" },
  { title: "Basquetebol", link: "/pos-graduacao/educacao/curso/basquetebol" },
  { title: "Ciências Humanas: Sociologia, História e Filosofia", link: "/pos-graduacao/educacao/curso/ciencias-humanas-sociologia-historia-e-filosofia" },
  { title: "Ciências da Religião", link: "/pos-graduacao/educacao/curso/ciencias-da-religiao" },
  { title: "Coordenação Pedagógica", link: "/pos-graduacao/educacao/curso/coordenacao-pedagogica" },
  { title: "Coordenação Pedagógica e Supervisão Escolar", link: "/pos-graduacao/educacao/curso/coordenacao-pedagogica-e-supervisao-escolar" },
  { title: "Cultura Maker e Transformação Educacional", link: "/pos-graduacao/educacao/curso/cultura-maker-e-transformacao-educacional" },
  { title: "Deficiência Intelectual", link: "/pos-graduacao/educacao/curso/deficiencia-intelectual" },
  { title: "Desenvolvimento Infantil", link: "/pos-graduacao/educacao/curso/desenvolvimento-infantil" },
  { title: "Design Educacional", link: "/pos-graduacao/educacao/curso/design-educacional" },
  { title: "Design Instrucional", link: "/pos-graduacao/educacao/curso/design-instrucional" },
  { title: "Didática do Ensino Superior", link: "/pos-graduacao/educacao/curso/didatica-do-ensino-superior" },
  { title: "Dificuldades de Aprendizagem: Como Detectar e Atuar", link: "/pos-graduacao/educacao/curso/dificuldades-de-aprendizagem-como-detectar-e-atuar" },
  { title: "Docência de Ciências Humanas História no Ensino Médio", link: "/pos-graduacao/educacao/curso/docencia-de-ciencias-humanas-historia-no-ensino-medio-" },
  { title: "Docência de Ciências da Natureza", link: "/pos-graduacao/educacao/curso/docencia-de-ciencias-da-natureza-" },
  { title: "Docência de Linguagens no Ensino Médio", link: "/pos-graduacao/educacao/curso/docencia-de-linguagens-no-ensino-medio-" },
  { title: "Docência de Matemática no Ensino Médio", link: "/pos-graduacao/educacao/curso/docencia-de-matematica-no-ensino-medio" },
  { title: "Docência do Ensino Superior e Enfermagem", link: "/pos-graduacao/educacao/curso/docencia-do-ensino-superior-e-enfermagem" },
  { title: "Docência do Ensino Superior e Metodologias Ativas de Aprendizado", link: "/pos-graduacao/educacao/curso/docencia-do-ensino-superior-e-metodologias-ativas-de-aprendizado" },
  { title: "Docência do Ensino Superior e Neuropsicologia", link: "/pos-graduacao/educacao/curso/docencia-do-ensino-superior-e-neuropsicologia" },
  { title: "Docência do Ensino Superior e Psicomotricidade", link: "/pos-graduacao/educacao/curso/docencia-do-ensino-superior-e-psicomotricidade" },
  { title: "Docência do Ensino Superior em Nutrição", link: "/pos-graduacao/educacao/curso/docencia-do-ensino-superior-em-nutricao" },
  { title: "Docência e Gestão do Ensino Superior", link: "/pos-graduacao/educacao/curso/docencia-e-gestao-do-ensino-superior" },
  { title: "Docência e Gestão na Educação a Distância", link: "/pos-graduacao/educacao/curso/docencia-e-gestao-na-educacao-a-distancia" },
  { title: "Docência em Biologia e Práticas Pedagógicas", link: "/pos-graduacao/educacao/curso/docencia-em-biologia-e-praticas-pedagogicas" },
  { title: "Docência em Educação Física e Práticas Pedagógicas", link: "/pos-graduacao/educacao/curso/docencia-em-educacao-fisica-e-praticas-pedagogicas" },
  { title: "Docência em Enfermagem", link: "/pos-graduacao/educacao/curso/docencia-em-enfermagem" },
  { title: "Docência em Geografia e Práticas Pedagógicas", link: "/pos-graduacao/educacao/curso/docencia-em-geografia-e-praticas-pedagogicas" },
  { title: "Docência em Letras e Práticas Pedagógicas", link: "/pos-graduacao/educacao/curso/docencia-em-letras-e-praticas-pedagogicas" },
  { title: "Docência em Matemática e Práticas Pedagógicas", link: "/pos-graduacao/educacao/curso/docencia-em-matematica-e-praticas-pedagogicas" },
  { title: "Docência na Educação Infantil e Anos Iniciais", link: "/pos-graduacao/educacao/curso/docencia-na-educacao-infantil-e-anos-iniciais" },
  { title: "Docência no Ensino Fundamental Anos Iniciais", link: "/pos-graduacao/educacao/curso/docencia-no-ensino-fundamental-anos-iniciais" },
  { title: "Docência no Ensino Superior", link: "/pos-graduacao/educacao/curso/docencia-no-ensino-superior" },
  { title: "Docência no Ensino de Ciências Biológicas", link: "/pos-graduacao/educacao/curso/docencia-no-ensino-de-ciencias-biologicas" },
  { title: "EaD e as Novas Tecnologias Educacionais", link: "/pos-graduacao/educacao/curso/ead-e-as-novas-tecnologias-educacionais" },
  { title: "Educação Ambiental", link: "/pos-graduacao/educacao/curso/educacao-ambiental" },
  { title: "Educação Ambiental e Sustentabilidade", link: "/pos-graduacao/educacao/curso/educacao-ambiental-e-sustentabilidade" },
  { title: "Educação Corporativa e Pedagogia Empresarial", link: "/pos-graduacao/educacao/curso/educacao-corporativa-e-pedagogia-empresarial" },
  { title: "Educação Digital e Inovação Pedagógica", link: "/pos-graduacao/educacao/curso/educacao-digital-e-inovacao-pedagogica" },
  { title: "Educação Em Direitos Humanos, Diversidade e Questões Étnico-sociais ou Raciais", link: "/pos-graduacao/educacao/curso/educacao-em-direitos-humanos-diversidade-e-questoes-etnico-sociais-ou-raciais" },
  { title: "Educação Empreendedora e Empreendedorismo Social", link: "/pos-graduacao/educacao/curso/educacao-empreendedora-e-empreendedorismo-social" },
  { title: "Educação Especial", link: "/pos-graduacao/educacao/curso/educacao-especial" },
  { title: "Educação Especial Inclusiva e Transtorno do Espectro Autista (TEA)", link: "/pos-graduacao/educacao/curso/educacao-especial-inclusiva-e-transtorno-do-espectro-autista-tea" },
  { title: "Educação Especial com Ênfase em Transtorno do Espectro Autista (TEA)", link: "/pos-graduacao/educacao/curso/educacao-especial-com-enfase-em-transtorno-do-espectro-autista-tea" },
  { title: "Educação Especial e Autismo", link: "/pos-graduacao/educacao/curso/educacao-especial-e-autismo" },
  { title: "Educação Especial e Educação Infantil", link: "/pos-graduacao/educacao/curso/educacao-especial-e-educacao-infantil" },
  { title: "Educação Especial e Inclusiva", link: "/pos-graduacao/educacao/curso/educacao-especial-e-inclusiva" },
  { title: "Educação Especial e Inclusiva: Da Educação Infantil ao Ensino Superior", link: "/pos-graduacao/educacao/curso/educacao-especial-e-inclusiva-da-educacao-infantil-ao-ensino-superior" },
  { title: "Educação Especial e Neuropsicopedagogia", link: "/pos-graduacao/educacao/curso/educacao-especial-e-neuropsicopedagogia" },
  { title: "Educação Especial e Psicomotricidade", link: "/pos-graduacao/educacao/curso/educacao-especial-e-psicomotricidade" },
  { title: "Educação Financeira", link: "/pos-graduacao/educacao/curso/educacao-financeira" },
  { title: "Educação Física Escolar", link: "/pos-graduacao/educacao/curso/educacao-fisica-escolar" },
  { title: "Educação Física Escolar Com Ênfase na Inclusão", link: "/pos-graduacao/educacao/curso/educacao-fisica-escolar-com-enfase-na-inclusao-" },
  { title: "Educação Física Escolar com Ênfase na Educação Infantil", link: "/pos-graduacao/educacao/curso/educacao-fisica-escolar-com-enfase-na-educacao-infantil" },
  { title: "Educação Física Escolar na Educação Básica", link: "/pos-graduacao/educacao/curso/educacao-fisica-escolar-na-educacao-basica" },
  { title: "Educação Física com Ênfase em Treinamento Desportivo", link: "/pos-graduacao/educacao/curso/educacao-fisica-com-enfase-em-treinamento-desportivo" },
  { title: "Educação Física e Psicomotricidade", link: "/pos-graduacao/educacao/curso/educacao-fisica-e-psicomotricidade" },
  { title: "Educação Física e Recreação", link: "/pos-graduacao/educacao/curso/educacao-fisica-e-recreacao" },
  { title: "Educação Inclusiva", link: "/pos-graduacao/educacao/curso/educacao-inclusiva" },
  { title: "Educação Inclusiva e Diversidade", link: "/pos-graduacao/educacao/curso/educacao-inclusiva-e-diversidade" },
  { title: "Educação Inclusiva, Infantil e TEA", link: "/pos-graduacao/educacao/curso/educacao-inclusiva-infantil-e-tea" },
  { title: "Educação Infantil", link: "/pos-graduacao/educacao/curso/educacao-infantil" },
  { title: "Educação Infantil Anos Iniciais", link: "/pos-graduacao/educacao/curso/educacao-infantil-anos-iniciais" },
  { title: "Educação Infantil e Alfabetização", link: "/pos-graduacao/educacao/curso/educacao-infantil-e-alfabetizacao" },
  { title: "Educação Infantil e Neurociência", link: "/pos-graduacao/educacao/curso/educacao-infantil-e-neurociencia" },
  { title: "Educação Infantil, Anos Iniciais e Neuropsicopedagogia", link: "/pos-graduacao/educacao/curso/educacao-infantil-anos-iniciais-e-neuropsicopedagogia" },
  { title: "Educação Infantil, Neurociência e Aprendizagem", link: "/pos-graduacao/educacao/curso/educacao-infantil,-neurociencia-e-aprendizagem" },
  { title: "Educação Infantil: Infância, Linguagens e Ludicidade", link: "/pos-graduacao/educacao/curso/educacao-infantil-infancia-linguagens-e-ludicidade" },
  { title: "Educação Infantil: Jogos Brinquedos e Recreação", link: "/pos-graduacao/educacao/curso/educacao-infantil-jogos-brinquedos-e-recreacao" },
  { title: "Educação Infantil: Teorias e Práticas Pedagógicas", link: "/pos-graduacao/educacao/curso/educacao-infantil-teorias-e-praticas-pedagogicas" },
  { title: "Educação Matemática", link: "/pos-graduacao/educacao/curso/educacao-matematica" },
  { title: "Educação Online e Tecnologias de Aprendizagem", link: "/pos-graduacao/educacao/curso/educacao-online-e-tecnologias-de-aprendizagem" },
  { title: "Educação Popular e os Valores Humanos", link: "/pos-graduacao/educacao/curso/educacao-popular-e-os-valores-humanos" },
  { title: "Educação a Distância e Mediação Pedagógica", link: "/pos-graduacao/educacao/curso/educacao-a-distancia-e-mediacao-pedagogica" },
  { title: "Educação de Jovens e Adultos", link: "/pos-graduacao/educacao/curso/educacao-de-jovens-e-adultos" },
  { title: "Educação e Direitos Humanos", link: "/pos-graduacao/educacao/curso/educacao-e-direitos-humanos" },
  { title: "Educação e Diversidade Étnico-racial", link: "/pos-graduacao/educacao/curso/educacao-e-diversidade-etnico-racial" },
  { title: "Educação e Novas Tecnologias", link: "/pos-graduacao/educacao/curso/educacao-e-novas-tecnologias" },
  { title: "Ensino Híbrido", link: "/pos-graduacao/educacao/curso/ensino-hibrido" },
  { title: "Ensino Híbrido e Pedagogia de Projetos", link: "/pos-graduacao/educacao/curso/ensino-hibrido-e-pedagogia-de-projetos" },
  { title: "Ensino Híbrido e Tecnologias Educacionais", link: "/pos-graduacao/educacao/curso/ensino-hibrido-e-tecnologias-educacionais" },
  { title: "Ensino da História e Geografia", link: "/pos-graduacao/educacao/curso/ensino-da-historia-e-geografia" },
  { title: "Ensino da Leitura, Escrita e Produção de Texto", link: "/pos-graduacao/educacao/curso/ensino-da-leitura-escrita-e-producao-de-texto" },
  { title: "Ensino da Literatura e Produção de Textos Em Língua Espanhola", link: "/pos-graduacao/educacao/curso/ensino-da-literatura-e-producao-de-textos-em-lingua-espanhola" },
  { title: "Ensino da Literatura e Produção de Textos Em Língua Inglesa", link: "/pos-graduacao/educacao/curso/ensino-da-literatura-e-producao-de-textos-em-lingua-inglesa" },
  { title: "Ensino da Literatura e Produção de Textos Em Língua Portuguesa", link: "/pos-graduacao/educacao/curso/ensino-da-literatura-e-producao-de-textos-em-lingua-portuguesa" },
  { title: "Ensino da Língua Espanhola", link: "/pos-graduacao/educacao/curso/ensino-da-lingua-espanhola" },
  { title: "Ensino da Língua Inglesa", link: "/pos-graduacao/educacao/curso/ensino-da-lingua-inglesa" },
  { title: "Ensino de Artes", link: "/pos-graduacao/educacao/curso/ensino-de-artes" },
  { title: "Ensino de Ciências", link: "/pos-graduacao/educacao/curso/ensino-de-ciencias" },
  { title: "Ensino de Geografia", link: "/pos-graduacao/educacao/curso/ensino-de-geografia" },
  { title: "Ensino de História", link: "/pos-graduacao/educacao/curso/ensino-de-historia" },
  { title: "Ensino de Letras-Inglês", link: "/pos-graduacao/educacao/curso/ensino-de-letras-ingles" },
  { title: "Ensino de Língua Portuguesa", link: "/pos-graduacao/educacao/curso/ensino-de-lingua-portuguesa" },
  { title: "Ensino de Matemática", link: "/pos-graduacao/educacao/curso/ensino-de-matematica" },
  { title: "Ensino de Química", link: "/pos-graduacao/educacao/curso/ensino-de-quimica" },
  { title: "Estudos Literários", link: "/pos-graduacao/educacao/curso/estudos-literarios" },
  { title: "Filosofia Aplicada à Educação e Sociedade", link: "/pos-graduacao/educacao/curso/filosofia-aplicada-a-educacao-e-sociedade" },
  { title: "Filosofia Aplicada à Religião e à Educação", link: "/pos-graduacao/educacao/curso/filosofia-aplicada-a-religiao-e-a-educacao" },
  { title: "Filosofia e Sociologia", link: "/pos-graduacao/educacao/curso/filosofia-e-sociologia" },
  { title: "Filosofia na Educação Básica", link: "/pos-graduacao/educacao/curso/filosofia-na-educacao-basica" },
  { title: "Filosofia, Ética e Política", link: "/pos-graduacao/educacao/curso/filosofia-etica-e-politica" },
  { title: "Fonoaudiologia Educacional", link: "/pos-graduacao/educacao/curso/fonoaudiologia-educacional" },
  { title: "Futebol", link: "/pos-graduacao/educacao/curso/futebol" },
  { title: "Gastronomia com Ênfase em Culinária Brasileira", link: "/pos-graduacao/educacao/curso/gastronomia-com-enfase-em-culinaria-brasileira" },
  { title: "Geografia na Educação Básica", link: "/pos-graduacao/educacao/curso/geografia-na-educacao-basica" },
  { title: "Gestão Educacional Pública", link: "/pos-graduacao/educacao/curso/gestao-educacional-publica" },
  { title: "Gestão Educacional: Direção, Coordenação e Supervisão", link: "/pos-graduacao/educacao/curso/gestao-educacional-direcao-coordenacao-e-supervisao" },
  { title: "Gestão Escolar", link: "/pos-graduacao/educacao/curso/gestao-escolar" },
  { title: "Gestão Escolar Com Ênfase Em Educação Infantil", link: "/pos-graduacao/educacao/curso/gestao-escolar-com-enfase-em-educacao-infantil" },
  { title: "Gestão Escolar e Coordenação Pedagógica", link: "/pos-graduacao/educacao/curso/gestao-escolar-e-coordenacao-pedagogica" },
  { title: "Gestão Escolar, Supervisão E Orientação Pedagógica E Educacional", link: "/pos-graduacao/educacao/curso/gestao-escolar-supervisao-e-orientacao-pedagogica-e-educacional" },
  { title: "Gestão Escolar: Administração, Supervisão e Orientação", link: "/pos-graduacao/educacao/curso/gestao-escolar-administracao-supervisao-e-orientacao" },
  { title: "Gestão Escolar: Coordenação Pedagógica e Orientação Educacional", link: "/pos-graduacao/educacao/curso/gestao-escolar-coordenacao-pedagogica-e-orientacao-educacional" },
  { title: "Gestão Estratégica Escolar", link: "/pos-graduacao/educacao/curso/gestao-estrategica-escolar" },
  { title: "Gestão Financeira Escolar", link: "/pos-graduacao/educacao/curso/gestao-financeira-escolar" },
  { title: "Gestão do Trabalho Pedagógico (Supervisão, Orientação, Inspeção e Administração)", link: "/pos-graduacao/educacao/curso/gestao-do-trabalho-pedagogico-supervisao-orientacao-inspecao-e-administracao" },
  { title: "Gestão e Orientação Escolar", link: "/pos-graduacao/educacao/curso/gestao-e-orientacao-escolar" },
  { title: "Gestão e Produção de Conteúdos em Educação a Distância", link: "/pos-graduacao/educacao/curso/gestao-e-producao-de-conteudos-em-educacao-a-distancia" },
  { title: "Gestão em EAD", link: "/pos-graduacao/educacao/curso/gestao-em-ead" },
  { title: "Gramática, Semântica e Sociolinguística", link: "/pos-graduacao/educacao/curso/gramatica-semantica-e-sociolinguistica" },
  { title: "Handebol", link: "/pos-graduacao/educacao/curso/handebol" },
  { title: "História Antiga", link: "/pos-graduacao/educacao/curso/historia-antiga" },
  { title: "História Medieval e Moderna", link: "/pos-graduacao/educacao/curso/historia-medieval-e-moderna" },
  { title: "História da Arte e do Design", link: "/pos-graduacao/educacao/curso/historia-da-arte-e-do-design" },
  { title: "História do Brasil", link: "/pos-graduacao/educacao/curso/historia-do-brasil" },
  { title: "História e Arte", link: "/pos-graduacao/educacao/curso/historia-e-arte" },
  { title: "História e Cultura no Brasil", link: "/pos-graduacao/educacao/curso/historia-e-cultura-no-brasil" },
  { title: "História na Educação Básica", link: "/pos-graduacao/educacao/curso/historia-na-educacao-basica" },
  { title: "Informática na Educação", link: "/pos-graduacao/educacao/curso/informatica-na-educacao" },
  { title: "Inovação Educacional e Práticas Ativas", link: "/pos-graduacao/educacao/curso/inovacao-educacional-e-praticas-ativas" },
  { title: "Inspeção Escolar", link: "/pos-graduacao/educacao/curso/inspecao-escolar" },
  { title: "Inspeção, Orientação e Supervisão Escolar", link: "/pos-graduacao/educacao/curso/inspecao-orientacao-e-supervisao-escolar" },
  { title: "Inteligência Artificial e Tecnologias Educacionais", link: "/pos-graduacao/educacao/curso/inteligencia-artificial-e-tecnologias-educacionais" },
  { title: "Letramento e Produção de Textos para o Ensino Fundamental", link: "/pos-graduacao/educacao/curso/letramento-e-producao-de-textos-para-o-ensino-fundamental" },
  { title: "Letras Com Ênfase Em Linguística", link: "/pos-graduacao/educacao/curso/letras-com-enfase-em-linguistica" },
  { title: "Libras - Língua Brasileira de Sinais", link: "/pos-graduacao/educacao/curso/libras---lingua-brasileira-de-sinais" },
  { title: "Libras e Braille", link: "/pos-graduacao/educacao/curso/libras-e-braille" },
  { title: "Linguagem, Cognição e Aprendizagem", link: "/pos-graduacao/educacao/curso/linguagem-cognicao-e-aprendizagem" },
  { title: "Linguística e Análise do Discurso", link: "/pos-graduacao/educacao/curso/linguistica-e-analise-do-discurso" },
  { title: "Literatura Infantojuvenil", link: "/pos-graduacao/educacao/curso/literatura-infantojuvenil" },
  { title: "Literatura, Artes e Filosofia", link: "/pos-graduacao/educacao/curso/literatura-artes-e-filosofia" },
  { title: "Ludopedagogia", link: "/pos-graduacao/educacao/curso/ludopedagogia" },
  { title: "Ludopedagogia e Psicomotricidade", link: "/pos-graduacao/educacao/curso/ludopedagogia-e-psicomotricidade" },
  { title: "Língua Espanhola na Educação Básica", link: "/pos-graduacao/educacao/curso/lingua-espanhola-na-educacao-basica" },
  { title: "Língua Inglesa na Educação Básica", link: "/pos-graduacao/educacao/curso/lingua-inglesa-na-educacao-basica" },
  { title: "Língua Portuguesa - Redação e Oratória", link: "/pos-graduacao/educacao/curso/lingua-portuguesa---redacao-e-oratoria" },
  { title: "Língua Portuguesa e Literatura Brasileira", link: "/pos-graduacao/educacao/curso/lingua-portuguesa-e-literatura-brasileira" },
  { title: "Língua Portuguesa, Literatura e Redação", link: "/pos-graduacao/educacao/curso/lingua-portuguesa-literatura-e-redacao" },
  { title: "Matemática Discreta e Análise Combinatória", link: "/pos-graduacao/educacao/curso/matematica-discreta-e-analise-combinatoria" },
  { title: "Matemática na Educação Infantil e Séries Iniciais", link: "/pos-graduacao/educacao/curso/matematica-na-educacao-infantil-e-series-iniciais" },
  { title: "Mediação na Escola Inclusiva", link: "/pos-graduacao/educacao/curso/mediacao-na-escola-inclusiva" },
  { title: "Metodologia do Ensino da Matemática e da Física", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-da-matematica-e-da-fisica" },
  { title: "Metodologia do Ensino da Redação", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-da-redacao" },
  { title: "Metodologia do Ensino da Sociologia", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-da-sociologia" },
  { title: "Metodologia do Ensino das Línguas Portuguesa e Inglesa", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-das-linguas-portuguesa-e-inglesa" },
  { title: "Metodologia do Ensino de Artes", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-artes" },
  { title: "Metodologia do Ensino de Biologia", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-biologia" },
  { title: "Metodologia do Ensino de Educação Física", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-educacao-fisica" },
  { title: "Metodologia do Ensino de Filosofia e Sociologia", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-filosofia-e-sociologia" },
  { title: "Metodologia do Ensino de Física", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-fisica" },
  { title: "Metodologia do Ensino de Língua Inglesa", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-lingua-inglesa" },
  { title: "Metodologia do Ensino de Língua Portuguesa", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-lingua-portuguesa" },
  { title: "Metodologia do Ensino de Matemática", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-matematica" },
  { title: "Metodologia do Ensino de Matemática e Biologia", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-matematica-e-biologia" },
  { title: "Metodologia do Ensino de Química", link: "/pos-graduacao/educacao/curso/metodologia-do-ensino-de-quimica" },
  { title: "Metodologias Ativas e Tecnologias Educacionais", link: "/pos-graduacao/educacao/curso/metodologias-ativas-e-tecnologias-educacionais" },
  { title: "Metodologias Ativas na Educação", link: "/pos-graduacao/educacao/curso/metodologias-ativas-na-educacao" },
  { title: "Modalidades de Ensino EaD", link: "/pos-graduacao/educacao/curso/modalidades-de-ensino-ead" },
  { title: "Mídias, Tecnologias e Comunicação para o Ensino Básico", link: "/pos-graduacao/educacao/curso/midias-tecnologias-e-comunicacao-para-o-ensino-basico" },
  { title: "Neuroaprendizagem, Dificuldades e Transtornos", link: "/pos-graduacao/educacao/curso/neuroaprendizagem-dificuldades-e-transtornos" },
  { title: "Neuroaprendizagem, Metodologias e Tecnologias", link: "/pos-graduacao/educacao/curso/neuroaprendizagem-metodologias-e-tecnologias" },
  { title: "Neurociência Aplicada à Psicomotricidade", link: "/pos-graduacao/educacao/curso/neurociencia-aplicada-a-psicomotricidade" },
  { title: "Neurociência e Aprendizagem", link: "/pos-graduacao/educacao/curso/neurociencia-e-aprendizagem" },
  { title: "Neurociências e Comportamento", link: "/pos-graduacao/educacao/curso/neurociencias-e-comportamento" },
  { title: "Neurociências, Educação e Desenvolvimento Infantil", link: "/pos-graduacao/educacao/curso/neurociencias-educacao-e-desenvolvimento-infantil" },
  { title: "Neuroeducação", link: "/pos-graduacao/educacao/curso/neuroeducacao" },
  { title: "Neuroeducação e Tecnologias Educacionais", link: "/pos-graduacao/educacao/curso/neuroeducacao-e-tecnologias-educacionais" },
  { title: "Neuropedagogia", link: "/pos-graduacao/educacao/curso/neuropedagogia" },
  { title: "Neuropsicomotricidade", link: "/pos-graduacao/educacao/curso/neuropsicomotricidade" },
  { title: "Neuropsicopedagogia", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia" },
  { title: "Neuropsicopedagogia Clinica, Institucional e Hospitalar", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-clinica-institucional-e-hospitalar" },
  { title: "Neuropsicopedagogia Clínica", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-clinicas" },
  { title: "Neuropsicopedagogia Clínica e Institucional", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-clinica-e-institucional-960h" },
  { title: "Neuropsicopedagogia II", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-ii" },
  { title: "Neuropsicopedagogia Institucional e Educação Especial Inclusiva", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-institucional-e-educacao-especial-inclusiva" },
  { title: "Neuropsicopedagogia e Educação Especial e Inclusiva", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-e-educacao-especial-e-inclusiva" },
  { title: "Neuropsicopedagogia e Psicomotricidade", link: "/pos-graduacao/educacao/curso/neuropsicopedagogia-e-psicomotricidade" },
  { title: "Orientação Educacional", link: "/pos-graduacao/educacao/curso/orientacao-educacional" },
  { title: "Pedagogia Digital e Inovações Tecnológicas", link: "/pos-graduacao/educacao/curso/pedagogia-digital-e-inovacoes-tecnologicas" },
  { title: "Pedagogia Gestora - Administração, Supervisão e Orientação", link: "/pos-graduacao/educacao/curso/pedagogia-gestora-administracao-supervisao-e-orientacao" },
  { title: "Pedagogia Hospitalar", link: "/pos-graduacao/educacao/curso/pedagogia-hospitalar" },
  { title: "Projetos Pedagógicos", link: "/pos-graduacao/educacao/curso/projetos-pedagogicos" },
  { title: "Projetos e Inovação na Educação", link: "/pos-graduacao/educacao/curso/projetos-e-inovacao-na-educacao" },
  { title: "Práticas Educacionais em Contextos Rurais e Indígenas", link: "/pos-graduacao/educacao/curso/praticas-educacionais-em-contextos-rurais-e-indigenas" },
  { title: "Psicomotricidade", link: "/pos-graduacao/educacao/curso/psicomotricidade" },
  { title: "Psicomotricidade Com Ênfase Em TEA", link: "/pos-graduacao/educacao/curso/psicomotricidade-com-enfase-em-tea" },
  { title: "Psicomotricidade II", link: "/pos-graduacao/educacao/curso/psicomotricidade-ii" },
  { title: "Psicomotricidade e Desenvolvimento Humano", link: "/pos-graduacao/educacao/curso/psicomotricidade-e-desenvolvimento-humano" },
  { title: "Psicomotricidade e Desenvolvimento Motor na Educação Infantil", link: "/pos-graduacao/educacao/curso/psicomotricidade-e-desenvolvimento-motor-na-educacao-infantil" },
  { title: "Psicomotricidade e Educação Especial", link: "/pos-graduacao/educacao/curso/psicomotricidade-e-educacao-especial" },
  { title: "Psicomotricidade na Educação Infantil", link: "/pos-graduacao/educacao/curso/psicomotricidade-na-educacao-infantil" },
  { title: "Psicopedagogia", link: "/pos-graduacao/educacao/curso/psicopedagogia" },
  { title: "Psicopedagogia Clínica", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica" },
  { title: "Psicopedagogia Clínica e Institucional", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica-e-institucional" },
  { title: "Psicopedagogia Clínica, Institucional e Hospitalar", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica-institucional-e-hospitalar" },
  { title: "Psicopedagogia Clínica, Institucional e TGD", link: "/pos-graduacao/educacao/curso/psicopedagogia-clinica-institucional-e-tgd" },
  { title: "Psicopedagogia Escolar", link: "/pos-graduacao/educacao/curso/psicopedagogia-escolar" },
  { title: "Psicopedagogia Hospitalar", link: "/pos-graduacao/educacao/curso/psicopedagogia-hospitalar" },
  { title: "Psicopedagogia II", link: "/pos-graduacao/educacao/curso/psicopedagogia-ii" },
  { title: "Psicopedagogia Institucional", link: "/pos-graduacao/educacao/curso/psicopedagogia-institucional" },
  { title: "Psicopedagogia Institucional, Clínica e Educação Especial", link: "/pos-graduacao/educacao/curso/psicopedagogia-institucional,-clinica-e-educacao-especial" },
  { title: "Psicopedagogia Institucional, Clínica e Ludopedagogia", link: "/pos-graduacao/educacao/curso/psicopedagogia-institucional-clinica-e-ludopedagogia" },
  { title: "Psicopedagogia com Ênfase em Educação Infantil e Series Iniciais", link: "/pos-graduacao/educacao/curso/psicopedagogia-com-enfase-em-educacao-infantil-e-series-iniciais" },
  { title: "Psicopedagogia e Educação Especial", link: "/pos-graduacao/educacao/curso/psicopedagogia-e-educacao-especial" },
  { title: "Psicopedagogia e Educação Infantil", link: "/pos-graduacao/educacao/curso/psicopedagogia-e-educacao-infantil" },
  { title: "Psicopedagogia e Supervisão Escolar", link: "/pos-graduacao/educacao/curso/psicopedagogia-e-supervisao-escolar" },
  { title: "Química na Educação Básica", link: "/pos-graduacao/educacao/curso/quimica-na-educacao-basica" },
  { title: "Redação e Revisão Textual", link: "/pos-graduacao/educacao/curso/redacao-e-revisao-textual" },
  { title: "Religião e Sociedade", link: "/pos-graduacao/educacao/curso/religiao-e-sociedade" },
  { title: "Revisão de Textos", link: "/pos-graduacao/educacao/curso/revisao-de-textos" },
  { title: "Robótica Educacional", link: "/pos-graduacao/educacao/curso/robotica-educacional" },
  { title: "Secretariado Escolar", link: "/pos-graduacao/educacao/curso/secretariado-escolar" },
  { title: "Secretariado e Administração Escolar", link: "/pos-graduacao/educacao/curso/secretariado-e-administracao-escolar" },
  { title: "Sociolinguística Aplicada à Língua Portuguesa", link: "/pos-graduacao/educacao/curso/sociolinguistica-aplicada-a-lingua-portuguesa" },
  { title: "Sociologia da Educação", link: "/pos-graduacao/educacao/curso/sociologia-da-educacao" },
  { title: "Sociologia na Educação Básica", link: "/pos-graduacao/educacao/curso/sociologia-na-educacao-basica" },
  { title: "Supervisão Escolar", link: "/pos-graduacao/educacao/curso/supervisao-escolar" },
  { title: "Supervisão Escolar e Orientação Educacional", link: "/pos-graduacao/educacao/curso/supervisao-escolar-e-orientacao-educacional" },
  { title: "Supervisão Pedagógica", link: "/pos-graduacao/educacao/curso/supervisao-pedagogica" },
  { title: "Supervisão, Inspeção e Gestão Escolar", link: "/pos-graduacao/educacao/curso/supervisao,-inspecao-e-gestao-escolar" },
  { title: "TEA - Transtorno do Espectro Autista", link: "/pos-graduacao/educacao/curso/tea---transtorno-do-espectro-autista" },
  { title: "Tecnologias Digitais e Inovação na Educação", link: "/pos-graduacao/educacao/curso/tecnologias-digitais-e-inovacao-na-educacao" },
  { title: "Tecnologias Educacionais", link: "/pos-graduacao/educacao/curso/tecnologias-educacionais" },
  { title: "Teologia", link: "/pos-graduacao/educacao/curso/teologia" },
  { title: "Teoria Literária", link: "/pos-graduacao/educacao/curso/teoria-literaria" },
  { title: "Teoria Literária e Literatura Comparada", link: "/pos-graduacao/educacao/curso/teoria-literaria-e-literatura-comparada" },
  { title: "Tradução de Espanhol", link: "/pos-graduacao/educacao/curso/traducao-de-espanhol" },
  { title: "Tradução de Inglês", link: "/pos-graduacao/educacao/curso/traducao-de-ingles" },
  { title: "Tradução, Interpretação de Libras e Língua Portuguesa", link: "/pos-graduacao/educacao/curso/traducao-interpretacao-de-libras-e-lingua-portuguesa" },
  { title: "Transtornos de Aprendizagem", link: "/pos-graduacao/educacao/curso/transtornos-de-aprendizagem" },
  { title: "Transtornos e Problemas na Aprendizagem", link: "/pos-graduacao/educacao/curso/transtornos-e-problemas-na-aprendizagem" },
  { title: "Tutoria Em Educação à Distância e Docência do Ensino Superior", link: "/pos-graduacao/educacao/curso/tutoria-em-educacao-a-distancia-e-docencia-do-ensino-superior" },
  { title: "Tutoria em EAD", link: "/pos-graduacao/educacao/curso/tutoria-em-ead" },
  { title: "Tópicos Especiais em Matemática", link: "/pos-graduacao/educacao/curso/topicos-especiais-em-matematica" },
];

export default function EducacaoList ({ category, onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NA {category}
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
        MAIS {regularCourses.length} CURSOS DA {category}
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
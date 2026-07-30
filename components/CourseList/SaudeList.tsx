"use client";

import Link from "next/link";

interface CourseListProps {
  onBack: () => void;
}

const highlightedCourses = [
  { title: "Psicanálise", link: "/pos-graduacao/saude/curso/psicanalise" },
  { title: "Saúde Pública", link: "/pos-graduacao/saude/curso/saude-publica" },
  { title: "Enfermagem de Urgência e Emergência", link: "/pos-graduacao/saude/curso/urgencia-e-emergencia-em-enfermagem" },
  { title: "Farmácia Clínica e Prescrição Farmacêutica", link: "/pos-graduacao/saude/curso/farmacia-clinica-e-prescricao-farmaceutica" },
];

const regularCourses = [
  { title: "Abordagem Multidisciplinar Em Oncologia", link: "/pos-graduacao/saude/curso/abordagem-multidisciplinar-em-oncologia" },
  { title: "Acreditação Hospitalar", link: "/pos-graduacao/saude/curso/acreditacao-hospitalar" },
  { title: "Anatomia Aplicada a Fisioterapia", link: "/pos-graduacao/saude/curso/anatomia-aplicada-a-fisioterapia" },
  { title: "Anatomia e Fisiologia Humana", link: "/pos-graduacao/saude/curso/anatomia-e-fisiologia-humana" },
  { title: "Análises Clínicas e Biotecnologia", link: "/pos-graduacao/saude/curso/analises-clinicas-e-biotecnologia" },
  { title: "Análises Clínicas e Microbiologia", link: "/pos-graduacao/saude/curso/analises-clinicas-e-microbiologia" },
  { title: "Análises Clínicas e Toxicológicas", link: "/pos-graduacao/saude/curso/analises-clinicas-e-toxicologicas" },
  { title: "Aromaterapia e Fitoterapia", link: "/pos-graduacao/saude/curso/aromaterapia-e-fitoterapia" },
  { title: "Assistência Farmacêutica", link: "/pos-graduacao/saude/curso/assistencia-farmaceutica" },
  { title: "Assistência Social e Saúde Pública", link: "/pos-graduacao/saude/curso/assistencia-social-e-saude-publica" },
  { title: "Assistência de Enfermagem em Oncologia Clínica", link: "/pos-graduacao/saude/curso/assistencia-de-enfermagem-em-oncologia-clinica" },
  { title: "Atendimento na Unidade Básica de Saúde", link: "/pos-graduacao/saude/curso/atendimento-na-unidade-basica-de-saude" },
  { title: "Atendimento na Unidade Básica de Saúde - Enfermagem", link: "/pos-graduacao/saude/curso/atendimento-na-unidade-basica-de-saude---enfermagem" },
  { title: "Atendimento na Unidade Básica de Saúde - Farmácia", link: "/pos-graduacao/saude/curso/atendimento-na-unidade-basica-de-saude---farmacia" },
  { title: "Atendimento na Unidade Básica de Saúde - Nutrição", link: "/pos-graduacao/saude/curso/atendimento-na-unidade-basica-de-saude---nutricao" },
  { title: "Atenção Primária à Saúde com Ênfase em Saúde da Família", link: "/pos-graduacao/saude/curso/atencao-primaria-a-saude-com-enfase-em-saude-da-familia" },
  { title: "Atenção ao Paciente Crítico: Urgência, Emergência e UTI", link: "/pos-graduacao/saude/curso/atencao-ao-paciente-critico-urgencia-emergencia-e-uti" },
  { title: "Atenção e Cuidados Com Idosos", link: "/pos-graduacao/saude/curso/atencao-e-cuidados-com-idosos" },
  { title: "Atividade Física e Fisiologia do Exercício", link: "/pos-graduacao/saude/curso/atividade-fisica-e-fisiologia-do-exercicio" },
  { title: "Atividade Física e Saúde", link: "/pos-graduacao/saude/curso/atividade-fisica-e-saude" },
  { title: "Auditoria Em Saúde", link: "/pos-graduacao/saude/curso/auditoria-em-saude" },
  { title: "Auditoria Em Serviços da Saúde", link: "/pos-graduacao/saude/curso/auditoria-em-servicos-da-saude" },
  { title: "Auditoria Hospitalar", link: "/pos-graduacao/saude/curso/auditoria-hospitalar" },
  { title: "Auditoria e Compliance Em Saúde", link: "/pos-graduacao/saude/curso/auditoria-e-compliance-em-saude" },
  { title: "Auditoria em Enfermagem", link: "/pos-graduacao/saude/curso/auditoria-em-enfermagem" },
  { title: "Avaliação Física e Diagnóstica", link: "/pos-graduacao/saude/curso/avaliacao-fisica-e-diagnostica" },
  { title: "Avaliação, Diagnóstico e Reabilitação de Pacientes Com Covid-19", link: "/pos-graduacao/saude/curso/avaliacao-diagnostico-e-reabilitacao-de-pacientes-com-covid-19" },
  { title: "Biologia Celular e Molecular", link: "/pos-graduacao/saude/curso/biologia-celular-e-molecular" },
  { title: "Biologia Molecular e Citogenética", link: "/pos-graduacao/saude/curso/biologia-molecular-e-citogenetica" },
  { title: "Biomecânica e Fisiologia do Esporte", link: "/pos-graduacao/saude/curso/biomecanica-e-fisiologia-do-esporte" },
  { title: "Biomedicina Estética", link: "/pos-graduacao/saude/curso/biomedicina-estetica" },
  { title: "Bioquímica Aplicada à Nutrição", link: "/pos-graduacao/saude/curso/bioquimica-aplicada-a-nutricao" },
  { title: "Bioquímica e Fisiologia Humana", link: "/pos-graduacao/saude/curso/bioquimica-e-fisiologia-humana" },
  { title: "Biossegurança e Saúde Pública", link: "/pos-graduacao/saude/curso/biosseguranca-e-saude-publica" },
  { title: "Bromatologia dos Alimentos", link: "/pos-graduacao/saude/curso/bromatologia-dos-alimentos" },
  { title: "Citologia, Histologia e Embriologia", link: "/pos-graduacao/saude/curso/citologia-histologia-e-embriologia" },
  { title: "Ciência e Tecnologia dos Alimentos", link: "/pos-graduacao/saude/curso/ciencia-e-tecnologia-dos-alimentos" },
  { title: "Ciência, Tecnologia e Segurança dos Alimentos", link: "/pos-graduacao/saude/curso/ciencia-tecnologia-e-seguranca-dos-alimentos" },
  { title: "Controle de Infecção Hospitalar", link: "/pos-graduacao/saude/curso/controle-de-infeccao-hospitalar" },
  { title: "Cosmetologia", link: "/pos-graduacao/saude/curso/cosmetologia" },
  { title: "Cosmetologia Aplicada à Maquiagem", link: "/pos-graduacao/saude/curso/cosmetologia-aplicada-a-maquiagem" },
  { title: "Cosmetologia Estética Avançada", link: "/pos-graduacao/saude/curso/cosmetologia-estetica-avancada" },
  { title: "Cuidados Básicos Em Hospitais", link: "/pos-graduacao/saude/curso/cuidados-basicos-em-hospitais" },
  { title: "Cuidados Intensivos em Enfermagem", link: "/pos-graduacao/saude/curso/cuidados-intensivos-em-enfermagem" },
  { title: "Cuidados Paliativos", link: "/pos-graduacao/saude/curso/cuidados-paliativos" },
  { title: "Dependência Química", link: "/pos-graduacao/saude/curso/dependencia-quimica" },
  { title: "Dietoterapia e Nutrição Clínica", link: "/pos-graduacao/saude/curso/dietoterapia-e-nutricao-clinica" },
  { title: "ESF - Estratégia Saúde da Família", link: "/pos-graduacao/saude/curso/esf---estrategia-saude-da-familia" },
  { title: "Enfermagem Em Cuidados Paliativos", link: "/pos-graduacao/saude/curso/enfermagem-em-cuidados-paliativos" },
  { title: "Enfermagem Em Saúde da Família", link: "/pos-graduacao/saude/curso/enfermagem-em-saude-da-familia" },
  { title: "Enfermagem Em Saúde da Mulher", link: "/pos-graduacao/saude/curso/enfermagem-em-saude-da-mulher" },
  { title: "Enfermagem Estética", link: "/pos-graduacao/saude/curso/enfermagem-estetica" },
  { title: "Enfermagem Geriátrica-Gerontológica", link: "/pos-graduacao/saude/curso/enfermagem-geriatrica-gerontologica" },
  { title: "Enfermagem Neonatal e Pediátrica", link: "/pos-graduacao/saude/curso/enfermagem-neonatal-e-pediatrica" },
  { title: "Enfermagem Oncológica", link: "/pos-graduacao/saude/curso/enfermagem-oncologica" },
  { title: "Enfermagem de Urgência e Emergência", link: "/pos-graduacao/saude/curso/urgencia-e-emergencia-em-enfermagem" },
  { title: "Enfermagem do Trabalho", link: "/pos-graduacao/saude/curso/enfermagem-do-trabalho" },
  { title: "Enfermagem do Trabalho e Gestão Em Segurança do Trabalho", link: "/pos-graduacao/saude/curso/enfermagem-do-trabalho-e-gestao-em-seguranca-do-trabalho" },
  { title: "Enfermagem do Trabalho e Saúde Ocupacional", link: "/pos-graduacao/saude/curso/enfermagem-do-trabalho-e-saude-ocupacional" },
  { title: "Enfermagem e Saúde Mental", link: "/pos-graduacao/saude/curso/enfermagem-e-saude-mental" },
  { title: "Enfermagem em Dermatologia", link: "/pos-graduacao/saude/curso/enfermagem-em-dermatologia" },
  { title: "Enfermagem em Estomaterapia", link: "/pos-graduacao/saude/curso/enfermagem-em-estomaterapia" },
  { title: "Enfermagem em Geriatria e Gerontologia", link: "/pos-graduacao/saude/curso/enfermagem-em-geriatria-e-gerontologia" },
  { title: "Enfermagem em Hematologia Clínica", link: "/pos-graduacao/saude/curso/enfermagem-em-hematologia-clinica" },
  { title: "Enfermagem em Nefrologia", link: "/pos-graduacao/saude/curso/enfermagem-em-nefrologia" },
  { title: "Enfermagem em Pediatria e UTI Pediátrica e Neonatal", link: "/pos-graduacao/saude/curso/enfermagem-em-pediatria-e-uti-pediatrica-e-neonatal" },
  { title: "Enfermagem em Saúde Mental e Psiquiátrica", link: "/pos-graduacao/saude/curso/enfermagem-em-saude-mental-e-psiquiatrica" },
  { title: "Enfermagem em UTI", link: "/pos-graduacao/saude/curso/enfermagem-em-uti" },
  { title: "Enfermagem em Urgência e Emergências em Pediatria e Neonatologia", link: "/pos-graduacao/saude/curso/enfermagem-em-urgencia-e-emergencias-em-pediatria-e-neonatologia" },
  { title: "Enfermagem em Urgência, Emergência e UTI", link: "/pos-graduacao/saude/curso/enfermagem-em-urgencia-emergencia-e-uti" },
  { title: "Enfermagem na Saúde da Criança", link: "/pos-graduacao/saude/curso/enfermagem-na-saude-da-crianca" },
  { title: "Enfermagem na Saúde do Adulto", link: "/pos-graduacao/saude/curso/enfermagem-na-saude-do-adulto" },
  { title: "Ergonomia", link: "/pos-graduacao/saude/curso/ergonomia" },
  { title: "Ergonomia e Saúde Ocupacional", link: "/pos-graduacao/saude/curso/ergonomia-e-saude-ocupacional" },
  { title: "Estudos em Acupuntura", link: "/pos-graduacao/saude/curso/estudos-em-acupuntura" },
  { title: "Estudos em Anatomia", link: "/pos-graduacao/saude/curso/estudos-em-anatomia" },
  { title: "Estudos em Doenças Cardiorrespiratórias e Cardiovasculares", link: "/pos-graduacao/saude/curso/estudos-em-doencas-cardiorespiratorias-e-cardiovasculares" },
  { title: "Estudos em Fisiologia e Fisiopatologia", link: "/pos-graduacao/saude/curso/estudos-em-fisiologia-e-fisiopatologia" },
  { title: "Estudos em Geriatria e Gerontologia", link: "/pos-graduacao/saude/curso/estudos-em-geriatria-e-gerontologia" },
  { title: "Estudos em Radioterapia", link: "/pos-graduacao/saude/curso/estudos-em-radioterapia" },
  { title: "Estudos em Segurança e Medicina do Trabalho", link: "/pos-graduacao/saude/curso/estudos-em-seguranca-e-medicina-do-trabalho" },
  { title: "Estudos em Transtornos Psiquiátricos na Infância e Adolescência", link: "/pos-graduacao/saude/curso/estudos-em-transtornos-psiquiatricos-na-infancia-e-adolescencia" },
  { title: "Estética Facial e Corporal", link: "/pos-graduacao/saude/curso/estetica-facial-e-corporal" },
  { title: "Estética e Cosmetologia", link: "/pos-graduacao/saude/curso/estetica-e-cosmetologia" },
  { title: "Farmacologia Clínica", link: "/pos-graduacao/saude/curso/farmacologia-clinica" },
  { title: "Farmácia Clínica Em Antibioticoterapia", link: "/pos-graduacao/saude/curso/farmacia-clinica-em-antibioticoterapia" },
  { title: "Farmácia Clínica e Atenção Farmacêutica", link: "/pos-graduacao/saude/curso/farmacia-clinica-e-atencao-farmaceutica" },
  { title: "Farmácia Clínica e Hospitalar", link: "/pos-graduacao/saude/curso/farmacia-clinica-e-hospitalar" },
  { title: "Farmácia Clínica e Prescrição Farmacêutica", link: "/pos-graduacao/saude/curso/farmacia-clinica-e-prescricao-farmaceutica" },
  { title: "Farmácia Em Oncologia", link: "/pos-graduacao/saude/curso/farmacia-em-oncologia" },
  { title: "Farmácia Estética", link: "/pos-graduacao/saude/curso/farmacia-estetica" },
  { title: "Farmácia Hospitalar", link: "/pos-graduacao/saude/curso/farmacia-hospitalar" },
  { title: "Fisiologia do Esporte e da Prática do Exercício Físico", link: "/pos-graduacao/saude/curso/fisiologia-do-esporte-e-da-pratica-do-exercicio-fisico" },
  { title: "Fisiologia do Exercício e Treinamento Desportivo", link: "/pos-graduacao/saude/curso/fisiologia-do-exercicio-e-treinamento-desportivo" },
  { title: "Fisioterapia Aplicada Às Atividades Físicas", link: "/pos-graduacao/saude/curso/fisioterapia-aplicada-as-atividades-fisicas" },
  { title: "Fisioterapia Esportiva", link: "/pos-graduacao/saude/curso/fisioterapia-esportiva" },
  { title: "Fisioterapia Gerontológica e Geriátrica", link: "/pos-graduacao/saude/curso/fisioterapia-gerontologica-e-geriatrica" },
  { title: "Fisioterapia Intensiva", link: "/pos-graduacao/saude/curso/fisioterapia-intensiva" },
  { title: "Fisioterapia Musculoesquelética", link: "/pos-graduacao/saude/curso/fisioterapia-musculoesqueletica" },
  { title: "Fisioterapia Nas Doenças Cardiorrespiratórias", link: "/pos-graduacao/saude/curso/fisioterapia-nas-doencas-cardiorespiratorias" },
  { title: "Fisioterapia Neurofuncional", link: "/pos-graduacao/saude/curso/fisioterapia-neurofuncional" },
  { title: "Fisioterapia Traumato-ortopédica", link: "/pos-graduacao/saude/curso/fisioterapia-traumato-ortopedica" },
  { title: "Fisioterapia do Trabalho", link: "/pos-graduacao/saude/curso/fisioterapia-do-trabalho" },
  { title: "Fisioterapia do Trabalho e Ergonomia", link: "/pos-graduacao/saude/curso/fisioterapia-do-trabalho-e-ergonomia" },
  { title: "Fisioterapia na Saúde da Mulher", link: "/pos-graduacao/saude/curso/fisioterapia-na-saude-da-mulher" },
  { title: "Fisioterapia nas Doenças Osteoarticulares", link: "/pos-graduacao/saude/curso/fisioterapia-nas-doencas-osteoarticulares" },
  { title: "Fitoterapia Aplicada", link: "/pos-graduacao/saude/curso/fitoterapia-aplicada" },
  { title: "Fitoterapia Aplicada à Nutrição", link: "/pos-graduacao/saude/curso/fitoterapia-aplicada-a-nutricao" },
  { title: "Gerontologia e Qualidade de Vida", link: "/pos-graduacao/saude/curso/gerontologia-e-qualidade-de-vida" },
  { title: "Gerontologia e Saúde Mental", link: "/pos-graduacao/saude/curso/gerontologia-e-saude-mental" },
  { title: "Gestão Da Saúde Com Ênfase Em Administração Hospitalar", link: "/pos-graduacao/saude/curso/gestao-da-saude-com-enfase-em-administracao-hospitalar" },
  { title: "Gestão Em Enfermagem de Urgência e Emergência", link: "/pos-graduacao/saude/curso/gestao-em-enfermagem-de-urgencia-e-emergencia" },
  { title: "Gestão Em Saúde", link: "/pos-graduacao/saude/curso/gestao-em-saude" },
  { title: "Gestão Em Saúde Mental", link: "/pos-graduacao/saude/curso/gestao-em-saude-mental" },
  { title: "Gestão Farmacêutica", link: "/pos-graduacao/saude/curso/gestao-farmaceutica" },
  { title: "Gestão Hospitalar e Auditoria", link: "/pos-graduacao/saude/curso/gestao-hospitalar-e-auditoria" },
  { title: "Gestão Hospitalar e Gestão Ambiental", link: "/pos-graduacao/saude/curso/gestao-hospitalar-e-gestao-ambiental" },
  { title: "Gestão da Qualidade Em Saúde", link: "/pos-graduacao/saude/curso/gestao-da-qualidade-em-saude" },
  { title: "Gestão da Saúde Municipal", link: "/pos-graduacao/saude/curso/gestao-da-saude-municipal" },
  { title: "Gestão de Farmácia Hospitalar", link: "/pos-graduacao/saude/curso/gestao-de-farmacia-hospitalar" },
  { title: "Gestão de Farmácias", link: "/pos-graduacao/saude/curso/gestao-de-farmacias" },
  { title: "Gestão de Hospitais", link: "/pos-graduacao/saude/curso/gestao-de-hospitais" },
  { title: "Gestão de Planos de Saúde", link: "/pos-graduacao/saude/curso/gestao-de-planos-de-saude" },
  { title: "Gestão de Programas de Saúde da Família", link: "/pos-graduacao/saude/curso/gestao-de-programas-de-saude-da-familia" },
  { title: "Gestão de Serviços Laboratoriais", link: "/pos-graduacao/saude/curso/gestao-de-servicos-laboratoriais" },
  { title: "Gestão de Serviços de Nutrição e Dietética", link: "/pos-graduacao/saude/curso/gestao-de-servicos-de-nutricao-e-dietetica" },
  { title: "Gestão de Serviços de Tecnologia Hospitalar", link: "/pos-graduacao/saude/curso/gestao-de-servicos-de-tecnologia-hospitalar" },
  { title: "Gestão de Unidades Oncológicas", link: "/pos-graduacao/saude/curso/gestao-de-unidades-oncologicas" },
  { title: "Gestão de Unidades de Alimentação e Nutrição", link: "/pos-graduacao/saude/curso/gestao-de-unidades-de-alimentacao-e-nutricao" },
  { title: "Gestão e Logística Hospitalar", link: "/pos-graduacao/saude/curso/gestao-e-logistica-hospitalar" },
  { title: "Gestão e Políticas Públicas em Saúde", link: "/pos-graduacao/saude/curso/gestao-e-politicas-publicas-em-saude" },
  { title: "Gestão em Qualidade em Serviços de Saúde e Hospitalar", link: "/pos-graduacao/saude/curso/gestao-em-qualidade-em-servicos-de-saude-e-hospitalar" },
  { title: "Gestão em Saúde com Ênfase em Auditoria", link: "/pos-graduacao/saude/curso/gestao-em-saude-com-enfase-em-auditoria" },
  { title: "Hematologia", link: "/pos-graduacao/saude/curso/hematologia" },
  { title: "Hemoterapia", link: "/pos-graduacao/saude/curso/hemoterapia" },
  { title: "Higiene Ocupacional", link: "/pos-graduacao/saude/curso/higiene-ocupacional" },
  { title: "Homeopatia Farmacêutica", link: "/pos-graduacao/saude/curso/homeopatia-farmaceutica" },
  { title: "Imunologia e Microbiologia", link: "/pos-graduacao/saude/curso/imunologia-e-microbiologia" },
  { title: "Inteligência Emocional e Saúde Ocupacional", link: "/pos-graduacao/saude/curso/inteligencia-emocional-e-saude-ocupacional" },
  { title: "Microbiótica e Sistema Imunológico Humano", link: "/pos-graduacao/saude/curso/microbiotica-e-sistema-imunologico-humano" },
  { title: "Musculação: Fisiologia e Treinamento", link: "/pos-graduacao/saude/curso/musculacao-fisiologia-e-treinamento" },
  { title: "Neurociência", link: "/pos-graduacao/saude/curso/neurociencia" },
  { title: "Neurociência e Desenvolvimento Humano", link: "/pos-graduacao/saude/curso/neurociencia-e-desenvolvimento-humano" },
  { title: "Nutrição Aplicada à Estética", link: "/pos-graduacao/saude/curso/nutricao-aplicada-a-estetica" },
  { title: "Nutrição Aplicada à Terceira Idade", link: "/pos-graduacao/saude/curso/nutricao-aplicada-a-terceira-idade" },
  { title: "Nutrição Bariátrica", link: "/pos-graduacao/saude/curso/nutricao-bariatrica" },
  { title: "Nutrição Clínica", link: "/pos-graduacao/saude/curso/nutricao-clinica" },
  { title: "Nutrição Clínica e Esportiva", link: "/pos-graduacao/saude/curso/nutricao-clinica-e-esportiva" },
  { title: "Nutrição Clínica e Funcional", link: "/pos-graduacao/saude/curso/nutricao-clinica-e-funcional" },
  { title: "Nutrição Clínica e Hospitalar", link: "/pos-graduacao/saude/curso/nutricao-clinica-e-hospitalar" },
  { title: "Nutrição Com Ênfase Em Obesidade e Emagrecimento", link: "/pos-graduacao/saude/curso/nutricao-com-enfase-em-obesidade-e-emagrecimento" },
  { title: "Nutrição Escolar e Educação Alimentar", link: "/pos-graduacao/saude/curso/nutricao-escolar-e-educacao-alimentar" },
  { title: "Nutrição Esportiva", link: "/pos-graduacao/saude/curso/nutricao-esportiva" },
  { title: "Nutrição Esportiva e Estética", link: "/pos-graduacao/saude/curso/nutricao-esportiva-e-estetica" },
  { title: "Nutrição Hospitalar", link: "/pos-graduacao/saude/curso/nutricao-hospitalar" },
  { title: "Nutrição Materno-infantil", link: "/pos-graduacao/saude/curso/nutricao-materno-infantil" },
  { title: "Nutrição e Dietética", link: "/pos-graduacao/saude/curso/nutricao-e-dietetica" },
  { title: "Nutrição no Transtorno do Espectro Autista (TEA)", link: "/pos-graduacao/saude/curso/nutricao-no-transtorno-do-espectro-autismo-(tea)" },
  { title: "Patologia E Parasitologia Veterinária", link: "/pos-graduacao/saude/curso/patologia-e-parasitologia-veterinaria-" },
  { title: "Personal Training: Metodologia Da Preparação Física Personalizada", link: "/pos-graduacao/saude/curso/personal-training-metodologia-da-preparacao-fisica-personalizada" },
  { title: "Prescrição de Fitoterápicos e Suplementação Nutricional na Nutrição Clínica e Esportiva", link: "/pos-graduacao/saude/curso/prescricao-de-fitoterapicos-e-suplementacao-nutricional-na-nutricao-clinica-e-esportiva" },
  { title: "Procedimentos Depilatórios e Drenagem Linfática", link: "/pos-graduacao/saude/curso/procedimentos-depilatorios-e-drenagem-linfatica" },
  { title: "Programa de Saúde da Família", link: "/pos-graduacao/saude/curso/programa-de-saude-da-familia" },
  { title: "Psicanálise", link: "/pos-graduacao/saude/curso/psicanalise" },
  { title: "Psicofarmacologia", link: "/pos-graduacao/saude/curso/psicofarmacologia" },
  { title: "Saúde Coletiva", link: "/pos-graduacao/saude/curso/saude-coletiva" },
  { title: "Saúde Estética", link: "/pos-graduacao/saude/curso/saude-estetica" },
  { title: "Saúde Mental", link: "/pos-graduacao/saude/curso/saude-mental" },
  { title: "Saúde Mental e Atenção Psicossocial", link: "/pos-graduacao/saude/curso/saude-mental-e-atencao-psicossocial" },
  { title: "Saúde Mental e Psiquiatria", link: "/pos-graduacao/saude/curso/saude-mental-e-psiquiatria" },
  { title: "Saúde Ocupacional", link: "/pos-graduacao/saude/curso/saude-ocupacional" },
  { title: "Saúde Pública", link: "/pos-graduacao/saude/curso/saude-publica" },
  { title: "Saúde Pública Com Ênfase Em Saúde da Família", link: "/pos-graduacao/saude/curso/saude-publica-com-enfase-em-saude-da-familia" },
  { title: "Saúde Pública e Vigilância Sanitária", link: "/pos-graduacao/saude/curso/saude-publica-e-vigilancia-sanitaria" },
  { title: "Saúde da Família", link: "/pos-graduacao/saude/curso/saude-da-familia" },
  { title: "Saúde da Mulher", link: "/pos-graduacao/saude/curso/saude-da-mulher" },
  { title: "Saúde do Idoso e Gerontologia", link: "/pos-graduacao/saude/curso/saude-do-idoso-e-gerontologia" },
  { title: "Saúde do Trabalhador", link: "/pos-graduacao/saude/curso/saude-do-trabalhador" },
  { title: "Saúde e Gestão Hospitalar", link: "/pos-graduacao/saude/curso/saude-e-gestao-hospitalar" },
  { title: "Saúde e Segurança no Trabalho", link: "/pos-graduacao/saude/curso/saude-e-seguranca-no-trabalho" },
  { title: "Segurança do Paciente e Gestão dos Riscos Assistenciais", link: "/pos-graduacao/saude/curso/seguranca-do-paciente-e-gestao-dos-riscos-assistenciais" },
  { title: "Segurança do Trabalho Aplicada à Radioatividade", link: "/pos-graduacao/saude/curso/seguranca-do-trabalho-aplicada-a-radioatividade" },
  { title: "Segurança do Trabalho e Saúde Ocupacional", link: "/pos-graduacao/saude/curso/seguranca-do-trabalho-e-saude-ocupacional" },
  { title: "Sistemas de Informação Para a Saúde", link: "/pos-graduacao/saude/curso/sistemas-de-informacao-para-a-saude" },
  { title: "Suplementação Nutricional e Fitoterapia", link: "/pos-graduacao/saude/curso/suplementacao-nutricional-e-fitoterapia" },
  { title: "Terapia Capilar", link: "/pos-graduacao/saude/curso/terapia-capilar" },
  { title: "Terapia Ocupacional em Acupuntura", link: "/pos-graduacao/saude/curso/terapia-ocupacional-em-acupuntura" },
  { title: "Terapia Ocupacional em Contextos Hospitalares", link: "/pos-graduacao/saude/curso/terapia-ocupacional-em-contextos-hospitalares" },
  { title: "Terapia Ocupacional em Contextos Sociais", link: "/pos-graduacao/saude/curso/terapia-ocupacional-em-contextos-sociais" },
  { title: "Terapia Ocupacional em Saúde Mental", link: "/pos-graduacao/saude/curso/terapia-ocupacional-em-saude-mental" },
  { title: "Terapia Ocupacional em Saúde da Família", link: "/pos-graduacao/saude/curso/terapia-ocupacional-em-saude-da-familia" },
  { title: "Terapias Integrativas", link: "/pos-graduacao/saude/curso/terapias-integrativas" },
  { title: "Trabalho e Ergonomia", link: "/pos-graduacao/saude/curso/trabalho-e-ergonomia" },
  { title: "Urgência, Emergência e Atendimento Pré-hospitalar", link: "/pos-graduacao/saude/curso/urgencia-emergencia-e-atendimento-pre-hospitalar" },
  { title: "Urinálise e Parasitologia Clínica", link: "/pos-graduacao/saude/curso/urinalise-e-parasitologia-clinica" },
  { title: "Vigilância Epidemiológica e Gestão de Serviços de Saúde", link: "/pos-graduacao/saude/curso/vigilancia-epidemiologica-e-gestao-de-servicos-de-saude" },
  { title: "Vigilância Sanitária", link: "/pos-graduacao/saude/curso/vigilancia-sanitaria" },
  { title: "Vigilância Sanitária de Alimentos", link: "/pos-graduacao/saude/curso/vigilancia-sanitaria-de-alimentos" },
  { title: "Vigilância Sanitária e Qualidade de Alimentos", link: "/pos-graduacao/saude/curso/vigilancia-sanitaria-e-qualidade-de-alimentos" },
  { title: "Vigilância em Saúde Ambiental e Sanitária", link: "/pos-graduacao/saude/curso/vigilancia-em-saude-ambiental-e-sanitaria" },
  { title: "Vigilância em Saúde Epidemiológica", link: "/pos-graduacao/saude/curso/vigilancia-em-saude-epidemiologica" },
];

export default function SaudeList({ onBack }: CourseListProps) {
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
        PESQUISAS EM ALTA NA SAÚDE
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
        MAIS {regularCourses.length} CURSOS DA SAÚDE
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
import { CommissionMember, OfficialDocument, Meeting, NewsArticle } from '../types';

export const CIBE_INFO = {
  acronym: "CIBE/PA",
  fullName: "Comissão Interinstitucional de Implementação do Sistema Internacional de Educação no Estado do Pará",
  governingBody: "Governo do Estado do Pará · Secretaria de Estado de Educação (SEDUC/PA)",
  legalBase: "Decreto Estadual nº 3.892/2024 e Portaria Conjunta SEDUC/CEE nº 042/2024",
  headquarters: "Sede Central da SEDUC/PA — Rodovia Augusto Montenegro, Km 10, S/N — Icoaraci, Belém - PA",
  email: "cibe.pa@seduc.pa.gov.br",
  phone: "(91) 3201-5000 / Ramal 5120",
  workingHours: "Segunda a Sexta-feira, das 08h00 às 17h00",
  overview: "A Comissão CIBE/PA é a instância deliberativa, consultiva e articuladora permanente, instituída pelo Governo do Pará através da SEDUC/PA, encarregada de estruturar, normatizar, acompanhar e avaliar a implantação do Sistema Internacional de Educação em toda a rede pública estadual de ensino.",
  mission: "Garantir aos estudantes da rede pública paraense o acesso a currículos de excelência global, plurilíngues e com certificação internacional, conectando a sabedoria socioambiental da Amazônia aos mais elevados padrões acadêmicos mundiais.",
  vision: "Consolidar o Pará como a principal referência nacional e pan-amazônica na democratização do ensino médio internacional em escolas públicas, capacitando jovens líderes com pensamento crítico, rigor científico e consciência planetária.",
  principles: [
    {
      title: "Democratização e Equidade Pública",
      description: "Acesso universal ao padrão de currículo internacional para jovens de todas as origens sociais das regiões de integração paraenses, sem custos para os estudantes."
    },
    {
      title: "Identidade Amazônica e Saberes Locais",
      description: "Integração viva da biodiversidade, culturas tradicionais e desafios climáticos globais aos eixos de pesquisa científica internacional."
    },
    {
      title: "Plurilinguismo e Certificação Global",
      description: "Desenvolvimento pleno de competências comunicativas em língua portuguesa, inglesa e espanhola com validação internacional oficial."
    },
    {
      title: "Formação Continuada de Excelência",
      description: "Valorização e capacitação intensiva dos professores e coordenadores da rede estadual por meio de mentorias e bolsas internacionais."
    }
  ],
  pillars: [
    {
      id: "pilar-1",
      number: "01",
      title: "Adesão ao Bacharelado Internacional (IB)",
      description: "Acreditação de escolas polo da rede estadual como IB World Schools nos programas Diploma Programme (DP) e Middle Years Programme (MYP)."
    },
    {
      id: "pilar-2",
      number: "02",
      title: "Adequação Curricular e Normatização CEE/PA",
      description: "Harmonização entre a Base Nacional Comum Curricular (BNCC), o Documento Curricular do Estado do Pará (DCE-PA) e matrizes internacionais."
    },
    {
      id: "pilar-3",
      number: "03",
      title: "Capacitação Imersiva do Corpo Docente",
      description: "Cursos de especialização, nivelamento linguístico internacional e intercâmbios pedagógicos com instituições conveniadas."
    },
    {
      id: "pilar-4",
      number: "04",
      title: "Infraestrutura Tecnológica e Laboratórios",
      description: "Modernização das bibliotecas, laboratórios de ciências experimentais e conectividade nas escolas estaduais selecionadas."
    }
  ],
  pilotSchools: [
    {
      name: "Colégio Estadual Paes de Carvalho (CEPC)",
      city: "Belém",
      region: "Região Metropolitana",
      stage: "Fase de Acreditação e Formação Docente",
      studentsCount: 240
    },
    {
      name: "Escola Estadual Tecnológica Prof. Anísio Teixeira",
      city: "Belém",
      region: "Região Metropolitana",
      stage: "Piloto em Implementação Curricular",
      studentsCount: 180
    },
    {
      name: "EEEM Professora Maria Uchôa Martins",
      city: "Santarém",
      region: "Baixo Amazonas",
      stage: "Adequação Estrutural e Matriz Bilíngue",
      studentsCount: 150
    },
    {
      name: "EEEM Dr. Gaspar Vianna",
      city: "Marabá",
      region: "Carajás",
      stage: "Planejamento Pedagógico e Capacitação",
      studentsCount: 120
    },
    {
      name: "EEEM Profª Esther Bandeira Gomes",
      city: "Castanhal",
      region: "Rio Capim",
      stage: "Fase Diagnóstica e Mobilização Comunitária",
      studentsCount: 130
    }
  ],
  timeline: [
    {
      year: "2024",
      period: "1º Semestre",
      title: "Criação Legal e Instituição da CIBE/PA",
      detail: "Publicação do Decreto nº 3.892 e formalização da comissão colegiada com representantes da SEDUC, universidades e conselhos."
    },
    {
      year: "2024",
      period: "2º Semestre",
      title: "Diagnóstico e Seleção das Primeiras Escolas Piloto",
      detail: "Mapeamento das unidades estaduais, assinatura de cooperação técnica internacional e estruturação dos núcleos pedagógicos."
    },
    {
      year: "2025",
      period: "1º Semestre",
      title: "Capacitação da Primeira Turma de 120 Professores",
      detail: "Ciclo intensivo de metodologia de pesquisa científica, teorias do conhecimento e fluência em língua inglesa para educadores."
    },
    {
      year: "2025",
      period: "2º Semestre",
      title: "Início das Turmas Piloto de Ensino Médio Internacional",
      detail: "Abertura das turmas inaugurais em Belém e Santarém com material didático internacional adaptado à realidade paraense."
    },
    {
      year: "2026",
      period: "Em Andamento",
      title: "Consolidação e Expansão para mais 8 Polos Regionais",
      detail: "Submissão para certificação oficial de escolas parceiras internacionais e realização do 1º Fórum Pan-Amazônico de Educação Global."
    }
  ]
};

export const MEMBERS_DATA: CommissionMember[] = [
  {
    id: "mem-1",
    name: "Prof. Rossieli Soares da Silva",
    role: "Presidente de Honra da Comissão",
    category: "coordenacao",
    categoryLabel: "Coordenação Geral",
    institution: "SEDUC/PA — Secretário de Estado de Educação",
    bio: "Ex-Ministro da Educação e atual Secretário de Estado de Educação do Pará. Lidera as políticas de modernização curricular, internacionalização e ampliação do ensino em tempo integral na rede estadual paraense.",
    email: "gabinete@seduc.pa.gov.br",
    phone: "(91) 3201-5001",
    location: "Belém - PA",
    responsibilities: [
      "Diretrizes políticas e estratégicas da comissão",
      "Articulação federativa e internacional junto a governos e órgãos multilaterais",
      "Homologação final dos relatórios e resoluções da CIBE/PA"
    ]
  },
  {
    id: "mem-2",
    name: "Dra. Maria Alice da Silva Ferreira",
    role: "Coordenadora-Geral Executiva",
    category: "coordenacao",
    categoryLabel: "Coordenação Geral",
    institution: "SEDUC/PA — Secretaria Adjunta de Ensino",
    bio: "Doutora em Educação e Políticas Públicas com especialização em currículos internacionais e comparados. Responsável pelo plano operacional de implantação da CIBE/PA.",
    email: "m.ferreira@seduc.pa.gov.br",
    phone: "(91) 3201-5088",
    location: "Belém - PA",
    responsibilities: [
      "Gestão do cronograma executivo de implantação",
      "Supervisão das câmaras técnicas pedagógica, de infraestrutura e avaliação",
      "Convocação e condução das reuniões ordinárias do colegiado"
    ]
  },
  {
    id: "mem-3",
    name: "Prof. Dr. Cláudio Roberto Alencar",
    role: "Representante do Conselho Estadual de Educação (CEE/PA)",
    category: "cee",
    categoryLabel: "Conselho Estadual de Educação",
    institution: "CEE/PA — Câmara de Educação Básica",
    bio: "Conselheiro estadual de educação, pedagogo e jurista educacional. Especialista em regulação dos sistemas de ensino e equivalência de diplomas e créditos internacionais.",
    email: "claudio.alencar@cee.pa.gov.br",
    phone: "(91) 3216-2200",
    location: "Belém - PA",
    responsibilities: [
      "Adequação normativa junto à legislação educacional brasileira e estadual",
      "Elaboração de pareceres técnicos e resoluções de credenciamento",
      "Validação de equivalência curricular entre Brasil e comunidade internacional"
    ]
  },
  {
    id: "mem-4",
    name: "Profª Drª Luciana Prado de Mendonça",
    role: "Consultora Chefe em Metodologia de Bacharelado Internacional",
    category: "seduc",
    categoryLabel: "Assessoria Técnica",
    institution: "SEDUC/PA — Núcleo de Cooperação Internacional",
    bio: "Especialista em currículo IB (International Baccalaureate) com atuação prévia em redes bilíngues e programas de internacionalização escolar na América Latina e Europa.",
    email: "luciana.mendonca@seduc.pa.gov.br",
    phone: "(91) 3201-5120",
    location: "Belém - PA",
    responsibilities: [
      "Adequação das disciplinas ao programa IB Diploma e MYP",
      "Mentoria no componente de Teoria do Conhecimento (TOK) e CAS",
      "Acompanhamento dos relatórios de autoavaliação institucional"
    ]
  },
  {
    id: "mem-5",
    name: "Prof. Dr. Raimundo Nonato de Souza",
    role: "Representante da Universidade do Estado do Pará (UEPA)",
    category: "universidades",
    categoryLabel: "Universidades Públicas",
    institution: "UEPA — Centro de Ciências Sociais e Educação",
    bio: "Docente titular da UEPA, pesquisador em linguística aplicada, letramento plurilíngue e formação de professores para a Amazônia.",
    email: "rnsouza@uepa.br",
    phone: "(91) 3299-2230",
    location: "Belém - PA",
    responsibilities: [
      "Desenho dos programas de extensão universitária e pós-graduação para docentes",
      "Acompanhamento das pesquisas empíricas sobre a aprendizagem dos alunos",
      "Articulação de estágios supervisionados nas escolas polo"
    ]
  },
  {
    id: "mem-6",
    name: "Profª Me. Teresa Cristina Guimarães",
    role: "Representante dos Professores da Rede Estadual",
    category: "docentes",
    categoryLabel: "Corpo Docente da Rede",
    institution: "Colégio Estadual Paes de Carvalho (CEPC) / SEDUC",
    bio: "Professora de Língua Inglesa e Literatura da rede estadual há 16 anos. Certificada em Cambridge CELTA e líder do comitê docente de transição curricular.",
    email: "teresa.guimaraes@escola.seduc.pa.gov.br",
    phone: "(91) 3222-1089",
    location: "Belém - PA",
    responsibilities: [
      "Canal direto de escuta com os professores em sala de aula",
      "Proposição de estratégias de suporte pedagógico e redução de sobrecarga",
      "Organização dos grupos de trabalho de planejamento colaborativo"
    ]
  },
  {
    id: "mem-7",
    name: "Prof. Paulo Henrique Barbosa",
    role: "Representante dos Gestores Escolares",
    category: "gestores",
    categoryLabel: "Gestores Escolares",
    institution: "EEEM Profª Maria Uchôa Martins (Santarém)",
    bio: "Diretor escolar com 20 anos de experiência em gestão pública no Baixo Amazonas. Especialista em clima escolar, gestão participativa e retenção de alunos.",
    email: "paulo.barbosa@escola.seduc.pa.gov.br",
    phone: "(93) 3523-4112",
    location: "Santarém - PA",
    responsibilities: [
      "Representação das especificidades das escolas do interior paraense",
      "Logística de infraestrutura escolar e alimentação em tempo integral",
      "Mobilização da comunidade escolar e associações de pais e mestres"
    ]
  },
  {
    id: "mem-8",
    name: "Dr. Caio Vinícius Moraes",
    role: "Secretário-Executivo da CIBE/PA",
    category: "coordenacao",
    categoryLabel: "Coordenação Geral",
    institution: "SEDUC/PA — Coordenação de Modernização Institucional",
    bio: "Gestor público especialista em governança educacional, sistemas de monitoramento e tecnologia da informação na educação pública paraense.",
    email: "caio.moraes@seduc.pa.gov.br",
    phone: "(91) 3201-5122",
    location: "Belém - PA",
    responsibilities: [
      "Gestão de atas, deliberações e comunicações oficiais da comissão",
      "Administração do portal de transparência da CIBE/PA",
      "Supervisão da interlocução com as Diretorias Regionais de Ensino (DREs)"
    ]
  }
];

export const DOCUMENTS_DATA: OfficialDocument[] = [
  {
    id: "doc-1",
    title: "Portaria Conjunta SEDUC/CEE nº 042/2024",
    code: "PORT-SEDUC-042-2024",
    date: "14 de Março de 2024",
    category: "portaria",
    categoryLabel: "Portaria",
    signatory: "Gabinete do Secretário de Estado de Educação e Presidência do CEE/PA",
    pages: 12,
    status: "Vigente",
    fileSize: "1.4 MB",
    summary: "Institui formalmente a Comissão Interinstitucional de Implementação do Sistema Internacional de Educação no Estado do Pará (CIBE/PA), define sua composição, regimento interno e cronograma inicial.",
    fullContent: `GOVERNO DO ESTADO DO PARÁ
SECRETARIA DE ESTADO DE EDUCAÇÃO - SEDUC
CONSELHO ESTADUAL DE EDUCAÇÃO - CEE/PA

PORTARIA CONJUNTA Nº 042, DE 14 DE MARÇO DE 2024

O SECRETÁRIO DE ESTADO DE EDUCAÇÃO DO PARÁ e o PRESIDENTE DO CONSELHO ESTADUAL DE EDUCAÇÃO DO PARÁ, no uso de suas atribuições legais e constitucionais,

CONSIDERANDO o compromisso do Estado do Pará com a modernização curricular e com a equidade no acesso ao conhecimento de alto nível;
CONSIDERANDO a imperiosa necessidade de conectar a juventude amazônica às melhores práticas pedagógicas globais;
CONSIDERANDO a publicação do Decreto Governamental nº 3.892, de 02 de fevereiro de 2024;

RESOLVEM:

Art. 1º Fica instituída a Comissão Interinstitucional de Implementação do Sistema Internacional de Educação no Estado do Pará (CIBE/PA), instância de caráter normativo, propositivo, articulador e avaliativo.

Art. 2º Compete à CIBE/PA:
I - Coordenar a transição pedagógica para matrizes curriculares internacionais na rede pública;
II - Definir os critérios técnicos para seleção e credenciamento das escolas polo estaduais;
III - Articular programas de capacitação continuada e proficiência linguística do corpo docente;
IV - Assegurar a equivalência de certificações com o Conselho Estadual de Educação;
V - Emitir relatórios semestrais de transparência pública sobre a evolução do programa.

Art. 3º A Comissão será composta por representantes da SEDUC, do CEE/PA, de Universidades Públicas, de Gestores e de Professores da Rede Estadual.

Art. 4º Esta Portaria entra em vigor na data de sua publicação no Diário Oficial do Estado do Pará.

Belém - PA, 14 de março de 2024.
Rossieli Soares da Silva — Secretário de Estado de Educação
Cons. Alberto de Souza — Presidente do CEE/PA`
  },
  {
    id: "doc-2",
    title: "Decreto Estadual nº 3.892/2024",
    code: "DEC-EST-3892-2024",
    date: "02 de Fevereiro de 2024",
    category: "decreto",
    categoryLabel: "Decreto",
    signatory: "Governador do Estado do Pará",
    pages: 8,
    status: "Vigente",
    fileSize: "980 KB",
    summary: "Cria a Política Estadual de Fomento ao Ensino Médio Internacional Plurilíngue na Rede Pública do Pará e autoriza o Poder Executivo a firmar convênios com organismos educacionais internacionais.",
    fullContent: `DECRETO Nº 3.892, DE 02 DE FEVEREIRO DE 2024

CRIA A POLÍTICA ESTADUAL DE FOMENTO AO ENSINO MÉDIO INTERNACIONAL PLURILÍNGUE NA REDE PÚBLICA DO ESTADO DO PARÁ E DÁ OUTRAS PROVIDÊNCIAS.

O GOVERNADOR DO ESTADO DO PARÁ, no uso das atribuições que lhe confere o art. 135, inciso III, da Constituição Estadual,

DECRETA:

Art. 1º Fica criada a Política Estadual de Fomento ao Ensino Médio Internacional Plurilíngue da Rede Pública Estadual de Ensino, com o objetivo de propiciar aos estudantes paraenses oportunidades de qualificação internacional de excelência.

Art. 2º São diretrizes da Política Estadual:
a) Democratização irrestrita da formação global na escola pública;
b) Fortalecimento da matriz de sustentabilidade e bioeconomia amazônica na pesquisa científica discente;
c) Incentivo ao bilinguismo e multilinguismo funcional;
d) Fomento a intercâmbios culturais, científicos e esportivos internacionais.

Art. 3º Fica a SEDUC/PA autorizada a celebrar acordos de cooperação técnica, convênios e memorandos de entendimento com entidades acreditadoras internacionais, notadamente a Organização do Bacharelado Internacional (IBO) e embaixadas parceiras.

Palácio do Governo, em Belém, 02 de fevereiro de 2024.`
  },
  {
    id: "doc-3",
    title: "Resolução CEE/PA nº 115/2024",
    code: "RES-CEE-115-2024",
    date: "28 de Maio de 2024",
    category: "resolucao",
    categoryLabel: "Resolução",
    signatory: "Pleno do Conselho Estadual de Educação do Pará",
    pages: 16,
    status: "Homologado",
    fileSize: "2.1 MB",
    summary: "Aprova as Diretrizes Curriculares Complementares para oferta do itinerário formativo internacional e bilinguismo nas unidades escolares de ensino médio do Pará.",
    fullContent: `CONSELHO ESTADUAL DE EDUCAÇÃO DO PARÁ
RESOLUÇÃO Nº 115, DE 28 DE MAIO DE 2024

Fixa normas complementares para a organização curricular das unidades escolares da rede pública estadual que adotarem currículo internacional concomitante ao currículo nacional.

O CONSELHO ESTADUAL DE EDUCAÇÃO DO PARÁ, no uso de suas prerrogativas legais:

Art. 1º Fica reconhecida a equivalência dos estudos realizados sob a matriz curricular internacional regulamentada pela CIBE/PA, garantindo-se ao estudante a dupla diplomação (Ensino Médio Regular Brasileiro e Certificação Internacional de Ensino Médio).

Art. 2º A carga horária mínima anual do programa será de 1.400 horas, integrando a Formação Geral Básica (FGB) e os Itinerários Formativos Internacionais em Língua Inglesa, Ciências da Natureza e Teoria do Conhecimento.

Art. 3º Os critérios de avaliação assegurarão escalas numéricas compatíveis com a legislação nacional e os sistemas avaliativos externos internacionais.`
  },
  {
    id: "doc-4",
    title: "Edital SEDUC/PA nº 08/2025 — Formação Docente Internacional",
    code: "EDT-SEDUC-08-2025",
    date: "15 de Janeiro de 2025",
    category: "edital",
    categoryLabel: "Edital",
    signatory: "Secretaria de Estado de Educação do Pará",
    pages: 22,
    status: "Vigente",
    fileSize: "3.2 MB",
    summary: "Processo de seleção de professores efetivos da rede pública estadual para o Programa de Capacitação e Certificação Internacional em Metodologias Globais de Ensino.",
    fullContent: `SECRETARIA DE ESTADO DE EDUCAÇÃO DO PARÁ
EDITAL DE CHAMAMENTO PÚBLICO Nº 08/2025

SELEÇÃO INTERNA DE PROFESSORES EFETIVOS PARA O PROGRAMA DE FORMAÇÃO E CERTIFICAÇÃO EM ENSINO MÉDIO INTERNACIONAL

A SECRETARIA DE ESTADO DE EDUCAÇÃO DO PARÁ torna público o processo seletivo simplificado para concessão de 150 bolsas de capacitação imersiva e certificação internacional a docentes da rede pública estadual.

1. DO PÚBLICO-ALVO:
Professores com vínculo efetivo na rede estadual de ensino, com lotação nas áreas de Linguagens, Matemática, Ciências da Natureza e Ciências Humanas.

2. DOS BENEFÍCIOS:
- Curso completo de certificação em metodologia curricular internacional (360 horas);
- Módulo presencial intensivo em Belém com formadores internacionais;
- Bolsa-auxílio mensal de aperfeiçoamento pedagógico;
- Custos integrais dos exames de certificação linguística internacional (IELTS/TOEFL).

3. DAS INSCRIÇÕES:
As inscrições serão gratuitas e realizadas exclusivamente pelo portal da CIBE/PA.`
  },
  {
    id: "doc-5",
    title: "Ata da 1ª Reunião Ordinária da CIBE/PA",
    code: "ATA-CIBE-01-2024",
    date: "10 de Abril de 2024",
    category: "ata",
    categoryLabel: "Ata Oficial",
    signatory: "Secretaria-Executiva da CIBE/PA",
    pages: 6,
    status: "Homologado",
    fileSize: "820 KB",
    summary: "Registro dos trabalhos de instalação da comissão, aprovação do calendário de atividades 2024-2026 e criação dos grupos temáticos de currículo e infraestrutura.",
    fullContent: `ATA DA PRIMEIRA REUNIÃO ORDINÁRIA DA COMISSÃO INTERINSTITUCIONAL DE IMPLEMENTAÇÃO DO SISTEMA INTERNACIONAL DE EDUCAÇÃO NO ESTADO DO PARÁ (CIBE/PA)

Às dez horas do dia dez de abril de dois mil e vinte e quatro, na Sala de Atos da Secretaria de Estado de Educação (SEDUC/PA), reuniu-se a Comissão CIBE/PA sob a presidência do Secretário de Estado de Educação e com a presença de todos os membros designados.

ORDEM DO DIA:
1. Posse solene dos membros titulares e suplentes;
2. Apresentação do diagnóstico técnico das escolas estaduais aptas ao piloto;
3. Criação de três Grupos de Trabalho (GT Currículo, GT Infraestrutura e GT Formação Docente);
4. Definição do cronograma de reuniões ordinárias mensais.

DELIBERAÇÕES:
Aprovada por unanimidade a inclusão do Colégio Estadual Paes de Carvalho e da EEEM Profª Maria Uchôa Martins no primeiro ciclo de diagnóstico arquitetônico e laboratorial. Nada mais havendo a tratar, lavrou-se a presente ata assinada por todos os presentes.`
  },
  {
    id: "doc-6",
    title: "Termo de Cooperação Técnica SEDUC & Organismos Globais",
    code: "TCT-SEDUC-03-2024",
    date: "18 de Agosto de 2024",
    category: "termo",
    categoryLabel: "Termo de Cooperação",
    signatory: "SEDUC/PA e Representação Regional da América Latina",
    pages: 14,
    status: "Vigente",
    fileSize: "1.9 MB",
    summary: "Estabelece os compromissos para fornecimento de matrizes de ensino, assessoria técnica continuada e acompanhamento de conformidade acadêmica internacional para as escolas do Pará.",
    fullContent: `TERMO DE COOPERAÇÃO TÉCNICA E INSTITUCIONAL Nº 03/2024

PARTES:
ESTADO DO PARÁ, por meio da SECRETARIA DE ESTADO DE EDUCAÇÃO (SEDUC/PA), e a ENTIDADE DE CERTIFICAÇÃO INTERNACIONAL EM EDUCAÇÃO BÁSICA.

CLÁUSULA PRIMEIRA - DO OBJETO:
O presente instrumento tem por objeto a cooperação técnica mútua para viabilizar a implementação assistida do currículo internacional nas escolas estaduais polos no Estado do Pará.

CLÁUSULA SEGUNDA - DAS OBRIGAÇÕES DO ESTADO:
- Garantir docentes capacitados em tempo integral;
- Assegurar a gratuidade total do ensino aos estudantes atendidos;
- Fornecer infraestrutura de laboratórios de física, química, biologia e tecnologia da informação;
- Manter acervo bibliográfico bilíngue atualizado.

CLÁUSULA TERCEIRA - DA VIGÊNCIA:
O presente Termo vigorará pelo prazo de 48 (quarenta e oito) meses, prorrogável nos termos da legislação aplicável.`
  }
];

export const MEETINGS_DATA: Meeting[] = [
  {
    id: "meet-1",
    title: "1ª Reunião Ordinária 2026 — Planejamento Operacional do Ano Letivo",
    edition: "Ordinária nº 01/2026",
    type: "Ordinária",
    date: "28 de Fevereiro de 2026",
    time: "09h00 às 12h30",
    location: "Auditório Central SEDUC/PA — Belém",
    modality: "Presencial",
    status: "Realizada",
    participantsCount: 22,
    agenda: [
      "Apresentação do balanço das 5 escolas polos do programa piloto",
      "Distribuição dos novos kits laboratoriais e acervos bibliográficos internacionais",
      "Cronograma de formação presencial dos 150 professores bolsistas selecionados no Edital 08/2025",
      "Definição da agenda de vistorias técnicas no interior (Santarém e Marabá)"
    ],
    minutesSummary: "Aprovado o cronograma do primeiro semestre de 2026 com foco na consolidação do Colégio Estadual Paes de Carvalho e início das obras do laboratório de ciências em Santarém."
  },
  {
    id: "meet-2",
    title: "Câmara Técnica Pedagógica — Alinhamento Curricular BNCC e Matriz Global",
    edition: "Câmara Técnica nº 03/2026",
    type: "Câmara Técnica",
    date: "26 de Março de 2026",
    time: "14h00 às 17h00",
    location: "Sala de Reuniões da Coordenação CIBE/PA (Transmissão via Teams)",
    modality: "Híbrida",
    status: "Realizada",
    participantsCount: 16,
    agenda: [
      "Validação das matrizes de Teoria do Conhecimento aplicadas aos saberes amazônicos",
      "Metodologia de avaliação diagnóstica contínua de proficiência em língua inglesa",
      "Parecer sobre equivalência curricular dos créditos de pesquisa experimental"
    ],
    minutesSummary: "Homologada a matriz preliminar com ênfase no componente de pesquisa de campo na Amazônia integrada aos padrões internacionais de redação acadêmica."
  },
  {
    id: "meet-3",
    title: "2ª Reunião Ordinária 2026 — Avaliação do 1º Bimestre e Expansão Regional",
    edition: "Ordinária nº 02/2026",
    type: "Ordinária",
    date: "14 de Maio de 2026",
    time: "09h30 às 13h00",
    location: "Sede da Diretoria Regional de Ensino — Santarém / Transmissão Integrada",
    modality: "Híbrida",
    status: "Agendada",
    participantsCount: 28,
    agenda: [
      "Apresentação dos resultados de aprendizagem do 1º bimestre das turmas pioneiras",
      "Relatório da comissão de avaliação externa independente",
      "Proposta de inclusão de mais 3 municípios polos: Altamira, Paragominas e Breves",
      "Preparativos para a delegação de intercâmbio discente no segundo semestre"
    ]
  },
  {
    id: "meet-4",
    title: "Audiência Pública Estadual — A Escola Pública Paraense e o Mundo",
    edition: "Audiência Pública nº 01/2026",
    type: "Audiência Pública",
    date: "18 de Junho de 2026",
    time: "10h00 às 16h00",
    location: "Hangar Centro de Convenções da Amazônia — Belém",
    modality: "Presencial",
    status: "Agendada",
    participantsCount: 350,
    agenda: [
      "Diálogo aberto com a comunidade escolar, estudantes, pais e representações sindicais",
      "Apresentação de projetos científicos desenvolvidos por estudantes da rede estadual",
      "Conferência magna com educadores internacionais convidados",
      "Lançamento do portal de recursos didáticos abertos da CIBE/PA"
    ]
  }
];

export const NEWS_DATA: NewsArticle[] = [
  {
    id: "news-1",
    title: "Pará inicia formação intensiva de 150 professores da rede pública em currículo internacional",
    subtitle: "Programa pioneiro une metodologia de rigor global à valorização da pesquisa socioambiental na Amazônia.",
    date: "18 de Outubro de 2026",
    readTime: "4 min de leitura",
    author: "Assessoria de Comunicação SEDUC/PA",
    authorRole: "Comunicação Institucional",
    category: "Formação Docente",
    imageUrl: "/src/assets/images/cibe_teacher_training_1792670757769.jpg",
    caption: "Educadores paraenses debatem planos curriculares globais e módulos de investigação científica.",
    summary: "A Secretaria de Estado de Educação do Pará (SEDUC) e a Comissão CIBE/PA deram início, nesta semana, à capacitação presencial e imersiva de educadores selecionados em todo o território estadual para atuar nas turmas do Sistema Internacional de Educação.",
    paragraphs: [
      "A iniciativa integra as metas estratégicas traçadas no Decreto Estadual nº 3.892, que prevê a formação contínua e a certificação de alta performance para os docentes que conduzirão as turmas das escolas polo da rede estadual paraense.",
      "O programa de capacitação é ministrado em parceria com especialistas renomados em matrizes curriculares internacionais, abrangendo o desenvolvimento de habilidades de pensamento crítico, redação acadêmica bilíngue, metodologia de investigação científica experimental e Teoria do Conhecimento.",
      "\"Nosso objetivo é garantir que o professor da escola pública paraense disponha do mesmo repertório técnico e das melhores ferramentas didáticas utilizadas pelas escolas mais conceituadas do mundo. E mais que isso: que ele traga a riqueza da nossa sociobiodiversidade para o centro dessa conversa internacional\", destacou a coordenação da CIBE/PA.",
      "Além dos encontros presenciais em Belém, os participantes recebem acompanhamento tutorial online semanal, acesso a plataformas bibliográficas digitais internacionais e vouchers gratuitos para certificações de proficiência reconhecidas internacionalmente."
    ]
  },
  {
    id: "news-2",
    title: "Colégio Estadual Paes de Carvalho avança na adequação para se tornar referência internacional na Amazônia",
    subtitle: "Tradicional educandário paraense recebe modernização de laboratórios e acervo de pesquisa para o programa.",
    date: "05 de Outubro de 2026",
    readTime: "5 min de leitura",
    author: "Redação CIBE/PA",
    authorRole: "Núcleo de Jornalismo Educacional",
    category: "Infraestrutura Escolar",
    imageUrl: "/src/assets/images/cibe_campus_school_1792670756859.jpg",
    caption: "Fachada histórica do Colégio Estadual Paes de Carvalho, em Belém, fundado no século XIX e agora polo pioneiro do programa.",
    summary: "Com mais de um século e meio de história educacional, o emblemático Colégio Estadual Paes de Carvalho (CEPC), no centro histórico de Belém, está na vanguarda da implantação do Sistema Internacional de Ensino Médio.",
    paragraphs: [
      "A comissão técnica da CIBE/PA realizou uma vistoria detalhada nas dependências do colégio para acompanhar as obras de modernização dos laboratórios de ciências da natureza, a instalação de salas interativas de idiomas e a renovação de sua histórica biblioteca, que passa a contar com um setor exclusivo de periódicos e livros em línguas estrangeiras.",
      "O CEPC foi selecionado como uma das primeiras escolas piloto por sua tradição, abrangência de estudantes de diferentes bairros da capital e pela alta qualificação do seu quadro efetivo de professores.",
      "Para os estudantes matriculados no contraturno do programa internacional, a rotina envolve aulas aprofundadas de matemática avançada, redação acadêmica, ecologia aplicada aos biomas amazônicos e debates em língua inglesa no modelo de assembleias da ONU.",
      "A previsão da SEDUC é que a escola receba, até o final deste ano, a visita técnica de verificação de conformidade dos organismos acreditadores internacionais."
    ]
  },
  {
    id: "news-3",
    title: "Comissão CIBE/PA reúne gestores e especialistas para aprovar calendário de expansão 2026-2027",
    subtitle: "Encontro colegiado deliberou sobre a interiorização do programa e novas parcerias com universidades públicas.",
    date: "22 de Setembro de 2026",
    readTime: "3 min de leitura",
    author: "Secretaria-Executiva CIBE/PA",
    authorRole: "Gabinete de Governança",
    category: "Institucional",
    imageUrl: "/src/assets/images/cibe_meeting_commission_1792670757105.jpg",
    caption: "Membros da CIBE/PA reunidos na Sala de Atos da SEDUC durante a deliberação dos relatórios quadrimestrais.",
    summary: "Em reunião plenária realizada na sede da SEDUC, a Comissão Interinstitucional CIBE/PA avaliou os relatórios de desempenho do primeiro semestre e aprovou por unanimidade a expansão do programa para polos em Santarém e Marabá.",
    paragraphs: [
      "O colegiado discutiu os relatórios parciais de desempenho dos alunos pioneiros, que demonstraram evolução expressiva em competências analíticas e na segurança comunicativa em outros idiomas.",
      "Foi aprovada também a minuta de termo aditivo com as universidades públicas do Pará (UEPA e UFPA), permitindo que estudantes universitários de licenciaturas realizem residência pedagógica direta nas turmas internacionais sob tutoria dos professores da comissão.",
      "\"A educação internacional no Pará não é um privilégio isolado, mas uma política pública de Estado desenhada para o filho do trabalhador paraense. O que estamos construindo aqui é um modelo próprio, rigoroso e genuinamente amazônico\", afirmou o presidente de honra da comissão.",
      "As atas completas e as resoluções decorrentes desta sessão plenária já se encontram publicadas na íntegra na aba de Documentos Oficiais deste portal."
    ]
  },
  {
    id: "news-4",
    title: "Estudantes paraenses participam de conferência global online sobre clima e desenvolvimento sustentável",
    subtitle: "Jovens da rede pública estadual debateram soluções para a conservação florestal com estudantes de 14 países.",
    date: "12 de Setembro de 2026",
    readTime: "4 min de leitura",
    author: "Núcleo de Comunicação SEDUC",
    authorRole: "Imprensa",
    category: "Projetos Discentes",
    imageUrl: "/src/assets/images/cibe_hero_education_1792670756047.jpg",
    caption: "Alunos paraenses em atividade colaborativa remota com escolas parceiras internacionais sobre bioeconomia.",
    summary: "Estudantes do primeiro ano do Ensino Médio Internacional da rede pública paraense protagonizaram um momento histórico ao conduzir uma conferência temática em inglês sobre a preservação da bacia amazônica e justiça climática.",
    paragraphs: [
      "A conferência virtual conectou jovens de Belém com estudantes de instituições de ensino médio da Alemanha, Canadá, Singapura, Japão e Colômbia. O encontro fez parte do projeto de culminância da disciplina interdisciplinar de Meio Ambiente e Sociedades Globais.",
      "Os jovens paraenses apresentaram dados empíricos coletados em pesquisas de campo orientadas por seus professores, expondo o papel vital dos povos tradicionais e da floresta em pé no equilíbrio hídrico global.",
      "Para os avaliadores internacionais, a capacidade de argumentação, a solidez dos dados científicos e a fluência comunicativa dos estudantes da escola pública foram pontos de destaque extraordinário.",
      "\"Essa experiência prova que o nosso jovem só precisa da oportunidade e do suporte pedagógico correto para falar de igual para igual em qualquer fórum do planeta\", celebrou a coordenação da comissão."
    ]
  }
];

export const CIBE_FAQS = [
  {
    question: "O que é exatamente o Sistema Internacional de Educação no Pará?",
    answer: "É um programa governamental pioneiro da SEDUC/PA que implementa matrizes de ensino com reconhecimento global (como o Bacharelado Internacional - IB) e bilinguismo de alto nível diretamente na rede pública estadual de ensino, permitindo que os estudantes paraenses concluam o Ensino Médio com certificação internacional sem pagar nada por isso."
  },
  {
    question: "Quais escolas públicas estaduais fazem parte do programa?",
    answer: "O programa iniciou em escolas polo de referência regional, como o Colégio Estadual Paes de Carvalho (CEPC) e a EETEPA Anísio Teixeira em Belém, a EEEM Maria Uchôa Martins em Santarém, e a EEEM Dr. Gaspar Vianna em Marabá. O plano de expansão da CIBE/PA prevê o alcance gradual de todas as 12 regiões de integração do Estado até 2027."
  },
  {
    question: "Quem tem direito a se matricular nessas turmas?",
    answer: "Todos os estudantes oriundos do ensino fundamental da rede pública que residam na circunscrição das escolas polo credenciadas. Os processos de ingresso são democráticos, transparentes e regulados por editais anuais públicos da SEDUC/PA."
  },
  {
    question: "Os professores recebem preparação especial?",
    answer: "Sim. A CIBE/PA desenvolve ciclos contínuos de capacitação pedagógica, bolsas de incentivo, nivelamento em línguas estrangeiras e mentorias com organismos internacionais para todos os docentes lotados nas turmas internacionais."
  },
  {
    question: "O currículo internacional substitui as matérias brasileiras?",
    answer: "Não. O currículo internacional atua de forma complementar e integrada à Base Nacional Comum Curricular (BNCC) e ao Documento Curricular do Estado do Pará (DCE-PA), garantindo dupla diplomação legal com validade no Brasil e no exterior."
  }
];

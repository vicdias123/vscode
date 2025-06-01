interface ContentSection {
  type: 'paragraph' | 'heading' | 'subheading' | 'list' | 'quote';
  content?: string;
  items?: string[];
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  imageUrl?: string;
  content: ContentSection[];
}

// Mapeamento de categorias para imagens da pasta IMG/
const categoryImageMap: Record<string, string> = {
  'Direito Constitucional': '/IMG/01_direito_constitucional.png',
  'Direito Administrativo': '/IMG/02_direito_administrativo.png',
  'Direito Penal': '/IMG/03_direito_penal.png',
  'Direito Processual Penal': '/IMG/04_direito_processual_penal.png',
  'Direito Tributário': '/IMG/05_direito_tributario.png',
  'Direito Eleitoral': '/IMG/06_direito_eleitoral.webp',
  'Direito Internacional Público': '/IMG/07_direito_internacional_publico.webp',
  'Direito Civil': '/IMG/08_direito_civil.webp',
  'Direito Comercial': '/IMG/09_direito_comercial.webp',
  'Direito do Trabalho': '/IMG/10_direito_do_trabalho.webp',
  'Direito Processual Civil': '/IMG/11_direito_processual_civil.webp',
  'Direito Ambiental': '/IMG/12_direito_ambiental.webp',
  'Direito de Família e Sucessões': '/IMG/13_direito_familia_sucessoes.webp',
  'Direito Internacional Privado': '/IMG/14_direito_internacional_privado.webp',
  'Direito Digital': '/IMG/15_direito_digital.webp',
  'Direito da Saúde': '/IMG/16_direito_da_saude.webp',
  // Fallback para categorias não mapeadas - usando imagens exclusivas
  'Direito Previdenciário': '/IMG/Direito Previdenciário.jpg',
  'Resolução de Conflitos': '/IMG/02_direito_administrativo.png'
};

export const blogPosts: BlogPost[] = [  {
    id: '1',
    slug: 'reforma-previdenciaria-2025-principais-mudancas',
    title: 'Reforma Previdenciária 2025: Principais Mudanças e Impactos',
    excerpt: 'As novas alterações na Previdência Social trazem importantes mudanças para aposentados e pensionistas. Entenda como essas modificações podem afetar seus direitos e benefícios.',
    date: 'January 15, 2025',
    author: 'Dias & Barbosa Advocacia',
    category: 'Direito Previdenciário',
    imageUrl: categoryImageMap['Direito Previdenciário'],
    content: [
      {
        type: 'paragraph',
        content: 'As mudanças na Previdência Social anunciadas para 2025 representam um marco significativo no sistema brasileiro de seguridade social. Com o objetivo de garantir sustentabilidade fiscal e melhorar o atendimento aos segurados, as novas regras trazem alterações importantes que impactam diretamente milhões de brasileiros.'
      },
      {
        type: 'paragraph',
        content: 'O escritório Dias & Barbosa possui ampla experiência em direito previdenciário e está preparado para orientar nossos clientes sobre essas mudanças, auxiliando na transição e garantindo que todos os direitos sejam preservados.'
      },
      {
        type: 'heading',
        content: 'Principais Alterações na Previdência'
      },
      {
        type: 'subheading',
        content: '1. Novos Critérios de Idade'
      },
      {
        type: 'paragraph',
        content: 'A idade mínima para aposentadoria sofreu ajustes graduais, com regras diferenciadas para homens e mulheres. A partir de 2025, a idade mínima para mulheres será de 62 anos e para homens de 65 anos, com períodos de transição respeitados.'
      },
      {
        type: 'list',
        items: [
          'Mulheres: idade mínima de 62 anos com 15 anos de contribuição',
          'Homens: idade mínima de 65 anos com 20 anos de contribuição',
          'Professores: redução de 5 anos na idade mínima',
          'Policiais: regras especiais mantidas'
        ]
      },
      {
        type: 'subheading',
        content: '2. Cálculo dos Benefícios'
      },
      {
        type: 'paragraph',
        content: 'O método de cálculo foi reformulado para considerar todo o histórico contributivo, com maior peso nas contribuições mais recentes. A nova fórmula visa equilibrar sustentabilidade e adequação dos benefícios.'
      },
      {
        type: 'quote',
        content: 'É fundamental que os segurados compreendam as novas regras para planejar adequadamente sua aposentadoria e garantir o melhor benefício possível.'
      },
      {
        type: 'heading',
        content: 'Regras de Transição'
      },
      {
        type: 'paragraph',
        content: 'Para quem já estava próximo de se aposentar, foram criadas regras de transição que protegem direitos adquiridos e oferecem caminhos alternativos para a aposentadoria.'
      },
      {
        type: 'subheading',
        content: 'Idade Progressiva'
      },
      {
        type: 'paragraph',
        content: 'A regra de idade progressiva permite aposentadoria com idades menores, mediante cumprimento de tempo de contribuição maior. É uma opção vantajosa para quem tem longo histórico contributivo.'
      },
      {
        type: 'subheading',
        content: 'Pontos'
      },
      {
        type: 'paragraph',
        content: 'O sistema de pontos (idade + tempo de contribuição) continua sendo uma alternativa, com progressão gradual até atingir 100 pontos para mulheres e 105 para homens.'
      },
      {
        type: 'heading',
        content: 'Orientação Especializada'
      },
      {
        type: 'paragraph',
        content: 'Diante da complexidade das novas regras, é essencial contar com orientação jurídica especializada. Nossa equipe pode avaliar sua situação específica e indicar a melhor estratégia para sua aposentadoria.'
      },
      {
        type: 'paragraph',
        content: 'Oferecemos análise completa do histórico contributivo, simulações de benefícios e acompanhamento integral dos processos administrativos junto ao INSS.'
      }
    ]
  },  {
    id: '2',
    slug: 'marco-civil-internet-crimes-digitais',
    title: 'Marco Civil da Internet e Crimes Digitais: Nova Era do Direito Penal',
    excerpt: 'O crescimento da criminalidade digital exige nova abordagem jurídica. Conheça os principais tipos de crimes cibernéticos e como o direito penal tem se adaptado para combater essas ameaças.',
    date: 'January 20, 2025',
    author: 'Dias & Barbosa Advocacia',
    category: 'Direito Penal',
    imageUrl: categoryImageMap['Direito Penal'],    content: [
      {
        type: 'paragraph',
        content: 'A era digital trouxe consigo uma nova categoria de crimes que desafiam o sistema jurídico tradicional. Os crimes cibernéticos crescem exponencialmente, exigindo especialização e atualização constante dos profissionais do direito penal para garantir proteção adequada às vítimas e responsabilização dos infratores.'
      },
      {
        type: 'paragraph',
        content: 'O escritório Dias & Barbosa mantém-se na vanguarda do direito penal digital, oferecendo defesa especializada em crimes cibernéticos e orientação para vítimas de delitos virtuais, sempre com base na legislação mais atualizada.'
      },
      {
        type: 'heading',
        content: 'Principais Tipos de Crimes Digitais'
      },
      {
        type: 'subheading',
        content: '1. Crimes contra a Honra Digital'
      },
      {
        type: 'paragraph',
        content: 'A difamação, calúnia e injúria ganharam nova dimensão no ambiente virtual. As redes sociais e aplicativos de mensagem tornaram-se palco para ataques à reputação, exigindo resposta jurídica rápida e eficaz.'
      },
      {
        type: 'list',
        items: [
          'Fake news e desinformação',
          'Cyberbullying e assédio virtual',
          'Revenge porn e vazamento de imagens íntimas',
          'Difamação em redes sociais'
        ]
      },
      {
        type: 'subheading',
        content: '2. Fraudes Eletrônicas'
      },
      {
        type: 'paragraph',
        content: 'Os golpes virtuais evoluíram significativamente, utilizando técnicas sofisticadas de engenharia social e tecnologia para ludibriar vítimas e causar prejuízos financeiros expressivos.'
      },
      {
        type: 'quote',
        content: 'A prevenção e o combate aos crimes digitais exigem conhecimento técnico especializado e atuação jurídica coordenada entre diferentes esferas.'
      },
      {
        type: 'heading',
        content: 'Marco Legal Brasileiro'
      },
      {
        type: 'subheading',
        content: 'Lei Carolina Dieckmann (12.737/2012)'
      },
      {
        type: 'paragraph',
        content: 'Esta lei tipificou os crimes de invasão de dispositivo informático, inserindo novos artigos no Código Penal para criminalizar condutas como invasão de computadores, smartphones e outros dispositivos conectados.'
      },
      {
        type: 'subheading',
        content: 'Marco Civil da Internet (12.965/2014)'
      },
      {
        type: 'paragraph',
        content: 'Estabeleceu princípios, garantias, direitos e deveres para o uso da internet no Brasil, criando um marco regulatório que equilibra liberdade de expressão e responsabilidade digital.'
      },
      {
        type: 'subheading',
        content: 'Lei Geral de Proteção de Dados (13.709/2018)'
      },
      {
        type: 'paragraph',
        content: 'Complementa o Marco Civil ao estabelecer regras específicas para proteção de dados pessoais, criando sanções administrativas e penais para uso indevido de informações.'
      },
      {
        type: 'heading',
        content: 'Defesa e Proteção'
      },
      {
        type: 'paragraph',
        content: 'A defesa em crimes digitais requer expertise técnica e jurídica especializada. É fundamental atuar rapidamente para preservar provas digitais e garantir que os direitos dos envolvidos sejam respeitados.'
      },
      {
        type: 'paragraph',
        content: 'Nossa equipe trabalha em conjunto com peritos em tecnologia da informação para oferecer defesa completa, desde a análise técnica das evidências até a estratégia processual mais adequada.'
      }
    ]
  },  {
    id: '3',
    slug: 'novo-codigo-civil-contratos-digitais',
    title: 'Novo Código Civil e Contratos Digitais: Modernização das Relações Jurídicas',
    excerpt: 'As atualizações no Código Civil brasileiro contemplam as novas realidades contratuais da era digital. Entenda como as assinaturas eletrônicas e contratos virtuais estão revolucionando o direito civil.',
    date: 'January 25, 2025',
    author: 'Dias & Barbosa Advocacia',
    category: 'Direito Civil',
    imageUrl: categoryImageMap['Direito Civil'],    content: [
      {
        type: 'paragraph',
        content: 'A transformação digital das relações sociais e comerciais exigiu adaptações significativas no direito civil brasileiro. As recentes alterações no Código Civil reconhecem a validade e eficácia dos contratos digitais, estabelecendo um marco legal moderno para as transações eletrônicas.'
      },
      {
        type: 'paragraph',
        content: 'O escritório Dias & Barbosa acompanha essas mudanças legislativas, oferecendo consultoria especializada em contratos digitais e orientando clientes sobre as melhores práticas para negócios eletrônicos seguros e juridicamente válidos.'
      },
      {
        type: 'heading',
        content: 'Revolução Digital nos Contratos'
      },
      {
        type: 'subheading',
        content: 'Assinatura Eletrônica'
      },
      {
        type: 'paragraph',
        content: 'A Lei 14.063/2020 regulamentou definitivamente o uso de assinaturas eletrônicas no Brasil, estabelecendo três níveis de segurança: simples, avançada e qualificada. Cada modalidade possui requisitos específicos e diferentes graus de presunção de autenticidade.'
      },
      {
        type: 'list',
        items: [
          'Assinatura eletrônica simples: identificação básica do signatário',
          'Assinatura eletrônica avançada: uso de certificados digitais',
          'Assinatura eletrônica qualificada: certificação por ICP-Brasil',
          'Validade jurídica equiparada à assinatura manuscrita'
        ]
      },
      {
        type: 'subheading',
        content: 'Contratos por Meio Eletrônico'
      },
      {
        type: 'paragraph',
        content: 'Os contratos celebrados por meio eletrônico têm plena validade jurídica, desde que respeitados os requisitos essenciais: manifestação de vontade, objeto lícito e forma prescrita em lei. A tecnologia blockchain tem ganhado destaque como meio de garantir a imutabilidade e autenticidade dos acordos.'
      },
      {
        type: 'quote',
        content: 'A era digital democratizou o acesso à contratação, mas também exige maior cuidado na elaboração de cláusulas e na proteção de dados pessoais dos contratantes.'
      },
      {
        type: 'heading',
        content: 'Proteção do Consumidor Digital'
      },
      {
        type: 'subheading',
        content: 'Direito de Arrependimento'
      },
      {
        type: 'paragraph',
        content: 'O Código de Defesa do Consumidor garante prazo de 7 dias para arrependimento em compras online, contado da entrega do produto ou assinatura do contrato de serviços. Este direito é irrenunciável e deve ser claramente informado ao consumidor.'
      },
      {
        type: 'subheading',
        content: 'Transparência e Informação'
      },
      {
        type: 'paragraph',
        content: 'Plataformas digitais devem fornecer informações claras sobre produtos, preços, prazos de entrega e políticas de devolução. A falta de transparência pode caracterizar propaganda enganosa ou prática abusiva.'
      },
      {
        type: 'heading',
        content: 'Responsabilidade Civil Digital'
      },
      {
        type: 'paragraph',
        content: 'A responsabilidade civil no ambiente digital abrange desde falhas na prestação de serviços online até vazamentos de dados pessoais. Empresas devem implementar medidas adequadas de segurança e ter políticas claras de privacidade.'
      },
      {
        type: 'subheading',
        content: 'Plataformas de E-commerce'
      },
      {
        type: 'paragraph',
        content: 'Marketplaces e plataformas digitais podem ter responsabilidade subsidiária por produtos vendidos em suas plataformas, especialmente quando não adotam medidas adequadas de verificação dos vendedores.'
      },
      {
        type: 'heading',
        content: 'Consultoria Especializada'
      },
      {
        type: 'paragraph',
        content: 'A complexidade das relações digitais exige assessoria jurídica especializada. Nossa equipe oferece consultoria completa em direito civil digital, desde a elaboração de contratos eletrônicos até a defesa em litígios envolvendo transações virtuais.'
      },
      {
        type: 'paragraph',
        content: 'Auxiliamos empresas na adequação às normas de proteção de dados, elaboração de termos de uso e políticas de privacidade, garantindo segurança jurídica nas operações digitais.'
      }
    ]
  },  {
    id: '4',
    slug: 'direitos-previdenciarios-revisao-beneficios',
    title: 'Direitos Previdenciários: Como Solicitar a Revisão de Benefícios',
    excerpt: 'Entenda seus direitos previdenciários e saiba como identificar erros em seu benefício, quando é possível solicitar revisão e quais documentos são necessários para o processo.',
    date: 'May 23, 2025',
    author: 'Dias & Barbosa Advocacia',
    category: 'Direito Previdenciário',
    imageUrl: categoryImageMap['Direito Previdenciário'],
    content: [
      {
        type: 'paragraph',
        content: 'A Previdência Social é um direito de todos os trabalhadores brasileiros, mas muitas vezes os benefícios são concedidos com valores incorretos ou negados indevidamente. É fundamental conhecer seus direitos para garantir que você receba o que realmente tem direito.'
      },
      {
        type: 'paragraph',
        content: 'O escritório Dias & Barbosa possui ampla experiência em direito previdenciário, auxiliando nossos clientes na revisão de benefícios, recursos administrativos e ações judiciais quando necessário.'
      },
      {
        type: 'heading',
        content: 'Principais Motivos para Revisão de Benefícios'
      },
      {
        type: 'subheading',
        content: 'Erros no Cálculo'
      },
      {
        type: 'paragraph',
        content: 'O INSS frequentemente comete erros no cálculo dos benefícios, deixando de considerar períodos contributivos, aplicando índices incorretos ou utilizando salários de contribuição inadequados. A revisão pode corrigir esses equívocos e aumentar significativamente o valor do benefício.'
      },
      {
        type: 'list',
        items: [
          'Tempo de contribuição não computado adequadamente',
          'Salários de contribuição calculados incorretamente',
          'Aplicação de índices de correção inadequados',
          'Desconsideração de atividades especiais'
        ]
      },
      {
        type: 'subheading',
        content: 'Tempo de Contribuição Especial'
      },
      {
        type: 'paragraph',
        content: 'Atividades exercidas em condições especiais, como exposição a agentes nocivos à saúde, podem ser convertidas em tempo comum com acréscimo de 20% (mulheres) ou 40% (homens), resultando em aposentadoria mais vantajosa.'
      },
      {
        type: 'quote',
        content: 'Muitos segurados desconhecem que têm direito à contagem especial de tempo trabalhado em condições prejudiciais à saúde, perdendo a oportunidade de uma aposentadoria mais favorável.'
      },
      {
        type: 'heading',
        content: 'Tipos de Revisão Mais Comuns'
      },
      {
        type: 'subheading',
        content: 'Revisão da Vida Toda'
      },
      {
        type: 'paragraph',
        content: 'Permite incluir no cálculo do benefício todas as contribuições anteriores a julho de 1994, não apenas as posteriores ao Plano Real. Esta revisão pode ser muito vantajosa para quem tinha salários altos antes de 1994.'
      },
      {
        type: 'subheading',
        content: 'Revisão do Buraco Negro'
      },
      {
        type: 'paragraph',
        content: 'Beneficia aposentados entre 1988 e 1991, período em que houve distorções nos índices de correção aplicados. A correção pode resultar em aumentos expressivos no valor da aposentadoria.'
      },
      {
        type: 'subheading',
        content: 'Revisão do Teto'
      },
      {
        type: 'paragraph',
        content: 'Aplica-se a benefícios limitados indevidamente ao teto previdenciário vigente na época da concessão, quando o correto seria aplicar o teto atual ou não aplicar limitação alguma.'
      },
      {
        type: 'heading',
        content: 'Como Solicitar a Revisão'
      },
      {
        type: 'subheading',
        content: 'Análise Documental'
      },
      {
        type: 'paragraph',
        content: 'O primeiro passo é reunir toda a documentação previdenciária: CNIS (Cadastro Nacional de Informações Sociais), carta de concessão do benefício, histórico de remunerações e comprovantes de atividade especial.'
      },
      {
        type: 'subheading',
        content: 'Cálculo Especializado'
      },
      {
        type: 'paragraph',
        content: 'Nossa equipe realiza cálculos especializados para verificar se há direito à revisão e qual seria o ganho financeiro. Utilizamos software específico e metodologia atualizada conforme jurisprudência do STJ e STF.'
      },
      {
        type: 'heading',
        content: 'Prazos e Procedimentos'
      },
      {
        type: 'paragraph',
        content: 'A revisão pode ser solicitada administrativamente junto ao INSS ou judicialmente. O prazo decadencial é de 10 anos para revisão administrativa, mas não há prazo para correção de erro material ou revisão judicial de questões de direito.'
      },
      {
        type: 'paragraph',
        content: 'É importante destacar que nem toda revisão é vantajosa. Por isso, realizamos sempre uma análise prévia gratuita para verificar a viabilidade e o potencial ganho antes de iniciar qualquer procedimento.'
      },
      {
        type: 'heading',
        content: 'Orientação Especializada'
      },
      {
        type: 'paragraph',
        content: 'A revisão de benefícios previdenciários exige conhecimento técnico especializado e análise criteriosa de cada caso. Nossa equipe possui ampla experiência em cálculos previdenciários e acompanha as mudanças legislativas e jurisprudenciais.'
      },
      {
        type: 'paragraph',
        content: 'Oferecemos atendimento completo, desde a análise inicial até a conclusão do processo, sempre buscando a máxima eficiência e o melhor resultado para nossos clientes.'
      }
    ]
  },
  {
    id: '5',
    slug: 'direito-constitucional-principios-fundamentais',
    title: 'Direito Constitucional: Princípios Fundamentais e Direitos Humanos',
    excerpt: 'Explore os princípios fundamentais da Constituição Federal brasileira e compreenda como os direitos humanos são protegidos pelo ordenamento jurídico nacional.',
    date: 'May 31, 2025',
    author: 'Dias & Barbosa Advocacia',
    category: 'Direito Constitucional',
    imageUrl: categoryImageMap['Direito Constitucional'],
    content: [
      {
        type: 'paragraph',
        content: 'A Constituição Federal de 1988 é o fundamento de todo o ordenamento jurídico brasileiro, estabelecendo os princípios fundamentais que regem nossa sociedade democrática. Compreender estes princípios é essencial para qualquer cidadão e profissional do direito.'
      },
      {
        type: 'paragraph',
        content: 'O escritório Dias & Barbosa possui sólida experiência em questões constitucionais, oferecendo consultoria especializada em direitos fundamentais, controle de constitucionalidade e proteção de direitos humanos.'
      },
      {
        type: 'heading',
        content: 'Os Fundamentos da República Federativa do Brasil'
      },
      {
        type: 'paragraph',
        content: 'A Constituição de 1988 estabelece em seu artigo 1º os fundamentos do Estado brasileiro: soberania, cidadania, dignidade da pessoa humana, valores sociais do trabalho e da livre iniciativa, e pluralismo político.'
      },
      {
        type: 'list',
        items: [
          'Soberania: independência nas relações internacionais',
          'Cidadania: participação política e social',
          'Dignidade da pessoa humana: valor supremo do ordenamento',
          'Valores sociais do trabalho e da livre iniciativa: equilíbrio econômico-social',
          'Pluralismo político: diversidade de ideias e partidos'
        ]
      },
      {
        type: 'heading',
        content: 'Direitos e Garantias Fundamentais'
      },
      {
        type: 'paragraph',
        content: 'O Título II da Constituição consagra os direitos e garantias fundamentais, organizados em cinco categorias: direitos individuais e coletivos, direitos sociais, nacionalidade, direitos políticos e partidos políticos.'
      },
      {
        type: 'subheading',
        content: 'Direitos Individuais e Coletivos'
      },
      {
        type: 'paragraph',
        content: 'O artigo 5º da Constituição garante direitos como vida, liberdade, igualdade, segurança e propriedade. São direitos de aplicação imediata e constituem cláusulas pétreas, não podendo ser abolidos nem mesmo por emenda constitucional.'
      },
      {
        type: 'quote',
        content: 'Todos são iguais perante a lei, sem distinção de qualquer natureza, garantindo-se aos brasileiros e aos estrangeiros residentes no País a inviolabilidade do direito à vida, à liberdade, à igualdade, à segurança e à propriedade.'
      },
      {
        type: 'subheading',
        content: 'Direitos Sociais'
      },
      {
        type: 'paragraph',
        content: 'Os direitos sociais (artigos 6º a 11) incluem educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, proteção à maternidade e à infância, e assistência aos desamparados.'
      },
      {
        type: 'heading',
        content: 'Controle de Constitucionalidade'
      },
      {
        type: 'paragraph',
        content: 'O sistema brasileiro adota o controle misto de constitucionalidade, permitindo tanto o controle concentrado (STF) quanto o difuso (qualquer juiz). Este mecanismo garante que todas as leis estejam em conformidade com a Constituição.'
      },
      {
        type: 'subheading',
        content: 'Controle Concentrado'
      },
      {
        type: 'paragraph',
        content: 'Exercido pelo STF através de ações diretas: ADI (Ação Direta de Inconstitucionalidade), ADC (Ação Declaratória de Constitucionalidade) e ADPF (Arguição de Descumprimento de Preceito Fundamental).'
      },
      {
        type: 'subheading',
        content: 'Controle Difuso'
      },
      {
        type: 'paragraph',
        content: 'Pode ser exercido por qualquer juiz ou tribunal no caso concreto, declarando a inconstitucionalidade incidentalmente para resolver o caso específico.'
      },
      {
        type: 'heading',
        content: 'Princípios Interpretativos'
      },
      {
        type: 'subheading',
        content: 'Supremacia da Constituição'
      },
      {
        type: 'paragraph',
        content: 'A Constituição ocupa o topo da hierarquia normativa, prevalecendo sobre todas as demais normas do ordenamento jurídico. Qualquer lei ou ato normativo que contrarie a Constituição é inconstitucional.'
      },
      {
        type: 'subheading',
        content: 'Força Normativa'
      },
      {
        type: 'paragraph',
        content: 'A Constituição não é apenas um documento político, mas norma jurídica de aplicação direta e imediata. Seus princípios e regras têm eficácia e devem ser observados por todos.'
      },
      {
        type: 'heading',
        content: 'Proteção Internacional dos Direitos Humanos'
      },
      {
        type: 'paragraph',
        content: 'O Brasil é signatário de diversos tratados internacionais de direitos humanos, que se integram ao ordenamento jurídico nacional e fortalecem a proteção dos direitos fundamentais.'
      },
      {
        type: 'paragraph',
        content: 'Nosso escritório atua em casos que envolvem violação de direitos humanos, utilizando tanto os mecanismos nacionais quanto os internacionais de proteção, incluindo o Sistema Interamericano de Direitos Humanos.'
      },
      {
        type: 'heading',
        content: 'Consultoria Constitucional Especializada'
      },
      {
        type: 'paragraph',
        content: 'A complexidade das questões constitucionais exige conhecimento especializado e atualização constante. Nossa equipe oferece consultoria em direito constitucional, elaboração de pareceres e atuação em ações constitucionais.'
      },
      {
        type: 'paragraph',
        content: 'Prestamos assistência em mandados de segurança, habeas corpus, habeas data, ações populares e outras garantias constitucionais, sempre zelando pela efetividade dos direitos fundamentais.'
      }
    ]
  }
];

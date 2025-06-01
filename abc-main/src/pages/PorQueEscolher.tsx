import { motion } from 'framer-motion';
import { Award, Users, Clock, Shield, CheckCircle, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const PorQueEscolher = () => {
  const diferenciais = [
    {
      icon: <Award className="h-8 w-8 text-blue-600" />,
      titulo: "Experiência Comprovada",
      descricao: "Mais de 15 anos de atuação no mercado jurídico, com centenas de casos exitosos em diversas áreas do direito.",
      detalhes: [
        "Histórico de 95% de sucesso em ações previdenciárias",
        "Reconhecimento profissional na OAB",
        "Especialização em direitos trabalhistas e criminais"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-green-600" />,
      titulo: "Atendimento Personalizado",
      descricao: "Cada cliente recebe atenção individual, com estratégias jurídicas desenvolvidas especificamente para seu caso.",
      detalhes: [
        "Consultas presenciais e online disponíveis",
        "Acompanhamento contínuo do processo",
        "Comunicação clara e transparente"
      ]
    },
    {
      icon: <Clock className="h-8 w-8 text-orange-600" />,
      titulo: "Agilidade e Eficiência",
      descricao: "Processos organizados e cronogramas otimizados para garantir resultados no menor tempo possível.",
      detalhes: [
        "Resposta rápida a demandas urgentes",
        "Protocolos digitais para maior agilidade",
        "Prazos processuais rigorosamente cumpridos"
      ]
    },
    {
      icon: <Shield className="h-8 w-8 text-purple-600" />,
      titulo: "Confidencialidade Total",
      descricao: "Sigilo profissional absoluto e proteção máxima das informações dos nossos clientes.",
      detalhes: [
        "Políticas rigorosas de proteção de dados",
        "Ambientes seguros para reuniões",
        "Conformidade com LGPD"
      ]
    }
  ];

  const resultados = [
    { numero: "500+", descricao: "Casos Exitosos" },
    { numero: "95%", descricao: "Taxa de Sucesso" },
    { numero: "15+", descricao: "Anos de Experiência" },
    { numero: "24h", descricao: "Tempo de Resposta" }
  ];

  const depoimentos = [
    {
      nome: "Maria Silva",
      cargo: "Aposentada",
      comentario: "Excelente atendimento! Conseguiram a revisão da minha aposentadoria em tempo recorde. Profissionais competentes e dedicados.",
      estrelas: 5
    },
    {
      nome: "João Santos",
      cargo: "Empresário",
      comentario: "A consultoria jurídica da Dias & Barbosa foi fundamental para a expansão da minha empresa. Recomendo sem hesitação.",
      estrelas: 5
    },
    {
      nome: "Ana Costa",
      cargo: "Trabalhadora",
      comentario: "Me ajudaram em uma questão trabalhista complexa. Resultado excelente e atendimento humanizado.",
      estrelas: 5
    }
  ];
  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Navigation */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Voltar para a Home
          </Link>

          {/* Page Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-gray-900 mb-8"
          >
            Por Que Escolher Dias & Barbosa Advocacia?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-600 mb-16 max-w-3xl"
          >
            Descubra os diferenciais que fazem do nosso escritório a escolha ideal para suas demandas jurídicas
          </motion.p>          {/* Resultados em Números */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Resultados Falam por Si
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Números que comprovam nossa excelência e dedicação
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {resultados.map((resultado, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="text-center bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {resultado.numero}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {resultado.descricao}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>          {/* Diferenciais Principais */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Diferenciais Competitivos
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Conheça os pilares que sustentam nossa excelência e fazem a diferença na sua experiência jurídica
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {diferenciais.map((diferencial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {diferencial.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">
                        {diferencial.titulo}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {diferencial.descricao}
                      </p>
                      <ul className="space-y-2">
                        {diferencial.detalhes.map((detalhe, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                            <span className="text-gray-700">{detalhe}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>          {/* Depoimentos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              O Que Nossos Clientes Dizem
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Testemunhos reais de quem confia em nosso trabalho
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {depoimentos.map((depoimento, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg shadow-md"
                >
                  <div className="flex mb-4">
                    {[...Array(depoimento.estrelas)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{depoimento.comentario}"
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-gray-800">{depoimento.nome}</p>
                    <p className="text-gray-600 text-sm">{depoimento.cargo}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Compromissos */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nossos Compromissos com Você
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl">
              Princípios que norteiam nossa atuação e garantem a qualidade dos nossos serviços
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  titulo: "Transparência Total",
                  descricao: "Mantemos você informado sobre cada etapa do processo, com relatórios detalhados e comunicação constante."
                },
                {
                  titulo: "Ética Profissional",
                  descricao: "Atuamos sempre dentro dos mais altos padrões éticos, respeitando as normas da OAB e a legislação vigente."
                },
                {
                  titulo: "Resultados Efetivos",
                  descricao: "Nosso foco é alcançar os melhores resultados possíveis para cada caso, sempre pensando no interesse do cliente."
                },
                {
                  titulo: "Atualização Constante",
                  descricao: "Mantemos nossa equipe sempre atualizada com as últimas mudanças na legislação e jurisprudência."
                },
                {
                  titulo: "Disponibilidade",
                  descricao: "Estamos disponíveis quando você precisar, com múltiplos canais de comunicação e horários flexíveis."
                },
                {
                  titulo: "Preços Justos",
                  descricao: "Oferecemos serviços de alta qualidade com valores compatíveis e formas de pagamento facilitadas."
                }
              ].map((compromisso, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 + index * 0.1 }}
                  className="bg-blue-50 p-6 rounded-lg border border-blue-100"
                >
                  <h3 className="text-xl font-bold mb-3 text-blue-900">
                    {compromisso.titulo}
                  </h3>
                  <p className="text-gray-700">
                    {compromisso.descricao}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex justify-between items-center pt-8 border-t border-gray-200"
          >
            <Link
              to="/metodologia"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Metodologia
            </Link>
            
            <Link
              to="/processo-juridico"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Processo Jurídico
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PorQueEscolher;

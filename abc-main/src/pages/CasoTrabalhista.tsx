import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Briefcase, Users, Scale, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CasoTrabalhista = () => {
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
            Caso de Sucesso: Direito do Trabalho Estratégico
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-xl text-gray-600 mb-8">
              Defesa exitosa em ação trabalhista coletiva, protegendo empresa de grande porte contra 
              passivo milionário e estabelecendo precedente favorável para casos similares.
            </p>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-100 mb-8">
              <div className="flex items-start space-x-4">
                <Briefcase className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-2">Contexto do Caso</h3>
                  <p className="text-orange-800">
                    Empresa do setor industrial enfrentava ação trabalhista coletiva movida por sindicato, 
                    questionando política de pagamento de horas extras e adicional de insalubridade, 
                    com risco de passivo superior a R$ 15 milhões.
                  </p>
                </div>
              </div>
            </div>

            {/* Desafios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="h-8 w-8 text-red-600 mr-3" />
                Complexidade do Caso
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Ação Coletiva</h3>
                  <p className="text-red-800">
                    Processo envolvendo mais de 2.500 funcionários ativos e aposentados, 
                    com múltiplas categorias profissionais e diferentes regimes de trabalho.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Alto Valor da Causa</h3>
                  <p className="text-red-800">
                    Pedido inicial superior a R$ 15 milhões, incluindo diferenças salariais 
                    retroativas de 5 anos e projeções futuras.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Precedente Jurisprudencial</h3>
                  <p className="text-red-800">
                    Tese jurídica ainda não pacificada nos tribunais superiores, 
                    criando incerteza sobre o resultado.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Pressão Midiática</h3>
                  <p className="text-red-800">
                    Caso com repercussão na mídia especializada e pressão do sindicato 
                    para acordo desfavorável à empresa.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Nossa Estratégia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Scale className="h-8 w-8 text-blue-600 mr-3" />
                Nossa Estratégia Defensiva
              </h2>
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Análise Técnica Profunda</h4>
                      <p className="text-blue-800">
                        Estudo detalhado da legislação aplicável, convenções coletivas e 
                        jurisprudência dos tribunais superiores para fundamentar a defesa.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Perícia Técnica Especializada</h4>
                      <p className="text-blue-800">
                        Contratação de perito especializado em engenharia de segurança do trabalho 
                        para demonstrar adequação das medidas de proteção.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Produção de Provas Documentais</h4>
                      <p className="text-blue-800">
                        Organização de vasto acervo documental demonstrando cumprimento 
                        integral das obrigações trabalhistas e normas de segurança.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Tese Jurídica Inovadora</h4>
                      <p className="text-blue-800">
                        Desenvolvimento de tese jurídica sólida baseada em interpretação 
                        sistemática da legislação e princípios constitucionais.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Fases do Processo */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-8 w-8 text-purple-600 mr-3" />
                Fases do Processo
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
                    <h3 className="text-xl font-semibold text-purple-900">Primeira Instância (18 meses)</h3>
                  </div>
                  <p className="text-purple-800 mb-3">
                    Contestação fundamentada com produção de provas técnicas e documentais. 
                    Sentença parcialmente procedente, reconhecendo alguns pedidos menores.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Resultado:</strong> Redução do passivo de R$ 15M para R$ 3.2M
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
                    <h3 className="text-xl font-semibold text-purple-900">Segunda Instância (14 meses)</h3>
                  </div>
                  <p className="text-purple-800 mb-3">
                    Recurso ordinário com sustentação oral, contestando interpretação 
                    da legislação e apresentando jurisprudência favorável.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Resultado:</strong> Reforma parcial da sentença, redução para R$ 800K
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
                    <h3 className="text-xl font-semibold text-purple-900">Tribunais Superiores (8 meses)</h3>
                  </div>
                  <p className="text-purple-800 mb-3">
                    Recurso de revista ao TST com tese de transcendência, 
                    visando precedente favorável para casos similares.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Resultado:</strong> Recurso provido, reversão total da condenação
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resultados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                Resultados Extraordinários
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$ 15M</div>
                  <div className="text-green-800 font-medium">Passivo Evitado</div>
                  <div className="text-sm text-green-700 mt-1">100% de economia</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">2.500+</div>
                  <div className="text-green-800 font-medium">Funcionários</div>
                  <div className="text-sm text-green-700 mt-1">Beneficiados pela decisão</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">3.5 anos</div>
                  <div className="text-green-800 font-medium">Duração Total</div>
                  <div className="text-sm text-green-700 mt-1">Com resultado definitivo</div>
                </div>
              </div>
            </motion.div>

            {/* Impacto e Benefícios */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                Impacto e Benefícios
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Precedente Favorável</h4>
                      <p className="text-gray-600">Decisão criou jurisprudência favorável para defesa de casos similares</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Proteção Patrimonial</h4>
                      <p className="text-gray-600">Preservação completa do patrimônio da empresa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Continuidade Operacional</h4>
                      <p className="text-gray-600">Manutenção das atividades sem impacto financeiro</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Fortalecimento Jurídico</h4>
                      <p className="text-gray-600">Estruturação de departamento jurídico mais robusto</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Relações Trabalhistas</h4>
                      <p className="text-gray-600">Melhoria no diálogo com sindicatos e funcionários</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Reputação Corporativa</h4>
                      <p className="text-gray-600">Demonstração de conformidade com legislação trabalhista</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Lições Aprendidas */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Lições Aprendidas</h2>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Prevenção é Fundamental</h4>
                    <p className="text-gray-700 mb-4">
                      A implementação de compliance trabalhista robusto desde o início 
                      pode evitar passivos milionários futuros.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Documentação Rigorosa</h4>
                    <p className="text-gray-700">
                      Manutenção de documentação trabalhista organizada e completa 
                      é crucial para defesa eficaz.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Estratégia de Longo Prazo</h4>
                    <p className="text-gray-700 mb-4">
                      Visão estratégica do processo até instâncias superiores 
                      pode reverter condenações iniciais.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Expertise Especializada</h4>
                    <p className="text-gray-700">
                      Conhecimento técnico profundo da área trabalhista faz 
                      diferença determinante no resultado.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-orange-600 to-red-600 rounded-lg p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Enfrentando Questões Trabalhistas Complexas?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Nossa expertise em direito do trabalho pode proteger sua empresa 
                de passivos milionários e garantir conformidade legal.
              </p>
              <Link 
                to="/#contact"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Solicitar Consultoria
              </Link>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
            >
              <Link
                to="/casos/consultoria"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Caso Consultoria Anterior
              </Link>
              <Link
                to="/casos/criminal"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Próximo Caso Criminal
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CasoTrabalhista;

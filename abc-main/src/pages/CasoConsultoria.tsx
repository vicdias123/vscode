import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Lightbulb, Target, FileText, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CasoConsultoria = () => {
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
            Caso de Sucesso: Consultoria Jurídica Empresarial
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-xl text-gray-600 mb-8">
              Consultoria jurídica preventiva para empresa do setor tecnológico, implementando compliance 
              jurídico robusto e evitando passivos trabalhistas e tributários significativos.
            </p>

            <div className="bg-green-50 rounded-lg p-6 border border-green-100 mb-8">
              <div className="flex items-start space-x-4">
                <Lightbulb className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-green-900 mb-2">Contexto do Caso</h3>
                  <p className="text-green-800">
                    Startup de tecnologia em crescimento acelerado precisava de estruturação jurídica 
                    completa para expansão nacional, incluindo compliance trabalhista, tributário e 
                    regulamentação de dados pessoais (LGPD).
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
                <Target className="h-8 w-8 text-red-600 mr-3" />
                Principais Desafios
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Compliance Complexo</h3>
                  <p className="text-red-800">
                    Necessidade de adequação simultânea a múltiplas regulamentações: trabalhista, 
                    tributária, LGPD e Marco Civil da Internet.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Crescimento Acelerado</h3>
                  <p className="text-red-800">
                    Empresa contratando rapidamente sem estrutura jurídica adequada, 
                    gerando riscos trabalhistas e operacionais.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Proteção de Dados</h3>
                  <p className="text-red-800">
                    Necessidade urgente de adequação à LGPD para produto que processa 
                    grandes volumes de dados pessoais.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Contratos Internacionais</h3>
                  <p className="text-red-800">
                    Estruturação de contratos com fornecedores internacionais e 
                    adequação a diferentes jurisdições.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Nossa Solução */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                Nossa Solução Estratégica
              </h2>
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Auditoria Jurídica Completa</h4>
                      <p className="text-blue-800">
                        Realizamos diagnóstico completo da situação jurídica da empresa, 
                        identificando gaps de compliance e riscos potenciais.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Implementação de Compliance</h4>
                      <p className="text-blue-800">
                        Desenvolvemos e implementamos programa de compliance integrado, 
                        com políticas internas e treinamentos para equipe.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Adequação LGPD</h4>
                      <p className="text-blue-800">
                        Estruturamos programa completo de proteção de dados, incluindo 
                        políticas de privacidade, contratos DPA e governança de dados.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Contratos Estratégicos</h4>
                      <p className="text-blue-800">
                        Reestruturamos todos os contratos da empresa (trabalho, fornecedores, 
                        clientes) para garantir proteção jurídica adequada.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resultados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                Resultados Alcançados
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-green-800 font-medium">Compliance LGPD</div>
                  <div className="text-sm text-green-700 mt-1">Adequação completa à legislação</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$ 2.3M</div>
                  <div className="text-green-800 font-medium">Passivos Evitados</div>
                  <div className="text-sm text-green-700 mt-1">Prevenção de multas e processos</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">6 meses</div>
                  <div className="text-green-800 font-medium">Implementação</div>
                  <div className="text-sm text-green-700 mt-1">Compliance completo em prazo recorde</div>
                </div>
              </div>
            </motion.div>

            {/* Benefícios Específicos */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle className="h-8 w-8 text-blue-600 mr-3" />
                Benefícios Conquistados
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Segurança Jurídica</h4>
                      <p className="text-gray-600">Operação com total conformidade legal e redução drástica de riscos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Credibilidade de Mercado</h4>
                      <p className="text-gray-600">Certificações e compliance que geraram confiança de investidores</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Expansão Segura</h4>
                      <p className="text-gray-600">Estrutura jurídica robusta permitindo crescimento sustentável</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Economia de Recursos</h4>
                      <p className="text-gray-600">Prevenção de multas e processos gerou economia significativa</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Vantagem Competitiva</h4>
                      <p className="text-gray-600">Compliance diferenciado frente aos concorrentes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Cultura de Compliance</h4>
                      <p className="text-gray-600">Equipe treinada e consciente sobre boas práticas jurídicas</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metodologia */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-8 w-8 text-purple-600 mr-3" />
                Nossa Metodologia
              </h2>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Fase 1: Diagnóstico (30 dias)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Auditoria jurídica completa</li>
                      <li>• Mapeamento de riscos</li>
                      <li>• Análise de contratos existentes</li>
                      <li>• Avaliação de compliance atual</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Fase 2: Planejamento (15 dias)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Elaboração de plano de ação</li>
                      <li>• Priorização de implementações</li>
                      <li>• Cronograma detalhado</li>
                      <li>• Definição de KPIs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Fase 3: Implementação (120 dias)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Criação de políticas e procedimentos</li>
                      <li>• Treinamento de equipes</li>
                      <li>• Adequação de contratos</li>
                      <li>• Implementação de sistemas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Fase 4: Monitoramento (Contínuo)</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Auditoria de compliance</li>
                      <li>• Relatórios periódicos</li>
                      <li>• Atualizações regulamentares</li>
                      <li>• Suporte jurídico contínuo</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Precisa de Consultoria Jurídica Preventiva?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Nossa expertise em compliance empresarial pode proteger sua empresa e 
                potencializar seu crescimento com segurança jurídica.
              </p>
              <Link 
                to="/#contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Solicitar Consultoria
              </Link>
            </motion.div>

            {/* Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200"
            >
              <Link
                to="/casos/civil"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Caso Civil Anterior
              </Link>
              <Link
                to="/casos/trabalhista"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Próximo Caso Trabalhista
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CasoConsultoria;

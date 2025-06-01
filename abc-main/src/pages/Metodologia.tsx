import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const Metodologia = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para a Home
            </Link>
            
            <motion.h1 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5 }} 
              className="text-4xl font-bold mb-6"
            >
              Nossa Metodologia Jurídica
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Conheça nossa abordagem estruturada e eficiente para resolver questões jurídicas complexas com excelência e transparência.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >
                  <h2 className="text-3xl font-bold">Nossa Abordagem</h2>
                  <p className="text-gray-600">
                    Nossa metodologia baseia-se em análise detalhada, planejamento estratégico e execução precisa, 
                    garantindo que cada caso receba o tratamento adequado e personalizado.
                  </p>
                  <p className="text-gray-600">
                    Utilizamos tecnologia avançada e conhecimento jurídico especializado para oferecer soluções 
                    inovadoras e eficazes aos nossos clientes.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Princípios Fundamentais</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Análise Preliminar:</strong> Estudo detalhado de cada caso.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Estratégia Personalizada:</strong> Desenvolvimento de plano específico.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Execução Precisa:</strong> Implementação rigorosa do planejamento.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Monitoramento Contínuo:</strong> Acompanhamento em todas as etapas.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Transparência Total:</strong> Comunicação clara e constante.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Etapas do Processo</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">1. Consulta Inicial</h3>
                      <p className="text-gray-600">
                        Reunião para compreender as necessidades específicas do cliente e avaliar a viabilidade do caso.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">2. Análise Documental</h3>
                      <p className="text-gray-600">
                        Revisão detalhada de todos os documentos e evidências relevantes para fundamentar a estratégia.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">3. Planejamento Estratégico</h3>
                      <p className="text-gray-600">
                        Desenvolvimento de plano de ação personalizado com cronograma e metas definidas.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-orange-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">4. Execução e Acompanhamento</h3>
                      <p className="text-gray-600">
                        Implementação das ações planejadas com monitoramento constante e ajustes necessários.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">5. Relatório Final</h3>
                      <p className="text-gray-600">
                        Apresentação dos resultados obtidos e orientações para manutenção dos direitos conquistados.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >
                <h2 className="text-3xl font-bold mb-6">Diferenciais da Nossa Metodologia</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Tecnologia Avançada</h3>
                    <p className="text-gray-600">
                      Utilizamos ferramentas digitais modernas para agilizar processos e garantir maior precisão.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Equipe Especializada</h3>
                    <p className="text-gray-600">
                      Profissionais altamente qualificados com expertise em diferentes áreas do direito.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Atendimento Personalizado</h3>
                    <p className="text-gray-600">
                      Cada cliente recebe atenção individual e estratégias desenvolvidas especificamente para seu caso.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/processo-juridico" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Conheça Nosso Processo Jurídico
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Metodologia;

import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';

const ProcessoJuridico = () => {
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
              Nosso Processo Jurídico
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Descubra como nosso processo jurídico estruturado garante resultados eficazes e transparência total.
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
                    Nosso processo jurídico é baseado em metodologia comprovada que combina experiência profissional, 
                    rigor técnico e atendimento personalizado para cada cliente.
                  </p>
                  <p className="text-gray-600">
                    Desde a consulta inicial até a conclusão do caso, mantemos os mais altos padrões de qualidade 
                    e transparência em todas as etapas.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Garantias do Processo</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Transparência:</strong> Comunicação clara em todas as etapas.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Agilidade:</strong> Prazos rigorosamente cumpridos.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Qualidade:</strong> Padrão de excelência em todas as peças.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Personalização:</strong> Estratégia única para cada caso.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Resultados:</strong> Foco em soluções efetivas.</span>
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
                <h2 className="text-3xl font-bold mb-6">Fases do Processo Jurídico</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <div className="space-y-8">
                    <div className="border-l-4 border-blue-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">1. Recepção e Análise</h3>
                      <p className="text-gray-600">
                        Primeira consulta para entendimento completo do caso, análise de documentos e avaliação de viabilidade.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-green-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">2. Planejamento Estratégico</h3>
                      <p className="text-gray-600">
                        Definição da melhor estratégia jurídica, cronograma de ações e estabelecimento de expectativas realistas.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-purple-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">3. Implementação</h3>
                      <p className="text-gray-600">
                        Execução das ações planejadas, elaboração de peças processuais e representação em audiências.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-orange-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">4. Acompanhamento</h3>
                      <p className="text-gray-600">
                        Monitoramento contínuo do andamento processual com relatórios periódicos e ajustes quando necessários.
                      </p>
                    </div>
                    
                    <div className="border-l-4 border-red-600 pl-6">
                      <h3 className="text-xl font-bold mb-2">5. Conclusão</h3>
                      <p className="text-gray-600">
                        Finalização do processo com análise dos resultados e orientações para preservação dos direitos conquistados.
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
                <h2 className="text-3xl font-bold mb-6">Diferenciais do Nosso Processo</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Tecnologia Jurídica</h3>
                    <p className="text-gray-600">
                      Sistemas avançados para gestão processual, pesquisa jurisprudencial e controle de prazos.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Comunicação Eficiente</h3>
                    <p className="text-gray-600">
                      Portal do cliente, relatórios regulares e acesso direto aos advogados responsáveis pelo caso.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <h3 className="text-xl font-bold mb-3">Expertise Multidisciplinar</h3>
                    <p className="text-gray-600">
                      Equipe especializada em diferentes áreas do direito trabalhando de forma integrada.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/por-que-escolher" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Descubra Por Que Nos Escolher
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default ProcessoJuridico;

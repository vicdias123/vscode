import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Heart, Users, Calculator, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CasoPrevidenciario = () => {
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
            Caso de Sucesso: Direito Previdenciário Estratégico
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-xl text-gray-600 mb-8">
              Conquista de aposentadoria especial para servidor público com 25 anos de contribuição, 
              garantindo benefício integral e retroativo através de estratégia jurídica especializada.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-8">
              <div className="flex items-start space-x-4">
                <Heart className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Contexto do Caso</h3>
                  <p className="text-blue-800">
                    Servidor público da área da saúde, enfermeiro há 28 anos, buscava aposentadoria especial 
                    por atividade insalubre. INSS negou o pedido alegando falta de comprovação da exposição 
                    a agentes nocivos durante todo o período laborativo.
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
                Principais Desafios
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Documentação Insuficiente</h3>
                  <p className="text-red-800">
                    Falta de PPPs (Perfil Profissiográfico Previdenciário) dos primeiros 15 anos de trabalho, 
                    período em que a documentação não era obrigatória.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Mudanças Legislativas</h3>
                  <p className="text-red-800">
                    Múltiplas alterações na legislação previdenciária ao longo dos anos, 
                    criando interpretações divergentes sobre direitos adquiridos.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Resistência do INSS</h3>
                  <p className="text-red-800">
                    Postura restritiva do INSS na concessão de aposentadorias especiais, 
                    especialmente para servidores públicos da área da saúde.
                  </p>
                </div>
                <div className="bg-red-50 rounded-lg p-6 border border-red-100">
                  <h3 className="text-xl font-semibold text-red-900 mb-3">Prova da Insalubridade</h3>
                  <p className="text-red-800">
                    Necessidade de comprovar exposição contínua e permanente a agentes 
                    biológicos durante toda a carreira profissional.
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
                <Calculator className="h-8 w-8 text-blue-600 mr-3" />
                Nossa Estratégia Jurídica
              </h2>
              <div className="bg-blue-50 rounded-lg p-8 border border-blue-100">
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">1</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Reconstituição Histórica</h4>
                      <p className="text-blue-800">
                        Levantamento histórico completo das atividades profissionais, incluindo 
                        consulta a arquivos hospitalares e documentação administrativa.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">2</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Prova Testemunhal</h4>
                      <p className="text-blue-800">
                        Organização de prova testemunhal com colegas de trabalho e supervisores 
                        que puderam atestar as condições insalubres do ambiente laboral.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">3</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Perícia Técnica</h4>
                      <p className="text-blue-800">
                        Contratação de perito especializado em medicina do trabalho para 
                        elaboração de laudo técnico sobre exposição a agentes biológicos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-600 text-white rounded-full p-2 text-sm font-bold">4</div>
                    <div>
                      <h4 className="text-lg font-semibold text-blue-900 mb-2">Tese Jurídica Fundamentada</h4>
                      <p className="text-blue-800">
                        Desenvolvimento de tese baseada na presunção de insalubridade para 
                        profissionais de enfermagem em ambiente hospitalar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Processo e Resultados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="h-8 w-8 text-purple-600 mr-3" />
                Tramitação do Processo
              </h2>
              <div className="space-y-6">
                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">1</div>
                    <h3 className="text-xl font-semibold text-purple-900">Fase Administrativa (6 meses)</h3>
                  </div>
                  <p className="text-purple-800 mb-3">
                    Pedido administrativo ao INSS com apresentação de toda documentação disponível. 
                    Indeferimento conforme esperado devido à falta de PPPs do período inicial.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Resultado:</strong> Indeferimento - necessidade de judicialização
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">2</div>
                    <h3 className="text-xl font-semibold text-purple-900">Primeira Instância (18 meses)</h3>
                  </div>
                  <p className="text-purple-800 mb-3">
                    Ação judicial com produção de prova pericial e testemunhal. Laudo pericial 
                    confirmou exposição a agentes biológicos durante toda a carreira.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Resultado:</strong> Sentença procedente - aposentadoria especial concedida
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6 border border-purple-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mr-4">3</div>
                    <h3 className="text-xl font-semibold text-purple-900">Execução do Julgado (12 meses)</h3>
                  </div>
                  <p className="text-purple-800 mb-3">
                    Fase de cumprimento da sentença com cálculo dos valores retroativos. 
                    Implantação do benefício e pagamento das diferenças devidas.
                  </p>
                  <div className="text-sm text-purple-700">
                    <strong>Resultado:</strong> Benefício implantado com retroativos pagos integralmente
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Resultados Financeiros */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600 mr-3" />
                Resultados Obtidos
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$ 380K</div>
                  <div className="text-green-800 font-medium">Valor Retroativo</div>
                  <div className="text-sm text-green-700 mt-1">Diferenças de 3 anos</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">R$ 6.2K</div>
                  <div className="text-green-800 font-medium">Benefício Mensal</div>
                  <div className="text-sm text-green-700 mt-1">Aposentadoria integral</div>
                </div>
                <div className="bg-green-50 rounded-lg p-6 border border-green-100 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25 anos</div>
                  <div className="text-green-800 font-medium">Tempo Reconhecido</div>
                  <div className="text-sm text-green-700 mt-1">Atividade especial</div>
                </div>
              </div>
            </motion.div>

            {/* Benefícios Conquistados */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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
                      <h4 className="font-semibold text-gray-900">Aposentadoria Antecipada</h4>
                      <p className="text-gray-600">Aposentadoria aos 50 anos em vez de aguardar até 65 anos</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Benefício Integral</h4>
                      <p className="text-gray-600">100% do salário de benefício sem redução por idade</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Valores Retroativos</h4>
                      <p className="text-gray-600">Recebimento de todo período desde o requerimento administrativo</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Segurança Financeira</h4>
                      <p className="text-gray-600">Garantia de renda vitalícia com reajustes anuais</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Qualidade de Vida</h4>
                      <p className="text-gray-600">Possibilidade de dedicação à família e projetos pessoais</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Precedente Estabelecido</h4>
                      <p className="text-gray-600">Jurisprudência favorável para casos similares</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Impacto Social */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Impacto Social</h2>
              <div className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Reconhecimento Profissional</h4>
                    <p className="text-gray-700 mb-4">
                      A decisão reconheceu oficialmente os riscos ocupacionais enfrentados por 
                      profissionais de enfermagem, valorizando esta categoria essencial.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Precedente Jurídico</h4>
                    <p className="text-gray-700">
                      O caso estabeleceu precedente importante para outros profissionais 
                      da saúde em situação similar.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Justiça Social</h4>
                    <p className="text-gray-700 mb-4">
                      Garantiu o direito constitucional à aposentadoria especial para quem 
                      dedicou a vida ao cuidado da saúde pública.
                    </p>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Impacto Familiar</h4>
                    <p className="text-gray-700">
                      Proporcionou estabilidade financeira e qualidade de vida para 
                      a família do segurado.
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
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-4">
                Busca Aposentadoria Especial ou Benefício Previdenciário?
              </h3>
              <p className="text-xl mb-6 opacity-90">
                Nossa expertise em direito previdenciário pode garantir seus direitos 
                e maximizar seus benefícios com segurança jurídica.
              </p>
              <Link 
                to="/#contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Consultar Especialista
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
                to="/casos/trabalhista"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Caso Trabalhista Anterior
              </Link>
              <Link
                to="/casos/civil"
                className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Próximo Caso Civil
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CasoPrevidenciario;

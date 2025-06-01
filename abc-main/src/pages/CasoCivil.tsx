import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, AlertCircle, DollarSign, FileText, Users, Clock, CheckCircle, Building, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CasoCivil = () => {
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
            Caso de Sucesso: Ação de Responsabilidade Civil
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-xl text-gray-600 mb-8">
              Representação judicial em ação de responsabilidade civil por descumprimento contratual, 
              resultando em indenização significativa e reparação integral dos danos causados ao cliente.
            </p>

            <div className="bg-orange-50 rounded-lg p-6 border border-orange-100 mb-8">
              <div className="flex items-start space-x-4">
                <Building className="h-8 w-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-orange-900 mb-2">Contexto do Caso</h3>
                  <p className="text-orange-800">
                    Empresa cliente sofreu prejuízos substanciais devido ao descumprimento de contrato 
                    de prestação de serviços por parte de fornecedor, necessitando de reparação civil 
                    pelos danos materiais e morais causados.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desafio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Desafio
            </h2>
            <div className="bg-red-50 rounded-lg p-6 border border-red-100">
              <p className="text-gray-700 mb-4">
                O caso apresentava complexidades técnicas e jurídicas que exigiam abordagem estratégica 
                especializada para comprovar:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Existência de relação contratual válida e seus termos específicos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Descumprimento culposo das obrigações contratuais</span>
                </li>
                <li className="flex items-start space-x-3">
                  <DollarSign className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Quantificação precisa dos danos materiais e morais</span>
                </li>
                <li className="flex items-start space-x-3">
                  <TrendingUp className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Nexo causal entre inadimplemento e prejuízos sofridos</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Solução */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Nossa Estratégia Jurídica
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Desenvolvemos abordagem técnica abrangente com foco na comprovação dos fatos, 
              quantificação dos danos e fundamentação jurídica sólida.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Análise Contratual Detalhada
                    </h3>
                    <p className="text-gray-600">
                      Revisão minuciosa de todos os documentos contratuais, correspondências 
                      e registros para estabelecer obrigações e identificar descumprimentos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <DollarSign className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Perícia de Danos
                    </h3>
                    <p className="text-gray-600">
                      Contratação de peritos especializados para quantificação precisa 
                      dos prejuízos materiais e avaliação do dano moral empresarial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Produção de Provas
                    </h3>
                    <p className="text-gray-600">
                      Oitiva de testemunhas estratégicas e produção de provas documentais 
                      para comprovar o descumprimento e seus efeitos danosos.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <TrendingUp className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Fundamentação Jurisprudencial
                    </h3>
                    <p className="text-gray-600">
                      Sustentação baseada em jurisprudência consolidada e doutrina 
                      especializada em responsabilidade civil contratual.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Resultado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Resultado Obtido
            </h2>
            
            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <div className="flex items-start space-x-4 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Condenação Integral do Réu</h3>
                  <p className="text-green-800 text-lg">
                    Obtivemos sentença favorável reconhecendo o descumprimento contratual e condenando 
                    o réu ao pagamento de indenização por danos materiais e morais no valor de R$ 280.000,00.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2">Danos Materiais</h4>
                  <p className="text-green-700 text-sm">
                    R$ 200.000 por prejuízos diretos comprovados
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2">Danos Morais</h4>
                  <p className="text-green-700 text-sm">
                    R$ 80.000 por abalo à credibilidade empresarial
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2">Juros e Correção</h4>
                  <p className="text-green-700 text-sm">
                    Aplicação desde o evento danoso
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-green-100 rounded-lg">
                <p className="text-green-800 font-medium">
                  💡 <strong>Impacto Total:</strong> O cliente recuperou integralmente seus prejuízos e ainda recebeu 
                  compensação pelo dano moral, fortalecendo sua posição no mercado.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Etapas do Processo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Etapas do Processo
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-700 mb-6">
                Este caso demonstra nossa capacidade de conduzir litígios complexos com estratégia 
                bem definida e execução precisa em cada fase processual.
              </p>

              <div className="space-y-6">
                {[
                  {
                    fase: "Petição Inicial",
                    descricao: "Elaboração de petição inicial fundamentada com pedidos claros e específicos",
                    tempo: "15 dias",
                    cor: "blue"
                  },
                  {
                    fase: "Produção de Provas",
                    descricao: "Perícia contábil, oitiva de testemunhas e juntada de documentos",
                    tempo: "4 meses",
                    cor: "purple"
                  },
                  {
                    fase: "Debates Orais",
                    descricao: "Sustentação oral com argumentação técnica e jurisprudencial",
                    tempo: "1 dia",
                    cor: "orange"
                  },
                  {
                    fase: "Sentença Favorável",
                    descricao: "Reconhecimento integral dos pedidos e condenação do réu",
                    tempo: "30 dias",
                    cor: "green"
                  }
                ].map((etapa, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg border border-gray-100">
                    <div className={`w-3 h-3 rounded-full bg-${etapa.cor}-600 flex-shrink-0 mt-2`}></div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{etapa.fase}</h4>
                        <span className={`text-${etapa.cor}-600 text-sm font-medium`}>{etapa.tempo}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{etapa.descricao}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Lições Aprendidas */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Diferenciais do Nosso Trabalho
            </h2>
            
            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">Preparação Minuciosa</h4>
                  <p className="text-blue-800 text-sm mb-4">
                    Análise detalhada de toda documentação e preparação estratégica de cada fase processual.
                  </p>
                  
                  <h4 className="font-bold text-blue-900 mb-3">Perícia Especializada</h4>
                  <p className="text-blue-800 text-sm">
                    Utilização de peritos de reconhecida expertise para quantificação precisa dos danos.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 mb-3">Argumentação Sólida</h4>
                  <p className="text-blue-800 text-sm mb-4">
                    Fundamentação jurídica robusta baseada em jurisprudência consolidada e doutrina atualizada.
                  </p>
                  
                  <h4 className="font-bold text-blue-900 mb-3">Execução Eficiente</h4>
                  <p className="text-blue-800 text-sm">
                    Acompanhamento ativo do processo e cumprimento rigoroso de prazos processuais.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex justify-between items-center pt-8 border-t border-gray-200"
          >
            <Link
              to="/casos/criminal"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Caso de Defesa Criminal
            </Link>
            
            <Link
              to="/casos/consultoria"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Caso de Consultoria Jurídica
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CasoCivil;

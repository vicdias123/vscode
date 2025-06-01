import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Shield, Scale, FileText, Users, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const CasoCriminal = () => {
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
            Caso de Sucesso: Defesa Criminal Estratégica
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16"
          >
            <p className="text-xl text-gray-600 mb-8">
              Atuação estratégica em processo criminal complexo, garantindo a proteção dos direitos fundamentais 
              do cliente e obtendo resultado favorável através de defesa técnica especializada.
            </p>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-100 mb-8">
              <div className="flex items-start space-x-4">
                <Shield className="h-8 w-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Contexto do Caso</h3>
                  <p className="text-blue-800">
                    Cliente enfrentava processo criminal por suposta prática de crime contra a ordem econômica, 
                    com possibilidade de prisão preventiva e severas consequências pessoais e profissionais.
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
                O caso apresentava alta complexidade devido à natureza técnica das acusações e ao risco iminente 
                de prisão preventiva. Era fundamental:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Atuar rapidamente para evitar decreto de prisão preventiva</span>
                </li>
                <li className="flex items-start space-x-3">
                  <FileText className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Analisar volumosa documentação técnica e financeira</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Scale className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                  <span>Demonstrar inexistência de dolo e ausência de materialidade</span>
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
              Nossa Solução Estratégica
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Desenvolvemos defesa técnica abrangente com foco na desconstrução das acusações e proteção integral dos direitos do cliente.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Análise Técnica Detalhada
                    </h3>
                    <p className="text-gray-600">
                      Revisão minuciosa de toda documentação, identificando inconsistências 
                      nas acusações e falhas na instrução processual.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <Scale className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Defesa Preventiva
                    </h3>
                    <p className="text-gray-600">
                      Petição de liberdade provisória com argumentação jurídica sólida, 
                      evitando a prisão preventiva e garantindo o direito de defesa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <FileText className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Perícia Especializada
                    </h3>
                    <p className="text-gray-600">
                      Solicitação de perícia contábil independente para comprovar 
                      regularidade das operações questionadas pela acusação.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      Audiências Estratégicas
                    </h3>
                    <p className="text-gray-600">
                      Participação ativa em audiências com sustentação oral 
                      fundamentada em jurisprudência e doutrina especializada.
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
              Resultado Alcançado
            </h2>
            
            <div className="bg-green-50 rounded-lg p-8 border border-green-200">
              <div className="flex items-start space-x-4 mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-3">Absolvição por Inexistência de Crime</h3>
                  <p className="text-green-800 text-lg">
                    Conseguimos a absolvição completa do cliente, com reconhecimento judicial da inexistência 
                    de crime e ausência de dolo nas condutas imputadas.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2">Liberdade Preservada</h4>
                  <p className="text-green-700 text-sm">
                    Cliente manteve-se em liberdade durante todo processo
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2">Reputação Protegida</h4>
                  <p className="text-green-700 text-sm">
                    Preservação da imagem pessoal e profissional
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-bold text-green-900 mb-2">Precedente Jurídico</h4>
                  <p className="text-green-700 text-sm">
                    Criação de precedente favorável para casos similares
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Metodologia Aplicada */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Metodologia Aplicada
            </h2>
            
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <p className="text-gray-700 mb-6">
                Este caso exemplifica nossa abordagem estratégica em defesa criminal, 
                combinando conhecimento técnico, agilidade processual e advocacy especializada.
              </p>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    numero: "1",
                    titulo: "Análise Inicial",
                    descricao: "Avaliação completa do caso e identificação de estratégias defensivas"
                  },
                  {
                    numero: "2", 
                    titulo: "Defesa Preventiva",
                    descricao: "Ações imediatas para preservar direitos e evitar medidas cautelares"
                  },
                  {
                    numero: "3",
                    titulo: "Instrução Processual",
                    descricao: "Participação ativa na produção de provas e contraditório"
                  },
                  {
                    numero: "4",
                    titulo: "Sustentação Final",
                    descricao: "Argumentação técnica fundamentada para convencimento judicial"
                  }
                ].map((etapa, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-3">
                      {etapa.numero}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">{etapa.titulo}</h4>
                    <p className="text-gray-600 text-sm">{etapa.descricao}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Bottom Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-between items-center pt-8 border-t border-gray-200"
          >
            <Link
              to="/casos/previdenciario"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Caso Previdenciário
            </Link>
            
            <Link
              to="/casos/civil"
              className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              Caso de Responsabilidade Civil
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CasoCriminal;

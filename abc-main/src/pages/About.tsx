import { ArrowLeft, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
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
              Sobre o Escritório Dias & Barbosa
            </motion.h1>
            
            <div className="prose prose-lg max-w-none">
              <motion.p 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ duration: 0.5, delay: 0.2 }} 
                className="text-xl text-gray-600 mb-12"
              >
                Somos uma equipe de profissionais do direito dedicados a fornecer soluções jurídicas abrangentes para indivíduos e empresas.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6 }}
                  className="space-y-6"
                >                  <h2 className="text-3xl font-bold">Nossa Missão</h2>
                  <p className="text-gray-600">
                    Conectar nossos clientes às melhores e mais completas soluções jurídicas, através de uma abordagem 
                    colaborativa e estratégica, garantindo segurança, eficiência e resultados.
                  </p>
                  <p className="text-gray-600">
                    Desde nossa fundação em 2021, acreditamos que ao fornecer expertise jurídica estratégica e advocacia 
                    personalizada, podemos criar resultados de sucesso e construir relacionamentos duradouros com nossos clientes.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 20 }} 
                  animate={{ opacity: 1, x: 0 }} 
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
                >
                  <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Visão 360°:</strong> Análise completa e integrada de cada caso.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Excelência e Colaboração:</strong> União de especialistas para a melhor estratégia.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Foco no Cliente:</strong> Entender a fundo suas necessidades para propor soluções personalizadas.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Inovação:</strong> Buscar constantemente formas mais eficientes de resolver desafios jurídicos.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-gray-700 mt-1 mr-3 flex-shrink-0" />
                      <span><strong>Transparência e Confiança:</strong> Construir relações sólidas e duradouras.</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-16"
              >                <h2 className="text-3xl font-bold mb-6">Nossa História: Da Visão à Solução Completa</h2>
                <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
                  <p className="text-gray-600 mb-4">
                    Nosso escritório nasceu do desejo de transformar a maneira como a advocacia é praticada. Iniciamos nossa 
                    jornada em 2021, dedicados a pequenos casos, mas com uma grande ambição: entender o direito em sua 
                    totalidade e oferecer soluções que realmente fizessem a diferença na vida e nos negócios de nossos clientes.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Essa visão foi ampliada e validada pela experiência de nosso fundador na diretoria financeira de uma 
                    importante instituição, onde o contato direto com o mundo empresarial solidificou nossa crença em uma 
                    advocacia multidisciplinar. Percebemos que os desafios jurídicos raramente se limitam a uma única área.
                  </p>
                  <p className="text-gray-600">
                    Hoje, nosso propósito é ser o ponto de conexão entre você e a solução jurídica ideal. Atuamos como um 
                    hub de inteligência, onde especialistas de diferentes áreas colaboram para analisar cada caso sob múltiplas 
                    perspectivas. Essa abordagem integrada nos permite antecipar cenários, mitigar riscos e construir estratégias 
                    robustas, aumentando significativamente as chances de sucesso.
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ duration: 0.6, delay: 0.6 }}
                className="mb-16"
              >                <h2 className="text-3xl font-bold mb-6">Nosso Time de Especialistas</h2>
                <p className="text-gray-600 mb-8">
                  Conheça os profissionais dedicados a encontrar a melhor estratégia para o seu caso.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    {                      name: "Vitor Dias Barbosa",
                      role: "Sócio Fundador & Estrategista Jurídico",
                      bio: `Com uma trajetória que une a prática jurídica à visão de negócios, iniciei minha carreira em 2021 com foco em solucionar casos de menor complexidade, o que me proporcionou uma base sólida e um profundo entendimento das necessidades dos clientes. A experiência se expandiu para a criação de estratégias para casos mais complexos, sendo posteriormente convidado a integrar a diretoria financeira de uma instituição. Essa vivência no ambiente empresarial consolidou a ideia de criar um escritório com uma proposta inovadora: conectar os clientes a todas as áreas da advocacia por meio de um suporte integrado. Hoje, lidero nossa equipe com o objetivo de promover um debate multidisciplinar em cada caso, reduzindo riscos e maximizando as chances de êxito para nossos clientes.`,
                      image: "/PERFIL/vitor-dias-barbosa.jpeg"
                    },
                    {                      name: "Dr. Lucas Alves",
                      role: "Advogado - Especialista em Direito Previdenciário",
                      bio: `Dr. Lucas é o nosso especialista em Direito Previdenciário, dedicando-se a garantir os direitos de segurados junto ao INSS. Atua em processos de aposentadorias, pensões, auxílios e revisões de benefícios, buscando sempre a melhor solução para o futuro de seus clientes.`,
                      image: "/IMG/08_direito_civil.webp"
                    },
                    {                      name: "Dr. Philipe Lima",
                      role: "Advogado - Especialista em Direito Civil e Penal",
                      bio: `Com atuação dupla nas esferas cível e penal, Dr. Philipe possui uma visão abrangente para lidar com casos que transitam entre as duas áreas. Oferece uma defesa técnica e estratégica, seja em questões de natureza patrimonial ou na garantia dos direitos fundamentais na área criminal.`,
                      image: "/PERFIL/Philipe-Lima.jpeg"
                    },
                    {                      name: "Dr. Fernando Dias Barbosa",
                      role: "Economista",
                      bio: `A visão econômica é um pilar estratégico em nosso escritório. Dr. Fernando é responsável por analisar os impactos financeiros e as variáveis de mercado relacionadas aos casos de nossos clientes. Sua expertise em economia aplicada ao direito enriquece nossas estratégias, especialmente em disputas empresariais, tributárias e de recuperação de crédito.`,
                      image: "/IMG/03_direito_penal.png"
                    },
                    {                      name: "Dr. Luiz Nascimento",
                      role: "Gerente de Soluções e Estratégias",
                      bio: `Luiz atua na intersecção entre as necessidades dos clientes e a expertise de nossa equipe. Como Gerente de Soluções e Estratégias, ele é o responsável por garantir que a abordagem multidisciplinar seja aplicada de forma eficiente, coordenando o debate entre as áreas e assegurando que todas as soluções propostas estejam alinhadas aos objetivos do cliente.`,
                      image: "/IMG/05_direito_tributario.png"
                    }
                  ].map((member, i) => (
                    <Card key={i} className="bg-gray-50 border border-gray-100 overflow-hidden">
                      <CardContent className="p-6">
                        <div className="flex flex-col items-center text-center">
                          <div className="w-32 h-32 relative mb-4 rounded-full overflow-hidden">
                            <img 
                              src={member.image} 
                              alt={member.name} 
                              className="w-full h-full object-cover filter grayscale" 
                            />
                          </div>
                          <h3 className="font-bold text-lg">{member.name}</h3>
                          <p className="text-gray-500 text-sm mb-2">{member.role}</p>
                          <p className="text-gray-600 text-sm whitespace-pre-line">{member.bio}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="mt-16 pt-8 border-t border-gray-200">
              <Link to="/careers" className="inline-flex items-center px-5 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-all group">
                Junte-se ao Nosso Time
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;

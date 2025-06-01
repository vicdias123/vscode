import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  GraduationCap, 
  Users, 
  TrendingUp, 
  Scale, 
  FileText,
  Clock,
  MapPin,
  Mail,
  Phone
} from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SEO from '@/components/SEO';

const Carreiras = () => {
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);

  const positions = [
    {
      id: 1,
      title: "Advogado Júnior - Direito Previdenciário",
      department: "Previdenciário",
      type: "CLT",
      location: "Presencial",
      experience: "1-3 anos",
      description: "Buscamos advogado júnior para atuar na área de direito previdenciário, com experiência em benefícios do INSS e aposentadorias.",
      requirements: [
        "Graduação em Direito com OAB ativa",
        "Experiência mínima de 1 ano em direito previdenciário",
        "Conhecimento em sistema do INSS",
        "Habilidades de comunicação e atendimento ao cliente",
        "Proatividade e organização"
      ],
      benefits: [
        "Salário compatível com o mercado",
        "Vale refeição e transporte",
        "Plano de saúde",
        "Ambiente colaborativo",
        "Oportunidades de crescimento"
      ]
    },
    {
      id: 2,
      title: "Advogado Pleno - Direito Criminal",
      department: "Criminal",
      type: "CLT",
      location: "Presencial",
      experience: "3-7 anos",
      description: "Procuramos advogado pleno para fortalecer nossa equipe de direito criminal, com experiência em defesas e processos penais.",
      requirements: [
        "Graduação em Direito com OAB ativa",
        "Experiência mínima de 3 anos em direito criminal",
        "Conhecimento em processo penal",
        "Experiência em audiências e júri",
        "Capacidade de liderança"
      ],
      benefits: [
        "Salário atrativo",
        "Participação nos resultados",
        "Plano de saúde e odontológico",
        "Auxílio educação",
        "Flexibilidade de horário"
      ]
    },
    {
      id: 3,
      title: "Estagiário de Direito",
      department: "Geral",
      type: "Estágio",
      location: "Presencial",
      experience: "Estudante",
      description: "Oportunidade para estudantes de direito desenvolverem experiência prática em diversas áreas jurídicas.",
      requirements: [
        "Cursando a partir do 6º período de Direito",
        "Disponibilidade de 6 horas diárias",
        "Conhecimento básico em informática",
        "Interesse em aprender",
        "Responsabilidade e pontualidade"
      ],
      benefits: [
        "Bolsa estágio competitiva",
        "Vale transporte",
        "Ambiente de aprendizado",
        "Mentoria profissional",
        "Possibilidade de efetivação"
      ]
    },
    {
      id: 4,
      title: "Analista Jurídico - Consultoria",
      department: "Consultoria",
      type: "CLT",
      location: "Híbrido",
      experience: "2-5 anos",
      description: "Analista para suporte jurídico em consultoria empresarial, elaboração de pareceres e contratos.",
      requirements: [
        "Graduação em Direito",
        "Experiência em consultoria jurídica",
        "Conhecimento em direito empresarial",
        "Habilidades analíticas",
        "Inglês intermediário"
      ],
      benefits: [
        "Salário competitivo",
        "Trabalho híbrido",
        "Plano de carreira",
        "Cursos e especializações",
        "Ambiente inovador"
      ]
    }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-8 w-8 text-gold-600" />,
      title: "Crescimento Profissional",
      description: "Plano de carreira estruturado com oportunidades de desenvolvimento"
    },
    {
      icon: <Users className="h-8 w-8 text-gold-600" />,
      title: "Ambiente Colaborativo",
      description: "Equipe unida focada em resultados e crescimento mútuo"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-gold-600" />,
      title: "Educação Continuada",
      description: "Investimento em cursos, especializações e eventos jurídicos"
    },
    {
      icon: <Scale className="h-8 w-8 text-gold-600" />,
      title: "Casos Desafiadores",
      description: "Trabalhe em casos complexos e de grande repercussão"
    }
  ];

  return (
    <PageLayout>
      <SEO 
        title="Carreiras - Dias & Barbosa Advocacia"
        description="Junte-se à nossa equipe de excelência jurídica. Oportunidades de carreira em direito previdenciário, criminal, civil e consultoria."
        keywords={['carreiras advocacia', 'vagas direito', 'oportunidades jurídicas', 'trabalhar advocacia', 'emprego advogado']}
      />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-navy-800 to-navy-600 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Construa sua Carreira Conosco
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Faça parte de uma equipe de excelência jurídica comprometida com a justiça e o crescimento profissional
            </p>
          </motion.div>
        </div>
      </section>

      {/* Por que trabalhar conosco */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Por que trabalhar conosco?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Oferecemos um ambiente de trabalho estimulante, com foco no desenvolvimento profissional e pessoal
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-navy-800 mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vagas Disponíveis */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Vagas Disponíveis
            </h2>
            <p className="text-lg text-gray-600">
              Encontre a oportunidade perfeita para sua carreira jurídica
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="secondary">{position.department}</Badge>
                      <div className="flex gap-2">
                        <Badge variant="outline">{position.type}</Badge>
                        <Badge variant="outline">{position.location}</Badge>
                      </div>
                    </div>
                    <CardTitle className="text-navy-800">{position.title}</CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.experience}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    
                    <Button 
                      variant="outline" 
                      className="w-full mb-4"
                      onClick={() => setSelectedPosition(selectedPosition === position.id ? null : position.id)}
                    >
                      {selectedPosition === position.id ? 'Ocultar Detalhes' : 'Ver Detalhes'}
                    </Button>

                    {selectedPosition === position.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-4"
                      >
                        <div>
                          <h4 className="font-semibold text-navy-800 mb-2">Requisitos:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {position.requirements.map((req, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-gold-600 mt-1">•</span>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-navy-800 mb-2">Benefícios:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {position.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <span className="text-gold-600 mt-1">•</span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                    
                    <Button className="w-full mt-4 bg-gold-600 hover:bg-gold-700">
                      <Mail className="h-4 w-4 mr-2" />
                      Candidatar-se
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo Seletivo */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-navy-800 mb-4">
              Nosso Processo Seletivo
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Um processo transparente e eficiente para encontrar os melhores talentos
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Candidatura", description: "Envie seu currículo e carta de apresentação" },
              { step: "2", title: "Triagem", description: "Análise do perfil e experiência" },
              { step: "3", title: "Entrevista", description: "Conversa com nossa equipe de RH" },
              { step: "4", title: "Integração", description: "Boas-vindas e treinamento inicial" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-gold-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-navy-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Não encontrou a vaga ideal?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Envie seu currículo e faremos parte do nosso banco de talentos para futuras oportunidades
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-gold-600 hover:bg-gold-700"
              >
                <Mail className="h-5 w-5 mr-2" />
                Enviar Currículo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-navy-800"
              >
                <Phone className="h-5 w-5 mr-2" />
                Falar Conosco
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Carreiras;

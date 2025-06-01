import { useParams, Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { Separator } from '@/components/ui/separator';
import SEO from '@/components/SEO';
import { useEffect, useState } from 'react';
import { blogPosts } from '@/data/blogPosts';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Clock, MessageSquare, Share, Tag, Lightbulb, ArrowRight, FileText, Rocket, Settings, CheckCircle, BarChart, Zap, Target, DollarSign } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LoadingAnimation } from '@/components/LoadingAnimation';

const BlogPostDetail = () => {
  const {
    slug
  } = useParams<{
    slug: string;
  }>();
  const post = blogPosts.find(post => post.slug === slug);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);
    if (!post) {
    return <PageLayout>
        <SEO title="Artigo Não Encontrado - Dias & Barbosa" description="O artigo jurídico solicitado não pôde ser encontrado." />
        <div className="container mx-auto px-4 py-16 min-h-[50vh] flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold mb-4">Artigo não encontrado</h1>
          <p>Não conseguimos encontrar o artigo jurídico que você está procurando.</p>
        </div>
      </PageLayout>;
  }

  // Calculate reading time (average 200 words per minute)
  const wordCount = post.content.reduce((count, section) => {
    if (section.content) {
      return count + section.content.split(/\s+/).length;
    } else if (section.items) {
      return count + section.items.join(' ').split(/\s+/).length;
    }
    return count;
  }, 0);
  const readingTime = Math.max(1, Math.ceil(wordCount / 200));

  // Format date for machine-readable ISO format (for structured data)
  const formatDateForISO = (dateStr: string) => {
    if (!dateStr) return '';
    const months: Record<string, string> = {
      'Jan': '01',
      'Feb': '02',
      'Mar': '03',
      'Apr': '04',
      'May': '05',
      'Jun': '06',
      'Jul': '07',
      'Aug': '08',
      'Sep': '09',
      'Oct': '10',
      'Nov': '11',
      'Dec': '12'
    };
    const parts = dateStr.split(' ');
    if (parts.length === 3) {
      const month = months[parts[0]];
      const day = parts[1].replace(',', '');
      const year = parts[2];
      return `${year}-${month}-${day.padStart(2, '0')}`;
    }
    return dateStr;
  };

  // Special rendering for the process blog post with the updated design
  const isProcessPost = slug === 'from-idea-to-launch-development-process';
  
  // Determine if this is the sensor technology post
  const isSensorPost = slug === 'leveraging-sensor-technology-product-development';
  // Extract keywords from post content
  const extractKeywords = () => {
    const keywords = ['serviços jurídicos', 'consultoria legal', post.category.toLowerCase()];
    if (post.title.includes('Processo de')) {
      keywords.push('processo legal', 'consultoria', 'assessoria jurídica', 'advocacia especializada');
    }
    return keywords;
  };
  
  return <PageLayout>
      <SEO title={`${post.title} - Dias & Barbosa`} description={post.excerpt} imageUrl={post.imageUrl} type="article" isBlogPost={true} publishDate={formatDateForISO(post.date)} modifiedDate={formatDateForISO(post.date)} author={post.author} category={post.category} keywords={extractKeywords()} />
      
      <div className={cn("w-full pt-32 pb-16 relative", isSensorPost ? "bg-black text-white" : "bg-gradient-to-b from-gray-900 to-black text-white")} style={{
      backgroundImage: isSensorPost 
        ? `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url('${post.imageUrl}')`
        : `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('${post.imageUrl}')`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }}>
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6
        }} className="max-w-3xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary" className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 flex items-center gap-1.5">
                <Tag size={14} />
                {post.category}
              </Badge>
              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Calendar size={14} />
                {post.date}
              </Badge>              <Badge variant="outline" className="border-white/10 text-white/80 backdrop-blur-sm flex items-center gap-1.5">
                <Clock size={14} />
                {readingTime} min de leitura
              </Badge>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">{post.title}</h1>            <div className="flex items-center text-gray-300">
              <BookOpen size={18} className="mr-2" />
              <span>Por {post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {isLoading ? <div className="flex justify-center py-20">
            <LoadingAnimation />
          </div> : <div className="max-w-3xl mx-auto">
            {isProcessPost ? <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6
        }} className="prose prose-lg max-w-none">
                {/* Process post rendering */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1
          }} className="mb-8">                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Na Dias & Barbosa, simplificamos a jornada desde sua necessidade jurídica até a resolução completa do caso. Seja começando do zero ou já tendo uma situação clara pronta para ser tratada, estamos aqui para apoiá-lo exatamente onde você precisa.
                  </p>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                    Vamos explicar nosso processo com um exemplo:
                  </p>
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mb-8">
                    <p className="text-gray-700 italic">
                      Imagine que você nos procura com uma questão de revisão de aposentadoria. Você acredita que seu benefício está sendo calculado incorretamente e precisa de uma análise jurídica especializada para revisar os valores junto ao INSS.
                    </p>
                  </div>
                </motion.div>

                {/* Step 1 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.2
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-700">
                      <Lightbulb size={24} />
                    </div>                    <h2 className="text-2xl font-bold text-gray-900">Etapa 1: Compreendendo seu Caso</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Tudo começa com uma conversa clara e detalhada. Quando você nos traz sua questão de aposentadoria, primeiro nos reunimos para entender completamente sua situação e necessidades. Discutimos pontos-chave: Qual é o problema específico? Quais documentos você possui? Depois disso, definimos um plano de ação claro e prático.
                    </p>
                    <p className="text-gray-700">
                      Se você já tem documentação prévia ou uma análise inicial, identificamos rapidamente como podemos ajudar a resolver a questão de forma eficaz.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 2 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.3
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-700">
                      <FileText size={24} />
                    </div>                    <h2 className="text-2xl font-bold text-gray-900">Etapa 2: Análise Jurídica Detalhada</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Uma vez definido o plano, nossa equipe move-se rapidamente para desenvolver uma análise jurídica completa. Para sua questão de aposentadoria, analisamos toda a documentação, legislação aplicável, precedentes jurisprudenciais e calculamos os valores corretos que você deveria receber.
                    </p>
                    <p className="text-gray-700">
                      Utilizamos métodos de análise ágeis e ferramentas especializadas. Em poucas semanas, você recebe um parecer técnico detalhado para avaliar e coletar feedback.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 3 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.4
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-gray-700">
                      <CheckCircle size={24} />
                    </div>                    <h2 className="text-2xl font-bold text-gray-900">Etapa 3: Estratégia e Refinamento</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Com a análise pronta, partimos para o desenvolvimento da estratégia jurídica. Você avaliará as opções disponíveis para identificar a melhor abordagem. Juntos, ajustaremos a estratégia, otimizaremos os argumentos, preparamos a documentação necessária e revisamos frequentemente.
                    </p>
                    <p className="text-gray-700">
                      Este processo é ágil, iterativo e prático, aproximando você de uma resolução eficaz e bem fundamentada.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 4 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.5
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-400 flex items-center justify-center text-gray-700">
                      <Settings size={24} />
                    </div>                    <h2 className="text-2xl font-bold text-gray-900">Etapa 4: Preparação para Ação Judicial</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Em seguida, preparamos o caso para uma ação judicial eficaz. Refinamos a petição inicial para máxima eficiência processual, selecionamos os fundamentos jurídicos mais sólidos e garantimos qualidade em todas as etapas do processo.
                    </p>
                    <p className="text-gray-700">
                      Se você já tem um advogado de confiança, trabalharemos em colaboração. Se não, oferecemos representação completa. Em ambos os casos, integraremos nossa expertise jurídica de forma eficiente ao processo.
                    </p>
                  </div>
                </motion.div>
                
                {/* Arrow divider */}
                <div className="flex justify-center my-6">
                  <ArrowRight size={24} className="text-gray-400" />
                </div>

                {/* Step 5 */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.6
          }} className="mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-500 flex items-center justify-center text-white">
                      <Rocket size={24} />
                    </div>                    <h2 className="text-2xl font-bold text-gray-900">Etapa 5: Resultado Exitoso</h2>
                  </div>
                  <div className="pl-16">
                    <p className="text-gray-700 mb-4">
                      Finalmente, chegamos ao resultado. Você obtém a decisão judicial favorável para sua revisão de aposentadoria, com valores recalculados e processo completamente resolvido. A Dias & Barbosa oferece suporte contínuo para garantir o cumprimento da decisão—desde o acompanhamento da implementação até o recebimento dos valores devidos.
                    </p>
                  </div>
                </motion.div>

                {/* Why Choose WRLDS */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.7
          }} className="mt-12 bg-gray-50 p-8 rounded-xl border border-gray-100">                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Por que Escolher a Dias & Barbosa?</h2>
                  <p className="text-gray-700 mb-4">
                    Lidar com questões jurídicas pode ser complexo, mas nós tornamos simples. Clientes nos escolhem porque:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <FileText size={18} />
                      </div>                      <div>
                        <h3 className="font-semibold">Processo Claro</h3>
                        <p className="text-sm text-gray-600">Etapas simples, prazos claros e riscos reduzidos.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <Clock size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Agilidade & Flexibilidade</h3>
                        <p className="text-sm text-gray-600">Análises rápidas e estratégias ágeis levam seu caso à resolução mais rapidamente.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <Settings size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Expertise Abrangente</h3>
                        <p className="text-sm text-gray-600">Especialistas em direito previdenciário, civil e criminal sob o mesmo teto.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="bg-gray-200 p-2 rounded-full text-gray-700">
                        <CheckCircle size={18} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Resultados Práticos</h3>
                        <p className="text-sm text-gray-600">Testes e análises do mundo real garantem que sua resolução atenda às necessidades reais.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Call to Action */}
                <motion.div initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.8
          }} className="mt-12 text-center">                  <p className="text-gray-700 mb-6">
                    Tem uma questão jurídica ou está pronto para resolver um caso existente? Adoraríamos ouvir de você e ajudar a dar vida à sua solução. Entre em contato e vamos começar!
                  </p>
                  <Link to="/contact">
                    <Button size="lg">Entre em Contato</Button>
                  </Link>
                </motion.div>
              </motion.div> : isSensorPost ? 
              <motion.div initial={{
                opacity: 0
              }} animate={{
                opacity: 1
              }} transition={{
                duration: 0.6,
                delay: 0.2
              }} className="prose prose-lg max-w-none prose-neutral">
                {/* Sensor post with black and white style */}
                {post.content.map((section, index) => (
                  <motion.div key={index} initial={{
                    opacity: 0,
                    y: 10
                  }} animate={{
                    opacity: 1,
                    y: 0
                  }} transition={{
                    duration: 0.4,
                    delay: 0.1 * index
                  }} className={cn("mb-8", section.type === 'quote' && "my-10")}>
                    {section.type === 'paragraph' && (
                      <p className="text-gray-800 mb-4 leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    
                    {section.type === 'heading' && (
                      <div className="flex items-center gap-3 mt-12 mb-6 border-b border-gray-200 pb-2">
                        {section.content === 'The Shift from Manual Testing to Sensor-Driven Insights' && (
                          <Lightbulb size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Real-time Performance Measurement Made Easy' && (
                          <Zap size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Faster Iterations Through Automated Testing and AI' && (
                          <BarChart size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Key Business Benefits' && (
                          <Target size={24} className="text-gray-800" />
                        )}
                        {section.content === 'Ready to Transform Your Product Development?' && (
                          <Rocket size={24} className="text-gray-800" />
                        )}
                        <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                      </div>
                    )}
                    
                    {section.type === 'subheading' && (
                      <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                        {section.content === 'Reduced Testing Costs' && (
                          <DollarSign size={18} className="text-gray-700" />
                        )}
                        {section.content === 'Shorter Time-to-Market' && (
                          <Clock size={18} className="text-gray-700" />
                        )}
                        {section.content === 'Enhanced Product Quality' && (
                          <CheckCircle size={18} className="text-gray-700" />
                        )}
                        {section.content === 'Stronger Decision-Making' && (
                          <Target size={18} className="text-gray-700" />
                        )}
                        {section.content}
                      </h3>
                    )}
                    
                    {section.type === 'list' && (
                      <ul className="list-disc pl-5 my-4 space-y-2">
                        {section.items?.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-gray-700">{item}</li>
                        ))}
                      </ul>
                    )}
                    
                    {section.type === 'quote' && (
                      <blockquote className="border-l-4 border-gray-600 pl-5 py-2 my-8 bg-gray-50 rounded-r-lg italic text-gray-700">
                        <div className="flex">
                          <MessageSquare size={20} className="text-gray-600 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-lg m-0">{section.content}</p>
                        </div>
                      </blockquote>
                    )}
                  </motion.div>
                ))}
              </motion.div> : <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="prose prose-lg max-w-none">
                {/* Standard post rendering */}
                {post.content.map((section, index) => <motion.div key={index} initial={{
            opacity: 0,
            y: 10
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.4,
            delay: 0.1 * index
          }} className={cn("mb-8", section.type === 'quote' && "my-10")}>
                    {section.type === 'paragraph' && <p className="text-gray-700 mb-4 leading-relaxed">
                      {section.content}
                    </p>}
                    {section.type === 'heading' && <div className="flex items-center gap-3 mt-12 mb-6">
                        <div className="w-1.5 h-7 bg-purple-500 rounded-full"></div>
                        <h2 className="text-2xl font-bold text-gray-900">{section.content}</h2>
                      </div>}
                    {section.type === 'subheading' && <h3 className="text-xl font-bold mt-8 mb-3 text-gray-800 flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        {section.content}
                      </h3>}
                    {section.type === 'list' && <ul className="list-disc pl-5 my-4 space-y-2">
                        {section.items?.map((item, itemIndex) => <li key={itemIndex} className="text-gray-700">{item}</li>)}
                      </ul>}
                    {section.type === 'quote' && <blockquote className="border-l-4 border-purple-500 pl-5 py-2 my-8 bg-purple-50 rounded-r-lg italic text-gray-700">
                        <div className="flex">
                          <MessageSquare size={20} className="text-purple-500 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-lg m-0">{section.content}</p>
                        </div>
                      </blockquote>}
                  </motion.div>)}
              </motion.div>}
            
            <Separator className="my-8" />
            
            <div className="flex flex-col sm:flex-row items-center justify-between py-6 bg-gray-50 rounded-lg p-6 shadow-sm">              <div>
                <p className="text-sm text-gray-600 font-medium">Categoria: {post.category}</p>
              </div>
            </div>
          </div>}
      </div>
    </PageLayout>;
};
export default BlogPostDetail;

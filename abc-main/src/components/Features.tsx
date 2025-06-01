import { useEffect, useRef, useState } from 'react';
import { Scale, Shield, Users, Gavel, ArrowRight, FileText, BookOpen, Calculator, CheckCircle, Trophy, Building, MessageSquare, HandHeart, RefreshCcw, MessageSquare as Chat } from "lucide-react";
import { cn } from '@/lib/utils';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from 'react-router-dom';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { useScrollHijack } from '@/hooks/useScrollHijack';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const hijackSectionRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const [progressValue, setProgressValue] = useState(0);
  const [currentSprint, setCurrentSprint] = useState(1);
  const totalSprints = 3;
  const isMobile = useIsMobile();
  const features = [
    {
      icon: <Scale className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Direito Previdenciário",
      description: "Análise especializada em benefícios previdenciários, revisões de aposentadoria e direitos junto ao INSS com estratégias personalizadas.",
      image: "/IMG/05_direito_tributario.png"
    },
    {
      icon: <Shield className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Direito Criminal",
      description: "Defesa criminal técnica e estratégica, proteção de direitos fundamentais e acompanhamento em todas as fases processuais.",
      image: "/IMG/03_direito_penal.png"
    },
    {
      icon: <Users className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Direito Civil",
      description: "Resolução de conflitos patrimoniais, contratuais e familiares através de negociação, mediação ou litígio estratégico.",
      image: "/IMG/08_direito_civil.png"
    },
    {
      icon: <Gavel className="w-10 h-10 text-white transition-transform duration-300 transform" />,
      title: "Consultoria Jurídica",
      description: "Assessoria preventiva e estratégica para empresas e indivíduos, minimizando riscos e otimizando decisões.",
      image: "/IMG/01_direito_constitucional.png"
    }
  ];

  const { isHijacked, currentIndex } = useScrollHijack(hijackSectionRef, features.length);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact-info');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-in');
          (entry.target as HTMLElement).style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });
    if (featuresRef.current) {
      const elements = featuresRef.current.querySelectorAll('.feature-item');
      elements.forEach(el => {
        if (!el.classList.contains('animate-slide-in')) {
          (el as HTMLElement).style.opacity = '0';
          observer.observe(el);
        }
      });
    }
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    let interval: NodeJS.Timeout;
    const animateProgress = () => {
      setProgressValue(0);
      interval = setInterval(() => {
        setProgressValue(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentSprint(prev => prev < totalSprints ? prev + 1 : 1);
              animateProgress();
            }, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 100);
    };
    animateProgress();
    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);
  const sensorCaseStudies = [{
    image: "/IMG/Direito Previdenciário.jpg",
    title: "Revisão de Aposentadoria",
    description: "Análise técnica detalhada de benefícios previdenciários com cálculos atuariais e estratégia processual para maximizar valores."
  }, {
    image: "/IMG/Direito Criminal.jpg",
    title: "Defesa Criminal Estratégica",
    description: "Acompanhamento completo em processos criminais com análise de provas, recursos e proteção de direitos fundamentais."
  }, {
    image: "/IMG/Direito Civil.jpg",
    title: "Resolução de Conflitos Cíveis",
    description: "Mediação e litígio em questões contratuais, indenizatórias e patrimoniais com foco em resultados eficazes."
  }, {
    image: "/IMG/Consultoria Jurídica.jpg",
    title: "Consultoria Jurídica Empresarial",
    description: "Assessoria preventiva e estratégica para empresas, incluindo compliance, contratos e estruturação jurídica."
  }, {
    image: "/IMG/10_direito_do_trabalho.webp",
    title: "Direito Trabalhista",
    description: "Defesa em ações trabalhistas, assessoria em relações de trabalho e compliance em normas trabalhistas."
  }, {
    image: "/IMG/13_direito_familia_sucessoes.webp",
    title: "Direito de Família e Sucessões",
    description: "Inventários, partilhas, divórcios e questões familiares com abordagem sensível e técnica especializada."
  }, {
    image: "/IMG/05_direito_tributario.png",
    title: "Direito Tributário",
    description: "Planejamento tributário, defesa fiscal e otimização de carga tributária para pessoas físicas e jurídicas."
  }, {
    image: "/IMG/12_direito_ambiental.webp",
    title: "Direito Ambiental",
    description: "Licenciamento ambiental, defesa em autuações e assessoria em questões de sustentabilidade empresarial."
  }];  const stepFlowItems = [{
    icon: <BookOpen className="h-10 w-10 text-gray-700" />,
    title: "Expertise Jurídica Especializada",
    description: "Nossa competência central desenvolvida através de anos de experiência"
  }, {
    icon: <Building className="h-10 w-10 text-gray-700" />,
    title: "Rede de Especialistas Credenciados",
    description: "Parceiros especializados cuidadosamente selecionados que complementam nossa expertise"
  }, {
    icon: <HandHeart className="h-10 w-10 text-gray-700" />,
    title: "Parceiros de Confiança Validados",
    description: "Rede de profissionais especialistas para qualidade e confiabilidade"
  }];  const sprintPhases = [{
    name: "Planejamento",
    icon: <CheckCircle className="h-4 w-4" />
  }, {
    name: "Análise",
    icon: <Calculator className="h-4 w-4" />
  }, {
    name: "Estratégia",
    icon: <FileText className="h-4 w-4" />
  }, {
    name: "Execução",
    icon: <RefreshCcw className="h-4 w-4" />
  }];

  return <>
      <section id="features" className="relative bg-white overflow-hidden py-10 md:py-[50px] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8" ref={featuresRef}>          <div className="text-center mb-10 max-w-3xl mx-auto feature-item">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Áreas de Especialização Jurídica
            </div>
            <p className="text-gray-600 mt-4">
              Nossa expertise jurídica transforma desafios legais complexos em soluções estratégicas inteligentes que protegem direitos, minimizam riscos e maximizam resultados em diversas áreas do direito.
            </p>
          </div>
          
          {/* Scroll-hijacked features section */}
          <div 
            ref={hijackSectionRef}
            className={cn(
              "relative transition-all duration-500",
              isHijacked ? "fixed inset-0 z-50 bg-black" : "grid grid-cols-1 md:grid-cols-2 gap-5"
            )}
            style={{ height: isHijacked ? '100vh' : 'auto' }}
          >
            {isHijacked && (
              <div className="absolute top-4 right-4 z-10 text-white text-sm opacity-70">
                {currentIndex + 1} / {features.length}
              </div>
            )}
            
            {features.map((feature, index) => (
              <div 
                key={index} 
                className={cn(
                  "feature-item rounded-xl overflow-hidden transform transition-all duration-500 relative shadow-lg",
                  isHijacked 
                    ? cn(
                        "absolute inset-0 w-full h-full",
                        index === currentIndex 
                          ? "opacity-100 translate-x-0" 
                          : index < currentIndex 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      )
                    : "hover:-translate-y-1 h-[280px]"
                )}
                style={{
                  transitionDelay: isHijacked ? '0ms' : `${index * 100}ms`
                }}
                onMouseEnter={() => !isHijacked && setHoveredFeature(index)} 
                onMouseLeave={() => !isHijacked && setHoveredFeature(null)}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img 
                    src={feature.image} 
                    alt={feature.title} 
                    className={cn(
                      "w-full h-full object-cover transition-all duration-300",
                      isHijacked ? "grayscale-0" : "grayscale"
                    )} 
                  />
                  <div className={cn(
                    "absolute inset-0 transition-opacity duration-300",
                    isHijacked 
                      ? "bg-black/40" 
                      : hoveredFeature === index 
                        ? "bg-black/50" 
                        : "bg-black/70"
                  )}></div>
                </div>
                
                <div className={cn(
                  "relative z-10 flex flex-col justify-center",
                  isHijacked 
                    ? "p-16 h-full text-center items-center" 
                    : "p-6 h-full justify-between"
                )}>
                  <div className={isHijacked ? "space-y-8" : ""}>
                    <div className={cn(
                      "inline-block p-3 bg-gray-800/40 backdrop-blur-sm rounded-lg transition-all duration-300 transform",
                      isHijacked 
                        ? "mb-6 scale-150" 
                        : hoveredFeature === index 
                          ? "mb-4 hover:scale-110" 
                          : "mb-4"
                    )}>
                      <div className={`transform transition-transform duration-300 ${!isHijacked && hoveredFeature === index ? 'rotate-12' : ''}`}>
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className={cn(
                      "font-semibold text-white",
                      isHijacked ? "text-4xl mb-6" : "text-xl mb-2"
                    )}>
                      {feature.title}
                    </h3>
                    <p className={cn(
                      "text-white/90",
                      isHijacked ? "text-lg max-w-2xl" : "text-sm"
                    )}>
                      {feature.description}
                    </p>
                  </div>
                  {!isHijacked && (
                    <div className={`h-0.5 bg-white/70 mt-3 transition-all duration-500 ${hoveredFeature === index ? 'w-full' : 'w-0'}`}></div>
                  )}
                </div>
              </div>
            ))}
            
            {isHijacked && (
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white text-center">
                <div className="flex space-x-2 mb-4">
                  {features.map((_, index) => (
                    <div 
                      key={index}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === currentIndex ? "bg-white w-8" : "bg-white/50"
                      )}
                    />
                  ))}
                </div>                <p className="text-sm opacity-70">
                  {isMobile ? "Deslize" : "Role"} para continuar • Pressione ESC para sair
                </p>
              </div>
            )}
          </div>

          <div className="mt-16 mb-8 feature-item">            <div className="text-center mb-8">
              <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                Especialização em Ação
              </div>
              <h3 className="text-2xl font-bold">Casos Práticos do Mundo Real</h3>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Explore como nossa expertise jurídica é aplicada em diferentes contextos profissionais, 
                desde questões previdenciárias até defesa criminal e resolução de conflitos cíveis.
                <span className="block text-sm mt-1 text-blue-500">Deslize horizontalmente para ver mais exemplos →</span>
              </p>
            </div>
            
            <div className="rounded-xl overflow-hidden bg-white p-4 feature-item">
              <Carousel className="w-full max-w-7xl mx-auto">
                <CarouselContent className="flex">
                  {sensorCaseStudies.map((study, index) => <CarouselItem key={index} className="md:basis-1/3 flex-shrink-0">
                      <Card className="border border-gray-100 shadow-md">
                        <CardContent className="p-0">
                          <div className="w-full h-full">
                            <img src={study.image} alt={study.title} className="w-full h-48 object-cover" />
                          </div>
                          <div className="p-4">
                            <h4 className="font-semibold text-lg">{study.title}</h4>
                            <p className="text-sm text-gray-600 mt-2">{study.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>)}
                </CarouselContent>
                <div className="flex justify-center mt-6 gap-2">
                  <CarouselPrevious className="relative static left-auto translate-y-0 hover:bg-gray-100" />
                  <CarouselNext className="relative static right-auto translate-y-0 hover:bg-gray-100" />
                </div>
              </Carousel>              <div className="text-center mt-6 text-sm text-gray-600">
                <p className="font-medium">Estes exemplos mostram apenas algumas das maneiras como nossa expertise jurídica pode proteger seus direitos e interesses</p>
              </div>
            </div>
          </div>
        </div>        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto">
            Precisa de Soluções Personalizadas?
            <Chat className="ml-2 w-4 h-4 group-hover:animate-pulse" />
          </Button>
          
          <Button onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 py-3 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group w-full sm:w-auto">
            Saiba Mais Sobre Nossa Expertise
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </section>
      
      <section id="technology" className="bg-gray-50 py-10 md:py-16">
        <div className="w-full px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">          <div className="text-center mb-12">
            <div className="inline-block mb-2 px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Nossa Abordagem
            </div>
            <h2 className="text-3xl font-bold mb-4">Como nossa expertise funciona</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A Dias & Barbosa constrói soluções jurídicas com expertise especializada e parcerias estratégicas, 
              permitindo-nos desenvolver estratégias completamente personalizadas com alta velocidade e menor risco.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 mb-10 transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {stepFlowItems.map((item, index) => <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 h-full cursor-pointer">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-gray-50 rounded-full p-4 mb-4">
                          {item.icon}
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80 shadow-lg">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{item.title}</h4>
                      <p className="text-sm">{item.description}</p>                      {index === 0 && <p className="text-xs text-gray-500">Nossa expertise jurídica especializada fornece a base fundamental de cada solução que construímos.</p>}
                      {index === 1 && <p className="text-xs text-gray-500">Selecionamos cuidadosamente os melhores especialistas para complementar nossa expertise jurídica.</p>}
                      {index === 2 && <p className="text-xs text-gray-500">Nossa rede de parceiros garante qualidade e execução em escala.</p>}
                    </div>
                  </HoverCardContent>
                </HoverCard>)}
            </div>

            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-6 mb-10 shadow-md">                <div className="max-w-3xl mx-auto">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">Projeto de Consultoria</h3>
                    </div>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Desenvolvimento Iterativo</span>
                      <RefreshCcw className="h-5 w-5 text-gray-600 animate-rotate-slow" />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">Trabalhando de forma iterativa com clientes para adaptar soluções às suas necessidades</p>
                
                <div className="relative mb-2">
                  <Progress value={progressValue} className="h-3 bg-gray-200" />
                </div>
                
                <div className={cn("grid gap-1 mt-4", isMobile ? "grid-cols-2 gap-y-2" : "grid-cols-4")}>
                  {sprintPhases.map((phase, index) => <div key={index} className={cn("text-center p-2 rounded transition-all", progressValue >= index / sprintPhases.length * 100 && progressValue < (index + 1) / sprintPhases.length * 100 ? "bg-blue-50 border border-blue-100" : "bg-gray-50")}>
                      <div className="flex flex-col items-center">
                        <div className={cn("rounded-full p-1 mb-1", progressValue >= index / sprintPhases.length * 100 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-500")}>
                          {phase.icon}
                        </div>
                        <span className="text-xs font-medium">{phase.name}</span>
                      </div>
                    </div>)}
                </div>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-6 gap-2">
                  <div className="flex items-center">
                    <div className="bg-green-100 rounded-full p-1 mr-2 shrink-0">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                    </div>                    <span className="text-sm text-gray-600">Feedback do cliente integrado em cada etapa</span>
                  </div>
                  <div className="text-sm text-gray-500 flex items-center mt-2 sm:mt-0">
                    <span className="mr-2">Melhoria contínua</span>
                    <div className="flex space-x-1">
                      <span className="inline-block w-2 h-2 bg-gray-300 rounded-full animate-pulse"></span>
                      <span className="inline-block w-2 h-2 bg-gray-400 rounded-full animate-pulse animation-delay-200"></span>
                      <span className="inline-block w-2 h-2 bg-gray-500 rounded-full animate-pulse animation-delay-400"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-16 mb-10">
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gray-300 to-gray-400"></div>
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-full -mt-3">
                <div className="bg-gray-400 rounded-full p-1">
                  <ArrowRight className="w-5 h-5 text-white rotate-90" />
                </div>
              </div>
              
              <div className="md:hidden flex justify-center items-center h-full">
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
                <div className="bg-gray-400 rounded-full p-1 mx-2">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
                <div className="w-1/3 h-0.5 bg-gray-300"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-gray-100 via-white to-gray-100 rounded-lg p-8 max-w-xl mx-auto text-center shadow-md hover:shadow-lg transition-all duration-300">              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-black/10 rounded-full animate-pulse-slow"></div>
                <div className="relative bg-white rounded-full p-4 border border-gray-200 shadow-md">
                  <Trophy className="h-10 w-10 text-gray-700" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Resultado Alcançado</h3>
              <p className="text-gray-700">Pronto para implementar, executar e obter sucesso</p>
              <div className="flex justify-center mt-4 space-x-2">
                <span className="inline-block w-3 h-3 rounded-full bg-gray-300 animate-pulse"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-500 animate-pulse animation-delay-200"></span>
                <span className="inline-block w-3 h-3 rounded-full bg-gray-700 animate-pulse animation-delay-400"></span>
              </div>
            </div>
          </div>
            <div className="text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/tech-details" onClick={() => window.scrollTo(0, 0)} className="inline-flex items-center px-4 sm:px-6 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:shadow-md transition-all group py-3 w-full sm:w-auto justify-center">
                Saiba Mais Sobre Nossa Expertise
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Button onClick={scrollToContact} className="inline-flex items-center px-4 sm:px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-lg shadow-md hover:shadow-lg transition-all group w-full sm:w-auto justify-center">
                Fale com Nossos Especialistas
                <Chat className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default Features;

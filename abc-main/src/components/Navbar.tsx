import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, ChevronDown, Settings, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full", isScrolled ? "bg-white shadow-sm" : "bg-black")} initial={{
      opacity: 1,
      y: 0
    }} animate={{
      opacity: 1,
      y: 0
    }}>
      <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img 
                src="/logo-vb.png" 
                alt="Dias & Barbosa Advocacia - Assessoria Jurídica Personalizada" 
                className={cn("h-12 w-auto transition-all duration-300", isScrolled ? "h-10" : "h-12")} 
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu className={cn(isScrolled ? "" : "text-white")}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/">                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Início
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/about">                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Sobre Nós
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Casos de Sucesso
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">                      <li>                        <Link to="/casos/previdenciario" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Revisão de Aposentadoria</div>
                          <p className="text-sm text-gray-500">Casos exitosos em direito previdenciário</p>
                        </Link>
                      </li>
                      <li>                        <Link to="/casos/criminal" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Defesa Criminal</div>
                          <p className="text-sm text-gray-500">Advocacia especializada em direito penal</p>
                        </Link>
                      </li>
                      <li>                        <Link to="/casos/civil" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Responsabilidade Civil</div>
                          <p className="text-sm text-gray-500">Ações de indenização e reparação de danos</p>
                        </Link>
                      </li>                      <li>                        <Link to="/casos/consultoria" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Consultoria Jurídica</div>
                          <p className="text-sm text-gray-500">Assessoria legal preventiva para empresas</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/casos/trabalhista" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Direito do Trabalho</div>
                          <p className="text-sm text-gray-500">Proteção dos direitos trabalhistas</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                  <NavigationMenuItem>
                  <NavigationMenuTrigger className={cn(isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                    Saiba Mais
                  </NavigationMenuTrigger>                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <Link to="/metodologia" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Nossa Metodologia</div>
                          <p className="text-sm text-gray-500">Como nossa abordagem jurídica funciona</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/processo-juridico" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Processo Jurídico</div>
                          <p className="text-sm text-gray-500">Nossa abordagem para criar soluções personalizadas</p>
                        </Link>
                      </li>
                      <li>
                        <Link to="/por-que-escolher" className="block p-3 space-y-1 rounded-md hover:bg-gray-100">
                          <div className="font-medium">Por Que Escolher</div>
                          <p className="text-sm text-gray-500">Os diferenciais do nosso escritório</p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>                <NavigationMenuItem>
                  <Link to="/noticias">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Notícias Jurídicas
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/carreiras">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      Carreiras
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/client-area">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      <Users className="h-4 w-4 mr-2" />
                      Cliente
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link to="/auth">
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), isScrolled ? "text-gray-700 hover:text-gray-900" : "text-gray-100 hover:text-white bg-transparent hover:bg-gray-800")}>
                      <Settings className="h-4 w-4 mr-2" />
                      Admin
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <button onClick={() => scrollToSection('contact')} className={cn("px-4 py-2 rounded-md transition-colors", isScrolled ? "bg-gray-200 text-gray-700 hover:bg-gray-300" : "bg-gray-700 text-white hover:bg-gray-600")}>
                    Entre em Contato
                  </button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className={cn("focus:outline-none", isScrolled ? "text-gray-700" : "text-white")}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={cn("md:hidden transition-all duration-300 overflow-hidden w-full", isMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0")}>
        <div className={cn("px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-sm", isScrolled ? "bg-white" : "bg-black")}>          <Link to="/" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Início
          </Link>
          
          <Link to="/about" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Sobre Nós
          </Link>
          
          <div className="block">            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <span>Casos de Sucesso</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            
            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/casos/previdenciario" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Revisão de Aposentadoria
              </Link>
              <Link to="/casos/criminal" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Defesa Criminal
              </Link>
              <Link to="/casos/civil" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Responsabilidade Civil
              </Link>
              <Link to="/casos/consultoria" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Consultoria Jurídica
              </Link>
              <Link to="/casos/trabalhista" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Direito do Trabalho
              </Link>
            </div>
          </div>
          
          <div className="block">            <button onClick={e => {
              e.preventDefault();
              const submenu = e.currentTarget.nextElementSibling;
              if (submenu) {
                submenu.classList.toggle('hidden');
              }
            }} className={cn("flex w-full justify-between items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")}>
              <span>Saiba Mais</span>
              <ChevronDown className="h-4 w-4" />
            </button>            <div className="hidden ml-4 mt-1 space-y-1">
              <Link to="/metodologia" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Nossa Metodologia
              </Link>
              <Link to="/processo-juridico" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Processo Jurídico
              </Link>
              <Link to="/por-que-escolher" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
                setIsMenuOpen(false);
                window.scrollTo(0, 0);
              }}>
                Por Que Escolher
              </Link>
            </div>
          </div>            <Link to="/noticias" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Notícias Jurídicas
          </Link>
          
          <Link to="/carreiras" className={cn("block px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            Carreiras
          </Link>
            <button onClick={() => scrollToSection('contact')} className={cn("block w-full text-left px-3 py-2 rounded-md", isScrolled ? "text-gray-700 bg-gray-200 hover:bg-gray-300" : "text-white bg-gray-700 hover:bg-gray-600")}>
            Entre em Contato
          </button>
          
          <Link to="/client-area" className={cn("flex items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            <Users className="h-5 w-5 mr-2" />
            <span>Cliente</span>
          </Link>
          
          <Link to="/auth" className={cn("flex items-center px-3 py-2 rounded-md", isScrolled ? "text-gray-700 hover:bg-gray-50" : "text-gray-200 hover:bg-gray-900")} onClick={() => {
            setIsMenuOpen(false);
            window.scrollTo(0, 0);
          }}>
            <Settings className="h-5 w-5 mr-2" />
            <span>Admin</span>
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

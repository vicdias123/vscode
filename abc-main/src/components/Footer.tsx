
import { Linkedin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-8 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 pb-10 border-b border-gray-700">
          <div className="lg:col-span-2">
            <img 
              src="/logo-vb.png" 
              alt="Dias & Barbosa Advocacia - Assessoria Jurídica Personalizada" 
              className="h-12 w-auto mb-6" 
            />
            <p className="text-gray-300 mb-6">
              Dias & Barbosa Advocacia oferece assessoria jurídica completa em diversas áreas do direito,
              conectando clientes a soluções jurídicas personalizadas desde 2021.
            </p>
            <p className="text-gray-300 mb-6">
              Serviços Jurídicos Profissionais<br />
              Atendimento em todo o território nacional
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/in/vitor-dias-barbosa-00b9121b0/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/VITORDIASBARBOSA" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Empresa</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">Sobre Nós</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white transition-colors">Carreiras</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">Contato Direto</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.linkedin.com/in/vitor-dias-barbosa-00b9121b0/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.instagram.com/VITORDIASBARBOSA" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="tel:+5511910322670" 
                  className="text-gray-300 hover:text-white transition-colors flex items-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 91032-2670
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center">          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Dias & Barbosa Advocacia. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy-policy" className="text-sm text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

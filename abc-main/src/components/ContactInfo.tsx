
import React from 'react';
import { Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Entre em Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Fale Conosco
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Tem dúvidas sobre nossos serviços jurídicos? Entre em contato com nosso especialista e vamos discutir como podemos ajudar a proteger seus direitos e interesses.
          </p>
        </div>

        <div className="flex justify-center">
          {/* Vitor Dias Barbosa Contact Info */}
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 border border-gray-700 max-w-md w-full">
            <div className="flex flex-col items-center text-center">
              <img 
                src="/IMG/03_direito_penal.png"
                alt="Vitor Dias Barbosa"
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900">Vitor Dias Barbosa</h3>
              <p className="text-gray-600 mb-4">Advogado</p>
              <div className="flex flex-col space-y-3">
                <a href="tel:+5511910322670" className="flex items-center text-gray-700 hover:text-blue-600">
                  <Phone className="w-5 h-5 mr-2" />
                  (11) 91032-2670
                </a>
                <a 
                  href="https://www.linkedin.com/in/vitor-dias-barbosa-00b9121b0/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <Linkedin className="w-5 h-5 mr-2" />
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/VITORDIASBARBOSA" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-blue-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfo;

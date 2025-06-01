import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import PageLayout from '@/components/PageLayout';
const PrivacyPolicy = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageLayout>
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center text-gray-500 hover:text-gray-700 mb-6 transition-colors">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar para Início
            </Link>
            
            <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">Última atualização: 11 de abril de 2025</p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introdução</h2>
              <p className="text-gray-600 mb-4">
                Na Dias & Barbosa Legal Services ("nós", "nosso" ou "nossa"), respeitamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos seus dados ao visitar nosso site ou utilizar nossos serviços.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">2. Informações que Coletamos</h2>
              <p className="text-gray-600 mb-4">
                Poderemos coletar informações pessoais que você nos fornece voluntariamente quando:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Entrar em contato através do site</li>
                <li>Assinar nossa newsletter</li>
                <li>Preencher formulários de consulta</li>
                <li>Participar de pesquisas ou eventos promocionais</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Essas informações podem incluir nome, e-mail, telefone, empresa e qualquer outro dado que você opte por fornecer.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">3. Como Utilizamos suas Informações</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos suas informações para diversos fins, incluindo:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-600">
                <li>Prestar e gerenciar nossos serviços</li>
                <li>Personalizar e melhorar a experiência do usuário</li>
                <li>Comunicar atualizações, eventos e materiais informativos</li>
                <li>Processar solicitações e responder dúvidas</li>
                <li>Realizar análises internas para desenvolvimento de novos serviços</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">4. Cookies e Tecnologias de Rastreamento</h2>
              <p className="text-gray-600 mb-4">
                Utilizamos cookies e tecnologias semelhantes para melhorar a navegação e analisar o uso do site. Você pode configurar seu navegador para recusar cookies ou ser notificado quando um cookie for enviado.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">5. Serviços de Terceiros</h2>
              <p className="text-gray-600 mb-4">
                Podemos usar serviços de terceiros para coleta e análise de dados. Estes terceiros possuem suas próprias políticas de privacidade.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">6. Retenção de Dados</h2>
              <p className="text-gray-600 mb-4">
                Manteremos suas informações enquanto forem necessárias para os fins desta política ou conforme exigido por lei.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">7. Segurança</h2>
              <p className="text-gray-600 mb-4">
                Empregamos medidas de segurança para proteger seus dados, mas nenhum método de transmissão ou armazenamento eletrônico é totalmente seguro.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">8. Seus Direitos</h2>
              <p className="text-gray-600 mb-4">
                Dependendo de sua jurisdição, você pode solicitar acesso, correção ou exclusão de seus dados pessoais.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">9. Alterações nesta Política</h2>
              <p className="text-gray-600 mb-4">
                Podemos atualizar esta política periodicamente. Notificaremos sobre mudanças através de aviso em nosso site ou por e-mail.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">10. Contato</h2>
              <p className="text-gray-600 mb-4">
                Se tiver dúvidas sobre esta Política de Privacidade, entre em contato pelo e-mail <a href="mailto:privacy@diasbarbosa.com" className="text-blue-600 hover:underline">privacy@diasbarbosa.com</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>;
};
export default PrivacyPolicy;
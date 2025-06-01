import ProjectPageLayout from '@/components/ProjectPageLayout';
import { Scale, Gavel, Users, FileText, BarChart3 } from 'lucide-react';

const HockeyProject = () => {
  return (
    <ProjectPageLayout
      title="Direito Empresarial e Contratos"
      subtitle="Assessoria jurídica especializada para empresas esportivas"
      imageUrl="/IMG/11_direito_processual_civil.webp"
      brandName="Mars Sports Equipment Ltd."
    >
      <h2 className="text-3xl font-bold mb-6">Caso: Estruturação Jurídica para Empresa de Equipamentos Esportivos</h2>
      
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-semibold mb-2">Contexto</h3>
        <p>
          A Mars Sports Equipment Ltd., líder em inovação de equipamentos de hockey, precisava de assessoria 
          jurídica abrangente para expandir suas operações no Brasil. O escritório Dias & Barbosa foi contratado 
          para estruturar toda a operação legal da empresa, desde contratos de distribuição até proteção de 
          propriedade intelectual e compliance regulatório.
        </p>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4">Desafio</h3>
      <p>
          A empresa enfrentava múltiplos desafios legais: necessidade de estruturação societária no Brasil, 
          proteção de tecnologias proprietárias, negociação de contratos complexos com atletas profissionais, 
          e conformidade com regulamentações esportivas nacionais e internacionais. Era essencial criar uma 
          estrutura legal robusta que permitisse crescimento seguro no mercado brasileiro.
      </p>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Soluções Implementadas</h3>
      <p>
        O escritório Dias & Barbosa desenvolveu um pacote completo de serviços jurídicos que incluiu:
      </p>
      
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Scale className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Estruturação Societária</h4>
            <p>Constituição de subsidiária brasileira com estrutura otimizada para operações esportivas.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Gavel className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Contratos Esportivos</h4>
            <p>Elaboração de contratos com atletas profissionais e patrocinadores esportivos.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <FileText className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Propriedade Intelectual</h4>
            <p>Registro e proteção de patentes, marcas e tecnologias inovadoras no setor esportivo.</p>
          </div>
        </div>
        
        <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100 flex items-start">
          <Users className="h-6 w-6 text-black mr-3 flex-shrink-0 mt-1" />
          <div>
            <h4 className="text-lg font-semibold mb-2 text-gray-700">Compliance Regulatório</h4>
            <p>Adequação às normas esportivas nacionais e internacionais, incluindo anti-doping.</p>
          </div>
        </div>
      </div>
      
      <h4 className="text-xl font-semibold mb-4">Serviços Prestados</h4>
      <ul className="list-disc pl-6 space-y-2 mb-8">
        <li>Constituição de subsidiária brasileira com proteção de responsabilidade</li>
        <li>Registro de 12 patentes de tecnologias esportivas no INPI</li>
        <li>Contratos de distribuição exclusiva para o mercado sul-americano</li>
        <li>Acordo de patrocínio com 15 atletas profissionais de hockey</li>
        <li>Implementação de programa de compliance para regulamentações esportivas</li>
      </ul>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Benefícios Alcançados</h3>
      <div className="space-y-6 mb-8">
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Proteção Jurídica Integral</h4>
            <p>Empresa totalmente protegida contra riscos legais e regulatórios no mercado brasileiro.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Expansão Segura</h4>
            <p>Estrutura legal permitiu crescimento de 300% nas operações brasileiras em 2 anos.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Proteção de Inovação</h4>
            <p>Portfolio de propriedade intelectual protegido em todos os mercados relevantes.</p>
          </div>
        </div>
        
        <div className="flex items-start">
          <div className="flex-shrink-0 h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-black mr-3 mt-1">✓</div>
          <div>
            <h4 className="font-semibold">Conformidade Total</h4>
            <p>Zero violações regulatórias e compliance 100% com normas esportivas internacionais.</p>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-semibold mb-4 mt-8">Resultado</h3>
      <p>
        A estruturação jurídica implementada pelo escritório Dias & Barbosa permitiu à Mars Sports Equipment 
        estabelecer-se com segurança no mercado brasileiro e expandir para toda a América do Sul. A empresa 
        tornou-se líder regional em equipamentos de hockey de alta performance, com operações totalmente 
        conformes e protegidas juridicamente.
      </p>
      
      <div className="bg-blue-50 p-6 rounded-lg mt-8 flex items-start">
        <BarChart3 className="h-6 w-6 text-blue-500 mr-3 flex-shrink-0 mt-1" />
        <div>
          <h4 className="text-lg font-semibold mb-2 text-gray-700">Impacto Estratégico</h4>
          <p>
            O sucesso da estruturação jurídica serviu como modelo para outras empresas esportivas 
            internacionais que buscam expandir operações no Brasil, estabelecendo o escritório como 
            referência em direito esportivo empresarial.
          </p>
        </div>
      </div>
    </ProjectPageLayout>
  );
};

export default HockeyProject;

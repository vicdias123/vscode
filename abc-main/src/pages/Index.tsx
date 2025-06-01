
import PageLayout from '@/components/PageLayout';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Projects from '@/components/Projects';
import BlogPreview from '@/components/BlogPreview';
import SEO from '@/components/SEO';
import { useEffect } from 'react';

const Index = () => {
  // Fix any ID conflicts when the page loads
  useEffect(() => {
    const contactElements = document.querySelectorAll('[id="contact"]');
    if (contactElements.length > 1) {
      // If there are multiple elements with id="contact", rename one
      contactElements[1].id = 'contact-footer';
    }
  }, []);

  return (
    <PageLayout>      <SEO 
        title="Dias & Barbosa - Advocacia Especializada" 
        description="Dias & Barbosa: Escritório de advocacia especializado em direito previdenciário, criminal e civil. Soluções jurídicas eficazes e personalizadas."
        imageUrl="/logo-vb.png"
        keywords={['advocacia', 'direito previdenciário', 'direito criminal', 'direito civil', 'consultoria jurídica', 'escritório de advocacia', 'advogados especializados']}
      />
      <Hero />
      <Features />
      <Projects />
      <BlogPreview />
    </PageLayout>
  );
};

export default Index;

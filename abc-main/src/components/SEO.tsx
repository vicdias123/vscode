
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  type?: string;
  name?: string;
  imageUrl?: string;
  publishDate?: string;
  modifiedDate?: string;
  author?: string;
  category?: string;
  keywords?: string[];
  isBlogPost?: boolean;
}

const SEO: React.FC<SEOProps> = ({
  title = 'Dias & Barbosa Advocacia',
  description = 'Dias & Barbosa: Escritório de advocacia especializado em direito previdenciário, criminal e civil. Soluções jurídicas eficazes e personalizadas.',
  type = 'website',
  name = 'Dias & Barbosa Advocacia',
  imageUrl = '/logo-vb.png',
  publishDate,
  modifiedDate,
  author,
  category,
  keywords = ['advocacia', 'direito previdenciário', 'direito criminal', 'direito civil', 'consultoria jurídica', 'escritório de advocacia', 'advogados especializados'],
  isBlogPost = false
}) => {
  const location = useLocation();
  const currentUrl = `https://diasbarbosa.com.br${location.pathname}`;
  const absoluteImageUrl = imageUrl.startsWith('http') ? imageUrl : `https://diasbarbosa.com.br${imageUrl}`;

  // Create base Organization JSON-LD structured data
  const organizationStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Dias & Barbosa Advocacia',
    url: 'https://diasbarbosa.com.br',
    logo: 'https://diasbarbosa.com.br/logo-vb.png',
    description: 'Escritório de advocacia especializado em direito previdenciário, criminal e civil',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contato@diasbarbosa.com.br'
    },
    sameAs: [
      'https://www.linkedin.com/in/vitor-dias-barbosa-00b9121b0/',
      'https://www.instagram.com/VITORDIASBARBOSA'
    ]
  };

  // Create BlogPosting JSON-LD structured data if it's a blog post
  const blogPostStructuredData = isBlogPost && publishDate ? {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': currentUrl
    },
    headline: title,
    image: absoluteImageUrl,
    datePublished: publishDate,
    dateModified: modifiedDate || publishDate,
    author: {
      '@type': 'Organization',
      name: author || 'WRLDS Technologies'
    },    publisher: {
      '@type': 'Organization',
      name: 'Dias & Barbosa Advocacia',
      logo: {
        '@type': 'ImageObject',
        url: '/logo-vb.png'
      }
    },
    description: description,
    keywords: keywords.join(', ')
  } : null;

  // Combine keywords with any additional category terms
  const keywordString = category 
    ? [...keywords, category.toLowerCase()].join(', ') 
    : keywords.join(', ');

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={currentUrl} />
      <meta name="keywords" content={keywordString} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={isBlogPost ? 'article' : type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      {isBlogPost && category && <meta property="article:section" content={category} />}
      {isBlogPost && publishDate && <meta property="article:published_time" content={publishDate} />}
      {isBlogPost && modifiedDate && <meta property="article:modified_time" content={modifiedDate} />}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={currentUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImageUrl} />
      
      {/* LinkedIn specific */}
      <meta property="og:image:secure_url" content={absoluteImageUrl} />
      <meta name="author" content={author || name} />
      
      {/* Pinterest specific */}
      <meta name="pinterest:description" content={description} />
      <meta name="pinterest:image" content={absoluteImageUrl} />
      
      {/* JSON-LD structured data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationStructuredData)}
      </script>
      
      {blogPostStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(blogPostStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;

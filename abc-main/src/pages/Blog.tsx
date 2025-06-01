import PageLayout from '@/components/PageLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';

const Blog = () => {
  // Get the newest blog post for the featured post section
  const featuredPost = blogPosts.find(post => post.id === '4') || blogPosts[0]; // Feature the new post about sensor technology
  // Get the rest of the blog posts for the grid section
  const otherPosts = blogPosts.filter(post => post.id !== featuredPost?.id);
  
  return (
    <PageLayout>      <SEO 
        title="Dias & Barbosa - Notícias Jurídicas e Insights Especializados" 
        description="Fique por dentro das últimas notícias jurídicas, análises especializadas e artigos sobre direito e práticas jurídicas." 
        imageUrl={featuredPost?.imageUrl || "/IMG/02_direito_administrativo.png"} 
        keywords={[ 'direito', 'advocacia', 'jurídico', 'legislação', 'jurisprudência', 'notícias jurídicas', 'análises legais', 'direito civil', 'direito criminal', 'direito previdenciário' ]} 
        type="website"
      />
      
      <div className="w-full pt-24 pb-12 bg-gradient-to-b from-black to-gray-900 text-white">
        <div className="container mx-auto px-4">          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Dias & Barbosa — Notícias Jurídicas</h1>
            <p className="text-xl text-gray-300 mb-6">
              As últimas tendências, análises especializadas e artigos sobre direito, práticas jurídicas e soluções para seus desafios legais.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="col-span-1 md:col-span-2 lg:col-span-3">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
                <div className="grid md:grid-cols-2 h-full">
                  <div 
                    className="bg-cover bg-center h-64 md:h-full p-8 flex items-center justify-center"
                    style={{ 
                      backgroundImage: `url('${featuredPost.imageUrl}')`,
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'center'
                    }}
                  >
                    <div className="text-white text-center bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-sm font-medium inline-block mb-4">Destaque</span>
                      <h3 className="text-2xl md:text-3xl font-bold">{featuredPost.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-8">
                    <p className="text-gray-500 text-sm mb-2">Publicado em: {featuredPost.date}</p>
                    <p className="text-gray-700 mb-6">
                      {featuredPost.excerpt}
                    </p>
                    <Button variant="outline" className="group">
                      Leia mais 
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </Link>
          )}
          
          {/* Other blog posts */}
          {otherPosts.map((post) => (
            <BlogPostCard 
              key={post.id}
              title={post.title}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl || '/IMG/08_direito_civil.webp'}
              date={post.date}
              slug={post.slug}
              category={post.category}
            />
          ))}
          
          {/* If there are fewer than 3 published posts, add placeholders */}
          {blogPosts.length < 4 && Array.from({ length: Math.max(0, 4 - blogPosts.length) }).map((_, index) => (
            <BlogPostCard 
              key={`placeholder-${index}`}              title="Próximo artigo"
              excerpt="Fique atento para mais artigos interessantes sobre direito, legislação e práticas jurídicas especializadas."
              imageUrl={index % 2 === 0 ? "/IMG/02_direito_administrativo.png" : "/IMG/08_direito_civil.webp"}
              date="Em breve"
              slug="#"
              category="Próximos"
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Blog;

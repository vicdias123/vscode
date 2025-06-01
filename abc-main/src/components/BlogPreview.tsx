import { Link } from 'react-router-dom';
import { ArrowRight, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogPostCard from '@/components/BlogPostCard';
import { blogPosts } from '@/data/blogPosts';
import { ScrollArea } from '@/components/ui/scroll-area';

const BlogPreview = () => {
  // Get the most recent blog posts and ensure unique images
  const getUniqueImagePosts = () => {
    const sortedPosts = [...blogPosts]
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    const uniqueImagePosts = [];
    const usedImages = new Set<string>();
    
    for (const post of sortedPosts) {
      if (post.imageUrl && !usedImages.has(post.imageUrl)) {
        uniqueImagePosts.push(post);
        usedImages.add(post.imageUrl);
        
        if (uniqueImagePosts.length === 3) break;
      }
    }
    
    return uniqueImagePosts;
  };

  const recentPosts = getUniqueImagePosts();

  return (
    <section id="blog" className="py-12 md:py-24 px-4 md:px-12 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 md:mb-12">          <div>            <div className="flex items-center gap-2 mb-3">
              <Newspaper size={20} className="text-black" />
              <span className="text-black font-medium">Notícias Jurídicas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Últimas Atualizações</h2>
            <p className="text-gray-800 max-w-xl">
              Explore nossos insights mais recentes sobre direito, tendências jurídicas e análises especializadas.
            </p>
          </div><Link to="/blog" className="mt-4 md:mt-0">
            <Button variant="outline" className="group border-black text-black hover:bg-black hover:text-white">
              Ver Todos os Artigos
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
        
        <div className="relative">
          <ScrollArea className="w-full">
            <div className="flex gap-6 pb-4 md:hidden overflow-x-auto snap-x snap-mandatory pl-1">
              {recentPosts.map((post) => (
                <div key={post.id} className="flex-none w-[85%] snap-center">
                  <BlogPostCard
                    title={post.title}
                    excerpt={post.excerpt}
                    imageUrl={post.imageUrl}
                    date={post.date}
                    slug={post.slug}
                    category={post.category}
                  />
                </div>
              ))}
            </div>
          </ScrollArea>
          
          {/* Show grid layout on non-mobile screens */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogPostCard
                key={post.id}
                title={post.title}
                excerpt={post.excerpt}
                imageUrl={post.imageUrl}
                date={post.date}
                slug={post.slug}
                category={post.category}
              />
            ))}
          </div>
          
          <div className="mt-4 flex justify-center md:hidden">
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div 
                  key={i} 
                  className={`h-1.5 rounded-full ${i === 0 ? 'w-6 bg-gray-800' : 'w-2 bg-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;

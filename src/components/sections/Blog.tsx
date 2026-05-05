import { memo, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { parseMD } from '../../lib/blog';
import Logo from '../Logo';

const Blog = memo(() => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      // Import without eager: true to reduce initial bundle size
      const modules = (import.meta as any).glob('../../content/blog/*.md', { query: '?raw' });
      
      const postsPromises = Object.entries(modules).map(async ([path, loader]: [string, any]) => {
        const module: any = await loader();
        const content = module.default || module;
        const { data } = parseMD(content);
        return {
          ...data,
          slug: path.split('/').pop()?.replace('.md', ''),
        };
      });

      const postsData = (await Promise.all(postsPromises))
        .filter(post => post.title)
        .sort((a: any, b: any) => new Date(b.date).getTime() - new Date(a.date).getTime());
      
      setPosts(postsData);
    };

    loadPosts();
  }, []);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="py-24 md:py-32 px-6 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4 text-balance">Insights & Estratégia</h2>
          <p className="text-muted text-lg max-w-2xl text-balance">Acompanhe as últimas novidades do nosso laboratório de escala.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.slug}`} key={post.slug} className="group cursor-pointer">
              <article>
                <div className="aspect-[16/9] overflow-hidden rounded-3xl mb-6 bg-muted relative border border-border/10">
                  {post.image ? (
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        width="600" 
                        height="338" 
                        loading="lazy" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                  ) : (
                     <div className="w-full h-full bg-primary/5 flex items-center justify-center">
                       <Logo light={false} />
                     </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-primary/30" />
                    <p className="text-xs font-mono text-primary uppercase tracking-widest">
                      {post.date ? new Date(post.date).toLocaleDateString('pt-BR') : 'Recent'}
                    </p>
                  </div>
                  <h3 className="text-2xl font-headline font-bold group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                  <p className="text-muted line-clamp-3 leading-relaxed">{post.description}</p>
                  <div className="pt-4 flex items-center text-sm font-bold gap-2 text-foreground group-hover:gap-4 transition-all">
                    <span className="italic uppercase tracking-widest text-[10px]">Ler Artigo</span>
                    <ArrowRight size={16} className="text-primary" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
});

Blog.displayName = 'Blog';

export default Blog;

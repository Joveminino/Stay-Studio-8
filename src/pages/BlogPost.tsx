import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { motion } from 'motion/react';
import { parseMD } from '../lib/blog';
import { Helmet } from 'react-helmet-async';

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        const modules = (import.meta as any).glob('../content/blog/*.md', { query: '?raw', eager: true });
        const postPath = `../content/blog/${slug}.md`;
        const content = modules[postPath]?.default || modules[postPath];

        if (content) {
          const parsed = parseMD(content);
          setPost({ ...parsed.data, content: parsed.content });
        }
      } catch (error) {
        console.error('Error loading post:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
        <h1 className="text-4xl font-bold">Post não encontrado</h1>
        <Link to="/" className="text-primary hover:underline flex items-center gap-2">
          <ArrowLeft size={20} /> Voltar para o início
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>{post.title} | Stay Studio 8 Blog</title>
        <meta name="description" content={post.description} />
      </Helmet>

      {/* Header / Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border/10">
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-bold text-sm uppercase tracking-widest">Início</span>
          </Link>
          <Link to="/" className="flex flex-col -space-y-1.5 items-center">
             <span className="text-xl font-black tracking-tighter uppercase text-foreground">
               Stay<span className="text-primary">8</span>
             </span>
             <span className="text-[8px] font-bold uppercase tracking-[0.4em] translate-x-0.5 text-muted">Studio</span>
          </Link>
          <div className="w-20" /> {/* Spacer */}
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <article className="max-w-3xl mx-auto">
          {/* Post Header */}
          <header className="mb-12 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-4 text-xs font-mono font-bold text-primary uppercase tracking-widest"
            >
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{new Date(post.date).toLocaleDateString('pt-BR')}</span>
              </div>
              <div className="w-1 h-1 bg-primary/30 rounded-full" />
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>5 min de leitura</span>
              </div>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-[1.1]"
            >
              {post.title}
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-muted leading-relaxed"
            >
              {post.description}
            </motion.p>
          </header>

          {/* Featured Image */}
          {post.image && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="mb-12 aspect-[21/9] overflow-hidden rounded-[2rem] border border-border/10"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          {/* Social Share */}
          <div className="fixed left-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4">
             <button className="w-12 h-12 rounded-full border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white transition-all group">
               <Share2 size={20} />
             </button>
          </div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="markdown-body"
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => <h2 className="text-3xl font-bold mt-8 mb-4">{children}</h2>,
                h2: ({ children }) => <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>,
                h3: ({ children }) => <h3 className="text-xl font-bold mt-6 mb-3">{children}</h3>,
                p: ({ children }) => <p className="text-foreground leading-relaxed mb-6 font-medium">{children}</p>,
                ul: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground font-medium">{children}</ul>,
                ol: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-2 text-foreground font-medium">{children}</ol>,
                li: ({ children }) => <li>{children}</li>,
                a: ({ children, href }) => <a href={href} className="text-primary hover:underline font-bold" target="_blank" rel="noopener noreferrer">{children}</a>,
                blockquote: ({ children }) => <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-muted font-medium">{children}</blockquote>,
                img: ({ src, alt }) => <img src={src} alt={alt} className="rounded-2xl my-8 border border-border/10 w-full" />,
                strong: ({ children }) => <strong className="font-bold text-foreground">{children}</strong>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>

          <footer className="mt-16 pt-16 border-t border-border/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                 <LogoSubset />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-foreground">Equipe Stay Studio 8</p>
                <p className="text-sm text-muted">Especialistas em Estratégia Digital</p>
              </div>
            </div>
            
            <Link to="/" className="magnetic-btn border border-primary text-primary px-8 py-4 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all">
              Voltar ao Início
            </Link>
          </footer>
        </article>
      </main>
    </div>
  );
}

function LogoSubset() {
  return (
    <div className="relative flex flex-col items-center -space-y-1">
      <div className="w-2 h-2 border-[2px] border-primary rounded-full" />
      <div className="w-3 h-3 border-[2px] border-primary rounded-full" />
    </div>
  );
}

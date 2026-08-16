import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Calendar, 
  Clock, 
  Copy, 
  Check, 
  Tag, 
  ChevronLeft, 
  ChevronRight, 
  User, 
  AlertCircle 
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { GlassCard } from '../ui';
import { blogs, profileData } from '../../data';
import type { BlogContentBlock } from '../../types';

const CodeBlock = ({ code, language }: { code: string; language?: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative my-6 rounded-xl overflow-hidden bg-[#0D1525] border border-border-color shadow-lg group">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#090E19] border-b border-border-color/60 text-xs text-text-secondary font-mono">
        <span>{language || 'text'}</span>
        <button
          onClick={handleCopy}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-bg-card hover:bg-accent-lavender/20 hover:text-accent-lavender text-text-secondary transition-all cursor-pointer"
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <Check size={13} className="text-emerald-400" />
              <span className="text-emerald-400 font-bold">Copied!</span>
            </>
          ) : (
            <>
              <Copy size={13} />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      {/* Code contents */}
      <pre className="p-4 overflow-x-auto text-sm font-mono text-gray-200 leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const publishedBlogs = blogs.filter(b => b.published);
  const blogIndex = publishedBlogs.findIndex(b => b.slug === slug);
  const blog = blogIndex !== -1 ? publishedBlogs[blogIndex] : null;

  const prevBlog = blogIndex > 0 ? publishedBlogs[blogIndex - 1] : null;
  const nextBlog = blogIndex >= 0 && blogIndex < publishedBlogs.length - 1 ? publishedBlogs[blogIndex + 1] : null;

  // 404 State if post doesn't exist
  if (!blog) {
    return (
      <div className="section-padding min-h-[70vh] pt-32 flex flex-col justify-center items-center relative z-10">
        <div className="container mx-auto max-w-xl text-center">
          <GlassCard className="p-12 border border-border-color">
            <AlertCircle size={48} className="mx-auto text-accent-lavender mb-4" />
            <h1 className="text-3xl font-display font-bold text-text-primary mb-3">
              404 — Blog Post Not Found
            </h1>
            <p className="text-text-secondary text-base mb-8">
              The article you are looking for does not exist or may have been moved.
            </p>
            <Link 
              to="/blogs" 
              className="btn-primary inline-flex items-center gap-2 text-sm"
            >
              <ArrowLeft size={16} />
              <span>Back to Blogs</span>
            </Link>
          </GlassCard>
        </div>
      </div>
    );
  }

  return (
    <article className="section-padding min-h-screen pt-32 relative z-10">
      <div className="container mx-auto max-w-4xl">
        {/* Back Link */}
        <div className="mb-8">
          <Link 
            to="/blogs" 
            className="inline-flex items-center text-sm font-bold text-text-secondary hover:text-accent-lavender transition-colors group cursor-pointer"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Blogs</span>
          </Link>
        </div>

        {/* Article Header Card */}
        <header className="mb-12">
          <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-wider text-accent-lavender bg-accent-lavender/10 border border-accent-lavender/20 px-3 py-1 rounded-full">
              {blog.category}
            </span>
            <div className="flex items-center text-xs text-text-secondary gap-1.5">
              <Clock size={14} />
              <span>{blog.readTime}</span>
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl font-display font-bold text-text-primary mb-6 leading-tight">
            {blog.title}
          </h1>

          <p className="text-lg md:text-xl text-text-secondary leading-relaxed mb-6">
            {blog.excerpt}
          </p>

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-border-color text-xs text-text-secondary">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-1.5 font-medium text-text-primary">
                <User size={14} className="text-accent-lavender" />
                <span>{profileData.name}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar size={14} />
                <span>{blog.date}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 items-center">
              <Tag size={13} className="text-text-secondary" />
              {blog.tags.map(tag => (
                <span 
                  key={tag}
                  className="text-[11px] font-semibold text-accent-medium/80 bg-accent-medium/5 border border-accent-medium/10 px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Body Content */}
        <div className="space-y-6 text-text-secondary text-base leading-relaxed mb-16">
          {blog.content.map((block: BlogContentBlock, index: number) => {
            switch (block.type) {
              case 'paragraph':
                return (
                  <p key={index} className="leading-relaxed">
                    {block.text}
                  </p>
                );

              case 'heading':
                return block.level === 3 ? (
                  <h3 key={index} className="text-xl md:text-2xl font-bold font-display text-text-primary mt-8 mb-3">
                    {block.text}
                  </h3>
                ) : (
                  <h2 key={index} className="text-2xl md:text-3xl font-bold font-display text-text-primary mt-10 mb-4 pb-2 border-b border-border-color">
                    {block.text}
                  </h2>
                );

              case 'code':
                return (
                  <CodeBlock 
                    key={index} 
                    code={block.code || ''} 
                    language={block.language} 
                  />
                );

              case 'list':
                return (
                  <ul key={index} className="space-y-2.5 my-4 pl-2">
                    {block.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-text-secondary">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-lavender mt-2.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                );

              case 'quote':
                return (
                  <blockquote 
                    key={index}
                    className="my-6 p-5 rounded-r-xl bg-accent-lavender/5 border-l-4 border-accent-lavender italic text-text-primary font-medium"
                  >
                    "{block.text}"
                  </blockquote>
                );

              default:
                return null;
            }
          })}
        </div>

        {/* Author Bio Footer Card */}
        <div className="p-8 rounded-2xl bg-bg-card border border-border-color mb-12 shadow-md">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="w-16 h-16 rounded-full bg-accent-lavender/10 border-2 border-accent-lavender text-accent-lavender flex items-center justify-center font-bold text-xl shrink-0 shadow-[0_0_15px_rgba(93,248,216,0.2)]">
              SU
            </div>
            <div className="flex-grow">
              <h4 className="text-lg font-bold text-text-primary mb-1">
                Written by {profileData.name}
              </h4>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                DevOps & MLOps Engineer focused on scalable infrastructure, model serving, and CI/CD pipelines. Passionate about automating software workflows and building reliable cloud architectures.
              </p>
              <div className="flex items-center justify-center sm:justify-start gap-4">
                <a 
                  href={profileData.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-lavender hover:underline"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>
                <a 
                  href={profileData.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-accent-lavender hover:underline"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Next / Previous Article Navigation Footer */}
        <nav className="grid sm:grid-cols-2 gap-4 pt-6 border-t border-border-color">
          {prevBlog ? (
            <Link 
              to={`/blogs/${prevBlog.slug}`}
              className="p-4 rounded-xl bg-bg-card border border-border-color hover:border-accent-lavender transition-all group flex flex-col justify-between"
            >
              <div className="flex items-center gap-1 text-xs text-text-secondary mb-2 group-hover:text-accent-lavender">
                <ChevronLeft size={14} />
                <span>Previous Article</span>
              </div>
              <h5 className="text-sm font-bold text-text-primary group-hover:text-accent-lavender line-clamp-1 transition-colors">
                {prevBlog.title}
              </h5>
            </Link>
          ) : <div />}

          {nextBlog ? (
            <Link 
              to={`/blogs/${nextBlog.slug}`}
              className="p-4 rounded-xl bg-bg-card border border-border-color hover:border-accent-lavender transition-all group flex flex-col items-end text-right justify-between sm:col-start-2"
            >
              <div className="flex items-center gap-1 text-xs text-text-secondary mb-2 group-hover:text-accent-lavender">
                <span>Next Article</span>
                <ChevronRight size={14} />
              </div>
              <h5 className="text-sm font-bold text-text-primary group-hover:text-accent-lavender line-clamp-1 transition-colors">
                {nextBlog.title}
              </h5>
            </Link>
          ) : <div />}
        </nav>
      </div>
    </article>
  );
};

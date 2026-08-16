import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight, Tag, X, ChevronLeft, ChevronRight, SlidersHorizontal } from 'lucide-react';
import { GlassCard, SectionHeading } from '../ui';
import { blogs, getCategoryCounts } from '../../data';

export const BlogsPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Blogs');
  const [selectedTag, setSelectedTag] = useState('');
  const [sortBy, setSortBy] = useState<'latest' | 'oldest'>('latest');
  const [currentPage, setCurrentPage] = useState(1);

  const categoryCounts = getCategoryCounts();
  const publishedBlogs = useMemo(() => blogs.filter(blog => blog.published), []);

  const categoriesList = [
    { name: 'All Blogs', count: publishedBlogs.length },
    { name: 'DevOps', count: categoryCounts['DevOps'] || 0 },
    { name: 'MLOps', count: categoryCounts['MLOps'] || 0 },
    { name: 'Cloud', count: categoryCounts['Cloud'] || 0 },
    { name: 'Kubernetes', count: categoryCounts['Kubernetes'] || 0 },
    { name: 'CI/CD', count: categoryCounts['CI/CD'] || 0 },
    { name: 'Linux', count: categoryCounts['Linux'] || 0 },
    { name: 'Backend', count: categoryCounts['Backend'] || 0 },
    { name: 'Tutorials', count: categoryCounts['Tutorials'] || 0 }
  ];

  const popularTags = [
    'AWS', 'Docker', 'Kubernetes', 'Terraform', 'MLflow', 
    'DVC', 'GitHub Actions', 'Linux', 'Monitoring', 'FastAPI'
  ];

  // Combined Search & Filter Logic (AND logic)
  const filteredBlogs = useMemo(() => {
    return publishedBlogs.filter(blog => {
      // 1. Search Query Filter (title, excerpt, tags, category)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const titleMatch = blog.title.toLowerCase().includes(q);
        const excerptMatch = blog.excerpt.toLowerCase().includes(q);
        const categoryMatch = blog.category.toLowerCase().includes(q);
        const tagsMatch = blog.tags.some(tag => tag.toLowerCase().includes(q));

        if (!titleMatch && !excerptMatch && !categoryMatch && !tagsMatch) {
          return false;
        }
      }

      // 2. Category Filter
      if (selectedCategory !== 'All Blogs') {
        const lowerSelectedCat = selectedCategory.toLowerCase();
        const lowerBlogCat = blog.category.toLowerCase();
        if (!lowerBlogCat.includes(lowerSelectedCat)) {
          return false;
        }
      }

      // 3. Tag Filter
      if (selectedTag) {
        if (!blog.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase())) {
          return false;
        }
      }

      return true;
    });
  }, [publishedBlogs, searchQuery, selectedCategory, selectedTag]);

  // Sorting Logic
  const sortedBlogs = useMemo(() => {
    return [...filteredBlogs].sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      if (sortBy === 'latest') {
        return dateB - dateA;
      } else {
        return dateA - dateB;
      }
    });
  }, [filteredBlogs, sortBy]);

  // Pagination Logic
  const ITEMS_PER_PAGE = 9;
  const totalPages = Math.ceil(sortedBlogs.length / ITEMS_PER_PAGE);
  const paginatedBlogs = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return sortedBlogs.slice(start, start + ITEMS_PER_PAGE);
  }, [sortedBlogs, currentPage]);

  const isFilterActive = searchQuery.trim() !== '' || selectedCategory !== 'All Blogs' || selectedTag !== '';

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All Blogs');
    setSelectedTag('');
    setCurrentPage(1);
  };

  return (
    <div className="section-padding min-h-screen pt-32 relative z-10">
      <div className="container mx-auto">
        {/* Page Header */}
        <SectionHeading 
          title="Blogs" 
          subtitle="Thoughts, tutorials, and insights on DevOps, MLOps, cloud, automation, and backend engineering." 
        />
        
        {/* Two-Column Desktop Layout */}
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Left Column: Sidebar */}
          <aside className="w-full lg:w-[300px] shrink-0 space-y-8">
            {/* Search Input Widget */}
            <div className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search blogs..." 
                className="w-full px-4 py-3 pl-11 pr-10 rounded-xl bg-bg-card border border-border-color text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-lavender focus:ring-1 focus:ring-accent-lavender transition-all duration-300"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary" size={18} />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-text-secondary hover:text-text-primary p-1 cursor-pointer"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Categories Widget */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border-color">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text-primary">
                  Categories
                </h3>
              </div>
              <ul className="space-y-2">
                {categoriesList.map((cat) => {
                  const isActive = selectedCategory === cat.name;
                  return (
                    <li key={cat.name}>
                      <button 
                        onClick={() => {
                          setSelectedCategory(cat.name);
                          setCurrentPage(1);
                        }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-all duration-300 cursor-pointer ${
                          isActive 
                            ? 'text-accent-lavender bg-accent-lavender/10 font-bold border-l-2 border-accent-lavender pl-4' 
                            : 'text-text-secondary hover:text-text-primary hover:bg-bg-card-hover'
                        }`}
                      >
                        <span>{cat.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          isActive ? 'bg-accent-lavender/20 text-accent-lavender' : 'bg-bg-card-hover text-text-secondary'
                        }`}>
                          {cat.count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Popular Tags Widget */}
            <div className="p-6 rounded-2xl bg-bg-card border border-border-color">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-text-primary flex items-center gap-2">
                  <Tag size={16} />
                  <span>Popular Tags</span>
                </h3>
                {selectedTag && (
                  <button 
                    onClick={() => setSelectedTag('')}
                    className="text-xs text-accent-lavender hover:underline cursor-pointer"
                  >
                    Reset
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {popularTags.map((tag) => {
                  const isActive = selectedTag.toLowerCase() === tag.toLowerCase();
                  return (
                    <button 
                      key={tag}
                      onClick={() => {
                        setSelectedTag(isActive ? '' : tag);
                        setCurrentPage(1);
                      }}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg border transition-all duration-300 cursor-pointer ${
                        isActive
                          ? 'border-accent-lavender text-accent-lavender bg-accent-lavender/10 shadow-[0_0_10px_rgba(93,248,216,0.15)]'
                          : 'text-text-secondary bg-bg-card border-border-color hover:border-accent-lavender hover:text-accent-lavender'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* Right Column: Controls, Grid, Empty State & Pagination */}
          <main className="flex-grow flex flex-col">
            {/* Filter Bar & Sorting Controls */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-border-color">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-text-secondary">
                  Showing <strong className="text-text-primary">{sortedBlogs.length}</strong> {sortedBlogs.length === 1 ? 'blog' : 'blogs'}
                </span>
                {isFilterActive && (
                  <button 
                    onClick={handleClearFilters}
                    className="inline-flex items-center gap-1 text-xs font-bold text-accent-lavender bg-accent-lavender/10 px-2.5 py-1 rounded-full border border-accent-lavender/30 hover:bg-accent-lavender hover:text-[#0A111F] transition-all cursor-pointer"
                  >
                    <X size={12} />
                    <span>Clear Filters</span>
                  </button>
                )}
              </div>

              {/* Sorting Dropdown */}
              <div className="flex items-center gap-2">
                <SlidersHorizontal size={14} className="text-text-secondary" />
                <label htmlFor="blog-sort-select" className="text-xs text-text-secondary font-medium">Sort by:</label>
                <select 
                  id="blog-sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as 'latest' | 'oldest')}
                  className="px-3 py-1.5 rounded-lg bg-bg-card border border-border-color text-text-primary text-xs font-medium focus:outline-none focus:border-accent-lavender cursor-pointer transition-colors"
                >
                  <option value="latest">Latest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>
            </div>

            {/* EMPTY STATE */}
            {sortedBlogs.length === 0 ? (
              <div className="p-12 text-center rounded-2xl bg-bg-card border border-border-color my-auto">
                <h3 className="text-2xl font-bold text-text-primary mb-2">No blogs found.</h3>
                <p className="text-text-secondary text-sm mb-6 max-w-md mx-auto">
                  Try another keyword or category to discover articles on MLOps, DevOps, and backend engineering.
                </p>
                <button 
                  onClick={handleClearFilters}
                  className="btn-primary inline-flex items-center gap-2 cursor-pointer text-sm"
                >
                  <X size={16} />
                  <span>Clear Filters</span>
                </button>
              </div>
            ) : (
              /* BLOG GRID */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {paginatedBlogs.map((blog) => (
                  <GlassCard 
                    key={blog.id} 
                    className="group flex flex-col h-full bg-bg-card border border-border-color shadow-md hover:shadow-[0_0_20px_rgba(93,248,216,0.1)] transition-all duration-300"
                  >
                    {/* Top Meta: Category + Read Time */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-accent-lavender text-xs font-bold tracking-wider uppercase">
                        {blog.category}
                      </span>
                      <span className="text-text-secondary text-xs">
                        {blog.readTime}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent-lavender mb-3 transition-colors duration-300">
                      {blog.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-text-secondary text-sm font-medium mb-6 flex-grow leading-relaxed line-clamp-3">
                      {blog.excerpt}
                    </p>

                    {/* Date & Read More link */}
                    <div className="mt-auto pt-4 border-t border-border-color flex items-center justify-between">
                      <span className="text-text-secondary text-xs">{blog.date}</span>
                      <Link 
                        to={`/blogs/${blog.slug}`} 
                        className="inline-flex items-center text-sm font-bold text-accent-lavender hover:text-accent-strong transition-colors cursor-pointer group-hover:text-accent-strong"
                      >
                        <span>Read More</span>
                        <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </GlassCard>
                ))}
              </div>
            )}

            {/* PAGINATION (Only renders if totalPages > 1) */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center items-center gap-2">
                <button
                  onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg bg-bg-card border border-border-color text-text-primary hover:border-accent-lavender disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={18} />
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  const isActive = currentPage === page;
                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`w-9 h-9 rounded-lg text-sm font-bold transition-all cursor-pointer ${
                        isActive
                          ? 'bg-accent-lavender text-[#0A111F] shadow-[0_0_10px_rgba(93,248,216,0.3)]'
                          : 'bg-bg-card border border-border-color text-text-primary hover:border-accent-lavender'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                <button
                  onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg bg-bg-card border border-border-color text-text-primary hover:border-accent-lavender disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-colors"
                  aria-label="Next page"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

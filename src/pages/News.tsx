import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { galleryMosaicBg, ctaBannerBg } from '@/assets/images'
import { featuredArticle, newsArticles, type NewsArticle } from '@/data/newsData'

export function News() {
  const [articles, setArticles] = useState<NewsArticle[]>(newsArticles)
  const [hasMore, setHasMore] = useState(true)

  const handleLoadMore = () => {
    // Duplicate with modified IDs to simulate more loaded articles
    const more = newsArticles.map((a) => ({
      ...a,
      id: `${a.id}-more`,
      slug: `${a.slug}-archive`,
      date: 'May 18, 2025.',
    }))
    setArticles((prev) => [...prev, ...more])
    setHasMore(false)
  }

  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-border-subtle/30">
        {/* Top-Right Decorative Mosaic Illustration */}
        <div className="absolute top-0 right-0 w-95 sm:w-115 lg:w-123.5 h-auto pointer-events-none opacity-25 lg:opacity-40 select-none">
          <img
            src={galleryMosaicBg}
            alt=""
            className="w-full h-auto object-contain object-top-right"
          />
        </div>

        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-156 mx-auto space-y-3"
          >
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-primary">
              NEWS AND EVENTS
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-text-dark leading-[1.18] tracking-tight">
              News. Updates. Progress
            </h1>
          </motion.div>
        </div>
      </section>

      {/* 2. FEATURED ARTICLE & ARTICLES GRID */}
      <section className="py-16 lg:py-24">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Featured Article Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="bg-bg-card rounded-2xl border border-border-subtle/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-6 relative min-h-75 sm:min-h-100 lg:min-h-113.75 overflow-hidden">
                <img
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="lg:col-span-6 p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4">
                <span className="text-[15px] font-medium text-text-muted">
                  {featuredArticle.date}
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-[28px] font-bold text-text-dark leading-snug tracking-tight">
                  {featuredArticle.title}
                </h2>

                <p className="text-[15px] sm:text-[16px] leading-7 text-text-muted font-medium">
                  {featuredArticle.excerpt}
                </p>

                <div className="pt-3">
                  <Link
                    to={`/news/${featuredArticle.slug}`}
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-hover font-semibold text-[16px] transition-colors group"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (idx % 3) * 0.1 }}
                className="bg-bg-card rounded-xl border border-border-subtle/50 overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-full h-54 sm:h-59 overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <span className="text-[14px] font-medium text-text-muted">{article.date}</span>

                    <h3 className="text-[18px] font-bold text-text-dark leading-6 line-clamp-2">
                      {article.title}
                    </h3>

                    <p className="text-[14px] leading-6 text-text-muted font-medium line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0">
                  <Link
                    to={`/news/${article.slug}`}
                    className="inline-flex items-center gap-2 text-gold hover:text-gold-hover font-semibold text-[15px] transition-colors group/btn"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center pt-6">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={handleLoadMore}
                className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-gold text-gold hover:bg-gold hover:text-bg-page font-medium text-[16px] transition-all cursor-pointer shadow-sm"
              >
                <span>Load more</span>
                <ChevronDown className="w-4 h-4" />
              </motion.button>
            </div>
          )}
        </div>
      </section>

      {/* 3. CTA BANNER SECTION */}
      <section className="relative py-24 lg:py-32 text-bg-page overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctaBannerBg})` }}
        />
        <div className="absolute inset-0 bg-primary-overlay" />

        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-156.25 space-y-4">
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-bg-page/90">
              EMAWAC
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-bg-page leading-tight">
              Your Waste Service Starts Here.
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-7 text-bg-page/90 font-medium">
              Take the first step towards a cleaner, better organised and more accountable waste
              management system.
            </p>
            <div className="pt-4">
              <a
                href="/#register"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-bg-page text-primary hover:bg-white font-medium text-[16px] transition-all shadow-md active:scale-95"
              >
                <span>Register your premises</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Share2, Calendar, Tag } from 'lucide-react'
import { ctaBannerBg } from '@/assets/images'
import { getArticleBySlug, getRelatedArticles, featuredArticle } from '@/data/newsData'

export function NewsDetail() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()

  const article = (slug ? getArticleBySlug(slug) : null) || featuredArticle
  const relatedArticles = getRelatedArticles(article.slug)

  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* 1. TOP NAVIGATION / GO BACK */}
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <button
          onClick={() => navigate('/news')}
          className="inline-flex items-center gap-2 text-gold hover:text-gold-hover font-semibold text-[15px] sm:text-[16px] transition-colors cursor-pointer group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>GO BACK</span>
        </button>
      </div>

      {/* 2. HERO BANNER IMAGE */}
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-70 sm:h-95 lg:h-113.75 rounded-2xl overflow-hidden shadow-md border border-border-subtle/40 relative"
        >
          <img
            src={article.bannerImage || article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* 3. MAIN ARTICLE & RELATED NEWS */}
      <section className="pb-24">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
            {/* Left Column: Full Article Body (width: 724px in Figma) */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-8 space-y-6"
            >
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-text-muted font-medium">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>{article.date}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-bg-mint text-primary text-xs font-semibold">
                  <Tag className="w-3.5 h-3.5" />
                  <span>{article.category}</span>
                </span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-bold text-text-dark leading-tight tracking-tight">
                {article.title}
              </h1>

              {/* Body Content */}
              <div className="space-y-5 pt-2 text-[16px] leading-[28px] text-text-muted font-normal">
                {article.content.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Bottom Share Row */}
              <div className="pt-8 border-t border-border-subtle/50 flex items-center justify-between">
                <span className="text-sm font-semibold text-text-dark flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-primary" />
                  Share this story
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (navigator.clipboard) {
                        navigator.clipboard.writeText(window.location.href)
                        alert('Article link copied to clipboard!')
                      }
                    }}
                    className="px-4 py-2 rounded-full border border-border-subtle bg-bg-card hover:bg-bg-mint text-xs font-medium text-text-dark transition-colors cursor-pointer"
                  >
                    Copy Link
                  </button>
                </div>
              </div>
            </motion.article>

            {/* Right Column: Related News (width: 367px in Figma) */}
            <aside className="lg:col-span-4 space-y-6">
              <h3 className="text-[18px] sm:text-[20px] font-bold text-text-dark tracking-tight">
                RELATED NEWS
              </h3>

              <div className="space-y-6">
                {relatedArticles.map((rel) => (
                  <div
                    key={rel.id}
                    className="bg-bg-card rounded-xl border border-border-subtle/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col justify-between"
                  >
                    <div className="w-full h-48 overflow-hidden relative">
                      <img
                        src={rel.image}
                        alt={rel.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                    </div>

                    <div className="p-5 space-y-2.5">
                      <span className="text-xs font-medium text-text-muted">{rel.date}</span>

                      <h4 className="text-base font-bold text-text-dark leading-snug line-clamp-2">
                        {rel.title}
                      </h4>

                      <p className="text-xs leading-relaxed text-text-muted font-medium line-clamp-2">
                        {rel.excerpt}
                      </p>

                      <div className="pt-2">
                        <Link
                          to={`/news/${rel.slug}`}
                          className="inline-flex items-center gap-1.5 text-gold hover:text-gold-hover font-semibold text-sm transition-colors group/link"
                        >
                          <span>Read more</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* 4. CTA BANNER SECTION */}
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

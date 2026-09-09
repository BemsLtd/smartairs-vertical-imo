import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowRight } from 'lucide-react'
import {
  galleryMosaicBg,
  galleryPage1,
  galleryPage2,
  galleryPage3,
  galleryPage4,
  galleryPage5,
  galleryPage6,
  ctaBannerBg,
} from '@/assets/images'

interface GalleryItem {
  id: string
  title: string
  image: string
  category: string
  className?: string
}

const initialGalleryItems: GalleryItem[] = [
  // Block 1
  {
    id: 'item-1',
    title: 'Sanitation Corps & Community Engagement',
    image: galleryPage1,
    category: 'Operations',
    className: 'col-span-12 md:col-span-4 row-span-2 min-h-75 md:min-h-134.5',
  },
  {
    id: 'item-2',
    title: 'Waste Collection Transit & Street Clearance',
    image: galleryPage2,
    category: 'Transit',
    className: 'col-span-12 md:col-span-8 min-h-60 md:min-h-64.25',
  },
  {
    id: 'item-3',
    title: 'Municipal Field Logistics',
    image: galleryPage3,
    category: 'Field Teams',
    className: 'col-span-12 md:col-span-4 min-h-60 md:min-h-64.25',
  },
  {
    id: 'item-4',
    title: 'Imo State Environmental Task Force',
    image: galleryPage4,
    category: 'Enforcement',
    className: 'col-span-12 md:col-span-4 row-span-2 min-h-75 md:min-h-134.5',
  },
  {
    id: 'item-5',
    title: 'Residential Waste Collection Points',
    image: galleryPage5,
    category: 'Community',
    className: 'col-span-12 md:col-span-4 min-h-60 md:min-h-64.25',
  },
  {
    id: 'item-6',
    title: 'Commercial Waste Disposal Sites',
    image: galleryPage6,
    category: 'Recycling',
    className: 'col-span-12 md:col-span-4 min-h-60 md:min-h-64.25',
  },
  // Block 2
  {
    id: 'item-7',
    title: 'Urban Center Cleanliness Drive',
    image: galleryPage2,
    category: 'Public Works',
    className: 'col-span-12 md:col-span-8 min-h-60 md:min-h-64.25',
  },
  {
    id: 'item-8',
    title: 'Field Supervisory Operations',
    image: galleryPage4,
    category: 'Supervision',
    className: 'col-span-12 md:col-span-4 row-span-2 min-h-75 md:min-h-134.5',
  },
  {
    id: 'item-9',
    title: 'Equipment Maintenance & Sorting',
    image: galleryPage3,
    category: 'Maintenance',
    className: 'col-span-12 md:col-span-4 min-h-60 md:min-h-64.25',
  },
  {
    id: 'item-10',
    title: 'Public Health & Sanitation Monitoring',
    image: galleryPage5,
    category: 'Health',
    className: 'col-span-12 md:col-span-4 min-h-60 md:min-h-64.25',
  },
]

const extraGalleryItems: GalleryItem[] = [
  {
    id: 'item-11',
    title: 'Environmental Compliance Inspection',
    image: galleryPage1,
    category: 'Compliance',
    className: 'col-span-12 md:col-span-4 min-h-60 md:min-h-64.25',
  },
  {
    id: 'item-12',
    title: 'Digital Route Verification Teams',
    image: galleryPage6,
    category: 'Digital Tech',
    className: 'col-span-12 md:col-span-8 min-h-60 md:min-h-64.25',
  },
]

export function Gallery() {
  const [items, setItems] = useState<GalleryItem[]>(initialGalleryItems)
  const [hasMore, setHasMore] = useState(true)
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null)

  const handleLoadMore = () => {
    setItems((prev) => [...prev, ...extraGalleryItems])
    setHasMore(false)
  }

  return (
    <div className="w-full bg-bg-page min-h-screen">
      {/* 1. HERO BANNER */}
      <section className="relative pt-12 pb-16 lg:pt-20 lg:pb-24 overflow-hidden border-b border-border-subtle/30">
        {/* Top-Right Mosaic Background Vector Decoration */}
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
            className="max-w-199.5 space-y-3"
          >
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-primary">
              EMAWAC GALLERY
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-text-dark leading-[1.18] tracking-tight">
              Working for cleaner communities
            </h1>
            <p className="text-[16px] leading-7 text-text-muted font-medium max-w-174.25 pt-1">
              Explore moments from our operations, teams and communities as we work towards a more
              efficient waste management system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. MOSAIC MASONRY GRID */}
      <section className="py-16 lg:py-24">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-12 gap-4 lg:gap-6">
            {items.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: (index % 6) * 0.08 }}
                onClick={() => setSelectedImage(item)}
                className={`group relative overflow-hidden rounded-lg bg-bg-mint cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${item.className}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 text-white">
                  <span className="text-xs uppercase tracking-wider font-semibold text-gold mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-base font-bold text-white leading-snug">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="flex justify-center mt-14">
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

      {/* 4. LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] bg-bg-card rounded-2xl overflow-hidden shadow-2xl border border-border-subtle/30"
            >
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain bg-black/20"
              />
              <div className="p-6 bg-bg-card flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wider font-semibold text-primary">
                    {selectedImage.category}
                  </span>
                  <h3 className="text-lg font-bold text-text-dark">{selectedImage.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="px-4 py-2 rounded-full border border-border-subtle hover:bg-bg-mint text-sm font-medium text-text-dark transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

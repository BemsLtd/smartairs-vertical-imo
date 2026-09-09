import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import {
  Check,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Pencil,
  ListChecks,
  CreditCard,
  CheckCheck,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'

// Assets
import {
  heroImage as heroImg,
  bgPattern,
  whyDigitalDevice,
  serviceOperations,
  audienceResidents,
  audienceBusinesses,
  audienceGovernment,
  audienceCollectors,
  partnerImoState,
  partnerMinistry,
  partner3,
  partner4,
  smartIrsLogo,
  news2,
  news3,
  gallery1,
  gallery4,
  gallery5,
  posShot,
  ctaBannerBg,
} from '@/assets/images'

type ServiceTabKey = 'trucks' | 'field' | 'pos'

interface ServiceSlide {
  id: string
  title: string
  badge: string
  tag: string
  image: string
  description: string
}

const serviceTabs: Array<{ id: ServiceTabKey; label: string }> = [
  { id: 'trucks', label: 'Trucks & Teams' },
  { id: 'field', label: 'Field Operations' },
  { id: 'pos', label: 'Payment Machines' },
]

const serviceTabData: Record<ServiceTabKey, { label: string; slides: ServiceSlide[] }> = {
  trucks: {
    label: 'Trucks & Teams',
    slides: [
      {
        id: 'trucks-1',
        title: 'Modern Waste Compactor Fleet',
        badge: 'Fleet Tracking',
        tag: 'Active Across 27 LGAs',
        image: gallery5,
        description:
          'Dedicated compactor trucks and trained sanitation personnel operating on automated schedule routes.',
      },
      {
        id: 'trucks-2',
        title: 'Coordinated Municipal Transit',
        badge: 'GPS Monitored',
        tag: 'Real-Time Dispatch',
        image:
          'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1600&q=80',
        description:
          'Smart route tracking guarantees punctual household waste pick-up and monitored waste transfer stations.',
      },
    ],
  },
  field: {
    label: 'Field Operations',
    slides: [
      {
        id: 'field-1',
        title: 'On-Site Verification & Environmental Teams',
        badge: 'Field Operations',
        tag: 'Verified Compliance',
        image: serviceOperations,
        description:
          'Field supervisors inspect premises, verify service standards, and coordinate directly with local community leaders.',
      },
      {
        id: 'field-2',
        title: 'Community Cleanliness Enforcement',
        badge: 'Sanitation Corps',
        tag: 'Community Action',
        image: gallery1,
        description:
          'Authorized environmental officers ensure compliant disposal and immediate clearance of illegal waste dumps.',
      },
    ],
  },
  pos: {
    label: 'Payment Machines',
    slides: [
      {
        id: 'pos-1',
        title: 'SmartAIRS Handheld POS Verification',
        badge: 'SmartAIRS Integrated',
        tag: 'Instant Receipt',
        image: posShot,
        description:
          'Accredited field agents equipped with smart POS terminals enable on-the-spot bill verification and secure payment.',
      },
      {
        id: 'pos-2',
        title: 'Contactless & Cashless Transactions',
        badge: 'Secure Gateway',
        tag: 'Tamper-Proof',
        image:
          'https://images.unsplash.com/photo-1556742111-a301076d9d18?auto=format&fit=crop&w=1600&q=80',
        description:
          'Every transaction generates an official digital record, SMS confirmation, and verified print receipt for peace of mind.',
      },
    ],
  },
}

const slideVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  exit: (dir: number) => ({
    x: dir < 0 ? 60 : -60,
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  }),
}

export function Landing() {
  const [activeFaq, setActiveFaq] = useState<number | null>(0)
  const [activeServiceTab, setActiveServiceTab] = useState<ServiceTabKey>('trucks')
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const faqs = [
    {
      q: 'Is this a new tax?',
      a: 'The digital system is designed to make waste service registration, billing and payment more transparent. It is not presented as a new tax.',
    },
    {
      q: 'Why am I being charged for waste management?',
      a: 'The waste service provides organised waste collection and management for homes, businesses and other premises. Charges are based on the applicable service and premises category',
    },
    {
      q: "What if my waste isn't collected?",
      a: 'If your scheduled service is not delivered, you should be able to report the issue through the appropriate support channel so it can be followed up.',
    },
    {
      q: 'How can i pay?',
      a: 'The service supports convenient payment channels, including digital and offline options. Select "Pay a Bill" to get started.',
    },
    {
      q: 'How do I register my premises?',
      a: 'Select "Register Your Premises" and follow the registration process for your household or organisation.',
    },
    {
      q: 'Can private waste collectors operate through EWAMAC?',
      a: 'Private waste collectors can apply for the required licence through the collector licensing process.',
    },
    {
      q: 'Where does my information go?',
      a: 'Information collected through the website is intended to be used for the relevant service and handled in accordance with applicable data protection requirements.',
    },
  ]

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section id="about" className="scroll-mt-24 relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28 bg-bg-page">
        {/* Background watermark pattern */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10 bg-repeat bg-center"
          style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '600px auto' }}
        />

        {/* Ambient Gold blur */}
        <div className="absolute top-1/4 -right-24 w-117 h-117 rounded-full bg-gold/20 blur-[100px] pointer-events-none" />

        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column Content */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-gold text-[14px] font-medium leading-none">
                <Check className="w-4 h-4 text-gold shrink-0 stroke-[2.5]" />
                <span>Backed by Imo State's 2025 Waste Management Law</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-extrabold text-text-dark leading-[1.18] tracking-tight">
                A <span className="text-primary">Cleaner</span> Imo State Starts With Better Waste Management.
              </h1>

              {/* Description */}
              <p className="text-[16px] leading-7 text-text-muted font-medium max-w-137">
                A simpler, smarter and more transparent way to manage waste across Imo State.
                Register your premises, receive a fair bill, pay easily and stay informed about
                your waste service.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  href="#register"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold hover:bg-gold-hover text-bg-page font-medium text-[16px] transition-all shadow-sm active:scale-95"
                >
                  Register your premises
                </a>
                <a
                  href="#pay-bill"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border border-gold text-gold hover:bg-gold/10 font-medium text-[16px] transition-all active:scale-95"
                >
                  <span>Pay a bill</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column: Hero Graphic */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-145 lg:max-w-161.25 rounded-2xl overflow-hidden shadow-xl border border-border-subtle/30">
                <img
                  src={heroImg}
                  alt="EMAWAC Waste Management in Imo State"
                  className="w-full h-auto max-h-125 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FOUR SIMPLE STEPS */}
      <section id="how-it-works" className="scroll-mt-24 py-20 lg:py-24 bg-bg-page">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="text-center max-w-126.25 mx-auto mb-16 space-y-2">
            <h2 className="text-3xl lg:text-[32px] font-bold text-text-dark">
              Get started in <span className="text-primary">four simple steps</span>.
            </h2>
            <p className="text-[16px] leading-7 text-text-muted font-medium max-w-102.5 mx-auto">
              We've made the process easier to understand, easier to access and easier to trust.
            </p>
          </div>

          {/* 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 pt-4">
            {[
              {
                step: '01',
                title: 'Register Your Premises',
                desc: 'Register your home, business or premises with the waste service with ease.',
                icon: Pencil,
              },
              {
                step: '02',
                title: 'Get Your Fair Bill',
                desc: 'Receive a bill based on your premises and the waste service you receive.',
                icon: ListChecks,
              },
              {
                step: '03',
                title: 'Pay Easily',
                desc: 'Pay digitally through convenient payment channels and receive confirmation of your payment.',
                icon: CreditCard,
              },
              {
                step: '04',
                title: 'Track & Confirm',
                desc: 'Stay informed about your service while collections and payments are tracked for greater accountability.',
                icon: CheckCheck,
              },
            ].map((card) => {
              const Icon = card.icon
              return (
                <div
                  key={card.step}
                  className="relative bg-bg-mint rounded-2xl p-6 pt-12 flex flex-col justify-between min-h-55 transition-transform hover:-translate-y-1"
                >
                  {/* Floating Circular Green Badge at top left */}
                  <div className="absolute -top-7 left-6 w-15 h-15 rounded-full bg-primary flex items-center justify-center text-white shadow-md">
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* Watermark Step Number at top right */}
                  <div className="absolute top-3 right-5 text-[40px] font-black text-gold/20 font-sans pointer-events-none select-none">
                    {card.step}
                  </div>

                  {/* Text Content */}
                  <div className="space-y-2 mt-2">
                    <h3 className="text-[18px] font-bold text-text-dark leading-6">
                      {card.title}
                    </h3>
                    <p className="text-[14px] leading-6 text-text-muted font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 3. WHO IS IT FOR? (Green Section) */}
      <section className="py-20 lg:py-24 bg-primary text-bg-page relative overflow-hidden">
        {/* Watermark overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20 bg-repeat bg-center"
          style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: '700px auto' }}
        />

        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-12 space-y-1.5">
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-bg-page/90">
              WHO IS IT FOR?
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-bg-page">
              One Service. Different Needs.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: 'Residents & Households',
                desc: 'Register your premises, understand your waste service and make payments easily.',
                image: audienceResidents,
              },
              {
                title: 'Businesses & Institutions',
                desc: 'Set up a reliable waste service for your shop, market, hotel, school, hospital or organisation.',
                image: audienceBusinesses,
              },
              {
                title: 'Government',
                desc: 'Access a more transparent view of waste operations, collections and revenue across the state.',
                image: audienceGovernment,
              },
              {
                title: 'Waste Collectors',
                desc: 'Apply for or renew your licence and operate within a more accountable waste collection network.',
                image: audienceCollectors,
              },
            ].map((audience, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl overflow-hidden shadow-lg group h-80 sm:h-95"
              >
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Gradient overlay exactly matching Figma */}
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8 space-y-2">
                  <h3 className="text-[20px] font-bold text-white leading-6">
                    {audience.title}
                  </h3>
                  <p className="text-[14px] leading-5.5 text-white/90 font-medium max-w-96.25">
                    {audience.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY GO DIGITAL? (Mint Section) */}
      <section className="py-20 lg:py-28 bg-bg-mint">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center max-w-172.25 mx-auto mb-14 space-y-2">
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-primary">
              WHO IS IT FOR?
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-text-dark">
              Why Go Digital?
            </h2>
            <p className="text-[16px] leading-7 text-text-muted font-medium">
              Digital waste management gives residents, businesses and government a clearer view
              of how the service works, what is being paid for and how collections are being delivered.
            </p>
          </div>

          {/* Device showcase with floating glass cards */}
          <div className="relative max-w-205.25 mx-auto min-h-120 lg:min-h-141.75 flex items-center justify-center">
            {/* Center Device Graphic */}
            <div className="w-full max-w-136.25 mx-auto">
              <img
                src={whyDigitalDevice}
                alt="Digital Waste Management Service"
                className="w-full h-auto object-contain mx-auto"
              />
            </div>

            {/* Floating Card 1: Fairness (bottom right) */}
            <div className="hidden sm:block absolute bottom-4 sm:bottom-8 right-0 sm:-right-4 w-85 sm:w-97.5 bg-bg-card-translucent backdrop-blur-md p-6 rounded-2xl shadow-lg border border-bg-card/60 space-y-1.5">
              <h4 className="text-[18px] font-bold text-text-dark">Fairness</h4>
              <p className="text-[14px] leading-5.5 text-text-muted font-medium">
                You pay for the waste service you receive, with charges based on your premises and
                service level.
              </p>
            </div>

            {/* Floating Card 2: Transparency (top right) */}
            <div className="hidden sm:block absolute top-6 sm:top-10 right-2 sm:-right-8 w-75 sm:w-82.75 bg-bg-card-translucent backdrop-blur-md p-6 rounded-2xl shadow-lg border border-bg-card/60 space-y-1.5">
              <h4 className="text-[18px] font-bold text-text-dark">Transparency</h4>
              <p className="text-[14px] leading-5.5 text-text-muted font-medium">
                Digital records make collections, payments and operations easier to track and verify.
              </p>
            </div>

            {/* Floating Card 3: Convenience (left center) */}
            <div className="hidden sm:block absolute top-1/3 left-0 sm:-left-8 w-70 sm:w-75.5 bg-bg-card-translucent backdrop-blur-md p-6 rounded-2xl shadow-lg border border-bg-card/60 space-y-1.5">
              <h4 className="text-[18px] font-bold text-text-dark">Convenience</h4>
              <p className="text-[14px] leading-5.5 text-text-muted font-medium">
                Register and make payments through accessible digital and offline channels.
              </p>
            </div>
          </div>

          {/* Mobile fallbacks for floating cards */}
          <div className="grid grid-cols-1 gap-4 sm:hidden mt-8">
            <div className="bg-bg-card-translucent p-5 rounded-2xl shadow space-y-1">
              <h4 className="text-[16px] font-bold text-text-dark">Fairness</h4>
              <p className="text-[13px] text-text-muted">
                You pay for the waste service you receive, with charges based on your premises and
                service level.
              </p>
            </div>
            <div className="bg-bg-card-translucent p-5 rounded-2xl shadow space-y-1">
              <h4 className="text-[16px] font-bold text-text-dark">Transparency</h4>
              <p className="text-[13px] text-text-muted">
                Digital records make collections, payments and operations easier to track and verify.
              </p>
            </div>
            <div className="bg-bg-card-translucent p-5 rounded-2xl shadow space-y-1">
              <h4 className="text-[16px] font-bold text-text-dark">Convenience</h4>
              <p className="text-[13px] text-text-muted">
                Register and make payments through accessible digital and offline channels.
              </p>
            </div>
          </div>

          {/* Bottom Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 pt-12">
            <a
              href="#register"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gold hover:bg-gold-hover text-bg-page font-medium text-[16px] transition-all shadow-sm active:scale-95"
            >
              Register your premises
            </a>
            <a
              href="#pay-bill"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full border-2 border-gold text-gold hover:bg-gold/10 font-medium text-[16px] transition-all active:scale-95"
            >
              <span>Pay a bill</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* 5. HOW THE SERVICE WORKS */}
      <section id="service-works" className="scroll-mt-24 py-20 lg:py-24 bg-bg-page overflow-hidden">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-137.25 mx-auto mb-10 space-y-2">
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-primary">
              HOW THE SERVICE WORKS
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-text-dark">
              Technology Meets Real-World Service
            </h2>
            <p className="text-[16px] leading-7 text-text-muted font-medium">
              A digital platform is only as good as the service behind it. EWAMAC brings technology
              together with people, trucks, field teams and collection networks working across Imo
              State.
            </p>
          </div>

          {/* Animated Tabs */}
          <div className="relative flex items-center justify-center gap-2 sm:gap-6 border-b border-border-subtle/40 max-w-175 mx-auto mb-10">
            {serviceTabs.map((tab) => {
              const isActive = activeServiceTab === tab.id
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    const oldIndex = serviceTabs.findIndex((t) => t.id === activeServiceTab)
                    const newIndex = serviceTabs.findIndex((t) => t.id === tab.id)
                    setDirection(newIndex >= oldIndex ? 1 : -1)
                    setActiveServiceTab(tab.id)
                    setCurrentSlideIndex(0)
                  }}
                  className={`relative pb-3.5 px-3 sm:px-5 text-[15px] sm:text-[16px] font-semibold transition-colors cursor-pointer ${
                    isActive ? 'text-gold' : 'text-text-muted hover:text-text-dark'
                  }`}
                >
                  <span>{tab.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="serviceTabIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Interactive Carousel Card */}
          <div className="relative max-w-227 mx-auto">
            {(() => {
              const currentTabSlides = serviceTabData[activeServiceTab].slides
              const currentSlide = currentTabSlides[currentSlideIndex] || currentTabSlides[0]

              const handlePrev = () => {
                setDirection(-1)
                if (currentSlideIndex > 0) {
                  setCurrentSlideIndex((prev) => prev - 1)
                } else {
                  const currentTabIdx = serviceTabs.findIndex((t) => t.id === activeServiceTab)
                  const prevTabIdx = (currentTabIdx - 1 + serviceTabs.length) % serviceTabs.length
                  const prevTab = serviceTabs[prevTabIdx].id
                  setActiveServiceTab(prevTab)
                  setCurrentSlideIndex(serviceTabData[prevTab].slides.length - 1)
                }
              }

              const handleNext = () => {
                setDirection(1)
                if (currentSlideIndex < currentTabSlides.length - 1) {
                  setCurrentSlideIndex((prev) => prev + 1)
                } else {
                  const currentTabIdx = serviceTabs.findIndex((t) => t.id === activeServiceTab)
                  const nextTabIdx = (currentTabIdx + 1) % serviceTabs.length
                  const nextTab = serviceTabs[nextTabIdx].id
                  setActiveServiceTab(nextTab)
                  setCurrentSlideIndex(0)
                }
              }

              return (
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-xl border border-border-subtle/30 bg-bg-mint min-h-95 sm:min-h-110.25 relative">
                    <AnimatePresence mode="wait" custom={direction}>
                      <motion.div
                        key={`${activeServiceTab}-${currentSlideIndex}`}
                        custom={direction}
                        variants={slideVariants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        className="relative w-full h-95 sm:h-110.25"
                      >
                        <img
                          src={currentSlide.image}
                          alt={currentSlide.title}
                          className="w-full h-full object-cover"
                        />

                        {/* High-end gradient overlay for text readability */}
                        <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                        {/* Top-Right Floating Status Pill */}
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15, duration: 0.3 }}
                          className="absolute top-4 right-4 sm:top-6 sm:right-6 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-medium shadow-sm"
                        >
                          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                          <span>{currentSlide.badge}</span>
                        </motion.div>

                        {/* Bottom Floating Info Content */}
                        <motion.div
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2, duration: 0.35 }}
                          className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white space-y-2.5"
                        >
                          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-gold text-bg-page text-xs font-semibold tracking-wider uppercase shadow-sm">
                            {currentSlide.tag}
                          </div>
                          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight drop-shadow-sm">
                            {currentSlide.title}
                          </h3>
                          <p className="text-sm sm:text-base text-white/90 max-w-2xl font-medium leading-relaxed drop-shadow-sm">
                            {currentSlide.description}
                          </p>
                        </motion.div>
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Slider controls */}
                  <div className="flex items-center justify-between w-full absolute top-1/2 -translate-y-1/2 -left-4 -right-4 sm:-left-6 sm:-right-6 px-1 sm:px-2 pointer-events-none z-20">
                    <motion.button
                      whileHover={{ scale: 1.1, x: -2 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={handlePrev}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-primary/40 bg-white/95 text-primary flex items-center justify-center hover:bg-white hover:text-gold hover:border-gold transition-colors shadow-lg pointer-events-auto cursor-pointer"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1, x: 2 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={handleNext}
                      className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-primary/40 bg-white/95 text-primary flex items-center justify-center hover:bg-white hover:text-gold hover:border-gold transition-colors shadow-lg pointer-events-auto cursor-pointer"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.button>
                  </div>

                  {/* Slide dots indicator */}
                  <div className="flex items-center justify-center gap-2 mt-6">
                    {currentTabSlides.map((slide, idx) => {
                      const isCurrent = idx === currentSlideIndex
                      return (
                        <button
                          key={slide.id}
                          onClick={() => {
                            setDirection(idx > currentSlideIndex ? 1 : -1)
                            setCurrentSlideIndex(idx)
                          }}
                          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                            isCurrent ? 'w-8 bg-gold' : 'w-2 bg-border-divider hover:bg-gold/50'
                          }`}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      )
                    })}
                  </div>
                </div>
              )
            })()}
          </div>
        </div>
      </section>

      {/* 6. FOR WASTE COLLECTORS */}
      <section className="py-20 lg:py-24 bg-primary text-bg-page">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-131 mb-14 space-y-2">
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-bg-page/90">
              FOR WASTE COLLECTORS
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-bg-page">
              Join the Licensed Network.
            </h2>
            <p className="text-[16px] leading-7 text-bg-page/80 font-medium">
              EWAMAC provides a clear digital process for private waste collectors to apply for,
              manage and renew their operating licence.
            </p>
          </div>

          {/* 4 Steps Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                num: '01.',
                title: 'Apply',
                desc: 'Submit your application through the collector portal',
              },
              {
                num: '02.',
                title: 'Pay',
                desc: 'Complete the required licence payment through the approved process.',
              },
              {
                num: '03.',
                title: 'Get Certified',
                desc: 'Receive your digital licence certificate once approved.',
              },
              {
                num: '04.',
                title: 'Renew',
                desc: 'Manage your licence and renew when required',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="border-l border-bg-card/20 pl-6 space-y-2.5 flex flex-col justify-between"
              >
                <div className="text-[40px] font-black text-gold/60 font-sans leading-none">
                  {step.num}
                </div>
                <div>
                  <h4 className="text-[18px] font-bold text-bg-page leading-6">
                    {step.title}
                  </h4>
                  <p className="text-[14px] leading-6 text-bg-page/80 font-medium mt-1">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. OUR TRUSTED PARTNERS */}
      <section className="py-16 bg-bg-page border-b border-border-subtle/30">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-95 space-y-2 text-center lg:text-left">
            <h3 className="text-[20px] font-bold text-text-dark">Our Trusted Partners :</h3>
            <p className="text-[14px] leading-6 text-text-muted font-medium">
              EWAMAC is responsible for waste management across Imo State, while SmartAIRS provides
              the technology that helps bring the service into a more connected and transparent
              digital environment.
            </p>
          </div>

          {/* Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-10">
            <img
              src={partnerImoState}
              alt="Imo State Government"
              className="h-16 w-auto object-contain"
            />
            <img
              src={partnerMinistry}
              alt="Ministry of Environment"
              className="h-14 w-auto object-contain"
            />
            <img
              src={partner3}
              alt="Official Partner"
              className="h-16 w-auto object-contain"
            />
            <img
              src={partner4}
              alt="Partner Badge"
              className="h-14 w-auto object-contain rounded-full"
            />
            <img
              src={smartIrsLogo}
              alt="SmartAIRS Technology"
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </section>

      {/* 8. NEWS AND EVENTS */}
      <section id="news" className="scroll-mt-24 py-20 lg:py-24 bg-bg-card">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="space-y-1">
              <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-primary">
                KEEP UP WITH US
              </span>
              <h2 className="text-3xl lg:text-[32px] font-bold text-text-dark">
                News and Events
              </h2>
            </div>
            <Link
              to="/news"
              className="inline-flex items-center gap-2 text-gold font-medium text-[16px] hover:underline"
            >
              <span>See more updates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                date: 'September 14, 2025.',
                title: 'Understanding Fair Billing',
                desc: "EWAMAC's digital waste management approach is designed around the principle that charges should reflect the applicable premises category and level of waste service provided...",
                image: serviceOperations,
              },
              {
                date: 'September 14, 2025.',
                title: 'What the New Digital Waste Service Means for Residents',
                desc: 'For many households, waste management should be simple: your waste is collected, the service is clearly communicated, and you have clear digital records...',
                image: news2,
              },
              {
                date: 'September 14, 2025.',
                title: 'A More Connected Waste Management System',
                desc: 'Modern waste management involves much more than collection trucks and disposal sites. Behind an effective waste service are processes for registering premises...',
                image: news3,
              },
            ].map((article, idx) => (
              <div
                key={idx}
                className="bg-bg-card rounded-xl border border-border-subtle/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-54 object-cover"
                  />
                  <div className="p-6 space-y-3">
                    <span className="text-[14px] text-text-muted font-medium">
                      {article.date}
                    </span>
                    <h3 className="text-[18px] font-bold text-text-dark leading-6">
                      {article.title}
                    </h3>
                    <p className="text-[14px] leading-5.5 text-text-muted font-medium line-clamp-4">
                      {article.desc}
                    </p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <Link
                    to="/news"
                    className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-gold hover:underline"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. GALLERY */}
      <section id="gallery" className="scroll-mt-24 py-20 lg:py-24 bg-bg-page">
        <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div className="space-y-1">
              <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-primary">
                GALLERY
              </span>
              <h2 className="text-3xl lg:text-[32px] font-bold text-text-dark">
                Working for cleaner communities
              </h2>
            </div>
            <a
              href="#see-more"
              className="inline-flex items-center gap-2 text-gold font-medium text-[16px] hover:underline"
            >
              <span>See more</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mosaic Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto">
            <div className="md:col-span-4 h-75 md:h-120">
              <img
                src={gallery1}
                alt="Community cleaning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-57.5">
                <img
                  src={gallery5}
                  alt="Waste collection truck"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-57.5">
                <img
                  src={serviceOperations}
                  alt="Field operations"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-57.5">
                <img
                  src={news2}
                  alt="Resident cleanup"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="h-57.5">
                <img
                  src={gallery4}
                  alt="Environmental enforcement"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQS (Mint Section) */}
      <section id="faqs" className="scroll-mt-24 py-20 lg:py-24 bg-bg-mint">
        <div className="max-w-171 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-1.5">
            <span className="text-[14px] uppercase tracking-[0.2em] font-medium text-primary">
              FAQS
            </span>
            <h2 className="text-3xl lg:text-[32px] font-bold text-text-dark">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeFaq === index
              return (
                <div
                  key={index}
                  className="border-b border-border-divider/60 pb-5 transition-all"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : index)}
                    className="w-full text-left flex items-center justify-between gap-4 font-bold text-[16px] text-text-dark hover:text-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-primary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-text-muted shrink-0" />
                    )}
                  </button>
                  {isOpen && (
                    <div className="pt-3 text-[14px] leading-6 text-text-muted font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CTA BANNER */}
      <section className="relative py-24 lg:py-32 text-bg-page overflow-hidden">
        {/* Background Image with Dark Overlay */}
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
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold text-bg-page leading-[1.2]">
              Your Waste Service Starts Here.
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-7 text-bg-page/90 font-medium">
              Take the first step towards a cleaner, better organised and more accountable waste
              management system.
            </p>
            <div className="pt-4">
              <a
                href="#register"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-bg-card hover:bg-bg-page text-gold font-medium text-[16px] transition-all shadow-lg active:scale-95"
              >
                Register your premises
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

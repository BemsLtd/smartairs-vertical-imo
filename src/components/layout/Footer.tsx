import { Phone, Mail, MapPin } from 'lucide-react'
import emawacLogo from '@/assets/images/emawac-logo.png'

export function Footer() {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    const element = document.getElementById(targetId)
    if (element) {
      e.preventDefault()
      element.scrollIntoView({ behavior: 'smooth' })
      window.history.pushState(null, '', `#${targetId}`)
    }
  }

  return (
    <footer className="bg-bg-page border-t border-border-subtle/40 pt-16 pb-12 text-text-muted">
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14">
          {/* Brand & Contacts */}
          <div className="lg:col-span-4 space-y-6">
            <img
              src={emawacLogo}
              alt="EMAWAC Logo"
              className="h-12 w-auto object-contain"
            />
            <p className="text-[14px] leading-relaxed text-text-muted max-w-sm">
              A simpler, smarter and more transparent way to manage waste across Imo State.
              Register your premises, receive a fair bill, pay easily and stay informed about your
              waste service.
            </p>

            <div className="space-y-3 pt-2 text-[14px]">
              <div className="flex items-center gap-3 text-text-muted">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span>+234 801 234 5678, +234 801 234 5678</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span>enquiries@email.com</span>
              </div>
              <div className="flex items-center gap-3 text-text-muted">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>123, Newtown Avenue, Office Qtrs., Imo State.</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 lg:pl-8 space-y-4">
            <h4 className="text-[18px] font-bold text-text-dark">Quick Links</h4>
            <ul className="space-y-3 text-[14px]">
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleScrollTo(e, 'about')}
                  className="hover:text-primary transition-colors"
                >
                  About EMAWAC
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  onClick={(e) => handleScrollTo(e, 'how-it-works')}
                  className="hover:text-primary transition-colors"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="#register"
                  onClick={(e) => handleScrollTo(e, 'register')}
                  className="hover:text-primary transition-colors"
                >
                  Register your premises
                </a>
              </li>
              <li>
                <a
                  href="#pay-bill"
                  onClick={(e) => handleScrollTo(e, 'pay-bill')}
                  className="hover:text-primary transition-colors"
                >
                  Pay a bill
                </a>
              </li>
              <li>
                <a
                  href="#faqs"
                  onClick={(e) => handleScrollTo(e, 'faqs')}
                  className="hover:text-primary transition-colors"
                >
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Media */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <h4 className="text-[18px] font-bold text-text-dark">Newsletter</h4>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="relative flex items-center max-w-md"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-5 pr-32 py-3 bg-bg-page border-[1.5px] border-border-input rounded-full text-sm text-text-dark placeholder:text-text-muted/60 focus:outline-none focus:border-primary transition-all"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 px-6 py-2 rounded-full bg-gold hover:bg-gold-hover text-bg-page font-medium text-sm transition-all shadow-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>

            <div className="space-y-3 pt-2">
              <h5 className="text-[15px] font-bold text-text-dark">Follow us on social media</h5>
              <div className="flex items-center gap-6">
                {/* Social media icons */}
                <a
                  href="#facebook"
                  aria-label="Facebook"
                  className="w-7 h-7 flex items-center justify-center text-primary hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="#twitter"
                  aria-label="Twitter / X"
                  className="w-7 h-7 flex items-center justify-center text-primary hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#instagram"
                  aria-label="Instagram"
                  className="w-7 h-7 flex items-center justify-center text-primary hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#linkedin"
                  aria-label="LinkedIn"
                  className="w-7 h-7 flex items-center justify-center text-primary hover:opacity-80 transition-opacity"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-border-divider/50 pt-8 text-center text-[14px] text-text-muted">
          <p>© 2026 Eastern Waste Management Corporation (EWAMAC). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

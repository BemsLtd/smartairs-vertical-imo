import { Link, useLocation } from 'react-router-dom'
import emawacLogo from '@/assets/images/emawac-logo.png'

export function Navbar() {
  const location = useLocation()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById(targetId)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `#${targetId}`)
      }
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-bg-page/95 backdrop-blur-md border-b border-border-subtle/30 transition-colors">
      <div className="max-w-310 mx-auto px-4 sm:px-6 lg:px-8 h-22.5 flex items-center justify-between">
        {/* Brand Logo & Nav Group */}
        <div className="flex items-center gap-10">
          <Link to="/" className="flex items-center">
            <img
              src={emawacLogo}
              alt="EMAWAC Logo"
              className="h-11 sm:h-12.5 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links matching Figma */}
          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium text-primary">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="hover:opacity-80 transition-opacity"
            >
              About EMAWAC
            </a>
            <a
              href="#how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="hover:opacity-80 transition-opacity"
            >
              How it works
            </a>
            <a
              href="#gallery"
              onClick={(e) => handleNavClick(e, 'gallery')}
              className="hover:opacity-80 transition-opacity"
            >
              Gallery
            </a>
            <a
              href="#news"
              onClick={(e) => handleNavClick(e, 'news')}
              className="hover:opacity-80 transition-opacity"
            >
              News & Events
            </a>
            <a
              href="#self-service"
              onClick={(e) => handleNavClick(e, 'self-service')}
              className="hover:opacity-80 transition-opacity"
            >
              Self-service
            </a>
          </nav>
        </div>

        {/* Right Action: Login pill */}
        <div className="flex items-center">
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-7 py-2.5 rounded-full bg-gold hover:bg-gold-hover text-bg-page font-medium text-[15px] transition-all shadow-sm active:scale-95"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}

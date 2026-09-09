import { Link, useLocation, useNavigate } from 'react-router-dom'
import { emawacLogo } from '@/assets/images'

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    if (location.pathname === '/' || location.pathname === '') {
      const element = document.getElementById(targetId)
      if (element) {
        e.preventDefault()
        element.scrollIntoView({ behavior: 'smooth' })
        window.history.pushState(null, '', `#${targetId}`)
      }
    } else {
      e.preventDefault()
      navigate(`/#${targetId}`)
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
          <nav className="hidden lg:flex items-center gap-6 text-[15px] font-medium">
            <a
              href="/#about"
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-primary hover:opacity-80 transition-opacity py-1"
            >
              About EMAWAC
            </a>
            <a
              href="/#how-it-works"
              onClick={(e) => handleNavClick(e, 'how-it-works')}
              className="text-primary hover:opacity-80 transition-opacity py-1"
            >
              How it works
            </a>
            <Link
              to="/gallery"
              className={`transition-all py-1 ${
                location.pathname === '/gallery'
                  ? 'text-gold border-b-2 border-gold font-semibold'
                  : 'text-primary hover:opacity-80'
              }`}
            >
              Gallery
            </Link>
            <a
              href="/#news"
              onClick={(e) => handleNavClick(e, 'news')}
              className="text-primary hover:opacity-80 transition-opacity py-1"
            >
              News & Events
            </a>
            <a
              href="/#self-service"
              onClick={(e) => handleNavClick(e, 'self-service')}
              className="text-primary hover:opacity-80 transition-opacity py-1"
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

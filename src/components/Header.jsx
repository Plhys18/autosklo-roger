import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const navItems = [
    { path: '/', label: 'Domů' },
    { path: '/sluzby', label: 'Služby' },
    { path: '/opravy-skel', label: 'Opravy skel' },
    { path: '/pojistovny', label: 'Pojišťovny' },
    { path: '/pobocky', label: 'Pobočky' },
    { path: '/kontakt', label: 'Kontakt' }
  ]

  return (
    <header className="bg-white shadow-automotive fixed w-full top-0 z-50 border-b border-secondary-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 bg-gradient-automotive rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
              <div className="text-white font-bold text-xl">AR</div>
            </div>
            <div>
              <div className="heading-primary text-xl lg:text-2xl text-gradient-automotive">
                AutoskloRoger
              </div>
              <div className="text-primary-600 text-sm font-medium">
                s.r.o.
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${isActive(item.path)
                    ? 'bg-primary-100 text-primary-800 shadow-sm'
                    : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-700'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center space-x-4">
            <a
              href="tel:543257540"
              className="hidden md:flex items-center bg-gradient-automotive text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-200"
            >
              <span className="mr-2">📞</span>
              <span className="font-semibold">543 257 540</span>
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-secondary-700 hover:text-primary-600 p-2 rounded-lg hover:bg-primary-50 transition-colors"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-secondary-200 rounded-b-lg shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`
                    block px-4 py-3 rounded-lg font-medium transition-all duration-200
                    ${isActive(item.path)
                      ? 'bg-primary-100 text-primary-800'
                      : 'text-secondary-700 hover:bg-primary-50 hover:text-primary-700'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-4 py-3 border-t border-secondary-200 mt-2">
                <a
                  href="tel:543257540"
                  className="flex items-center justify-center bg-gradient-automotive text-white px-4 py-3 rounded-lg hover:shadow-lg transition-all duration-200"
                >
                  <span className="mr-2">📞</span>
                  <span className="font-semibold">Zavolat: 543 257 540</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
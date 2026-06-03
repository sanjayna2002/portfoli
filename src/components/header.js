import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skill', label: 'Skill' },
  { href: '#project', label: 'Project' },
  { href: '#roles', label: 'Roles' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-0 z-50 bg-secondary shadow-md">
     <div className="relative flex h-14 w-full items-center px-5">
  <a
    href="/"
    className="shrink-0 text-left text-lg font-bold tracking-wide text-white"
  >
    Portfolio
  </a>

        <nav className="ml-auto hidden md:block" aria-label="Main navigation">
          <ul className="flex items-center gap-1 text-white">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-white/15"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="ml-auto rounded-md p-2 text-white transition-colors hover:bg-white/15 md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" aria-hidden />
          ) : (
            <Bars3Icon className="h-6 w-6" aria-hidden />
          )}
        </button>

        {menuOpen && (
          <>
            <button
              type="button"
              className="fixed inset-0 top-14 z-40 bg-black/40 md:hidden"
              aria-label="Close menu"
              onClick={closeMenu}
            />
            <nav
              className="absolute left-0 right-0 top-full z-50 border-t border-white/20 bg-secondary shadow-lg md:hidden"
              aria-label="Mobile navigation"
            >
              <ul className="flex flex-col py-1">
                {NAV_LINKS.map(({ href, label }) => (
                  <li key={href}>
                    <a
                      href={href}
                      className="block border-b border-white/10 px-5 py-3 text-white transition-colors last:border-b-0 hover:bg-white/10"
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  )
}

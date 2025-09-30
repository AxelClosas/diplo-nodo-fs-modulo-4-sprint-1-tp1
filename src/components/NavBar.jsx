import { useState } from "react"

const navbarLinks = [
  {id: 1, title: 'Inicio', link: '/'},
  {id: 2, title: 'Equipos', link: '#equipos'},
  {id: 3, title: 'Blog', link: '/blog'},
  {id: 4, title: 'Calendario', link: '#calendario'},
  {id: 5, title: 'Contacto', link: '/contacto'}
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="flex items-center justify-center">
      {/* Burger btn */}

      <button
        className="md:hidden text-white p-2 cursor-pointer"
        onClick={toggleMenu}
      >
        {console.log(isOpen)}

        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24 "
          >
          <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16M4 18h16" // burger
          />

        </svg>
      </button>

        <ul className="flex">
          { navbarLinks.map((item, index) => (
              <li key={index}>
                <a href={item.link}
                  className="text-white font-semibold py-2 px-4 rounded hover:bg-[rgba(255,255,255,0.2)]"
                >{item.title}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
  )
}

export default NavBar
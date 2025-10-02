import { useState } from "react"
import BurgerIcon from "./Icons/BurgerIcon.jsx"
import CloseIcon from "./Icons/CloseIcon.jsx"

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

        {/* Uso de iconos SVG para abrir y cerrar menú hamburguesa */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24 "
          >
          { isOpen ? <CloseIcon /> : <BurgerIcon /> }
        </svg>
      </button>

        <ul className="hidden md:flex gap-2">
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
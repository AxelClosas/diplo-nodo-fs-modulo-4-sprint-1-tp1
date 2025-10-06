import NavBar from "./NavBar.jsx"

const Header = () => {
  return (
    <header className="w-full bg-transparent p-4 fixed transition duration-200 shadow-black z-50">
      <div className="max-w-7xl flex justify-between mx-auto">
        <div className="flex items-center gap-2">
          <a href="">
            <img
              src="/images/escudo_alianza.png" alt="Escudo de Alianza Handball Catamarca"
              className="max-w-12 md:max-w-14"
            />
          </a>
          <h1 className="text-xl md:text-2xl uppercase font-bold text-white">Alianza Handball Catamarca</h1>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

export default Header


// Animación del header al hacer scroll
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  if (window.scrollY > 0) {
    header.classList.remove('bg-transparent')
    header.classList.add('bg-gradient-to-r', 'from-[#0b3c7f]', 'to-[#1e6fd9]', 'shadow-[0_0_5px]', 'shadow-black')
  } else {
    header.classList.add('bg-transparent')
    header.classList.remove('bg-gradient-to-r', 'from-[#0b3c7f]', 'to-[#1e6fd9]', 'shadow-[0_0_5px]', 'shadow-black')
  }
})
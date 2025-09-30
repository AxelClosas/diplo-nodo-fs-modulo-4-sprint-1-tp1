import NavBar from "./NavBar.jsx"

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-[#0b3c7f] to-[#1e6fd9] p-4">
      <div className="max-w-7xl flex justify-between">
        <div className="flex items-center gap-2">
          <a href="">
            <img
              src="/images/escudo_alianza.png" alt="Escudo de Alianza Handball Catamarca"
              className="max-w-14"
            />
          </a>
          <h1 className="text-2xl uppercase font-bold text-white">Alianza Handball Catamarca</h1>
        </div>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
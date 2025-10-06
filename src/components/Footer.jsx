import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Club Alianza Handball Catamarca. Todos los derechos reservados.</p>
        <p>Hecho con React por <a href="https://github.com/AxelClosas" className='text-blue-400 font-bold hover:text-blue-200' target="_blank" rel="noopener noreferrer">Axel Closas</a></p>
      </div>
    </footer>
  )
}

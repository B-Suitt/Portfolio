import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  {
    /* !!! CREAR SCROLL A CADA SECCION */
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-4 right-4 z-50 bg-gray-800/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-700">
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button className="text-white hover:text-cyan-400 transition-colors">
            <span className="text-cyan-400">&lt;</span>Bastian Suitt
            <span className="text-cyan-400">/&gt;</span>
          </button>

          {/* Desktop Navegation */}
          <div className="hidden md:flex items-center gap-8">
            <button className="text-gray-300 hover:text-cyan-400 transition-colors">
              Sobre mí
            </button>
            <button className="text-gray-300 hover:text-cyan-400 transition-colors">
              Proyectos
            </button>
            <button className="px-6 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg">
              Contacto
            </button>
          </div>
          {/* Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          </div>
          {/* Mobile Navegation*/}
          {isMenuOpen && (
            <div className="md:hidden mt-4 flex flex-col gap-4 pt-4 border-t border-gray-700 items-center">
              <button className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
                Sobre mí
              </button>
              <button className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
                Proyectos
              </button>
              <button className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
                Contacto
              </button>
            </div>
          )}
      </nav>
    </header>
  );
};

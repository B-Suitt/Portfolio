import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Header = () => {
  {
    /* !!! CREAR SCROLL A CADA SECCION */
  }
  const menu = [
    {
      nombre: "Inicio",
      url: "#about",
    },
    {
      nombre: "Proyectos",
      url: "#projects",
    },
    {
      nombre: "Contacto",
      url: "#contact",
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-md border-b border-gray-800/50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo / Botón de inicio */}
          <a
            href="#about"
            className="text-xl font-bold text-white hover:text-cyan-400 transition-colors"
          >
            <span className="text-cyan-400">&lt;</span>
            Bastian Suitt
            <span className="text-cyan-400"> /&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {menu.map((item, i) => (
              <li key={i}>
                {item.nombre === "Contacto" ? (
                  <a
                    href={item.url}
                    className="px-5 py-2 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full font-medium hover:scale-105 transition-all shadow-lg shadow-cyan-500/20"
                  >
                    {item.nombre}
                  </a>
                ) : (
                  <a
                    href={item.url}
                    className="text-gray-400 hover:text-white transition-colors font-medium text-sm uppercase tracking-wider"
                  >
                    {item.nombre}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Menu Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-gray-950 border-b border-gray-800 animate-in fade-in slide-in-from-top-4">
            <ul className="flex flex-col gap-6 p-8 items-center">
              {menu.map((item, i) => (
                <li key={i} className="w-full text-center">
                  <a
                    href={item.url}
                    onClick={handleLinkClick}
                    className={`text-xl font-medium transition-colors ${
                      item.nombre === "Contacto"
                        ? "text-cyan-400"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.nombre}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;

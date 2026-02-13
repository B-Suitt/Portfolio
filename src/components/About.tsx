import { useState } from "react";
import { Linkedin, Github, Mail } from "lucide-react";

const About = () => {
  // Estado para manejar si la imagen existe o falla
  const [imgExists, setImgExists] = useState(true);

  const socialLinks = [
    {
      nombre: "GitHub",
      url: "https://github.com/B-Suitt",
      icon: <Github size={20} />,
      color: "hover:text-white hover:border-gray-400",
    },
    {
      nombre: "LinkedIn",
      url: "https://www.linkedin.com/in/bastian-suitt-lopez-6a4730233/",
      icon: <Linkedin size={20} />,
      color: "hover:text-[#0077B5] hover:border-[#0077B5]",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen w-full  px-6 py-20 bg-gray-950 relative grid grid-cols-1 md:grid-cols-10 gap-8 items-center"
    >
      {/* COLUMNA IZQUIERDA: 40% */}
      <div className="md:col-span-4 flex flex-col items-center justify-center space-y-6">
        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-cyan-500 to-blue-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>

          <div className="relative w-48 h-48 md:w-full max-w-[240px] aspect-square bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden">
            <img
              src="/tu-foto.jpg"
              alt="Bastian Suitt"
              className={`w-full h-full object-cover transition-all duration-500 ${imgExists ? "opacity-100" : "opacity-0"}`}
              onError={() => setImgExists(false)}
            />

            {/* Si la imagen no carga */}
            {!imgExists && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500 text-sm">
                <span>Foto de Perfil</span>
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <h1 className="font-bold text-white text-3xl md:text-4xl">
            Hola, soy{" "}
            <span className="block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Bastian Suitt
            </span>
          </h1>
        </div>
      </div>

      {/* COLUMNA DERECHA: 60% */}
      <div className="md:col-span-6 flex flex-col items-center md:items-start justify-center md:border-l md:border-gray-800 md:pl-12">
        <h2 className="font-bold text-white mb-8 text-2xl">
          <span className="border-b-2 border-cyan-500 pb-1">Sobre mí</span>
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed max-w-3xl">
          <p>
            Soy un desarrollador web con experiencia en la creación de
            aplicaciones modernas y escalables. Me especializo en tecnologías
            frontend y backend, con un enfoque particular en crear interfaces de
            usuario intuitivas y experiencias fluidas.
          </p>
          <p>
            Mi filosofía de trabajo se basa en la simplicidad y la atención al
            detalle. Creo en la importancia de escribir código mantenible y en
            seguir las mejores prácticas de la industria.
          </p>
        </div>

        {/* BOTONES DE REDES SOCIALES */}

        <div className="mt-12 flex flex-wrap gap-4 items-center">
          <a
            href="mailto:tu@email.com"
            className="flex items-center gap-2 px-6 py-3 bg-linear-to-r
             from-cyan-500 to-blue-500 text-white rounded-full font-bold
             shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all"
          >
            <Mail size={20} />
            Contáctame
          </a>
          <div className="flex gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-gray-900 border border-gray-800 rounded-xl text-gray-400 transition-all duration-300 ${link.color} hover:scale-110 shadow-xl`}
                title={link.nombre}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
          <div className="h-1 w-8 bg-blue-600 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default About;

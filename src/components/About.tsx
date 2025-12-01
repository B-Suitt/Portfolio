const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-950 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-white mb-12 text-center">
          <span className="bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sobre mí
          </span>
        </h2>
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 shadow-xl">
          <div className="space-y-6 text-gray-300">
            <p>
              Soy un desarrollador web con experiencia en la creación de
              aplicaciones modernas y escalables. Me especializo en tecnologías
              frontend y backend, con un enfoque particular en crear interfaces
              de usuario intuitivas y experiencias fluidas.
            </p>
            <p>
              Mi filosofía de trabajo se basa en la simplicidad y la atención al
              detalle. Creo en la importancia de escribir código mantenible y en
              seguir las mejores prácticas de la industria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

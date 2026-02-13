import { Github, Linkedin, Mail } from "lucide-react";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-x-hidden"
    >

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto bg-linear-to-br from-cyan-500 to-blue-600 rounded-full mb-6  relative">
            <div className="absolute inset-2 bg-gray-900 rounded-full" />
          </div>
        </div>

        <h1 className="text-white mb-4">
          Hola, soy{" "}
          <span className="inline-block bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Bastian Suitt
          </span>
        </h1>
        <p className="text-gray-300 mb-8">
          Desarrollador web frontend apasionado por crear experiencias web
          intuitivas, dinámicas y responsivas.
        </p>

        <div className="flex items-center justify-center gap-4 mb-8">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-cyan-500 hover:bg-gray-700 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Github size={20} className="text-gray-300" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-cyan-500 hover:bg-gray-700 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Linkedin size={20} className="text-gray-300" />
          </a>
          <a
            href="mailto:tu@email.com"
            className="p-3 bg-gray-800 border border-gray-700 rounded-full hover:border-cyan-500 hover:bg-gray-700 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Mail size={20} className="text-gray-300" />
          </a>
        </div>

        <button className="px-8 py-3 bg-linear-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70">
            Ver mi trabajo
        </button>
      </div>
    </section>
  );
};

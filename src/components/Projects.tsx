import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  demoUrl: string;
  image: string;
}

const Projects = () => {
  const projects: Project[] = [
    {
      title: "App de Finanzas",
      description:
        "Aplicación web que permite el seguimiento y gestios de gastos e ingresos personales, con un gráfico interactivo.",
      tags: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/B-Suitt/app-finanzas-suitt",
      demoUrl: "https://app-finanzas-suitt.vercel.app/",
      image: "https://i.imgur.com/crnKMju.png",
    },
    {
      title: "Proyecto Ejemplo 2",
      description:
        "Una aplicación web enfocada en la experiencia de usuario y el rendimiento.",
      tags: ["Node.js", "PostgreSQL", "React"],
      githubUrl: "https://github.com/B-Suitt",
      demoUrl: "https://tu-demo.com",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mis Proyectos
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </div>

        {/* Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 flex flex-col h-full"
            >
              {/* Imagen  */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-950/40 group-hover:bg-gray-950/20 transition-colors"></div>
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-cyan-400 text-xs font-medium rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlaces */}
                <div className="mt-auto flex items-center gap-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    Código
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Demo Live
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

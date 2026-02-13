import { type ReactNode } from "react";
import { FileJson, Code2, Layers, Palette, Terminal, Cpu } from "lucide-react";

interface Tech {
  name: string;
  icon: ReactNode;
}

const StackTec = () => {
  const techs: Tech[] = [
    { name: "HTML", icon: <Code2 className="text-orange-500" /> },
    { name: "CSS", icon: <Palette className="text-blue-500" /> },
    { name: "JavaScript", icon: <FileJson className="text-yellow-400" /> },
    { name: "TypeScript", icon: <FileJson className="text-blue-600" /> },
    { name: "Vite", icon: <Layers className="text-purple-500" /> },
    { name: "Node.js", icon: <Terminal className="text-green-500" /> },
    { name: "React", icon: <Cpu className="text-cyan-400" /> },
  ];

  return (
    <section className="py-24 px-6 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stack Tecnológico
          </h2>
          <div className="h-1 w-20 bg-cyan-500 rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {techs.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-gray-950 border border-gray-800 p-6 rounded-2xl hover:border-cyan-500/50 transition-all duration-300 flex flex-col items-center justify-center gap-4 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity"></div>

              <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                {tech.icon}
              </div>

              <div className="text-center">
                <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StackTec;

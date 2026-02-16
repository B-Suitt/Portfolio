import About from "./components/About";
import Header from "./components/Header";
import Projects from "./components/Projects";
import StackTec from "./components/StackTec";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <About />
      <StackTec />
      <Projects />
    </div>
  );
}

export default App;

import About from "./components/About";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import StackTec from "./components/StackTec";

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <About />
      <StackTec />
    </div>
  );
}

export default App;

import About from "./components/About";
import { Header } from "./components/Header";
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

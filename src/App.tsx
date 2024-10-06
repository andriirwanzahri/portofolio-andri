import About from "./Components/About";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <Hero />
      <Services />
      <About />
    </div>
  );
}

export default App;

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Product from "./components/Product";
import Blog from "./components/Blog";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <div className="frontCard">
          <Navbar />
          <Hero />
        </div>

        <Services />
        <About />
        <Product />
        <Blog />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;

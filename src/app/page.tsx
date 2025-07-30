import Header from "./components/Header";
import InformationData from "./components/InformationData";
import Home from "./components/Home";
import Docbar from "./components/Docbar";
import Products from "./components/Products";
import Stacks from "./components/Stacks";
import Curriculum from "./components/Curriculum";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <InformationData />
        <Home />
        <Products />
        <Stacks />
        <Curriculum />
        <Contact />
        <Footer />


        <Docbar />
      </div>
    </div>
  );
}

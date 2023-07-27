import Header from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import {Toaster} from "react-hot-toast";

function App() {
  return (
   <>
   <Header />
   <Home />
   <Work />
   <Skills />
   <Contact />
   <Footer />
   <Toaster />
  
   </>
  );
}

export default App;

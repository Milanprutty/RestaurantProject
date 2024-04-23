import Categories from "./components/Categories/Categories";
import Dishes from "./components/Dishes/Dishes";
import Footer from "./components/Footer/Footer";
import MainHero from "./components/MainHero/MainHero";
import NavBar from "./components/NavBar/NavBar";
import Services from "./components/Services/Services";
import Testimonials from "./components/Testimonials/Testimonials";

const App = () => {
  return (
    <div>
      <NavBar />
      <MainHero />
      <Categories />
      <Dishes />
      <Testimonials />
      <Services />
      <Footer />
    </div>
  );
};

export default App;

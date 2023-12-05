
import Navbar from "./sections/Navbar"
import ContactUs from "./sections/ContactUs"
import ImageGallery from "./sections/ImageGallery"
import Showcase from "./sections/Showcase"
import Services from "./sections/Services"
import AboutUs from "./sections/AboutUs"
import Footer from "./sections/Footer"
import {Routes,Route} from "react-router-dom" 
import ContactForm from "./sections/ContactForm"

function App() {

  return (
    <div className="h-full w-full">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

const Home = () => (
  <>
    <section className="flex justify-center">
      <Showcase />
    </section>
    <section className="px-5 py-5 md:px-10 md:py-10">
      <AboutUs />
    </section>
    <section className="px-5 py-5 md:px-10 md:py-10">
      <Services />
    </section>
    <section className="p flex justify-center">
      <ContactForm />
    </section>
    <section className="px-5 py-5 md:px-10 md:py-10">
      <ImageGallery />
    </section>
  </>

);

export default App;
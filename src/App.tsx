
import Navbar from "./sections/Navbar"
import ContactForm from "./sections/ContactForm"
import ImageGallery from "./sections/ImageGallery"
import Showcase from "./sections/Showcase"
import Services from "./sections/Services"
import AboutUs from "./sections/AboutUs"
import Footer from "./sections/Footer"

function App() {
  
  return (
    <main className="h-full w-full">
        <Navbar/>
      <section className="flex justify-center">
        <Showcase/>
      </section>
      <section className="px-5 py-5 md:px-10 md:py-10">
        <AboutUs/>
      </section>
      <section className="px-5 py-5 md:px-10 md:py-10">
        <Services/>
      </section>
      <section className="p flex justify-center">
        <ContactForm/>
      </section>
      <section className="px-5 py-5 md:px-10 md:py-10">
        <ImageGallery/>
      </section>
      <section >
        <Footer/>
      </section>
    </main>
  )
}

export default App

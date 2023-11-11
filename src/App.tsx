
import Navbar from "./sections/Navbar"
import ContactForm from "./sections/ContactForm"
import OurStory from "./sections/OurStory"
import Showcase from "./sections/Showcase"
import Services from "./sections/Services"
import AboutUs from "./sections/AboutUs"

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
      <section className="px-5 py-5 md:px-10 md:py-10 flex justify-center">
        <ContactForm/>
      </section>
      <section className="px-5 py-5 md:px-10 md:py-10">
        <OurStory/>
      </section>
    </main>
  )
}

export default App

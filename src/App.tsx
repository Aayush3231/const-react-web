
import Banner from "./sections/Banner"
import InsideOurCompany from "./sections/InsideOurCompany"
import Navbar from "./sections/Navbar"
import OurDisciplines from "./sections/OurDisciplines"
import OurStory from "./sections/OurStory"
import OurWork from "./sections/OurWork"
import Showcase from "./sections/Showcase"

function App() {
  
  return (
    <main className="h-full w-full">
        <Navbar/>
      <section className="flex justify-center">
        <Showcase/>
      </section>
      <section className="sm:flex justify-center sm:pt-20 hidden ">
        <Banner/>
      </section>
       <section className="px-5 py-5 md:px-10 md:py-10">
        <OurWork/>
      </section>
      <section className="px-5 py-5 md:px-10 md:py-10">
        <InsideOurCompany/>
      </section>
      <section className="px-5 py-5 md:px-10 md:py-10">
        <OurDisciplines/>
      </section>
      <section className="px-5 py-5 md:px-10 md:py-10">
        <OurStory/>
      </section>
    </main>
  )
}

export default App

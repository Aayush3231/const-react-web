
import Navbar from "./sections/Navbar"
import Showcase from "./sections/Showcase"

function App() {
  
  return (
    <main className=" h-full w-full">
        <Navbar/>
      <section className="flex justify-center">
        <Showcase/>
      </section>
{/* 
      <section className="px-10 py-10">
        <Trending/>
      </section>

      <section className="px-10 py-10">
        </>
      </section>

      <section className="px-10 py-10">
        <Subscribe/>
      </section>

      <section className="px-10 py-10">
        <Footer/>
      </section>  */}
    </main>
  )
}

export default App

import AboutMe from "./components/AboutMe"
import Introduction from "./components/Introduction"
import ContactMe from "./components/ContactMe"
import Navbar from "./components/Navbar"
import Services from "./components/Services"

function App() {
  return (
    <>
      <Navbar/>
      <Introduction/>
      <AboutMe/>
      <Services />
      <ContactMe/>
    </>
  )
}

export default App

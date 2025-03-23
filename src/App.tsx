import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import Events from "./Pages/Events"
import Leadership from "./Pages/Leadership/Leadership"
import Tracks from "./Pages/Tracks"
import Navbar from "./Components/Navbar/Navbar"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leadership" element={<Leadership />}/>
        <Route path="/tracks" element={<Tracks />} />
        <Route path="/events" element={<Events />} />
      </Routes>
      
    </div>
  )
}

export default App


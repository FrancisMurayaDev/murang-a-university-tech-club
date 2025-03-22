import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Events from "./Pages/Events"
import Leadership from "./Pages/Leadership"
import Tracks from "./Pages/Tracks"

function App() {
  return (
    <div>
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


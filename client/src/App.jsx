import {BrowserRouter, Route, Routes} from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import Home from "./pages/Home"


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/create-post" element={<CreatePost />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App

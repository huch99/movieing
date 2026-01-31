import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import MainHome from "./pages/enduser/home/MainHome"

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<MainHome />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App

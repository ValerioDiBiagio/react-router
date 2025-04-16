import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChiSiamo from "./pages/Chi-siamo"
import ListaPost from "./pages/Lista-post"
import Homepage from "./pages/Homepage"

function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>React Blog Pages</h1>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/lista-post" element={<ListaPost />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App

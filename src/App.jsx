import { BrowserRouter, Routes, Route } from "react-router-dom"
import ChiSiamo from "./pages/Chi-siamo"
import ListaPost from "./pages/Lista-post"
import Homepage from "./pages/Homepage"
import DefaultLayout from "./layouts/DefaultLayout"
import SinglePost from "./pages/Single-post"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route path="/" element={<Homepage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/lista-post" element={<ListaPost />} />
          <Route path="/lista-post/:id" element={<SinglePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

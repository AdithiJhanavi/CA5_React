import Navbar from "./component/navbar"
import BookSearch from "./component/first"
import RegForm from "./component/form"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={<BookSearch />} />
          <Route path="/form" element={<RegForm />} />
        </Routes>
      
    </>
  )
}

export default App
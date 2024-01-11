import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact_us from "./Pages/Contact";
import Register from "./Pages/Register";
import Blog from "./Pages/Blog";
import Aboutus from "./Pages/Aboutus";
import Login from "./Pages/Login";


function App() {


  return (

    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact_us />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/login" element={<Login />} />
      </Routes>


    </BrowserRouter>






  )
}

export default App

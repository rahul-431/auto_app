import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Contact_us from "./Pages/Contact";
import Register from "./Pages/Register";
import Blog from "./Pages/Blog";
import Aboutus from "./Pages/Aboutus";
import Login from "./Pages/Login";
import AppLayout from "./Pages/AppLayout";
import Download from "./Pages/Download";
import PageNotFound from "./Pages/PageNotFound";
// import AdminMain from "./admin/AdminMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<Contact_us />} />
          <Route path="/register" element={<Register />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/download" element={<Download />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
        {/* <Route path="admin" element={<AdminMain />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

import { Outlet } from "react-router";
import Navbar from "../Components/layout/Navbar";
import Footer from "../Components/layout/Footer";

export default function AppLayout() {
  return (
    <div className="w-dvw">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

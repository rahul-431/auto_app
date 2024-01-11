import { Outlet } from "react-router";
import ResponsiveNavbar from "../Components/shared/ResponsiveNavbar";
import Footer from "../Components/shared/Footer";

export default function AppLayout() {
  return (
    <div>
      <ResponsiveNavbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
}

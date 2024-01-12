import { Outlet } from "react-router-dom";
import NavBar from "../layout/NavBar";
import SideBar from "../layout/SideBar";

export default function AppLayout() {
  return (
    <>
      <div className="h-screen overflow-hidden">
        <NavBar />
        <main className="flex">
          <SideBar />
          <div className="pt-0 px-4  bg-blue-50 mt-0 mx-auto flex-1 flex-col max-h-screen overflow-y-auto">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}

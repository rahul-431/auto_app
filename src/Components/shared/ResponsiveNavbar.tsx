import Logo from "./Logo";
// import { NavLink } from "react-router-dom";
// import { Navlink } from "./NavLink";
import { useState } from "react";
import { Navlink } from "./NavLink";
import { useNavigate } from "react-router";

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const cn = isOpen ? "block" : "hidden";
  const navigate = useNavigate();
  return (
    <>
      <header className="bg-white sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3 border-b-2">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div
            className="flex flex-row gap-5 items-center  lg:ms-20 md:ms-10 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Logo logoTitle="Dhoka" />
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="block text-blue-900 hover:text-blue-500 focus:text-blue-500 focus:outline-none"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  v-if={isOpen}
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  v-if={!isOpen}
                  fill-rule="evenodd"
                  d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav className={`${cn} lg:me-20 md:me-10 text-base sm:flex sm:p-0`}>
          <Navlink text="Home" to="/" />
          <Navlink text="About Us" to="/about" />
          <Navlink text="Download App" to="/download" />
          <Navlink text="Blog" to="/blog" />
          <Navlink text="Contact" to="/contact" />
        </nav>
      </header>
    </>
  );
}

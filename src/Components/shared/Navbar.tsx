import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Navlink } from "./NavLink";

function Navbar() {
  return (
    <nav className=" bg-white-100 border-gray-200 py-4 dark:bg-gray-900  mx-48">
      <div className="flex flex-wrap items-center justify-between max-w-screen-3xl px-4 mx-auto text-2xl">
        {/* logo */}
        <NavLink to="/" className="flex items-center">
          <Logo logoTitle="Dhoka" />
        </NavLink>
        {/* <div className="flex items-center lg:order-2 lg:ps-7">
          <NavLink to="/login">
            <Button
              label="Login"
              style="text-white bg-blue-500 hover:bg-amber-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-large px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-20 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-blue-500 lg:text-2xl"
            />{" "}
          </NavLink>
        </div> */}

        <div
          className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-20 lg:mt-0 lg:text-xl">
            <Navlink to="/about" text="About" />
            <Navlink to="/download" text="Download App" />
            <Navlink to="/blog" text="Blog" />
            <Navlink to="/contact" text="Contact" />
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

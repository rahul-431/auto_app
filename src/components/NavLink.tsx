import { ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";

type navLinkProp = {
  to: string;
  text: string;
  icon: ReactNode;
};
export default function Navlink({ to, text, icon }: navLinkProp) {
  const { pathname } = useLocation();
  const activeLinkClass =
    pathname === to ? "bg-blue-400 text-white shadow-md shadow-gray-300" : "";
  return (
    <NavLink
      to={to}
      className={`hover:bg-blue-400 hover:text-white hover:shadow-sm hover:shadow-gray-300  rounded-md py-2 w-52  cursor-pointer px-6 text-justify ${activeLinkClass}`}
    >
      <span className="me-5">{icon}</span>
      {text}
    </NavLink>
  );
}

import { NavLink } from "react-router-dom";

type navLinkProp = {
  to: string;
  text: string;
};
export function Navlink({ to, text }: navLinkProp) {
  // const { pathname } = useLocation();
  return (
    <NavLink
      to={to}
      className="mt-1 block px-2 py-1 text-black font-semibold rounded hover:text-orange-600 sm:mt-0 sm:ml-2"
    >
      {text}
    </NavLink>
  );
}

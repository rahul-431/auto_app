import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGear,
  faHouse,
  faList,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Navlink from "../../Components/shared/NavLink";

export default function SideBar() {
  const homeIcon = <FontAwesomeIcon icon={faHouse} />;

  const guestIcon = <FontAwesomeIcon icon={faUser} />;
  const bookingIcon = <FontAwesomeIcon icon={faBook} />;
  const settingIcon = <FontAwesomeIcon icon={faGear} />;
  const logoutIcon = <FontAwesomeIcon icon={faRightFromBracket} />;
  const logIcon = <FontAwesomeIcon icon={faList} />;
  return (
    <div className=" w-64 p-4 text-gray-900 mt-5">
      <nav className="grid justify-between space-y-6 text-base text-center">
        <Navlink to="/dashboard" text="Dashboard" icon={homeIcon} />
        <Navlink to="/users" text="Users" icon={guestIcon} />
        <Navlink to="/drivers" text="Drivers" icon={guestIcon} />
        <Navlink to="/rides" text="Manage Rides" icon={bookingIcon} />
        <Navlink to="/setting" text="System Settings" icon={settingIcon} />
        <Navlink to="/systemLog" text="System Log" icon={logIcon} />
        <Navlink to="/logout" text="Logout" icon={logoutIcon} />
      </nav>
    </div>
  );
}

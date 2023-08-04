import { FC } from "react";
import { NavLink } from "react-router-dom";

const Sidebar: FC = () => {
  return (
    <div className="h-screen hidden md:static left-0 md:block bg-blue-400 md:w-1/4 lg:w-1/5">
      <header>
        Elite
        <br />
        Travelers
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to="/"></NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

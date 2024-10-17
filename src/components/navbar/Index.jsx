import { Link } from "react-router-dom";
import { NavLinks } from "../../config";
import { logo } from "../../assets";
import ThemeMode from "../theme/Index";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-max z-50">
      <div className="container mx-auto h-16 rounded-full overflow-hidden bg-gradient-to-br bgGradient p-[0.08rem]">
        <div className="h-full w-full flex justify-between items-center py-3 px-6 bg-white dark:bg-primary bg-opacity-80 dark:bg-opacity-[.89]  rounded-full">
          {/* Logo */}
          <div className="flexCenter cursor-pointer">
            <img src={logo} className="w-16" />
          </div>
          {/* Navigation Links */}
          <div className="flex items-center justify-between gap-10">
            <ul className="flex justify-center items-center gap-5 font-[600] text-primary dark:text-white cursor-pointer">
              {NavLinks.map(({ id, label, path }) => (
                <Link key={id} to={path}>
                  {label}
                </Link>
              ))}
            </ul>
            <ThemeMode />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

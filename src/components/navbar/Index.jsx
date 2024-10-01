import { Link } from "react-router-dom";
import { NavLinks } from "../../config";

const Navbar = () => {
  return (
    <nav className="w-full h-max bg-slate-400">
      <div className="container mx-auto flex justify-between items-center py-3 h-10">
        <div>Logo</div>
        <div>
          <ul className="flex justify-center items-center gap-3">
            {NavLinks.map(({ id, label, path }) => (
              <Link key={id} to={path}>
                {label}
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

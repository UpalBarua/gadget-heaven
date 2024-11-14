import { ShoppingCart, Heart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  {
    link: "/",
    label: "Home",
  },
  {
    link: "/",
    label: "Statistics",
  },
  {
    link: "/dashboard",
    label: "Dashboard",
  },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header
      className={`py-5 container mx-auto px-8 rounded-t-3xl flex items-center justify-between ${
        location.pathname === "/" ? "bg-brand-purple text-white mt-6" : ""
      }`}
    >
      <Link className="font-bold text-xl tracking-tight" to="/">
        Gadget Heaven
      </Link>
      <nav>
        <ul className="hidden sm:flex items-center gap-x-10">
          {navLinks.map(({ label, link }) => {
            return (
              <li key={label}>
                <Link className="hover:opacity-80 transition-opacity" to={link}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex items-center gap-x-4">
        <li>
          <Link className="bg-white block text-brand-black p-2 rounded-full hover:opacity-80 transition-opacity">
            <ShoppingCart className="size-5" />
          </Link>
        </li>
        <li>
          <Link className="bg-white block text-brand-black p-2 rounded-full hover:opacity-80 transition-opacity">
            <Heart className="size-5" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

import Link from "next/link";
import React from "react";

const navlinks: Navlinks[] = [
  { title: "Home", href: "/" },
  { title: "RS Solutions", href: "/solutions " },
  { title: "RS Tech", href: "/tech" },
];

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">The RS Foundations</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          {navlinks.map((navlink) => (
            <li key={navlink.title}>
              <Link href={navlink.href}>{navlink.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

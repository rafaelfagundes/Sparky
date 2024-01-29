"use client";
import React, { useState } from "react";

const MENU_ITEMS = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white dark:bg-gray-800 shadow">
      <Logo></Logo>
      <button
        className="text-black dark:text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
        type="button"
        onClick={toggleNavbar}
      >
        <span className="block relative w-6 h-px rounded-sm bg-black dark:bg-white"></span>
        <span className="block relative w-6 h-px rounded-sm bg-black dark:bg-white mt-1"></span>
        <span className="block relative w-6 h-px rounded-sm bg-black dark:bg-white mt-1"></span>
      </button>
      <div
        className={`lg:flex flex-grow items-center ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
          {MENU_ITEMS.map((item) => (
            <MenuItem key={item.label} {...item}></MenuItem>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

function Logo() {
  return (
    <img src="/img/light-logo.svg" alt="Logo" className="navbar-logo h-10" />
  );
}

function MenuItem({ label, href }: { label: string; href: string }) {
  return (
    <li className="nav-item">
      <a
        className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-black dark:text-white hover:opacity-75"
        href={href}
      >
        {label}
      </a>
    </li>
  );
}

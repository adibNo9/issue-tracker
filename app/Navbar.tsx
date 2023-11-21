"use client";

import React from "react";

import cls from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiBugAnt } from "react-icons/hi2";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 px-6 h-14 items-center border-b mb-6">
      <Link href="/">
        <HiBugAnt />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            className={cls({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-500": currentPath !== link.href,
              "hover:text -zinc-800 transition-colors": true,
            })}
            key={link.href}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

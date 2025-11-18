import { useState } from "react";
import Container from "../ui/Container.jsx";
import Button from "../ui/Button.jsx";
import { NavLink } from "react-router-dom";

const links = [
  { to: "/about", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/resume", label: "Resume" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-black/70 backdrop-blur">
      <Container className="flex h-16 items-center">
        {/* Left: Logo/Brand */}
        <div className="flex-1 flex justify-start">
          <a href="/" className="flex items-center gap-2">
            <span className="text-white font-semibold">Elena Mercelli</span>
          </a>
        </div>
        {/* Center: Navigation links (hidden on small screens) */}
        <nav className="flex justify-center flex-none text-center">
          <ul className="hidden md:flex items-center gap-6 text-sm text-white/80">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `transition hover:text-white ${
                      isActive ? "text-white" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        {/* Right: CTA / mobile button */}
        <div className="flex-1 flex justify-end">
          <Button
            as="a"
            href="/contact"
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            Contact Me
          </Button>
        </div>
      </Container>
    </header>
  );
}

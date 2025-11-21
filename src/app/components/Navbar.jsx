"use client";
import { useEffect, useState } from "react";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);
  const links = [
    { name: "Home", href: "#" },
    { name: "Plants", href: "#" },
    { name: "Contact", href: "#" },
  ];
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold">
          Plant Shop
        </a> 
        <nav className="hidden md:flex gap-8 items-center">
          {links.map((l) => (
            <a
              key={l.name}
              href={l.href}
              className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded"
            >
              {l.name}
            </a>
          ))}
        </nav> 
        <div className="hidden md:flex items-center gap-4">
          <button
            aria-label="Open cart"
            className="text-sm py-1 px-3 border rounded-md hover:bg-gray-50"
          >
            Cart
          </button>
          <button
            aria-label="Open account"
            className="text-sm py-1 px-3 border rounded-md hover:bg-gray-50"
          >
            Account
          </button>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50"
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute inset-0 bg-black/40"
          />
          <aside
            className="absolute right-0 top-0 h-full w-3/4 max-w-xs bg-white shadow-lg p-6"
            aria-labelledby="mobile-menu-title"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 id="mobile-menu-title" className="text-lg font-semibold">
                Menu
              </h2>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="p-1 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.name}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base py-2 rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                  {l.name}
                </a>
              ))}
              <div className="mt-4 border-t pt-4">
                <a
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center px-4 py-2 bg-green-600 text-white rounded-md"
                >
                  Shop Plants
                </a>
              </div>
            </nav>
          </aside>
        </div>
      )}
    </header>
  );
}
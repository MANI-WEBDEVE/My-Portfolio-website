import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
        <nav className="flex items-center justify-between">
          <div>
            <ul>
              <li>
                <Link href={"/"} aria-label="home-page">
                  M-Inam
                </Link>
              </li>
            </ul>
          </div>
          <div>
          <ul className="flex items-center gap-4">
              <li>
                <Link href={"/about"} aria-label="home-page">
                  About
                </Link>
              </li>
              <li>
                <Link href={"/blog"} aria-label="home-page">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;

/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */
import React from 'react';
import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span> </span>
              <span>Selera Hanani</span>
            </h1>
            <h2> </h2>
            {/* <h1>
              <span>Selera</span>
              <span>Hanani</span>
            </h1> */}
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Selera Hanani</p>
      </footer>
    </div>
  );
}

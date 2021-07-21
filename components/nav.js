import React from 'react';
import Link from 'next/link';

export default () => (
  <nav>
    <ul>
      <li>
        <Link href="/">
          <a href="#" className="k">
            <div className="nav-fill"></div>
            <span className="label">home</span>
            <span className="chevron">&gt;</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a href="#" className="k">
            <div className="nav-fill"></div>
            <span className="label">about</span>
            <span className="chevron">&gt;</span>
          </a>
        </Link>
      </li>
    </ul>
  </nav>
);

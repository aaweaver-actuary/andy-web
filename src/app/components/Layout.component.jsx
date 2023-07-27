'use client';

import Link from 'next/link';
import Button from './Button.component';
import Scroll from './Scroll.component';

const navItems = [
  { category: 'about', link: '/about' },
  { category: 'blog', link: '/blog' },
  { category: 'projects', link: '/projects' },
  { category: 'resume', link: '/resume' },
  { category: 'contact', link: '/contact' },
];

const Layout = ({ children }) => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col mb-5 z-[10000]">
      <header className="flex flex-row pb-2 pt-4 border-b-black border-b-2 top-0 h-[75px] ">
        <Link href="/" className="flex flex-col">
          <span className="mx-5 text-4xl w-fit hover:bg-black hover:text-white hover:scale-105 transition-all duration-200">
            <h2 className="px-2">.andy-weaver</h2>
          </span>
        </Link>
        <nav className="flex flex-col">
          <ul className="flex flex-row">
            {navItems.map((navItem, index) => (
              <li className="mx-1" key={index}>
                <Link href={navItem.link}>
                  <Button text={navItem.category} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <main
        className={`flex flex-col w-[100%] h-[100%] overflow-y-scroll z-[5000]`}
      >
        <Scroll>{children}</Scroll>
      </main>
    </div>
  );
};

export default Layout;

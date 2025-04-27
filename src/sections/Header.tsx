'use client'
import Link from "next/link";

const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
]

export const Header = () => {
  return <div className="flex justify-center items-center
  fixed z-10 top-3 w-full">
    <nav className="flex gap-1 p-0.5 border border-white/15 
    rounded-full bg-white/10 backdrop:blur">
      <a href="#" className="nav-item">Home</a>
      <a href="#project" className="nav-item">Projects</a>
      <a href="#about" className="nav-item">About</a>
      <a href="#contact" className="nav-item bg-white text-black-jet
      hover:bg-white/70 hover:text-black-jet">
        Contact
      </a>
    
    </nav>
  </div>;
};

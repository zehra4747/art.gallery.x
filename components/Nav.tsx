"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-[#3b0432] mt-4">
      <div className="container mx-auto flex justify-between items-center h-16 px-4">
        
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/maimoona (1).png"
            alt="logo"
            width={76}
            height={76}
            className="rounded-full"
          />
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          <li className="hover:text-gray-300"><Link href="/">Home</Link></li>
          <li className="hover:text-gray-300"><Link href="/gallery">Gallery</Link></li>
          <li className="hover:text-gray-300"><Link href="/about">About</Link></li>
          <li className="hover:text-gray-300"><Link href="/contact">Contact</Link></li>
        </ul>
        
        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} aria-label="Toggle menu" className="text-white focus:outline-none">
            {isMenuOpen ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#3b0432] py-4">
          <ul className="flex flex-col items-center gap-6 text-white">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/gallery" onClick={toggleMenu}>Gallery</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;

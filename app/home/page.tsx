import Link from 'next/link';
import React from 'react';
import Navbar from '@/components/Nav';
import Footer from '@/components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section id="welcome" className="mt-40 ml-10">
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#e6db44] uppercase tracking-wider mb-4">
          MZ ART GALLERY
        </h2>
        <p className="text-lg max-w-[600px] leading-relaxed mb-5 text-[white] text-left">
          Experience the beauty of art through the lens of creativity. Welcome to MZ Art Gallery, where every image tells a story.
        </p>
        <Link href="/gallery">
          <button className="py-3 px-6 bg-[#e6db44] text-black text-lg rounded font-bold transition duration-300 ease-in-out hover:bg-[#e6c749] hover:text-white">
            Explore the Gallery
          </button>
        </Link>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;

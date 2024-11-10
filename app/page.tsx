import React from 'react'
import Navbar from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'


const page = () => {
  return (
    <div>
      <Navbar/>
      <section id="welcome" className="mt-40 ml-10 mb-40">
      <h2 className="font-serif font-bold text-4xl md:text-5xl text-[#bbbbb9] uppercase tracking-wider mb-4">
        MZ ART GALLERY
      </h2>
      <p className="text-lg max-w-[600px] leading-relaxed mb-5 text-[white] text-left">
        Experience the beauty of art through the lens of creativity. Welcome to MZ Art Gallery, where every image tells a story.
      </p>
      <Link href="/gallery">
        <button className="py-3 px-6 hover:bg-[#bbbbb5] text-white text-lg rounded font-bold transition duration-300 ease-in-out bg-[#3b0432] hover:text-black">
          Explore the Gallery
        </button>
      </Link>
    </section>
      <Footer/>
    </div>
  )
}

export default page

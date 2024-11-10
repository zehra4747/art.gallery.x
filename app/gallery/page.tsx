import React from 'react'
import Navbar from '@/components/Nav'
import Image from 'next/image'
import Footer from '@/components/Footer'

const Page = () => {
  return (
    <div>
        <Navbar />
        
        <div className="text-center mt-4">
            <h2 className="text-[40px] md:text-[50px]">G A L L E R Y</h2>
            <h3 className="text-[20px] md:text-[24px]">Straight from my Camera, Capturing life&apos;s Authenticity</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-6 mt-10">
        <Image src="/1AG.jpg" alt="Gallery Image 5" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/19AG.jpg" alt="Gallery Image 5" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/12AG.jpg" alt="Gallery Image 6" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/17AG.jpg" alt="Gallery Image 7" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/8AG.jpg" alt="Gallery Image 8" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/9AG.jpg" alt="Gallery Image 9" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/6AG.jpg" alt="Gallery Image 10" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/11AG.jpg" alt="Gallery Image 11" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/10AG.jpg" alt="Gallery Image 12" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/3AG.jpg" alt="Gallery Image 13" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/14AG.jpg" alt="Gallery Image 14" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/18AG.jpg" alt="Gallery Image 15" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/13AG.jpg" alt="Gallery Image 16" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/7AG.jpg" alt="Gallery Image 17" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/16AG.jpg" alt="Gallery Image 18" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/20AG.jpg" alt="Gallery Image 19" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
            <Image src="/5AG.jpg" alt="Gallery Image 20" width={360} height={360} className="w-full h-auto object-cover rounded-md" />
        </div>

        <Footer />
    </div>
  )
}

export default Page

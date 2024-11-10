import Footer from '@/components/Footer'
import Navbar from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
      <Navbar/>
      <section className='justify-center  items-center ml-10 mt-10 mr-20'>
                
                <h1 className='text-[30px] font-serif text-center'>ABOUT ME</h1>
                <div className= "  mt-6  font-serif">
                <h2 className='text-[30px]'><i>The Person Behind:</i></h2>
                <p>
                    I&apos;m Maimoona Zehra, a creative fusion of photography and programming.pursuing a Bachelor&apos;s in Computational Finance at NED University, currently in my 3rd semester. Alongside my academic pursuits, I am developing advanced skills in Generative AI at GIAIC, expanding my expertise in emerging technologies and data-driven solutions. With a passion of capturing life&apos;s moments and a drive to build innovation solutions,i&apos;m always looking for new ways to express myself.
                </p>
                <br/>
                <h2 className='text-[30px]'><i>Why My Own Photography?</i></h2>
                <p>
                    As a photographer, I love capturing life&apos;s moment through my lens. And as a Programmer, I enjoy solving problems and bringing ideas to life. By showcasing my own photography on this website, I&apos;m combining my two passions and making it a unique blend of Art and Code.
                </p>
                <br/>
                
                <h4 className='text-[30px] text-center mt-20 mb-10'>Thank You For Visiting Us</h4>
                </div>
            </section>
            <Footer/>
    </div>
  )
}

export default page
'use client'

import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import { HeroOrbit } from '@/components/HeroOrbit';


export const HeroSection = () => {
  return <section id='home' className='py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip'>
  <div className='absolute inset-0 pointer-events-none'
  style={{
    maskImage:
      "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
    WebkitMaskImage:
      "linear-gradient(to bottom, transparent, black 10%, black 70%, transparent)",
  }}
  >

    {/* Start Bg and rings */}
    <div className="abasolute inset-0 -z-30 opacity-5" style={{
      backgroundImage: `url(${grainImage.src})`
    }}>
    </div>

     {/* hero-ring class in global.css please refer that */}

    <div id='ring' className=" size-[620px] hero-ring"></div>
    <div id='ring' className=" size-[820px] hero-ring"></div>
    <div id='ring' className=" size-[1020px] hero-ring"></div>
    <div id='ring' className=" size-[1220px] hero-ring"></div>

    {/* shouldOrbit?: boolean; 
      orbitDuration?: string; 
      shouldSpin?: boolean; 
      spinDuration?: string; */}

{/* Start of the Stars and orbits */}
{/* Hero Orbit in Components please refer that */}

 
  <HeroOrbit size={430} rotation={-14} shouldOrbit orbitDuration='30s'
  shouldSpin spinDuration='4s'>
    <SparkleIcon className='size-8 text-white/20' />
  </HeroOrbit>

  <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration='32s'
  shouldSpin spinDuration='4s'>
    <SparkleIcon className='size-5 text-white/20' />
  </HeroOrbit>

  <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration='34s'>
      <div className='size-2 rounded-full bg-white/20' />
  </HeroOrbit>
  
  <HeroOrbit size={530} rotation={178} shouldOrbit orbitDuration='36s'
  shouldSpin spinDuration='4s'>
    <SparkleIcon className='size-10 text-white/20' />
  </HeroOrbit>

  <HeroOrbit size={550} rotation={20} shouldOrbit orbitDuration='38s'
  shouldSpin spinDuration='8s'>
    <StarIcon className='size-12 text-white/80' />
  </HeroOrbit>

  <HeroOrbit size={590} rotation={98} shouldOrbit orbitDuration='40s'
  shouldSpin spinDuration='8s'>
    <StarIcon className='size-8 text-white/80' />
  </HeroOrbit>

  <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration='42s'>
    <div className='size-2 rounded-full bg-white/20' />
  </HeroOrbit>

  <HeroOrbit size={710} rotation={144} shouldOrbit orbitDuration='44s'
  shouldSpin spinDuration='4s'>
    <SparkleIcon className='size-14  text-white/20' />
  </HeroOrbit>

  <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration='46s'>
    <div className='size-3 rounded-full bg-white/20' />
  </HeroOrbit>
  
  <HeroOrbit size={800} rotation={-72} shouldOrbit orbitDuration='48s'
  shouldSpin spinDuration='8s'>
    <StarIcon className='size-28 text-white/80' />
  </HeroOrbit>
  </div> 
{/* End of the Stars and Orbits */}
{/* End Bg and rings */}
    <div className="container">
      <div className='flex flex-col items-center'>
      <Image src={memojiImage} className='size-[100px] pb-1' 
      alt='Person peeking'/>
      <div className='bg-black-matte border-gray-500 px-4 py-1.5 
      inline-flex items-center gap-4 rounded-lg'>
    {/* Animate the ping*/}
        <div className='bg-green-500 size-2.5 rounded-full  relative'>
          <div className='bg-green-500 inset-0 rounded-full animate-ping-large absolute'>
          </div>
        </div>
        <div className='text-sm font-medium bg-gradient-to-r from-creative to-cool-darker bg-clip-text text-transparent'>Available for new projects</div>
        </div>
      </div>
      <div className='max-w-lg mx-auto'>

      
        <h1 className='font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl'>
          Helping Small Businesses Go Digital
        </h1>
        <p className='mt-4 text-center text-white/70 md:text-lg'>
            I build modern, high-performing websites and web apps that help businesses grow and stand out online.
        </p>
      </div>

      {/* buttons */}
      <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
        <a href='#project'>
        <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl hover:text-black hover:bg-white'>
          <span className='font-semibold'>Explore My Work</span>
          <ArrowDown className="size-4" />
        </button>
        </a>
      <a href='#contact'>
      <button className='inline-flex items-center gap-2 border-white bg-white text-black-matte
        px-6 h-12 rounded-xl hover:bg-white/90'>
          <span>👋</span>
          <span className='font-semibold'>Let&apos;s Connect</span>
          
        </button>
      </a>
       
        
      </div>
    </div>
    
</section>;
};

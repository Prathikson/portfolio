'use client'
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import bookImage from '@/assets/images/book-cover.png';
import Image from "next/image";
import JavascriptIcon from '@/assets/icons/square-js.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import {ToolboxItems} from '@/components/ToolboxItems'
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from "@/components/CardHeader";
import {motion} from 'framer-motion';
import { useRef } from "react";

// My datas
const toolboxItems = [
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'Reactjs',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Soccer',
    emoji: '⚽',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Music',
    emoji: '🎧', 
    left: '50%',
    top: '5%',

  },
  {
    title: 'Hiking',
    emoji: '🏔️', 
    left: '10%',
    top: '35%',
  },
  {
    title: 'Gym',
    emoji: '🏋️‍♀️', 
    left: '35%',
    top: '40%',
  },
  {
    title: 'Traveling',
    emoji: '✈️', 
    left: '70%',
    top: '45%',
  },
  {
    title: 'Cooking',
    emoji: '🍝', 
    left: '5%',
    top: '65%',
  },
  {
    title: 'Gaming',
    emoji: '🎮', 
    left: '45%',
    top: '70%',
  },
];

export const AboutSection = () => {
  const constraintRef = useRef (null);
  return( 
  <section id="about" className="py-20 lg:py-28 scroll-mt-28">
    <div className="container">
        <SectionHeader 
        eyebrow="About Me"  
        title="A Glimpse Into My World"
        description="Learn more about who I am, What I do, and what inspires me."/>

{/* Main Card Grids Container Start  */}
        <div className="mt-20 flex flex-col gap-8">
          {/* Grid Div for top 2 START */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          {/* Card 1 */}
          <Card className="h-[320px] md:col-span-2 lg:col-span-1">
            <CardHeader title="My Reads" description="Explore the books shaping my perspective."/>
            <div className="w-40 mx-auto mt-2 md:mt-0">
              <Image src={bookImage} alt="Book Cover"/>
            </div>
          </Card>
          {/* Card 2 */}
          <Card className="h-[320px] md:col-span-3 lg:col-span-2">
            <CardHeader className=""
            title="My Toolbox" 
            description="Explore the tools I use to craft exceptional digital experiences."/>
            <ToolboxItems items={toolboxItems} className="" itemsWrapperClassName="animate-move-left [animation-duration:30s]" /> 
            <ToolboxItems items={toolboxItems} className="mt-6" itemsWrapperClassName="animate-move-right [animation-duration:20s]"/> 
          </Card>
          </div>
          {/* Grid Div for top 2 END */}
  {/* Grid Div for Bottom 2 START */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
          {/* Card 3 */}
          <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
          <CardHeader className="px-6 py-6"
          title="Touch the Grass" 
          description="Explore my interests and hobbies beyond the digital realm."/>
            <div className="relative flex-1" ref={constraintRef}>
              {hobbies.map(hobby => (
                <motion.div key={hobby.title} className="inline-flex items-center gap-2 px-6 
                bg-gradient-to-r from-white/80 to-white rounded-full py-1.5 absolute"
                style={{
                  left: hobby.left,
                  top: hobby.top,
                }}
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-medium text-black-matte">{hobby.title}</span>
                  <span className="">{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
          {/* Card 4 */}
          <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
            <Image src={mapImage} alt="map" className="h-full w-full object-cover object-left-top"/>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full
             after:content-[''] after:absolute after:inset-0
            after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-900/30">
              <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-creative to-cool-darker -z-20 animate-ping [animation-duration:2s]"></div>
              <div className="absolute inset-0 rounded-full  bg-gradient-to-r from-creative to-cool-darker -z-10"></div>
              <Image src={smileMemoji} alt="smiling memoji" className="size-20"/>
            </div>
            
          </Card>
          </div>
  {/* Grid Div for Bottom 2 END */}
        </div>
{/* Main Card Grids Container END  */}
  </div>
</section>
  );
};

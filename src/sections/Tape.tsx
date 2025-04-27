import StarIcon from '@/assets/icons/star.svg';
import { Fragment } from 'react';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return(
  <section className='py-16 md:py-18 lg:py-24 overflow-x-clip'>
    {/* this is the BG mian class */}
    <div className='bg-gradient-to-r from-gray-100 to-white -rotate-3 -mx-1'>
      <div className='flex' style={{
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          }}>
        <div className='flex flex-none gap-4 pr-4 py-3 animate-move-left [animation-duration:30s]'>
          {[...new Array(2)].fill(0).map((_, idx) => (
            <Fragment key={idx}>
              {words.map(word => (
                <div key={word} className='inline-flex gap-4 items-center'>
                  <span className='text-black-matte uppercase font-extrabold text-sm'>{word}</span>
                  <StarIcon className='size-6 text-black-matte -rotate-12'/>
                </div>
                ))}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

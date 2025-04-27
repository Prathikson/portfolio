import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  const email = "your-email@example.com";  // Replace with your email

  return (
    <section id='contact' className='py-16 pt-12 lg:py-24 lg:pt-20 z-5'>
      <div className='container'>
        <div className='bg-gradient-to-r from-white/80 to-white 
        py-8 px-10 rounded-3xl text-black-matte text-center md:text-left 
        relative overflow-hidden z-0'>
          <div className="absolute inset-0 -z-10 opacity-5" style={{
            backgroundImage: `url(${grainImage.src})`
          }}>
          </div>
          <div className='flex flex-col md:flex-row gap-8 md:gap-16 items-center'>
            <div>
              <h2 className='font-serif text-2xl md:text-3xl'>
                Let&apos;s Create Something Amazing Together
              </h2>
              <p className='text-sm mt-2 md:text-base'>
                Ready to bring your project to life? Let&apos;s connect and discuss how I can help you achieve your goals.
              </p>
            </div>
            <div>
              {/* Cool Hover Effect */}
              <a href={`mailto:${email}`} className="group">
                <button className='text-white bg-black-jet inline-flex items-center 
                px-6 h-12 rounded-xl gap-2 w-max transition-all duration-300 ease-in-out transform group-hover:scale-105 group-hover:bg-black-matte'>
                  <span className='font-semibold'>Contact Me</span>
                  <ArrowUpRightIcon className='size-4 group-hover:transform group-hover:translate-x-2 transition-all duration-300 ease-in-out'/>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

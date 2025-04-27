import StarIcon from '@/assets/icons/star.svg';
import { twMerge } from 'tailwind-merge';

export const CardHeader = ({title, description, className,}:
   {title: string; description: string; className?: string;}) =>{
    return(
        <div className={twMerge("flex flex-col p-6 md:py-8 md:px-10", className)}>
        <div className="inline-flex items-center gap-2">
          <StarIcon className='size-9 text-white'/>
          <h3 className="font-serif text-3xl bg-gradient-to-r from-creative to-cool-darker bg-clip-text text-transparent">{title}</h3>
        </div>
        <p className="text-sm lg:text-base max-w-xs text-white/50 mt-2">{description}</p>
      </div>
    );
}
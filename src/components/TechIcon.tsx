export const TechIcon = ({component}: {component: React.ElementType}) => {

    const Component = component;
    return(
    <>
        <Component className='size-10 fill-[url(#tech-icon-gradient)]' />
        <svg className="size-0">
            <linearGradient id="tech-icon-gradient">
                <stop offset="10%" stopColor="rgb(169 112 255)" />
                <stop offset="100%" stopColor="rgb(14 165 233)" />
            </linearGradient>
        </svg>
    </>
    );
}
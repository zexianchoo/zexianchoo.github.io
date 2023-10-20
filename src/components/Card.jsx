import { Button } from "."

const Card = ({
    img_class,
    title,
    text,
    read_more_href
  }) => {

return (
    <section className='flex flex-col items-center card '>
        <h1 className='heading-text mb-5 text-center'>
        {title}
        </h1>

    <div className='flex min-w-full flex-col justify-between space-y-10 px-8'>
        <div className='flex sm:flex-row max-sm:flex-col items-center space-x-10'>
        <div className='flex object-scale-down items-center justify-center max-sm:py-2'>
            <img 
                src = { img_class } 
                className='w-4/5 rounded-lg drop-shadow-lg max-sm:w-2/5' >
            </img>
        </div>
        <div className='grow-0 sm:w-4/5 flex flex-col'>
            <div className='flex flex-col'>
            <p className='info-text '>
                {text}
            </p>

            <div className="flex justify-end items-center ">
                
                <a href={read_more_href} className='pr-4 py-4'>
                <Button  label="Read More" >  </Button>
                </a>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
    );
  };
  
  export default Card;
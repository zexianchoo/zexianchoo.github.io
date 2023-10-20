import { Button } from "."

const Deepfake = ({
    img_class,
    title,
    read_more_href
  }) => {

return (
    <section className='flex flex-col items-center card '>
        <h1 className='heading-text mb-5 text-center'>
        {title}
        </h1>

    <div className='flex min-w-full flex-col justify-between space-y-10 px-8'>
        <div className='flex sm:flex-row max-sm:flex-col items-center space-x-10'>
        <div className='flex max-w-[20%] first-line:object-scale-down items-center sm:justify-start max-sm:justify-center  max-sm:py-2'>
            <img 
                src = { img_class } 
                className='rounded-lg drop-shadow-lg' >
            </img>
        </div>
        <div className='grow-0 sm:w-4/5 flex flex-col'>
            <div className='flex flex-col'>
            <p className='info-text '>
            I managed to achieved ~95% AUC on an ensemble Deepfake Detection model, 
improving on state-of-the-art models with innovative use of video quality data as input. During 
 this project I worked with Vision Transformers and multimodal data models. I designed a UI for the detector,
  and also published a open source <a target="_blank" rel="noopener noreferrer" href="https://github.com/zexianchoo/Multiprocessing-Video-Frame-Extraction" 
  className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">
    Github repo</a> with a multiprocessing video frame extractor.
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

export default Deepfake
import { ensemble, } from "../assets/images"

const DeepfakePage = () => {
  return (
    <main className='flex flex-col space-y-10 text-center padding-x mx-auto'>
      <section className='space-y-10'>
        <div className=''>
          <h1 className='text-center heading-text'> Deepfake Detection </h1>
        </div>
        <div>
          <p className='info-text text-left'> This project was actually done at HTX, where I had my second
          internship over the Summer of 2022. </p>
        </div>
        <div>
          <p className="info-text text-left"> The goal of this project was to design a state of the art 
          Deepfake Detection model with the most recent models. Some of the interesting models that I saw
          were: <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://github.com/davide-coccomini/Combining-EfficientNet-and-Vision-Transformers-for-Video-Deepfake-Detection/">
                Combining EfficientNet and Vision Transformers for Video Deepfake Detection (ENViT)
            </a> and <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://arxiv.org/pdf/2104.09770.pdf">
                M2TR: Multi-modal Multi-scale Transformers for Deepfake Detection.
            </a>
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="info-text text-left"> 
            <span className="font-bold"> EnViT(2022) </span> is a paper which utilizes the new concept of 
            Vision Transformers along with EfficientNet to carry out classification of Deepfakes. Vision Transformers
            have been shown to have the same or even better results when compared to CNNs, even when dealing with image data,
            with the benefits of lower computation and memory costs. EfficientNet has been used and proven to be one of the
            best models to use to extract features from images. 
          </p>
          <p className="info-text text-left"> 
            The most appealing part of this project is that this didn't require any ensemble methods, nor distillation methods.
            Even so, this paper managed to achieve 0.951 AUC.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <p className="info-text text-left"> 
            <span className="font-bold"> M2TR(2022) </span> is a paper which uses a slightlty different approach, as compared
            to other solutions. Borrowing the same idea (which originated from MesoNet), which is that there are different scales from which the model
            will extract features to classify, since anomalities and artifacts may emerge at different scales of the image. In a very 
            basic sense, the input of the model will have varying granularity.
          </p>
          <p className="info-text text-left"> 
            M2TR uses multiple scales, scaling up the idea from MesoNet, and eventually achieved very good results, with close to 0.99 AUC.
          </p>
        </div>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex-col space-y-10">
          <p className="info-text text-left"> 
            My final product was an ensemble of many different moving parts. I retrained EnViT on Singapore images, 
            since models may show different performances with different races. <span className="italic"> 
            (There is an interesting discussion to be had on
            ethics of AI as well as explainable AI)</span>. 
          </p>
          <p className="info-text text-left">
            Subsequently, through some of my preliminary research, I realized that video quality was a big factor in terms of
            performance of models. <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://arxiv.org/pdf/2207.02204.pdf/">
                Seq-Deepfake(2022)
            </a> showed just how important video quality was, because when I tried running the model on lower quality datasets, it had poor results,
            with around chance performance.
          </p>
          <p className="info-text">
            <span className="font-bold text-center"> Solution: </span>
          </p>
        </div>
        <div>
          <img
            src = { ensemble }
            alt='pipeline'
            width={400}
            height={400}
            className='mx-auto my-auto'
          >
          </img>
          <p className="info-text text-center mb-2">
            <span className="font-bold" > Fig. 1. </span> Novel ensemble classification with Video Quality Data
          </p>
        </div>
        <div>
          <p className="info-text text-left">
              Since there was a large emphasis on video quality, with different models working differently with different
              video qualities, I used a <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://github.com/rolinh/VQMT">
                 video quality tool
            </a> to analyze Video Quality Metrics of input videos. Some of these metrics include: PSNR: Peak Signal-to-Noise Ratio, SSIM: Structural Similarity etc.
          </p>
          <p className="info-text text-left">
            I then used these metrics as inputs into my ensemble classifier using different models, eventually achieving 0.95 AUC.
          </p>
        </div>

        <div className="py-10">
          <a
          href={"/projects"}
          className='transition hover:border backdrop:gap-2 lg:px-5 lg:py-2 rounded-full hover:bg-[#fb7185]
                  font-montserrat leading-none lg:text-lg sm:text-sm text-slate-gray sm:relative bg-[#fda4af]'
          >
            {"Back to Projects"}
          </a>
        </div>
      </section>
    </main>

  )
}

export default DeepfakePage
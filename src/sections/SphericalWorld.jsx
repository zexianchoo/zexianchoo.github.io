import { Button } from "../components"
import { multidiffusion_crops } from "../assets/images"

const SphericalWorld = () => {
  return (
    <main className='flex flex-col space-y-10 text-center padding-x'>
      <section className='space-y-10'>
        <div className=''>
          <h1 className='text-center heading-text'> Spherical World Generation </h1>
        </div>
        <div>
          <p className='info-text text-left'> I am currently working on a research project under the Promoting Undergraduate Research in Engineering programme.  Our goal is to 
          develop a real-time rendering of a spherical world.</p>
        </div>
        <div>
          <p className="info-text text-left">
            This was actually inspired by these two papers:   <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/">
                3D Gaussian Splatting
            </a>  and <a target="_blank" rel="noopener noreferrer" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" 
            href="https://multidiffusion.github.io/">
                Multidiffusion
            </a>.
          </p>
        </div>
        <div className="flex flex-col space-y-10">
          <p className="info-text text-left"> <span className="font-bold"> 3D Gaussian Splatting (2023) </span> is 
          a very interesting paper which details an interesting approach to achieve a NeRF-like view-synthesis and rendering.
          Before 3D Gaussian Splatting, there was no possible method to achieve real-time rendering and display of 
          unbounded and complete scenes in 1080p. 
          </p>
          <p className="info-text text-left">
            3D Gaussian Splatting offers a technique, which capitalizes on the fact that 3D Gaussians are easily differetiable,
            which allows for quick back propagation. Additionally, 3D Gaussians are also easily projected to 2D splats allowing fast alpha-blending for rendering.
          </p>
        </div>

        <div>
          <img
            src = { multidiffusion_crops }
            alt='multi-diffusion'
            width={400}
            height={400}
            className='mx-auto my-auto'
          >
          </img>
          <p className="info-text text-center mb-2">
            <span className="font-bold" > Fig. 1. </span> Crops indicating difference between normal diffusion and multidiffusion (Omer et. al., 2023)
          </p>
        </div>


        <div className="flex flex-col">
          <p className="info-text text-left"> 
            <span className="font-bold"> Multidiffusion (2023) </span> is a paper which details an approach to achieve a 
            "panoramic" image from pretrained diffusion models. 
          </p>
          <p className="info-text text-left">
            For current diffusion models, most of them are only trained 
            to output images of fixed sizes. However, if we wish to use this pretrained model to produce images of a larger
            size, Multidiffusion proposes a method to generate a large sized image using least squares loss. This 
            method allows for the images to "fuse" well together.
          </p>
        </div>
      </section>  
      <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
      <section className="">
        <h1 className="heading-text"> What I'm working on: </h1>
        <div className="info-text text-left">
          We are currently working on creating a 
        </div>
      </section>
    </main>

  )
}

export default SphericalWorld
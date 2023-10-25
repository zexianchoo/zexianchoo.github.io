import { Button } from "../components"


const SphericalWorld = () => {
  return (
    <main className='h-screen'>
      <section className='flex flex-col space-y-10 text-center padding-x'>
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
        <div>
          <p className="info-text text-left"> <span className="font-bold"> 3D Gaussian Splatting (2023) </span> is 
          a very interesting paper which details an interesting approach to achieve a NeRF-like view-synthesis and rendering.
          
          </p>
        </div>
      </section>  
    </main>

  )
}

export default SphericalWorld
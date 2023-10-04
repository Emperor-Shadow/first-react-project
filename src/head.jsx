import Architect from './assets/architect.jpg';
export default function Head () {
  return (
    <div className="text-white head ">
        <img src={Architect} alt="" className='relative img' />

        <div className='text-black bb flex md:left-56 left-56 absolute items-center justify-center'>
            <h1 className='text-white md:text-4xl font-bold px-4 inline-block br'>BR</h1>
            <h2 className='text-white md:text-3xl ml-3'>Architects</h2>
        </div>
    </div>
  )
}
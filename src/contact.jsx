import map from './assets/map.jpg';
export default function Contact () {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <div className="px-5 w-full">
    <h1 className="mt-20 mb- text-2xl tracking-wider">About</h1>
    <p> Let's get in touch and talk about your next project</p>

    <form action="" className="w-full">
        <input type="text" name="" className="w-full p-2 my-1 border" placeholder="Name" id="" />
        <input type="email" name="" className="w-full p-2 my-1 border" placeholder="Email" id="" />
        <input type="text" name="" className="w-full p-2 my-1 border" placeholder="Subject" id="" />
        <input type="text" name="" className="w-full p-2 my-1 border" placeholder="Comment" id="" />

        <button className="px-5 my-4 py-2 bg-black text-white">SEND MESSAGE</button>
    </form>


    <div className='my-2'>
        <img src={map} alt="" />
    </div>

    <footer className='w-full mx-0 bg-black text-white h-20 flex justify-center items-center'>
        @Copyright - {year}
    </footer>
</div>
  )
}

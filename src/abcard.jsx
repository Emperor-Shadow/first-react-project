export default function Abcard (props) {
    return (
      <div className="block w-full md:w-1/4 mx-2 md:mx-0 md:my-0 my-4 relative p-2">
          <img src={props.url} alt="" className="card-img" />
          <div className="mt-2">
                      <h1 className="px-1 py-1 text-black text-2xl">{ props.name }</h1>
                      <p className="text-gray-500">CEO & Founder</p>
                      <p className="py-2">Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse sodales pellentesque elementum.</p>
                      <button className="bg-gray-300 hover:bg-gray-400 w-full py-2">Contact</button>

          </div>
      </div>
    )
  }
  
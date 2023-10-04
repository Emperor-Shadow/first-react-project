
export default function Card (props) {
  return (
    <div className="inline-block w-full md:w-1/4 mx-2 md:mx-0 h-56 md:my-0 my-4 relative px-2">
        <img src={props.url} alt="" className="object" />
        <p className="absolute top-0 left-2 bg-black px-1 py-1 text-white">{ props.name }</p>
    </div>
  )
}

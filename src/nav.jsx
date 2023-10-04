
export default function Nav () {
  return (
    <div className="w-full nav bg-white inline-block flex items-center justify-between px-10">
        
        <div>
            <h1 className="font-bold inline-block">BR</h1>
            <h2 className="ml-2 tracking-widest inline-block">Architects</h2>
        </div>

        <div className="flex" id="gap">
        <h2 className="ml-2 tracking-widest">Projects</h2>
        <h2 className="ml-2 tracking-widest">About</h2>
        <h2 className="ml-2 tracking-widest">Contact</h2>
        </div>

        </div>
  )
}
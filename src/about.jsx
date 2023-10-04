import john from './assets/john.jpg';
import jane from './assets/jane.jpg';
import mike from './assets/mike.jpg';
import dan from './assets/dan.jpg';
import Abcard from './abcard';



export default function About () {
    const images = [
            { url : john , name : 'John Doe'} ,
            { url : jane , name : 'Jane Doe'} ,
            { url : mike , name : 'Mike Ross'} ,
            { url : dan , name : 'Dan Star'} 
     ];

    
  return (
    <div className="px-5">
        <h1 className="mt-20 mb- text-2xl tracking-wider">About</h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

        <div className="abcards flex flex-wrap w-full">
        {/* <Abcard name ="John Doe" url = {john} /> */}

             {
                images.map((obj)=>{
                    return <Abcard name = {obj.name} url = {obj.url} key = {obj} />
                })
             }

        </div>
    </div>
  )
            }
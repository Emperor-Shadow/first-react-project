import Card from "./card";
import barn from './assets/barn.jpg';
import barn2 from './assets/barn2.jpg';
import brick from './assets/brick.jpg';
import brick2 from './assets/brick2.jpg';
import renovated from './assets/renovated.jpg';
import renovated2 from './assets/renovated2.jpg';
import summer from './assets/summer.jpg';
import summer2 from './assets/renovated2.jpg';


export default function Project() {
    const images = [
            { url : barn , name : 'Barn House'} ,
            { url : brick , name : 'Brick House'} ,
            { url : renovated , name : 'Renovated'} ,
            { url : summer , name : 'Summer House'} ,
            { url : barn2 , name : 'Barn House'} , 
            { url : brick2 , name : 'Brick House'} , 
            { url : renovated2 , name : 'Renovated'} ,
            { url : summer2 , name : 'Summer House'}
     ];

    
  return (
    <div className="px-5">
        <h1 className="mt-20 text-2xl tracking-wider">Projects</h1>

        <div className="cards flex flex-wrap w-full">
             {
                images.map((obj)=>{
                    return <Card name = {obj.name} url = {obj.url} key = {obj} />
                })
             }

        </div>
    </div>
  )
}

import { useEffect, useState } from 'react'
import './App.css'
import List from './List';
import List2 from './List2';
function App() {

  let [data, setData] = useState([]);
  let [toggle, setToggle] = useState(false);
  let [color,setColor] =useState(()=>{
        if(toggle)
        return ["#1B1D1F","#6F757C"];
        else
        return ["#6F757C","#1B1D1F"];
  });

  useEffect(() => {
    const getData = async () => {
      let d = await fetch("https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json");
      let json = await d.json();
      console.log(json);
      setData(json);
    }

    getData();
  }
    , [])

  setTimeout(() => {
    console.log(data);
  }, 2000)

  return (
    <>
      <div className=" bg-[#111315] relative flex items-center justify-center min-h-[100vh] min-w-full font-DM  ">
        <img className='absolute top-0' src="images/bg-cafe.jpg" alt="" />
        <div className="contain my-32 z-10 flex flex-col justify-center items-center bg-[#1B1D1F] md:w-[90%] w-[80%] p-16 gap-3 rounded-lg">

          <div className="header w-[50%]  flex flex-col justify-center items-center text-white gap-3 text-center">
            <span className='text-3xl font-semibold'>Our Collection</span>
            <p className='text-[#6F757C] font-semibold'>
              Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
            </p>
          </div>

          <div className="buttons flex gap-3 text-white">
            <button onClick={(e) => {return  setToggle(false) }} className={`all ${toggle?"bg-[#1B1D1F]":"bg-[#6F757C]"} rounded-lg p-1 px-2`}>All Products</button>
            <button onClick={() => {return  setToggle(true) }} className={`all ${toggle?"bg-[#6F757C]":"bg-[#1B1D1F]"} rounded-lg p-1 px-2`}>Available Now</button>
          </div>
          { toggle?<List2 data ={data}/> : <List data ={data}/> }
          
        </div>
      </div>
    </>
  )
}

export default App

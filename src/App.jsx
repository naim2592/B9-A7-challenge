
import './App.css'
import OurRecipi from "./OurRecipi";
import Recipies from "./components/recipies/Recipies";
import Cooks from "./components/cokks/Cooks";
import { useState } from 'react';
import Cookings from './components/currentycooking/Cookings';
function App() {
 



  const [cooks,setCooks]=useState([])
   const handleCook=(wantCook,id)=>{
      const again=cooks.filter(cook=>cook.recipe_id===id)
       if(again.length==0){
        setCooks([...cooks,wantCook]);
       }
       else{
        alert('Its already cooking')
       }
                
   }
   
   const [cookings,setCookings]=useState([])
   const handleCookings=(cooked,id)=>{
         
     const deletedCooks=cooks.find(cook=>cook.recipe_id==id)
        //  remove from cooks
        const remainCooks=cooks.filter(cook=>cook.recipe_id!==id)
         setCooks(remainCooks);
         console.log(remainCooks);
         
         setCookings([...cookings,deletedCooks]);
         
   }

  return (
    <>
      
      
      <OurRecipi></OurRecipi>
      <div className="w-10/12 border mx-auto flex space-x-4">
        <Recipies handleCook={handleCook}></Recipies>
        <div className='w-4/12 '>
        <Cooks handleCookings={handleCookings} cooks={cooks}></Cooks>
        <Cookings cookings={cookings}></Cookings>
        </div>
      </div>
      
    </>
  )
}

export default App

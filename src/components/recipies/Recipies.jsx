import { useEffect, useState } from "react";
import Recipi from "../recipie/Recipi";


const Recipies = ({handleCook}) => {
    const [recipies,setRecipies]=useState([])
    useEffect(()=>{
        fetch('recipi.json')
        .then(res=>res.json())
        .then(data=>setRecipies(data))
    },[])
    
    
    return (
        <div className="w-8/12 grid grid-cols-2 gap-5">
            {
                recipies.map(recipi=><Recipi handleCook={handleCook} key={recipi.recipe_id} recipi={recipi} ></Recipi>)
            }
        </div>
    );
};

export default Recipies;
import Cooking from "./Cooking";

const Cookings = ({cookings}) => {
    return (
        
             <div className="border mx-auto space-y-3   ">
          <h2 className="w-full text-2xl font-bold text-center ">Currently Cooking :</h2> <hr className="w-[70%] mx-auto"/>
          <div className="flex justify-around text-sm">
            <p>Name </p>
            <p>Time</p>
            <p>Calories</p>
            
          </div>
         {
            cookings.map((cooking,idx)=><Cooking key={idx} cooking={cooking}></Cooking>)
         }
         
        </div> 
        
    );
};

export default Cookings;
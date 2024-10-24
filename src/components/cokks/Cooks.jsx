import Cook from "./Cook";

const Cooks = ({cooks,handleCookings}) => {
    
    
    return (
        <div className="border mx-auto space-y-3   ">
          <h2 className="w-full text-2xl font-bold text-center ">Want To Cook : {cooks.length}</h2> <hr className="w-[70%] mx-auto"/>
          <div className="flex justify-around text-sm">
            <p>Name </p>
            <p>Time</p>
            <p>Calories</p>
            <p ></p>
          </div>
          {
            cooks.map((cook,idx)=> <Cook handleCookings={handleCookings} key={idx} cook={cook}></Cook>)
         }
         
        </div>
    );
};

export default Cooks;
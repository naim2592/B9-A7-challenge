

const Cook = ({cook,handleCookings}) => {
    const {recipe_id,recipe_name,preparing_time,calories}=cook
    return (
        <div className="flex justify-between items-center">
        <p>{recipe_id}</p>
        <p>{recipe_name}</p>
        <p>{preparing_time}</p>
        <p>{calories}</p>
        <button onClick={()=>handleCookings(cook,recipe_id)} className="btn bg-green-400">Preparing</button>
        </div>
    );
};

export default Cook;
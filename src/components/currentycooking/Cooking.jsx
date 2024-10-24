

const Cooking = ({cooking}) => {
    const {recipe_id,recipe_name,preparing_time,calories}=cooking
    return (
        
             <div className="flex justify-between items-center">
        <p>{recipe_id}</p>
        <p>{recipe_name}</p>
        <p>{preparing_time}</p>
        <p>{calories}</p>
        </div>
    );
};

export default Cooking;


const Recipi = ({recipi,handleCook}) => {
    const {recipe_image,recipe_id,recipe_name,short_description,ingredients,preparing_time,calories}=recipi
    return (
        <div className="p-4 rounded-xl border">
            <img src={recipe_image} alt={`its a image of ${recipe_name}`} />
            <h1>{recipe_name}</h1>
            <p>{short_description}</p>
            <h2>Ingredients: {ingredients.length}</h2>
            <ul className="list-disc">
                {
                    ingredients.map((ingredient,idx)=> <li key={idx}>{ingredient}</li>)
                }
            </ul>
            <p><span>{preparing_time}</span> <span>{calories}</span></p>
            <button onClick={()=>handleCook(recipi,recipe_id)} className="btn bg-green-600">Want to Cook</button>
        </div>
    );
};

export default Recipi;
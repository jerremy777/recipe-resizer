
import React from "react";

function App(props) {
  const [ingredients, setIngredients] = React.useState({});
  const [scaledIngredients, setScaledIngredients] = React.useState({});
  const [factor, setFactor] = React.useState(1);

  const handleRecipeChange = (e) => {
    setIngredients((previous) => {
      return {...previous, [e.target.id]: e.target.value};
    });
  };

  const handleRecipeScale = (e) => {

  }

  return (
    <div>
      <label htmlFor="ingredient-1">Ingredient:</label>
      <input type="text" id="ingredient-1" onChange={ e => handleRecipeChange(e) } />

      <label htmlFor="ingredient-2">Ingredient:</label>
      <input type="text" id="ingredient-2" onChange={ e => handleRecipeChange(e) }  />

      <label htmlFor="ingredient-3">Ingredient:</label>
      <input type="text" id="ingredient-3" onChange={ e => handleRecipeChange(e) }  />

      <br></br>

      <label htmlFor="scaled-ingredient-1">Scaled:</label>
      <input type="text" id="scaled-ingredient-1" placeholder={ingredients['ingredient-1']} />

      <label htmlFor="scaled-ingredient-2">Scaled:</label>
      <input type="text" id="scaled-ingredient-2" placeholder={ingredients['ingredient-2']} />

      <label htmlFor="scaled-ingredient-3">Scaled:</label>
      <input type="text" id="scaled-ingredient-3" placeholder={ingredients['ingredient-3']} />
    </div>
  );
};

export default App;

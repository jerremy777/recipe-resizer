
import React from "react";

function App(props) {
  const [ingredients, setIngredients] = React.useState({});
  const [scaledIngredients, setScaledIngredients] = React.useState({});
  const [factor, setFactor] = React.useState(1);

  const handleRecipeChange = (e) => {
    setIngredients((previous) => {
      return {...previous, [e.target.id]: e.target.value * 1};
    });
    setScaledIngredients((previous) => {
      return {...previous, [e.target.id]: e.target.value * 1};
    });
  };

  const handleScaleChange = (e) => {
    setScaledIngredients((previous) => {
      return {...previous, [e.target.name]: e.target.value * 1};
    });
  }

  const handleRecipeScale = (e) => {
    // Math is (new/old) * old
    // check which scaledIngredient is different from original
    // use that ingredient as the new
    const original = Object.values(ingredients);
    const scaled = Object.values(scaledIngredients);

    console.log(original, scaled);

    for (var i = 0; i < original.length; i += 1) {
      if (scaled[i] !== original[i]) {
        console.log(scaled[i])
        setFactor(scaled[i] / original[i]);
      }
    }

    let newScaledIngredients = {};
    for (var ing in scaledIngredients) {
      newScaledIngredients[ing] = scaledIngredients[ing] * factor;
    }

    setScaledIngredients(newScaledIngredients);
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
      <input type="text" id="scaled-ingredient-1"
        name="ingredient-1"
        placeholder={scaledIngredients['ingredient-1']}
        onChange={ e => handleScaleChange(e) } />

      <label htmlFor="scaled-ingredient-2">Scaled:</label>
      <input type="text" id="scaled-ingredient-2" placeholder={scaledIngredients['ingredient-2']} />

      <label htmlFor="scaled-ingredient-3">Scaled:</label>
      <input type="text" id="scaled-ingredient-3" placeholder={scaledIngredients['ingredient-3']} />

      <button type="button" onClick={ () => handleRecipeScale() }>Scale</button>
    </div>
  );
};

export default App;

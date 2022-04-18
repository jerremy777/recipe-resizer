
import React from "react";

function App(props) {
  const [factor, setFactor] = React.useState(1);
  const [recipeLength, setRecipeLength] = React.useState(3);
  const [ingredients, setIngredients] = React.useState([...Array(recipeLength)]);

  const handleRecipeChange = (e) => {
    console.log(e);
    setIngredients((previous) => {
      return {...previous, [e.target.key]: e.target.value * 1};
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

  const ingredientElement = (index) => (
    <li key={index}>
      <label htmlFor={index}>Ingredient:</label>
      <input type="text" id={index} onChange={ e => handleRecipeChange(e) } />
    </li>
  );

  return (
    <div>
      <ul>
        <li key={0}>
          <label htmlFor={0}>Ingredient:</label>
          <input type="text" id={0} onChange={ e => handleRecipeChange(e) } />
        </li>
        <li key={1}>
          <label htmlFor={1}>Ingredient:</label>
          <input type="text" id={1} onChange={ e => handleRecipeChange(e) }  />
        </li>
        <li key={2}>
          <label htmlFor={2}>Ingredient:</label>
          <input type="text" id={2} onChange={ e => handleRecipeChange(e) }  />
        </li>
      </ul>
    </div>
  );
};

export default App;

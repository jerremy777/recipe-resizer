
import React from "react";

function App(props) {
  const [factor, setFactor] = React.useState(1);
  const [recipeLength, setRecipeLength] = React.useState(3);
  // Want to define a length so that we can iterate over it later:
  const [ingredients, setIngredients] = React.useState([...Array(recipeLength)]);
  const [scaledIngredients, setScaledIngredients] = React.useState([...Array(recipeLength)]);

  const handleRecipeChange = (e) => {
    let list = ingredients;
    list[e.target.id] = Number(e.target.value);
    console.log('ingredients:', ingredients);
    setIngredients(list);
    setScaledIngredients(list);
  };

  const handleScaleChange = (e) => {
    setScaledIngredients((previous) => {
      return {...previous, [e.target.id]: e.target.value * 1};
    });
  }

  const ingredientElement = (index) => (
    <li key={index}>
      <label htmlFor={index}>Ingredient:</label>
      <input type="text" id={index} onChange={ e => handleRecipeChange(e) } />
    </li>
  );

  const handleButtonClick = (e) => {
    let newFactor = factor * e.target.value;
    setFactor(newFactor);
    setScaledIngredients((previousIngredients) => {
      return previousIngredients.map(e => e * newFactor);
    });
  }


  return (
    <div>
      <ul>
        {ingredients.map((e, i) => (ingredientElement(i)))}
      </ul>
      <button type="button" value={0.5} onClick={ e => handleButtonClick(e) }>-</button>
      <button type="button" value={2} onClick={ e => handleButtonClick(e) }>+</button>
      <ul>
        {scaledIngredients.map((e, i) => (<li key={i}>{e}</li>))}
      </ul>
    </div>
  );
};

export default App;

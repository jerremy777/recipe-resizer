import React from 'react';
import Recipe from './Recipe';
import Resizer from './Resizer';

function App(props) {
  const [factor, setFactor] = React.useState(1);
  const [recipeLength, setRecipeLength] = React.useState(3);
  // Want to define a length so that we can iterate over it later:
  const [ingredients, setIngredients] = React.useState([...Array(recipeLength)]);
  const [scaledIngredients, setScaledIngredients] = React.useState([...Array(recipeLength)]);

  // const handleRecipeChange = (e) => {
  //   const list = ingredients;
  //   list[e.target.id] = Number(e.target.value);
  //   console.log('ingredients:', ingredients);
  //   setIngredients(list);
  //   setScaledIngredients(list);
  // };

  // const handleScaleChange = (e) => {
  //   setScaledIngredients((previous) => ({ ...previous, [e.target.id]: e.target.value * 1 }));
  // };

  // const ingredientElement = (index) => (
  //   <li key={index}>
  //     <label htmlFor={index}>Ingredient:</label>
  //     <input type="text" id={index} onChange={(e) => handleRecipeChange(e)} />
  //   </li>
  // );

  // const handleButtonClick = (e) => {
  //   const newFactor = factor * e.target.value;
  //   setFactor(newFactor);
  //   setScaledIngredients((previousIngredients) => previousIngredients.map((e) => e * newFactor));
  // };

  return (
    <div id="main-app">
      <div id="directions-headers" className="header">
        <h2>directions</h2>
      </div>
      <div id="recipe-headers">
        <div id="ingredient-header" className="header">
          <h2>ingredients</h2>
        </div>
        <div id="amount-header" className="header">
          <h2>amounts</h2>
        </div>
      </div>
      <div id="resizer-headers" className="header">
        <h2>resizer</h2>
      </div>
      <div id="directions-content" className="content">
        <div className="content directions-content">
          <textarea id="directions-text" />
        </div>
      </div>
      <Recipe />
      <Resizer />
    </div>
  );
}

export default App;

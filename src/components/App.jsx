import React from 'react';

function App(props) {
  const [factor, setFactor] = React.useState(1);
  const [recipeLength, setRecipeLength] = React.useState(3);
  // Want to define a length so that we can iterate over it later:
  const [ingredients, setIngredients] = React.useState([...Array(recipeLength)]);
  const [scaledIngredients, setScaledIngredients] = React.useState([...Array(recipeLength)]);

  const handleRecipeChange = (e) => {
    const list = ingredients;
    list[e.target.id] = Number(e.target.value);
    console.log('ingredients:', ingredients);
    setIngredients(list);
    setScaledIngredients(list);
  };

  const handleScaleChange = (e) => {
    setScaledIngredients((previous) => ({ ...previous, [e.target.id]: e.target.value * 1 }));
  };

  const ingredientElement = (index) => (
    <li key={index}>
      <label htmlFor={index}>Ingredient:</label>
      <input type="text" id={index} onChange={(e) => handleRecipeChange(e)} />
    </li>
  );

  const handleButtonClick = (e) => {
    const newFactor = factor * e.target.value;
    setFactor(newFactor);
    setScaledIngredients((previousIngredients) => previousIngredients.map((e) => e * newFactor));
  };

  return (
    <div id="main-app">
      <div id="directions">
        <div className="header directions-header">
          <h2>directions</h2>
        </div>
        <div className="content directions-content">
          <textarea id="directions-text" />
        </div>
      </div>
      <div id="recipe">

        <div id="ingredient-header" className="ingredient">
          <h2>ingredients</h2>
        </div>
        <div id="amount-header" className="amount">
          <h2>amounts</h2>
        </div>

        <input type="text" name="ingredient-1" className="recipe-item ingredient-item" />
        <input type="text" name="amount-1" className="recipe-item amount-item" />
        <input type="text" name="unit-1" className="recipe-item unit-item" />

      </div>
      <div id="resizer">
        <div className="header resizer-header">
          <h2>resizer</h2>
        </div>
        <div className="content resizer-content">
          <button type="button" id="reset-button">
            reset
          </button>
          <button type="button" id="reset-button">
            save
          </button>
          <button type="button" id="reset-button">
            load
          </button>
          <button type="button" id="reset-button">
            share
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

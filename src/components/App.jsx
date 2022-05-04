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

      <div id="directions-content">
        <div className="content directions-content">
          <textarea id="directions-text" />
        </div>
      </div>

      <div id="recipe-content">
        <div className="recipe-item ingredient">
          <input type="text" name="ingredient-1" className="recipe-item ingredient-input" />
        </div>
        <div className="recipe-item amount">
          <input type="text" name="amount-1" className="recipe-item amount-input" />
        </div>
        <div className="recipe-item unit">
          <input type="text" name="unit-1" list="unit" className="recipe-item unit-input" />
          <datalist id="unit">
            <option value="grams" defaultValue>grams</option>
            <option value="cups">cups</option>
            <option value="tbsp">tbsp</option>
            <option value="tsp">tsp</option>
          </datalist>
        </div>
      </div>


      <div className="content resizer-content">
        <div className="resizer-controls">
          <input type="range" id="resizer-input" min="0.1" max="5" />
        </div>
        <div className="resizer-options">
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

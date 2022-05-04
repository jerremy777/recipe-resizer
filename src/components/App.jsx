import React from 'react';
// import Recipe from './Recipe';
// import Resizer from './Resizer';

function Resizer() {
  return (
    <div id="resizer-content" className="content">
      <div id="resizer-controls">
        <input type="range" id="resizer-input" min="10" max="40" defaultValue={25} />
      </div>
      <div id="resizer-options">
        <button type="button" id="reset-button" className="option-button">
          reset
        </button>
        <button type="button" id="save-button" className="option-button">
          save
        </button>
        <button type="button" id="load-button" className="option-button">
          load
        </button>
        <button type="button" id="share-button" className="option-button">
          share
        </button>
      </div>
    </div>
  );
}

function RecipeItem({ num }) {
  return (
    <div className="recipe-items">
      <span className="recipe-item">
        <input type="text" name={`ingredient_${num}`} className="recipe-item ingredient-input" />
      </span>
      <span className="recipe-item">
        <input type="text" name={`amount_${num}`} className="recipe-item amount-input" />
      </span>
      <span className="recipe-item">
        <input type="text" name={`unit_${num}`} list="unit" className="recipe-item unit-input" />
        <datalist id="unit">
          <option value="grams" defaultValue>grams</option>
          <option value="cups">cups</option>
          <option value="tbsp">tbsp</option>
          <option value="tsp">tsp</option>
        </datalist>
      </span>
    </div>
  );
}

function Recipe({ factor, length }) {
  return (
    <div id="recipe-content" className="content">
      {[...Array(length).keys()].map((e) => (
        <RecipeItem key={e} num={e + 1} />
      ))}
    </div>
  );
}

function App() {
  const [factor, setFactor] = React.useState(1);
  const [recipeLength, setRecipeLength] = React.useState(5);

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
        <textarea id="directions-text" />
      </div>
      <Recipe factor={factor} length={recipeLength} />
      <Resizer />
    </div>
  );
}

export default App;

/* eslint-disable no-console */
import React from 'react';
// import Recipe from './Recipe';
// import Resizer from './Resizer';

function Resizer({ updateFactor }) {
  return (
    <div id="resizer-content" className="content">
      <div id="resizer-controls">
        <input
          type="range"
          id="resizer-input"
          min="10"
          max="40"
          defaultValue={25}
          onChange={updateFactor}
        />
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

function RecipeItem({ num, updateRecipe }) {
  return (
    <div className="recipe-items">
      <span className="recipe-item">
        <input
          type="text"
          name={`ingredient_${num}`}
          placeholder="ingredient"
          className="recipe-item ingredient-input"
        />
      </span>
      <span className="recipe-item">
        <input
          type="number"
          name={`amount_${num}`}
          placeholder="amount"
          className="recipe-item amount-input"
          onChange={updateRecipe}
        />
      </span>
      <span className="recipe-item">
        <input
          type="text"
          name={`unit_${num}`}
          list="unit"
          className="recipe-item unit-input"
          placeholder="unit"
        />
        <datalist id="unit">
          <option value="grams">grams</option>
          <option value="cups">cups</option>
          <option value="tbsp">tbsp</option>
          <option value="tsp">tsp</option>
        </datalist>
      </span>
    </div>
  );
}

function Recipe({ length, updateRecipe }) {
  return (
    <div id="recipe-content" className="content">
      {[...Array(length).keys()].map((e) => (
        <RecipeItem
          key={e}
          num={e}
          updateRecipe={updateRecipe}
        />
      ))}
    </div>
  );
}

function App() {
  // eslint-disable-next-line no-unused-vars
  const [factor, setFactor] = React.useState(1);
  // eslint-disable-next-line no-unused-vars
  const [recipeLength, setRecipeLength] = React.useState(5);
  const [recipe, setRecipe] = React.useState({});

  const updateRecipe = (e) => {
    const newRecipe = recipe;
    newRecipe[e.target.name] = e.target.value;
    setRecipe(newRecipe);
  };

  const updateFactor = (e) => {
    e.preventDefault();
    const newFactor = e.target.value / 20;
    setFactor(newFactor);
    console.log(newFactor);
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
      <div id="directions-content" className="content">
        <textarea id="directions-text" />
      </div>
      <Recipe
        updateRecipe={updateRecipe}
        length={recipeLength}
      />
      <Resizer updateFactor={updateFactor} />
    </div>
  );
}

export default App;

/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React from 'react';
import axios from 'axios';
// import Recipe from './Recipe';
// import Resizer from './Resizer';

function Resizer(props) {
  const { updateFactor, multiplyFactor, save } = props;
  const [slideValue, setSlideValue] = React.useState(20);
  // on click enter of the slider I want to freeze the amounts values

  const handleSliderChange = (e) => {
    setSlideValue(e.target.value);
  };

  const handleSliderFinish = (e) => {
    // Want to build in a delay to avoid compounding the result of slider change
    // as well as reset slider position after change
    console.log('drag end on:', e.target.value);
    setTimeout(() => {
      console.log('resetting slider');
      updateFactor(e.target.value / 20);
      setSlideValue(20);
    }, 250);
  };

  const handleSaveClick = () => {
    // eslint-disable-next-line no-alert
    const recipeName = window.prompt('enter a name:');
    save(recipeName);
  };

  return (
    <div id="resizer-content" className="content">
      <div id="resizer-controls">
        <input
          type="range"
          id="resizer-input"
          min="10"
          max="30"
          value={slideValue}
          onChange={handleSliderChange}
          onMouseUp={handleSliderFinish}
        />
      </div>
      <div id="resizer-options">
        <button
          type="button"
          id="half-button"
          className="option-button"
          onClick={() => multiplyFactor(0.5)}
        >
          half
        </button>
        <button
          type="button"
          id="double-button"
          className="option-button"
          onClick={() => multiplyFactor(2)}
        >
          double
        </button>
        <button type="button" id="reset-button" className="option-button">
          reset
        </button>
        <button
          type="button"
          id="save-button"
          className="option-button"
          onClick={() => { handleSaveClick(); }}
        >
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

function RecipeItem(props) {
  // Set original_amounts on input change
  // set displayed_amounts on scale/factor change
  const {
    scaledAmount,
    item,
    updateAmount,
    updateRecipe,
  } = props;
  const [amount, setAmount] = React.useState(scaledAmount);
  const [recipeItem, setRecipeItem] = React.useState({ ingredient: '', amount: '', unit: 'grams' });

  const handleIngredientChange = (e) => {
    recipeItem[e.target.name] = e.target.value;
    console.log('[STATE] Update recipe item', item, recipeItem);
    setRecipeItem(recipeItem);
    updateRecipe(item, recipeItem);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    // Update the amount in App state:
    updateAmount(item, e.target.value);
    handleIngredientChange(e);
  };

  React.useEffect(() => {
    // update local state:
    setAmount(scaledAmount);
    // update the recipe item:
    recipeItem.amount = scaledAmount;
    setRecipeItem(recipeItem);

    // update the App state Recipe:
    // updateRecipe(item, recipeItem);

    // The mechanics here are a little funky:
    // Resizer component updates the factor app state which triggers a change to
    // the amounts app state
    // which triggers this use effect to fire, which causes the recipe item to update
    // and also sends another update to the recipe state in app
    // Can we just make it so that changing the factor (state) results in
    // recipe (state) items getting their amounts recalculated at the App level?
  }, [scaledAmount]);

  return (
    <div className="recipe-items">
      <span className="recipe-item">
        <input
          type="text"
          name="ingredient"
          placeholder="ingredient"
          className="recipe-item ingredient-input"
          onChange={handleIngredientChange}
        />
      </span>
      <span className="recipe-item">
        <input
          type="number"
          name="amount"
          placeholder="amount"
          className="recipe-item amount-input"
          value={amount || ''}
          onChange={handleAmountChange}
        />
      </span>
      <span className="recipe-item">
        <input
          type="text"
          name="unit"
          list="units"
          className="recipe-item unit-input"
          placeholder="unit"
          onChange={handleIngredientChange}
        />
        <datalist id="units">
          <option value="grams">grams</option>
          <option value="cups">cups</option>
          <option value="tbsp">tbsp</option>
          <option value="tsp">tsp</option>
        </datalist>
      </span>
    </div>
  );
}

function Recipe(props) {
  const { amounts, updateAmount, updateRecipe } = props;
  return (
    <div id="recipe-content" className="content">
      {amounts.map((e, i) => (
        <RecipeItem
          key={i}
          item={i}
          scaledAmount={e}
          updateAmount={updateAmount}
          updateRecipe={updateRecipe}
        />
      ))}
    </div>
  );
}

function App() {
  const [factor, setFactor] = React.useState(1);
  // eslint-disable-next-line no-unused-vars
  const [recipeLength, setRecipeLength] = React.useState(5);
  // Create an array to contain the recipe amounts
  const [amounts, setAmounts] = React.useState([...Array(recipeLength)]);
  // Create the object that will be persisted with the user data:
  const [recipe, setRecipe] = React.useState([]);
  const [directions, setDirections] = React.useState('');

  const updateAmount = (item, amount) => {
    amounts[item] = amount;
    console.log('[STATE] amounts:', amounts);
    setAmounts(amounts);
  };

  const updateRecipe = (item, ingredient) => {
    recipe[item] = ingredient;
    setRecipe(recipe);
    console.log('[STATE] new recipe:', recipe);
  };

  const multiplyFactor = (multiple) => {
    setFactor(factor * multiple);
  };

  const updateFactor = (value) => {
    setFactor(value);
    console.log('[STATE] new factor:', value);
  };

  const saveRecipe = (name) => {
    const payload = { name, recipe, directions };
    console.log('Saving recipe:', payload);
    axios.post('/recipe', payload)
      .then((response) => {
        console.log('Response data:', response.data);
      })
      .catch((err) => {
        console.log('Error posting:', err);
      });
  };

  const handleTextChange = (e) => {
    setDirections(e.target.value);
  };

  React.useEffect(() => {
    const newAmounts = amounts.map((e) => (e ? (e * factor).toFixed(1) : e));
    console.log('New amounts:', newAmounts);
    setAmounts(newAmounts);
  }, [factor]);

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
          <h2>amount</h2>
        </div>
      </div>
      <div id="resizer-headers" className="header">
        <h2>resizer</h2>
      </div>
      <div id="directions-content" className="content">
        <textarea id="directions-text" onChange={handleTextChange} />
      </div>
      <Recipe
        recipe={recipe}
        amounts={amounts}
        updateAmount={updateAmount}
        updateRecipe={updateRecipe}
      />
      <Resizer
        updateFactor={updateFactor}
        multiplyFactor={multiplyFactor}
        save={saveRecipe}
      />
    </div>
  );
}

export default App;

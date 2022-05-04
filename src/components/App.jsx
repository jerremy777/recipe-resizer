/* eslint-disable react/no-array-index-key */
/* eslint-disable no-console */
import React from 'react';
// import Recipe from './Recipe';
// import Resizer from './Resizer';

function Resizer(props) {
  const { updateFactor, double } = props;
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
          id="reset-button"
          className="option-button"
          onClick={() => double()}
        >
          double
        </button>
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

function RecipeItem(props) {
  const { scaledAmount, item, updateAmount } = props;
  const [amount, setAmount] = React.useState(scaledAmount);
  // ingredient = {ingredient: , amount: }

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    // Update the amount in App state:
    updateAmount(item, e.target.value);
  };

  React.useEffect(() => {
    setAmount(scaledAmount);
  }, [scaledAmount]);

  return (
    <div className="recipe-items">
      <span className="recipe-item">
        <input
          type="text"
          name={`ingredient_${item}`}
          placeholder="ingredient"
          className="recipe-item ingredient-input"
        />
      </span>
      <span className="recipe-item">
        <input
          type="number"
          name={`amount_${item}`}
          placeholder="amount"
          className="recipe-item amount-input"
          value={amount || ''}
          onChange={handleAmountChange}
        />
      </span>
      <span className="recipe-item">
        <input
          type="text"
          name={`unit_${item}`}
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

function Recipe(props) {
  const { amounts, updateAmount } = props;
  return (
    <div id="recipe-content" className="content">
      {amounts.map((e, i) => (
        <RecipeItem
          key={i}
          item={i}
          scaledAmount={e}
          updateAmount={updateAmount}
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

  // Create an array to contain the recipe amounts
  const [amounts, setAmounts] = React.useState([...Array(recipeLength)]);

  const updateAmount = (item, amount) => {
    const newAmounts = amounts;
    newAmounts[item] = amount;
    console.log(newAmounts);
    setAmounts(newAmounts);
  };

  const doubleAmounts = () => {
    setFactor(factor * 2);
  };

  const updateFactor = (value) => {
    setFactor(value);
    console.log('new factor:', value);
  };

  React.useEffect(() => {
    const newAmounts = amounts.map((e) => (e ? (e * factor).toFixed(2) : e));
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
        <textarea id="directions-text" />
      </div>
      <Recipe
        amounts={amounts}
        updateAmount={updateAmount}
      />
      <Resizer
        updateFactor={updateFactor}
        double={doubleAmounts}
      />
    </div>
  );
}

export default App;

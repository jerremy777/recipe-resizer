import React from 'react';

function RecipeItem() {
  return (
    <div className="recipe-item">
      <input type="text" name="ingredient-1" className="recipe-item ingredient-input" />
      <input type="text" name="amount-1" className="recipe-item amount-input" />
      <input type="text" name="unit-1" list="unit" className="recipe-item unit-input" />
      <datalist id="unit">
        <option value="grams" defaultValue>grams</option>
        <option value="cups">cups</option>
        <option value="tbsp">tbsp</option>
        <option value="tsp">tsp</option>
      </datalist>
    </div>
  );
}

function Recipe() {
  return (
    <div id="recipe-content" className="content">
      <RecipeItem />
    </div>
  );
}

export default Recipe;

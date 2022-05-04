import React from 'react';

function Recipe(props) {
  return (
    <div id="recipe-content" className="content">
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
  );
}

function RecipeItem(props) {

}

export default Recipe;

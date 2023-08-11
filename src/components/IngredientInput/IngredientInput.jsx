import Button from '../Button/Button';
import './IngredientInput.scss';

const IngredientInput = ({ index, numGrams, ingredient, handleInputChange, handleRemoveInput }) => (
    <div className="input-row">
        <input
            className="input-row__grams"
            type="text"
            name="numGrams"
            placeholder="Enter food quantity in grams"
            value={numGrams}
            onChange={(event) => handleInputChange(index, event)}
        />
        <input
            className="input-row__food"
            type="text"
            name="ingredient"
            placeholder="Enter food name"
            value={ingredient}
            onChange={(event) => handleInputChange(index, event)}
        />

        <Button onClick={() => handleRemoveInput(index)} text="Remove" />
    </div>
);

export default IngredientInput;
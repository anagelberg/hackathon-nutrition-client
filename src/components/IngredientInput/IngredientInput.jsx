const IngredientInput = ({ index, numGrams, ingredient, handleInputChange, handleRemoveInput }) => (
    <div>
        <input
            type="text"
            name="numGrams"
            placeholder="Enter numGrams"
            value={numGrams}
            onChange={(event) => handleInputChange(index, event)}
        />
        <input
            type="text"
            name="ingredient"
            placeholder="Enter ingredient"
            value={ingredient}
            onChange={(event) => handleInputChange(index, event)}
        />
        <button type="button" onClick={() => handleRemoveInput(index)}>
            Remove
        </button>
    </div>
);

export default IngredientInput;
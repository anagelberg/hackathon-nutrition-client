import { useEffect, useState } from "react";
import axios from "axios";
import IngredientInput from "../../components/IngredientInput/IngredientInput";


function RecipeEntryPage() {

    const [ingredientList, setIngredientList] = useState(
        Array.from({ length: 5 }, () => ({ numGrams: "", ingredient: "" }))
    );

    const handleInputChange = (index, event) => {
        const list = [...ingredientList];
        const { name, value } = event.target;
        list[index][name] = value;
        setIngredientList(list);
    };

    const handleAddInput = () => {
        const list = [...ingredientList];
        list.push({ numGrams: "", ingredient: "" });
        setIngredientList(list);
    };

    const handleRemoveInput = (index) => {
        const list = [...ingredientList];
        list.splice(index, 1);
        setIngredientList(list);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form Data:", ingredientList);
        // Handle the form data here
    };

    return (
        <form onSubmit={handleSubmit}>
            {ingredientList.map((input, index) => (
                <IngredientInput
                    key={index}
                    index={index}
                    numGrams={input.numGrams}
                    ingredient={input.ingredient}
                    handleInputChange={handleInputChange}
                    handleRemoveInput={handleRemoveInput}
                />
            ))}
            <button type="button" onClick={handleAddInput}>
                Add another ingredient
            </button>
            <button type="submit">Submit</button>
        </form>
    );

}

export default RecipeEntryPage;
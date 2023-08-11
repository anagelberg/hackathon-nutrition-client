import { useEffect, useState } from "react";
import './RecipeEntryPage.scss'
import axios from "axios";
import IngredientInput from "../../components/IngredientInput/IngredientInput";
import Button from "../../components/Button/Button";

function RecipeEntryPage() {

    const [ingredientList, setIngredientList] = useState(
        Array.from({ length: 5 }, () => ({ numGrams: "", ingredient: "" }))
    );

    const [mealName, setMealName] = useState('');

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

        // Minimal filtering
        const ingredientListFiltered = ingredientList.filter(ingredient => {
            return !isNaN(ingredient.numGrams)
                && ingredient.numGrams.trim() !== ''
                && ingredient.ingredient !== '';
        })

        // Create req obj to send to backend
        const reqObj = {
            mealName: mealName,
            ingredients: ingredientListFiltered
        }

        console.log('reqObj', reqObj);

    };

    const handleMealChange = (event) => {
        setMealName(event.target.value);
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h2>Enter Meal Data</h2>

                <div className="meal-name-label">
                    <label htmlFor="meal-name-input">Name this meal:</label>
                    <input id='meal-name-input' name='meal-name-input' type="text" placeholder="Enter Meal Name" onChange={e => handleMealChange(e)} />

                </div>

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

                <div className="button-container">
                    <Button text="+ Add ingredient" type="button" modifiers='--reverse' onClick={handleAddInput} />
                    <Button text="Submit" modifiers='--reverse' type="submit" />

                </div>


            </form>
        </section>
    );

}

export default RecipeEntryPage;
import { useEffect, useState } from "react";
import './RecipeEntryPage.scss'
import axios from "axios";
import IngredientInput from "../../components/IngredientInput/IngredientInput";
import Button from "../../components/Button/Button";
import PieChartComponent from "../PieChartComponent/PieChartComponent";

function RecipeEntryPage() {

    const [ingredientList, setIngredientList] = useState(
        Array.from({ length: 5 }, () => ({ numGrams: "", ingredient: "" }))
    );


    const [submitted, setSubmitted] = useState(false);
    const [grams, setgrams] = useState(
        {
            protein: 20,
            fat: 5,
            carbs: 10
        })

    const [cals, setCals] = useState(
        {
            protein: 0,
            fat: 0,
            carbs: 0
        })

    useEffect(() => {
        setCals({
            protein: grams.protein * 4,
            fat: grams.fat * 4,
            carbs: grams.carbs * 9
        })
    }, [grams])



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

        // PReview request
        console.log('reqObj', reqObj);
        setSubmitted(true);
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


            {submitted &&
                <div className='meal-summary'>
                    <h2>Meal Summary</h2>
                    <h3>{mealName}</h3>
                    <PieChartComponent cals={cals} grams={grams} />

                    <h2>Total Calories: {cals.protein + cals.fat + cals.carbs}</h2>
                </div>


            }



        </section>
    );

}

export default RecipeEntryPage;
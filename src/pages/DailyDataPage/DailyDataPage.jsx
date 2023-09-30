// import Button from '../../components/Button/Button';


import 'react-circular-progressbar/dist/styles.css';
import ProgressCircle from "../../components/ProgressCircle/ProgressCircle";
import ProgressCard from '../../components/ProgressCard/ProgressCard';
import './DailyDataPage.scss'
import { useState } from 'react';

// import { useNavigate } from 'react-router';

function DailyDataPage({ goals, consumed }) {


    //get consumed 


    const [percentages, setPercentages] = useState({
        protein: parseFloat((100 * (consumed.protein / goals.protein)).toFixed(1)),
        fat: parseFloat((100 * (consumed.fat / goals.fat)).toFixed(1)),
        carbs: parseFloat((100 * (consumed.carbs / goals.carbs)).toFixed(1)),
    })


    return (
        <div className="daily">
            <h1>Your Daily Totals</h1>

            <div className="card-container">
                <ProgressCard percentage={percentages.protein} macroName='Protein' goal={goals.protein} />

                <ProgressCard percentage={percentages.fat} macroName='Fat' goal={goals.fat} />

                <ProgressCard percentage={percentages.carbs} macroName='Carbohydrates' goal={goals.carbs} />

            </div>
        </div>
    )
}

export default DailyDataPage;
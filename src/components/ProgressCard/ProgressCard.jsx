
import ProgressCircle from "../ProgressCircle/ProgressCircle";
import './ProgressCard.scss'

const ProgressCard = ({ percentage, macroName, goal }) => {

    return (
        <div class='progress-card'>
            <p>{macroName}</p>
            <div style={{ width: '100px', height: '100px' }}>
                <ProgressCircle percentage={percentage} />

                <p class='goal'>Goal: {goal}g</p>
            </div>



        </div>
    );
};

export default ProgressCard;
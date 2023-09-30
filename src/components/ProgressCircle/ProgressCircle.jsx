
import { CircularProgressbar } from "react-circular-progressbar";

const ProgressCircle = ({ percentage }) => {

    return (
        <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={{
                path: {
                    stroke: '#6DBE45', // Color of the progress path
                },
                text: {
                    fill: '#6DBE45', // Color of the text
                },
            }}
        />
    );
};

export default ProgressCircle;
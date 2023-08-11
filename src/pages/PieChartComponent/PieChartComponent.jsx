import React from 'react';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';



const renderCustomTooltip = ({ active, payload, label, grams }) => {
    if (active && payload && payload.length) {
        const { name, value } = payload[0].payload;
        return (
            <div style={{ backgroundColor: '#fff', border: '1px solid #999', padding: '10px' }}>
                <p>{`${name}`}</p>
                <p>{name === 'Fat' ? `${parseFloat(value / 9).toFixed(1)}g` : `${parseFloat(value / 4).toFixed(1)}g`}</p>
                <p>{`${value} Calories`}</p>
            </div>
        );
    }
    return null;
}


const PieChartComponent = ({ cals, grams }) => {
    const data = [
        { name: 'Fat', value: cals.fat },
        { name: 'Protein', value: cals.protein },
        { name: 'Carbohydrates', value: cals.carbs },
    ];

    const COLORS = ['#A8D5BA', '#6DBE45', '#FFAB5E'];

    return (
        <PieChart width={300} height={300}>
            <Pie
                dataKey="value"
                isAnimationActive={false}
                data={data}
                cx={150}
                cy={120}
                outerRadius={100}
                fill="#8884d8"
                label={(entry) => `${entry.name}`}
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip content={renderCustomTooltip} grams={grams} />
        </PieChart>
    );
};

export default PieChartComponent;


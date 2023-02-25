import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = (props) => {
    const chartDataPoints = [
        {label: "jan" , value: 0},
        {label: "Feb" , value: 1},
        {label: "Mar" , value: 2},
        {label: "Apr" , value: 3},
        {label: "May" , value: 4},
        {label: "jun" , value: 5},
        {label: "jul" , value: 6},
        {label: "Aug" , value: 7},
        {label: "Sep" , value: 8},
        {label: "Oct" , value: 9},
        {label: "Nov" , value: 10},
        {label: "Dec" , value: 11},
    ];
    for (const expanse of props.expanses){
        const expanseMonth = expanse.date.getMonth();
        chartDataPoints[expanseMonth].value += expanse.amount;
    }
    return <Chart chartDataPoints = {chartDataPoints}/>;
};

export default ExpenseChart;

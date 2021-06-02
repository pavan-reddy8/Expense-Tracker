import Chart from '../Chart/Chart';


const ExpenseChart = (props)=>{
    const dataPoints = [
        {label:'Jan',value:0},
        {label:'Feb',value:0},
        {label:'March',value:0},
        {label:'April',value:0},
        {label:'May',value:0},
        {label:'June',value:0},
        {label:'July',value:0},
        {label:'Aug',value:0},
        {label:'Sept',value:0},
        {label:'Oct',value:0},
        {label:'Nov',value:0},
        {label:'Dec',value:0}
    ];
    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth();
        dataPoints[expenseMonth].value+=expense.amount;

    }
    console.log(dataPoints);
    return (
         <Chart dataPoints={dataPoints}></Chart>
        
    )


}
export default ExpenseChart;
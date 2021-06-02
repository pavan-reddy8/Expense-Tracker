import "./ChartBar.css"

const ChartBar = (props)=>{

    let barHeight = Math.round((props.value/props.maxValue)*100 ) + '%'; 
    //barHeight =150;
    console.log(barHeight);
    return(

        <div className='chart-bar'>
            <div className='chart-bar__inner' >
                <div className='chart-bar__fill' style={{height:barHeight}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>

        </div>
    
    )

}
export default ChartBar;
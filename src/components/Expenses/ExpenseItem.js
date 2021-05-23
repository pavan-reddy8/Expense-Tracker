import './ExpenseItem.css';
import Card from '../UI/Card.js'
import ExpenseDate from './ExpenseDate.js';
function ExpenseItem(props) {


    return (
        <Card className="expense-item">
            <div className="expense-item__description">
                <ExpenseDate date={props.date} />
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
        </Card>
    );
    
}

export default ExpenseItem;
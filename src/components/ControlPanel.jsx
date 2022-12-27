
import Card from './Card';
import classes from './ControlPanel.module.css';

const ControlPanel = (props) => {
    return (

        <Card className={classes.content}>
            <button onClick={props.allItems}>All</button>
            <button onClick={props.activeItems}>Active</button>
            <button onClick={props.completedItems}>Completed</button>
        </Card>

    )

}

export default ControlPanel;
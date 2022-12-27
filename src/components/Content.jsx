
import { useContext } from 'react';
import Themecontext from '../store/theme-context';
import Card from './Card';
import classes from './Content.module.css'
import Task from "./Task";


function Content (props) {

const leftItems = props.show.filter((item) =>  item.status==='toDo');

const ctx = useContext(Themecontext)


return(
    <div className={`${classes.contener} ${ctx ? classes.contenerDark : classes.contenerLight}`}>
      
        {props.show.map((item) => (
            <Task 
            key={props.id}
            id={item.id}
            name={item.name}
            status={item.status}
            change={props.changeStatus}
            deleteSingleItem={props.deleteSingle}/>
    ))} 
    
        <Card className={classes.footer}> 
            <div>{leftItems.length} items left</div>
            <button className={classes.clearCompleted} onClick={props.deleteAll}>Clear Completed</button>
        </Card>
    </div>
)
}

export default Content;
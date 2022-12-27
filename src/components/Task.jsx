import check from '../images/icon-check.svg'
import cross from '../images/icon-cross.svg'
import classes from './Task.module.css'
import { useContext } from "react";
import Themecontext from "../store/theme-context";

function Task(props) {

    const ctx = useContext(Themecontext)

    const getID = () => {
        props.change(props.id)
    }

    const delItem = () => {
        props.deleteSingleItem(props.id)
    }

    const done = props.status === 'done'
    return (
        <div className={classes.task} >
                
                <div className={`${'circle'} ${done && 'circleDone'}`} onClick={getID}>
                    {done && <img src={check}></img>}
                </div>
                
                <div className={`${classes.title} ${!ctx && classes.titleLight} ${done && classes.titleDone}`} >{props.name}</div>
                <button className={classes.btnCross} onClick={delItem}><img src={cross} /></button>
        
        </div>

    )

}

export default Task;
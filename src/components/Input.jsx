import { useContext, useRef } from 'react';
import Card from './Card';
import classes from './Input.module.css'
import Themecontext from '../store/theme-context';


function Input(props) {

    const importTaskName = useRef();
    const ctx = useContext(Themecontext)

    const sendTask = (event) => {
        event.preventDefault();
        const enteredValue = importTaskName.current.value;
        if (enteredValue.length === 0) {
            return
        } else {
            props.tasks(enteredValue)
            importTaskName.current.value = '';
        }
    }


    return (

        <Card className={classes.contener}>
            <div className='circle'></div>
            <form onSubmit={sendTask} className={classes.form}>
                <input type="text" className={classes.input} placeholder='Create a new todo' ref={importTaskName} />
                <button className={`${classes.btn} ${!ctx && classes.btnLight}`} type="submit">Add</button>
            </form>

        </Card>

    )

}

export default Input;
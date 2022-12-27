import { useContext } from 'react';
import Themecontext from '../store/theme-context';
import  './Card.css'

const Card = (props) => {
   
   const ctx = useContext(Themecontext)
   const classes = `${"card"} ${ctx ? "card-dark " : "card-light "}` + props.className;
 return(
    <div className={classes}>
         {props.children}
    </div>
 )
}

export default Card;
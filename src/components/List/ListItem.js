
import { Fragment, useState } from 'react';
import classes from './ListItem.module.css'

const ListItem = (props) => {

    const [showItem, setShowitem] = useState(true);
    //const listItemRef = useRef();
    //console.log(props.itemValue);

    const removeListItemHandler = (event) => {
        //console.log(listItemRef.current);
        setShowitem(false);
        //props.toRemove(listItemRef.current);
    }
    //ref={listItemRef} 

    return (<Fragment>
        {showItem && <li className={classes.ListItem} onClick={removeListItemHandler} >{props.itemValue}</li>}
        </Fragment>
    );
};

export default ListItem;
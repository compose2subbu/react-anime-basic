import { useState } from 'react';
import classes from './List.module.css';
import ListItem from './ListItem';

const List = () => {

    const [listItems, setListItems] = useState([]);

    // const removeHandler = (itemToRemove) => {
    //     setListItems((prevListItems) => prevListItems.filter(item => item.key !== itemToRemove.key));
    // };
    //toRemove={removeHandler} 

    const addItemHandler = () => {
        const newItem = new Date().toISOString();
        //console.log(newItem)
        setListItems((prevListItems) => prevListItems.concat(<ListItem key={newItem} itemValue={newItem} />));
    };

    

    return (
        <div>
            <button className={classes.listButton} onClick={addItemHandler}>Add Item</button>
            <p>Click Item to Remove.</p>
            <ul className={classes.List}>
                {listItems}
            </ul>
        </div>
    );
}

export default List;
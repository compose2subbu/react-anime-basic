

import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from './components/List/List';
import classes from './App.module.css';
import { useState } from 'react';

function App() {

  const [isModalClose, setIsModalClose] = useState(false);
  //console.log(isModalClose);
  const closeModalHandler = () => {
    setIsModalClose((currentState) => !currentState);
  }

  const openModalHandler = () => {
    setIsModalClose((currentState) => !currentState);
  }

  return (
    <div className={classes.App}>
        <h1>React Animations</h1>
        {isModalClose && <Modal closeModal={closeModalHandler} show={isModalClose}/>}
        {isModalClose && <Backdrop closeModal={closeModalHandler}/>}
        <button className={classes.modalButton} onClick={openModalHandler}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
  );
}

export default App;

import classes from './Modal.module.css';
import CSSTransition from 'react-transition-group/CSSTransition';


const animationTiming = {
    enter: 1000,
    exit: 1000
};

const Modal = (props) => {
    //console.log(props.show);
    return (
        <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animationTiming}
        classNames={{
            enter: '',
            enterActive: classes.modalOpen,
            exit: '',
            exitActive: classes.modalClosed
        }}>
        <div className={classes.modal}>
            <h1>A Modal</h1>
            <button className={classes.modalButton} onClick={props.closeModal}>Dismiss</button>
        </div>
        </CSSTransition>
    );
}

export default Modal;
import ReactDom from 'react-dom'

import Card from "../Card/Card";
import Button from "../Button/Button";

import classes from './ErrorModal.module.css';

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onDismiss} />
}

const ModalOverlay = props => {
    return <Card className={classes.modal}>
        <header className={classes.header}>
            <h2>
                {props.title}
            </h2>
        </header>
        <div className={classes.content}>
            {props.message}
        </div>
        <footer className={classes.actions}>
            <Button type="button" onClick={props.onDismiss}>Okay</Button>
        </footer>
    </Card>
}
const ErrorModal = props => {
    return (
        <>
            {ReactDom.createPortal(<Backdrop onClick={props.onDismiss} />, document.getElementById('backdrop-root'))}
            {ReactDom.createPortal(<ModalOverlay title={props.title} message={props.message} onClick={props.onDismiss} />, document.getElementById('overlay-root'))}
        </>
    )
}

export default ErrorModal;

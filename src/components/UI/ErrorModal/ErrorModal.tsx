import ReactDom from "react-dom";

import Card from "../Card/Card";
import Button from "../Button/Button";

import classes from "./ErrorModal.module.css";

const Backdrop = (props: any) => {
  return <div className={classes.backdrop} onClick={props.onDismiss} />;
};

const ModalOverlay = (props: any) => {
  console.log(props);
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <Button type="button" onClick={props.onDismiss}>
          Okay
        </Button>
      </footer>
    </Card>
  );
};
const ErrorModal = (props: any) => {
  const backDropRoot = document.getElementById("backdrop-root")!;
  const overlayRoot = document.getElementById("overlay-root")!;
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onDismiss={props.onDismiss} />,
        backDropRoot
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onDismiss={props.onDismiss}
        />,
        overlayRoot
      )}
    </>
  );
};

export default ErrorModal;

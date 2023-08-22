import classes from "./Card.module.css";

const Card = (props: any) => {
  return (
    <div className={classes.card + ` ${props.className}`}>{props.children}</div>
  );
};

export default Card;

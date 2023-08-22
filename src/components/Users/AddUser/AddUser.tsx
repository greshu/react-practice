import { useRef } from "react";

import classes from "./AddUser.module.css";

import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import { useState } from "react";
import ErrorModal from "../../UI/ErrorModal/ErrorModal";

const AddUser = (props: any) => {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const ageInputRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState<any>();

  const addUserHandler = (event: any) => {
    event.preventDefault();
    const enteredUsername = usernameInputRef.current?.value || "";
    const enteredAge = ageInputRef.current?.value || "";

    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter valid name and age",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter valid age (greater than 0)",
      });
      return;
    }
    const id = Math.random().toString();
    props.onAddUser({ id, username: enteredUsername, age: enteredAge });
    // usernameInputRef.current?.value = "";
    // ageInputRef.current?.value = "";
  };

  const errorModalHandler = () => {
    debugger;
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onDismiss={() => errorModalHandler()}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input id="username" ref={usernameInputRef} type="text" />
          <label htmlFor="age">Age (years)</label>
          <input id="age" ref={ageInputRef} type="number" />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

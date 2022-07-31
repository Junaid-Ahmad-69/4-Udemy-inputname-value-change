import React, { useRef, useState } from "react";
import Wrapper from "../Helper/Wrapper";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModel from "../UI/ErrorModel";
import classes from "../User/AddUser.module.css";

const AddUser = (props) => {
  // const [enterName, setEnterName] = useState("");
  // const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const userName = useRef();
  const userAge = useRef();

  const addEventHandler = (event) => {
    event.preventDefault();
    const enterNameRef = userName.current.value;
    const enterAgeRef = userAge.current.value;
    if (enterNameRef.trim().length === 0 || enterAgeRef.trim().length === 0) {
      return setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty values).",
      });
    }
    if (+enterAgeRef < 1) {
      return setError({
        title: "Invalid Input",
        message: "Please Enter valid age",
      });
    }
    props.onAddUser(enterNameRef, enterAgeRef);
    // setEnterAge("");
    // setEnterName("");
    userName.current.value = "";
    userAge.current.value = "";
  };

  const validHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModel
          title={error.title}
          message={error.message}
          onConfirm={validHandler}
        />
      )}
      <Card className={classes.input}>
        <form action="#" onSubmit={addEventHandler}>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            // value={enterName}
            // onChange={addUserHandler}
            ref={userName}
          />
          <label htmlFor="name">Age (Year)</label>
          <input
            type="number"
            id="age"
            // value={enterAge}
            // onChange={addAgeHandler}
            ref={userAge}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;

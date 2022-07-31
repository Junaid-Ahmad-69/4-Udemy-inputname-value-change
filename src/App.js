import React, { Fragment, useState } from "react";
import AddUser from "./Component/User/AddUser";
import UserList from "./Component/User/UserList";

const App = () => {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUserList((prevList) => {
      return [...prevList, { name: uName, age: uAge }];
    });
  };
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </Fragment>
  );
};

export default App;

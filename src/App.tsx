import { useState } from "react";
import AddUser from "./components/Users/AddUser/AddUser";
import UsersList from "./components/Users/UsersList/UsersList";
import { User } from "./types/user.model";

function App() {
  const [usersList, setUsersList] = useState<User[]>([]);

  const onAddUserHandler = (userData: User) => {
    setUsersList((prevState) => [userData, ...prevState]);
  };

  return (
    <>
      <AddUser onAddUser={(userData: User) => onAddUserHandler(userData)} />
      {usersList.length > 0 && <UsersList users={usersList}></UsersList>}
    </>
  );
}

export default App;

import { useState } from 'react';
import AddUser from './components/Users/AddUser/AddUser'
import UsersList from './components/Users/UsersList/UsersList';

function App() {
  const [usersList, setUsersList] = useState([])

  const onAddUserHandler = (userData) => {
    setUsersList((prevState) => [userData, ...prevState]);
  }

  return (
    <>
      <AddUser onAddUser = {(userData) => onAddUserHandler(userData)} />
      {usersList.length > 0 && <UsersList users={usersList}></UsersList>}
    </>
  );
}

export default App;

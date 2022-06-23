import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import UserList from './Components/userList/UserList';


function App() {
  
  
  const [users, setUsers] = useState(null)
  const [loading, setLoading] = useState(true)
    const getusers  =async()=> {
        try {
          const response = await axios.get("https://jsonplaceholder.typicode.com/users");
          setUsers(response.data);
          console.log(response.data)
          setLoading(false)
        } catch (error) {
          console.error(error);
        }
      }
      useEffect(() => {
          console.log("component app did mount or state query updated")
        getusers()
      }, [])
      return (
        <div className="App">
          
        {loading?<h1>loading ...</h1>: <UserList users={users}/>}
        
       
    </div>
  );
}
export default App;
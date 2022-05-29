import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    setLoading(true);
    const url = 'http://localhost:8080/user';

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  };

  return (
    <div className='App'>
      {loading ? (
        <div>...loading data...</div>
      ) : (
        users.map((user) => {
          return <div>{user.username}</div>;
        })
      )}
    </div>
  );
}

export default App;

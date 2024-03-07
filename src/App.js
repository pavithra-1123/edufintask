
// App.js
import React, { useState } from 'react';

import AdminScreen from './AdminScreen';
import ManagerScreen from './ManagerScreen';
import DeveloperScreen from './DeveloperScreen';

const mockUsers = [
  { id: '1', name: 'pavithra', userType: 'Admin' },
  { id: '2', name: 'vijay', userType: 'Manager' },
  { id: '3', name: 'muin', userType: 'Developer' },
];

export let App = () => {
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');

  const handleLogin = () => {
    const foundUser = mockUsers.find(
      (user) => user.name.toLowerCase() === userName.toLowerCase()
    );

    if (foundUser) {
      setUserType(foundUser.userType);
    } else {
      alert('Invalid user name. Please enter a valid user name.');
    }
  };

  const renderUserScreen = () => {
    switch (userType) {
      case 'Admin':
        return <AdminScreen user={mockUsers.find((user) => user.userType === 'Admin')} />;
      case 'Manager':
        return <ManagerScreen user={mockUsers.find((user) => user.userType === 'Manager')} />;
      case 'Developer':
        return <DeveloperScreen user={mockUsers.find((user) => user.userType === 'Developer')} />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {userType ? (
        renderUserScreen()
      ) : (
        <div>
          <h1>Login</h1>
          <input
            type="text"
            placeholder="Enter your name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};



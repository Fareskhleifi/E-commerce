import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Initialize state with data from localStorage if it exists
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : {
      email: '',
      password: '',
      user_name: '',
      image: '',
      first_name: '',
      last_name: '',
      street_address: '',
      city: '',
      state: '',
      postal_code: '',
      notification: ''
    };
  });

  useEffect(() => {
    // Save user data to localStorage whenever it changes
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);

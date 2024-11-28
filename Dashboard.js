// src/Dashboard.js
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import supabase from './supabase';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const session = supabase.auth.session();
    if (session) {
      setUser(session.user);
    } else {
      history.push('/login');
    }

    const { data: listener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setUser(session.user);
      } else {
        history.push('/login');
      }
    });

    return () => listener.unsubscribe();
  }, [history]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    history.push('/login');
  };

  return (
    <div>
      <h2>Dashboard</h2>
      {user ? (
        <>
          <p>Welcome, {user.email}</p>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;

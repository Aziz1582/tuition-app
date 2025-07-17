import React from 'react';
import { useAuth } from '../context/AuthContext';

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="p-6">
      <h1 className="text-3xl mb-4">Welcome, {user?.email}</h1>
      <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      {/* TODO: Add tabs for Quizzes, Notes, Videos */}
    </div>
  );
}

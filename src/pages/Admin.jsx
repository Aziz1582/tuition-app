import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function Admin() {
  const [email, setEmail] = useState('');

  const createStudent = async () => {
    try {
      await addDoc(collection(db, 'students'), { email });
      alert('Student added to Firestore; set password manually via Firebase Console');
    } catch (err) {
      console.error(err);
      alert('Error creating student');
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Admin Console</h1>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Student Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border rounded w-full mb-2"
        />
        <button onClick={createStudent} className="px-4 py-2 bg-green-500 text-white rounded">Add Student</button>
      </div>
      {/* TODO: Extend to set password via Cloud Function or Admin SDK */}
    </div>
}

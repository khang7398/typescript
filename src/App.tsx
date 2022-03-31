import React, { useState } from 'react';
import Form from './component/Form';
import List from './component/List';
import './App.css';

export interface IState {
  people: {
    name: string;
    age: number;
    bio: string;
  }[];
}

export default function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(5);
  const [people, setPeople] = useState<IState['people']>([]);

  return (
    <div className="container">
      <Form people={people} setPeople={setPeople} />
      <List people={people} />
    </div>
  );
}

import React from 'react';
import { useState } from 'react';
import './App.css';
import List from './components/List';

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Criatiano",
      age: 36,
      url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Cristiano_Ronaldo_2018.jpg",
      note: "Dont like coke"
    }
  ]);

  return (
    <div className="App">
      <h1>People Invited to My Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;

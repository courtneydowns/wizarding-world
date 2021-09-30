import React, { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';
import './App.css';

function App() {
  const database = getDatabase();
  const spellsRef = ref(database, 'spells');

  const [spells, setSpells] = useState([]);

  useEffect(() => {
    onValue(spellsRef, (snapshot) => {
      const val = snapshot.val();

      const spellsArr = [];

      for (const spell in val) {
        spellsArr.push({ ...val[spell] });
      }

      setSpells(spellsArr);
    });
  });

  return (
    <div>
      <h3>Spells</h3>
      <ul>
        {spells.map((spell) => (
          <li key={spell.Name}>
            <span>Name: {spell.Name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

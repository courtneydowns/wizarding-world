import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, child } from "firebase/database";
import "./App.css";

function App() {
  const database = getDatabase();
  const spellsRef = ref(database, "spells");

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

  const dbRef = ref(getDatabase());
  get(child(dbRef, `spells/${spell.Name}`))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });

  return (
    <div>
      <h3>Spells</h3>
      <ul>
        {spells.map((spell) => (
          <li key={spell.Name}>
            <span>Name: {spell.Name}</span>
            <li key={spell.Type}>
              <span>Type: {spell.Type}</span>
              <li key={spell.Pronunciation}>
                <span>Pronunciation: {spell.Pronunciation}</span>
                <li key={spell.Use}>
                  <span>Use: {spell.Use}</span>
                  <li key={spell.Etymology}>
                    <span>Etymology: {spell.Etymology}</span>
                    <li key={spell.Appearances}>
                      <span>Appearances: {spell.Appearances}</span>
                    </li>
                  </li>
                </li>
              </li>
            </li>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

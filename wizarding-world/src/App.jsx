import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, child, get } from "firebase/database";
import "./App.css";

function App() {
  const database = getDatabase();
  const spellsRef = ref(database, "spells");

  const [spells, setSpells] = useState([]);
  const [displayedSpell, setDisplayedSpell] = useState(null);

  function getSpellByName(spellName) {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `spells/${spellName}`)).then((snapshot) =>
      setDisplayedSpell(snapshot.val())
    );
  }

  useEffect(() => {
    onValue(spellsRef, (snapshot) => {
      const spellsObj = snapshot.val();
      const spellsArr = [];

      for (const spell in spellsObj) {
        spellsArr.push({ ...spellsObj[spell] });
      }

      setSpells(spellsArr);
    });
  }, []);

  return (
    <div className="App">
      <h3>Choose A Spell Name</h3>
      <select onInput={(ev) => getSpellByName(ev.target.value)}>
        {spells.map((spell, i) => {
          const spellName = spell.Name;

          return (
            <option key={spellName + i} value={spellName}>
              {spellName}
            </option>
          );
        })}
      </select>

      {displayedSpell && (
        <div>
          <h3>{displayedSpell.Name}</h3>

          <div>
            <strong>Type: </strong>
            {displayedSpell.Type}
          </div>
          <div>
            <strong>Pronunciation: </strong>
            {displayedSpell.Pronunciation}
          </div>
          <div>
            <strong>Use: </strong>
            {displayedSpell.Use}
          </div>
          <div>
            <strong>Etymology: </strong>
            {displayedSpell.Etymology}
          </div>
          <div>
            <strong>Appearances: </strong>
            {displayedSpell.Appearances}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

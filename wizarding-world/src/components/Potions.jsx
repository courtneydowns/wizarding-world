import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, child, get } from "firebase/database";

function Potions() {
  const database = getDatabase();
  const potionRef = ref(database, "potions");

  const [potion, setPotion] = useState([]);
  const [displayedPotion, setDisplayedPotion] = useState(null);

  function getPotionByName(potionName) {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `potions/${potionName}`)).then((snapshot) =>
      setDisplayedPotion(snapshot.val())
    );
  }

  useEffect(() => {
    onValue(potionRef, (snapshot) => {
      const potionObj = snapshot.val();
      const potionArr = [];

      for (const potion in potionObj) {
        potionArr.push({ ...potionObj[potion] });
      }

      setPotion(potionArr);
    });
  }, []);

  return (
    <div>
      <h3>Choose a Potion</h3>
      <select onInput={(ev) => getPotionByName(ev.target.value)}>
        {potion.map((potion, i) => {
          const potionName = potion.Name;

          return (
            <option key={potionName + i} value={potionName}>
              {potionName}
            </option>
          );
        })}
      </select>

      {displayedPotion && (
        <div>
          <h3>{displayedPotion.Name}</h3>

          <div>
            <strong>Effects: </strong>
            {displayedPotion.Effects}
          </div>
          <div>
            <strong>Characteristics: </strong>
            {displayedPotion.Characteristics}
          </div>
          <div>
            <strong>Difficulty Level: </strong>
            {displayedPotion.DifficultyLevel}
          </div>
          <div>
            <strong>Known Ingredients: </strong>
            {displayedPotion.KnownIngredients}
          </div>
          <div>
            <strong>Appearances: </strong>
            {displayedPotion.Appearances}
          </div>
        </div>
      )}
    </div>
  );
}

export default Potions;

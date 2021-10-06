import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, child, get } from "firebase/database";

function MagicalObjects() {
  const database = getDatabase();
  const objectRef = ref(database, "magical-objects");

  const [object, setObject] = useState([]);
  const [displayedObject, setDisplayedObject] = useState(null);

  function getObjectByName(objectName) {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `magical-objects/${objectName}`)).then((snapshot) =>
      setDisplayedObject(snapshot.val())
    );
  }

  useEffect(() => {
    onValue(objectRef, (snapshot) => {
      const objectObj = snapshot.val();
      const objectArr = [];

      for (const object in objectObj) {
        objectArr.push({ ...objectObj[object] });
      }

      setObject(objectArr);
    });
  }, []);

  return (
    <div>
      <h3>Choose A Magical Object</h3>
      <select onInput={(ev) => getObjectByName(ev.target.value)}>
        {object.map((object, i) => {
          const objectName = object.Name;

          return (
            <option key={objectName + i} value={objectName}>
              {objectName}
            </option>
          );
        })}
      </select>

      {displayedObject && (
        <div>
          <h3>{displayedObject.Name}</h3>

          <div>
            <strong>Owners: </strong>
            {displayedObject.Owners}
          </div>
          <div>
            <strong>Use: </strong>
            {displayedObject.Use}
          </div>
          <div>
            <strong>Appearances: </strong>
            {displayedObject.Appearances}
          </div>
        </div>
      )}
    </div>
  );
}

export default MagicalObjects;

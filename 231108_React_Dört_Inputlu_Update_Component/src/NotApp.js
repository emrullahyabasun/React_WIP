import React, { useState } from 'react'

function NotApp() {
  const [list, setList] = useState([

  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");
  const [count, setCount] = useState(0);

  const Ekle = () => {
    setCount(count + 1);

    setList([...list, { id: count, title: newTitle, description: newDesc }]);
    setNewTitle("");
    setNewDesc("");
  };
  return (
    <div>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <input
        type="text"
        value={newDesc}
        onChange={(e) => setNewDesc(e.target.value)}
      />
      <button onClick={Ekle}>Ekle</button>

      {list.map((e, index) => {
        return (
          <div key={index}>
            <ul>
              <li>{e.title}</li>
              <li>{e.description}</li>
            </ul>
            <button onClick={() => setList(list.filter(a => a.id != e.id))}>Sil</button>
          </div>
        );
      })}
    </div>
  );
}

export default NotApp





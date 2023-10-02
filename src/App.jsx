import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState("");

  const adToList = () => {
    list.push(item);
    setList([...list]);
    // setList("");
  };

  const Remove = (index) => {
    list.splice(index, 1);
    setList([...list]);
  };

  return (
    <>
      <div>
        <h1> {list.length}</h1>
        <input onChange={(e) => setItem(e.target.value)} type="text" />
        <button onClick={adToList}>Click</button>
        <table>
          <tbody>
            {list.length !== 0 ? (
              list.map((element, index) => {
                return (
                  <tr key={index}>
                    <td>{element}</td>
                    <button onClick={() => Remove(index)}>Remove</button>
                  </tr>
                );
              })
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

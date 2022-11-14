function App() {
  const data = [
    { description: "Tarefa 1", done: true },
    { description: "Tarefa 2", done: false },
    { description: "Tarefa 3", done: false },
  ];

  return (
    <div className="App">
      <h1>TODO:</h1>
      {data.map((item, index) => (
        <div>
          <input type={"checkbox"} checked={item.done}></input>
          <text key={index}>{item.description}</text>
        </div>
      ))}
      <input type={"text"}></input>
    </div>
  );
}

export default App;

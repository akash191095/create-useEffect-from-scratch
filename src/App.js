// import root (needed for react v18)
import root from "./index";

// define global value
let value;

function useState(initialValue) {
  // set initial value
  if (typeof value === "undefined") value = initialValue;
  // updater function
  function setState(nextValue) {
    value = nextValue;
    // rerender component with new value
    root.render(<App />);
  }
  // return useState hook values
  return [value, setState];
}

function App() {
  const [name, setName] = useState("");
  function handleChange(evt) {
    setName(evt.target.value);
  }
  return (
    <div>
      <h1>My name is: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default App;

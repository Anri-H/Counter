import "./App.css";
import { Increase, Reset, Decrease } from "./components/buttons";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <Increase />
      <Decrease />
      <Reset />
    </div>
  );
}

export default App;

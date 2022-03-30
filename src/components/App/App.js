import './App.css';
import {useState} from "react";
import {Result} from "../Result/Result";
import {Capacity} from "../Capacity/Capacity";

function App(){
  // Initializing all the state variables
  const [input, setInput] = useState(0);
  const [from, setFrom] = useState();
  const [to, setTo] = useState();

  return (
      <div className="App">
        <div className="heading">
          <h1>Converter</h1>
        </div>
        <div className="container">
          <div className="left">
            <h3>Amount</h3>
            <input type="number" placeholder="Enter the amount" onChange={(e) => setInput(e.target.value)} />
          </div>
          <div className="middle">
            <h3>From</h3>
              <select onChange={(e) => setFrom(e.target.value)}>
                  <option value="l">l</option>
                  <option value="dl">dl</option>
                  <option value="cl">cl</option>
                  <option value="ml">ml</option>
              </select>
          </div>
          <div className="right">
            <h3>To</h3>
              <select onChange={(e) => setTo(e.target.value)}>
                  <option selected value="l">l</option>
                  <option value="dl">dl</option>
                  <option value="cl">cl</option>
                  <option value="ml">ml</option>
              </select>
          </div>
        </div>
        <Result from={from} to={to} input={input} />
      </div>
  );
}

export default App;
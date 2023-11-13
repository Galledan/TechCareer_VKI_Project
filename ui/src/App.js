import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tab, setTab] = useState(1);

  const formTab = () => {
    setTab(1);
  };

  const listTab = () => {
    setTab(2);
  };

  return (
    <div className="App">
      <header>
        <p>BMI App</p>
        <div className="navs">
          <button onClick={formTab}>Form</button>
          <button onClick={listTab}>List</button>
        </div>
      </header>
      <div className="content">
        {tab === 1 && (
          <div className="entry">
            <h1>Welcome to the Body Mass Index Calculator</h1>
            <p>Please insert your information below to calculate your BMI</p>
          </div>
        )}
        <div className="tab">
          {tab === 1 && <Form />}
          {tab === 2 && <List />}
        </div>
      </div>
    </div>
  );
}

export default App;

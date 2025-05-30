import Form from './components/Form'
import './App.css';
import React from "react";
import MyComponent from './components/MyComponent';

function App() {
  const [state, setState] = React.useState({
      firstName: "",
      lastName: "",
      edad: "",
      email: "",
      password: "",
      confirmPassword: ""
  });

  return (
    
    <div className="App">
      <Form state={state} setState={setState} />
      <div>
        <MyComponent movies={["The Matrix", "Inception", "Interstellar"]} />
      </div>
    </div>
  );
}

export default App;

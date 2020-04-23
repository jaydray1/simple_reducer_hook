import React from "react";
import "./styles.css";

const init = (initialCount: number): { count: number } => {
  return { count: initialCount }
}

const reducer = (state: { count: number }, action: { type: string }) => {
  switch(action.type) {
    case 'increment':
      return { count: state.count+1 }
  }
}
export default function App() {


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

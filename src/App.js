import React from "react";
import "./App.css";
import { Toaster } from "react-hot-toast";
import List from "./components/List/List";

function App() {
  return (
    <div className="App">
      <Toaster
        toastOptions={{
          error: {
            duration: 2000
          }
        }}
      />
      <h1>Notes</h1>
      <List />
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import AddForm from "./components/Form/Form";
import List from "./components/List/List";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saveNotes = localStorage.getItem("notes");
    if (saveNotes) {
      setNotes([...saveNotes]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = (value) => {
    const newNote = { id: nanoid(), note: value };
    setNotes((notes) => [...notes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className="App">
      <h1>Notes</h1>
      <AddForm onSubmit={addNote} />
      <List notes={notes} onDelete={deleteNote} />
    </div>
  );
}

export default App;

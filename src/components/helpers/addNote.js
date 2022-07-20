import { nanoid } from "nanoid";

const addNote = (value, setFunc) => {
  const newNote = { id: nanoid(), note: value };
  setFunc((notes) => [...notes, newNote]);
};

export default addNote;

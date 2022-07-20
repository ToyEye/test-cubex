const deleteNote = (id, array, setFunc) => {
  const newNotes = array.filter((elem) => elem.id !== id);
  setFunc([...newNotes]);
};

export default deleteNote;

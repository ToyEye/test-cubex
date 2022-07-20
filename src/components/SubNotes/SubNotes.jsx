import React, { useState } from "react";
import style from "./SubNotes.module.css";
import AddForm from "../Form/Form";
import { nanoid } from "nanoid";
import { TiDelete, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { moveDown, moveUp } from "../helpers";

const SubList = () => {
  const [subNotes, setSubNotes] = useState([]);
  const [addSubList, setAddSubList] = useState(false);

  const addNote = (value) => {
    const newNote = { id: nanoid(), subNote: value };
    setSubNotes((subNotes) => [...subNotes, newNote]);
  };

  const deleteNote = (id) => {
    const newNotes = subNotes.filter((subNote) => subNote.id !== id);
    setSubNotes(newNotes);
  };

  const deleteSublist = () => {
    setSubNotes([]);
    setAddSubList(false);
  };

  return (
    <>
      {addSubList ? (
        <>
          <button
            className={style.button}
            type="button"
            onClick={deleteSublist}
          >
            Delete Sublist
          </button>
          <AddForm onSubmit={addNote} />

          <ul>
            {subNotes &&
              subNotes.map((sub) => (
                <li key={sub.id} className={style.item}>
                  <div>
                    <button
                      type="button"
                      className={style.button}
                      onClick={() => moveUp(sub, subNotes)}
                    >
                      <TiArrowSortedUp />
                    </button>
                    <button
                      type="button"
                      className={style.button}
                      onClick={() => moveDown(sub, subNotes)}
                    >
                      <TiArrowSortedDown />
                    </button>
                  </div>

                  <p>{sub.subNote}</p>
                  <button type="buton" onClick={() => deleteNote(sub.id)}>
                    <TiDelete className={style.icon} />
                  </button>
                </li>
              ))}
          </ul>
        </>
      ) : (
        <button
          className={style.button}
          type="button"
          onClick={() => setAddSubList(true)}
        >
          AddSublist
        </button>
      )}
    </>
  );
};

export default SubList;

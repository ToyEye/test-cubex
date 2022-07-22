import React, { useState, useEffect } from "react";
import style from "./List.module.css";
import SubList from "../SubNotes/SubNotes";
import AddForm from "../Form/Form";
import { TiDelete, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { moveDown, moveUp, deleteNote } from "../helpers";

const List = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const saveNotes = JSON.parse(localStorage.getItem("notes"));
    if (saveNotes) {
      setNotes(saveNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <AddForm onSubmit={setNotes} />
      <ul className={style.list}>
        {notes &&
          notes.map((someNotes) => (
            <li key={someNotes.id} className={style.item}>
              <div className={style.buttonContainer}>
                <div>
                  <button
                    type="button"
                    className={style.button}
                    onClick={() => moveUp(someNotes, notes, setNotes)}
                  >
                    <TiArrowSortedUp />
                  </button>

                  <button
                    type="button"
                    className={style.button}
                    onClick={() => moveDown(someNotes, notes, setNotes)}
                  >
                    <TiArrowSortedDown />
                  </button>
                </div>
                <button
                  type="buton"
                  onClick={() => deleteNote(someNotes.id, notes, setNotes)}
                >
                  <TiDelete className={style.icon} />
                </button>
              </div>

              <p className={style.p}>{someNotes.note}</p>

              <SubList />
            </li>
          ))}
      </ul>
    </>
  );
};

export default List;

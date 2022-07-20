import React, { useState } from "react";
import style from "./SubNotes.module.css";
import AddForm from "../Form/Form";
import { TiDelete, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { moveDown, moveUp, deleteNote } from "../helpers";

const SubList = () => {
  const [subNotes, setSubNotes] = useState([]);
  const [addSubList, setAddSubList] = useState(false);

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
          <AddForm onSubmit={setSubNotes} />

          <ul>
            {subNotes &&
              subNotes.map((sub) => (
                <li key={sub.id} className={style.item}>
                  <div>
                    <button
                      type="button"
                      className={style.button}
                      onClick={() => moveUp(sub, subNotes, setSubNotes)}
                    >
                      <TiArrowSortedUp />
                    </button>
                    <button
                      type="button"
                      className={style.button}
                      onClick={() => moveDown(sub, subNotes, setSubNotes)}
                    >
                      <TiArrowSortedDown />
                    </button>
                  </div>

                  <p>{sub.note}</p>
                  <button
                    type="buton"
                    onClick={() => deleteNote(sub.id, subNotes, setSubNotes)}
                  >
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

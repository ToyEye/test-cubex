import React from "react";
import style from "./List.module.css";
import SubList from "../SubNotes/SubNotes";

import { TiDelete, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { moveDown, moveUp } from "../helpers";

const List = ({ notes, onDelete }) => {
  return (
    <>
      <ul className={style.list}>
        {notes.length > 0 &&
          notes.map((someNotes) => (
            <li key={someNotes.id} className={style.item}>
              <div className={style.buttonContainer}>
                <div>
                  <button
                    type="button"
                    className={style.button}
                    onClick={() => moveUp(someNotes, notes)}
                  >
                    <TiArrowSortedUp />
                  </button>

                  <button
                    type="button"
                    className={style.button}
                    onClick={() => moveDown(someNotes, notes)}
                  >
                    <TiArrowSortedDown />
                  </button>
                </div>
                <button type="buton" onClick={() => onDelete(someNotes.id)}>
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

import React from "react";
import style from "./List.module.css";
import SubList from "../SubNotes/SubNotes";

import { TiDelete, TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import { moveDown, moveUp } from "../helpers";

const List = ({ notes, onDelete }) => {
  return (
    <>
      <ul className={style.list}>
        {notes &&
          notes.map(({ note, id }) => (
            <li key={id} className={style.item}>
              <button type="buton" onClick={() => onDelete(id)}>
                <TiDelete className={style.icon} />
              </button>
              <p className={style.p}>{note}</p>

              <SubList />
            </li>
          ))}
      </ul>
    </>
  );
};

export default List;

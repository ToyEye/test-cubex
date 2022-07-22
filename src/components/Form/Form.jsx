import React, { useState } from "react";
import style from "./Form.module.css";
import toast from "react-hot-toast";
import { addNote } from "../helpers";

const AddForm = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const onChangeHandle = (evt) => {
    setValue(evt.target.value);
  };

  const onSubmitHandle = (evt) => {
    evt.preventDefault();
    if (value === "") {
      toast.error("Enter note");
      return;
    }
    addNote(value, onSubmit);
    setValue("");
  };

  return (
    <>
      <form onSubmit={onSubmitHandle}>
        <label>
          <input
            className={style.input}
            placeholder="enter note"
            value={value}
            onChange={onChangeHandle}
          />
        </label>
        <button type="submit" className={style.button}>
          add note
        </button>
      </form>
    </>
  );
};

export default AddForm;

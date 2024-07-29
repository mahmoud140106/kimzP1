import React, { useRef, useState } from "react";
import styles from "./Filter.module.css";
import Button from "../Layout/Button";
const Filter = ({ filteration }) => {
  const inputEl = useRef(null);
  const [filter, setFilter] = useState("");
  const filterHandler = (e) => {
    setFilter(e.target.value);
    filteration(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "10px",
        gap: "10px",
      }}
    >
      <Button className="btn" onClick={() => inputEl.current.focus()} >
        focus
      </Button>
      <input
        className={styles.filter}
        type="text"
        placeholder="Filter By Name"
        ref={inputEl}
        onChange={filterHandler}
        value={filter}
      />
    </div>
  );
};

export default Filter;

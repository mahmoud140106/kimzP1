import React, { useState } from "react";
import Form from "../Layout/Form";
import Button from "../Layout/Button";
import styles from "../Modal/Modal.module.css";
import { type } from "@testing-library/user-event/dist/type";

const AddUser = ({ addNewUser, closeModal }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    address: "",
    phone: "",
    type: "",
  });
  const inputHandler = (e) => {
    const key = e.target.id;
    const value = e.target.value;
    setInput((prevState) => {
      return { ...prevState, [key]: value };
    });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    addNewUser({
      id: Math.round(Math.random() * 100),
      name: input.name,
      age: input.age,
      address: input.address,
      phone: input.phone,
      type: input.type,
    });
    setInput({
      name: "",
      age: "",
      address: "",
      phone: "",
      type: "",
    });
    closeModal();
  };
  return (
    <>
      <Form onSubmit={onSubmitHandler}>
        <Form.Controller className={styles.control}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter Name"
            value={input.name}
            onChange={inputHandler}
          />
        </Form.Controller>
        <Form.Controller className={styles.control}>
          <label htmlFor="age">Age</label>
          <input
            type="text"
            id="age"
            placeholder="Enter Age"
            value={input.age}
            onChange={inputHandler}
          />
        </Form.Controller>
        <Form.Controller className={styles.control}>
          <label htmlFor="address">Address</label>
          <input
            type="text"
            id="address"
            placeholder="Enter Address"
            value={input.address}
            onChange={inputHandler}
          />
        </Form.Controller>
        <Form.Controller className={styles.control}>
          <label htmlFor="phone">Phone</label>
          <input
            type="text"
            id="phone"
            placeholder="Enter Phone"
            value={input.phone}
            onChange={inputHandler}
          />
        </Form.Controller>
        <Form.Controller className={styles.control}>
          <label htmlFor="type">Type</label>
          <input
            type="text"
            id="type"
            placeholder="Enter Type"
            value={input.type}
            onChange={inputHandler}
          />
        </Form.Controller>
        <div style={{ marginTop: "20px" }}>
          <Button type="submit" style={{ marginRight: "20px" }}>
            save
          </Button>
          <Button type="reset">reset</Button>
        </div>
      </Form>
    </>
  );
};

export default AddUser;

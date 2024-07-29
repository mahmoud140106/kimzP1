import "./App.css";
import React, { useEffect, useState } from "react";
import Filter from "./components/Filter/Filter";
import CardList from "./components/CardList/CardList";
import Modal from "./components/Modal/Modal";
import AddUser from "./components/AddUser/AddUser";
function App() {
  const [state, setState] = useState([
    {
      id: 1000,
      name: "mahmoud",
      type: "boy",
      age: 22,
      address: "tanta",
      phone: "01023199265",
    },
    {
      id: 2000,
      name: "marwa",
      type: "girl",
      age: 22,
      address: "elsanta",
      phone: "01023880265",
    },
    {
      id: 4000,
      name: "mahmoud",
      type: "boy",
      age: 22,
      address: "tanta",
      phone: "01023140265",
    },
    {
      id: 3000,
      name: "rawan",
      type: "girl",
      age: 22,
      address: "october",
      phone: "01023440265",
    },
    {
      id: 5000,
      name: "laila",
      type: "girl",
      age: 22,
      address: "heart",
      phone: "01023145565",
    },
  ]);
  const [cardToggle, setCardToggle] = useState(true);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  const addNewUserHandler = (data) => {
    setState((prevState) => [...prevState, data]);
  };
  
  useEffect(() => {
  }, [state]);

  const deleteHandler = (e, selectedId) => {
    setState((prevState) => {
      return prevState.filter((el) => el.id !== selectedId);
    });
  };
  const toggleHandler = () => {
    setCardToggle(!cardToggle);
  };

  const filterNames = (name) => {
    setFilter(name);
  };
  const namesHandler = () => {
    if (filter.length !== 0) {
      return state.filter((el) => el.name.includes(filter));
    }
    return state;
  };
  return (
    <div className="mainContainer">
      <Modal show={showModal} closeModal={() => setShowModal(false)}>
        <AddUser
          addNewUser={addNewUserHandler}
          closeModal={() => setShowModal(false)}
        />
      </Modal>
      <h1>List of Data</h1>
      <div style={{ marginBottom: "10px", display: "flex" }}>
        <button
          className="btn"
          onClick={toggleHandler}
          style={{ marginRight: "10px" }}
        >
          {cardToggle ? "Hide Names" : "Show Names"}
        </button>
        <button className="btn" onClick={() => setShowModal(true)}>
          New Record
        </button>
      </div>
      <div className={cardToggle ? "show" : "hide"}>
        <Filter filteration={filterNames} />
        {/* <Card namesList={namesHandler()} deleteFunc={deleteHandler} /> */}
        <CardList namesList={namesHandler()} deleteFunc={deleteHandler} />
      </div>
    </div>
  );
}

export default App;

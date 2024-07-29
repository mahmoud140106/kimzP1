import styles from "./Card.module.css";
const Card = ({id,name,age,address,phone,type, deleteFunc }) => {
  return (
      <div
        className={styles.cardWrapper}
        style={{ backgroundColor: type === "girl" ? "#DF679F" : "#4caf50" }}
      >
        <div>Name: {name}</div>
        <div>Age: {age}</div>
        <div>Address: {address}</div>
        <div>Phone: {phone}</div>
        <div className={styles.deleteBtn} onClick={(e) => deleteFunc(e, id)}>
          x
        </div>
      </div>
  );
};
export default Card;

import React, { useContext } from "react";
import { Context } from "../context";
import styles from "./Client.css";

export default function Client({
  clientId,
  clientName,
  clientSurname,
  clientNumber,
}) {
  //const { toggleTodo, removeTodo } = useContext(Context);
  const { removeClient } = useContext(Context);
  //const cls = ["todo"];
  // if (completed) {
  //   cls.push("completed");
  // }
  return (
    <div className={styles.client}>
      <div className={styles.clientInfo}>
        <div className={styles.clientCircle}>
          <div className={styles.clientInitials}>
            {clientName.slice(0, 1).toUpperCase()}
            {clientSurname.slice(0, 1).toUpperCase()}
          </div>
        </div>
        <div className={styles.clientName}>
          {clientName} {clientSurname}
        </div>
        <div className={styles.clientNumber}>{clientNumber}</div>
        <button
          type="button"
          className={styles.buttons}
          onClick={() => removeClient(clientId)}
        >
          {" "}
          Delete
        </button>
      </div>
    </div>
  );
}

import React, { useContext } from "react";
import { Context } from "./context";

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
    <li className="clientBox">
      {clientId} {clientName} {clientSurname} {clientNumber}
      <button type="button" onClick={() => removeClient(clientId)}>
        {" "}
        Delete
      </button>
    </li>
  );
}

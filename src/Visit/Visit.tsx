import React, { useContext } from "react";
import { Context } from "../context";

export default function Visit({
  clientId,
  clientName,
  clientSurname,
  clientNumber,
  vtime,
  section,
  teacher,
}) {
  const { removeVisit } = useContext(Context);

  return (
    <li>
      {clientName} {clientSurname} {clientNumber} {vtime} {section} {teacher}
      <button type="button" onClick={() => removeVisit(clientId)}>
        Remove Visit
      </button>
      <button type="button">Edit (not working)</button>
    </li>
  );
}

import React, { useContext } from "react";
import { Context } from "../context";

import styles from "./Visit.css";
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
    <div className={styles.visitblock}>
      <div className={styles.circle}>
        {clientName.slice(0, 1)}
        {clientSurname.slice(0, 1)}
      </div>
      <div className={styles.nametime}>
        <p className={styles.namename}>
          {clientName} {clientSurname}
        </p>{" "}
        <p className={styles.time}>{vtime}</p>
      </div>
      <div className={styles.number}>{clientNumber}</div>
      <div className={styles.buttons}>
        <div className={styles.teachersection}>
          {section} <p className={styles.teachern}>{teacher}</p>
        </div>
        <p className={styles.buttonsthing}>
          <button type="button" className={styles.buttonsitself}>
            Edit
          </button>
          <button
            type="button"
            className={styles.buttonsitself}
            onClick={() => removeVisit(clientId)}
          >
            Remove
          </button>
        </p>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

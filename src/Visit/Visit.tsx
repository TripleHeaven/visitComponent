import React, { useContext } from 'react';
import { Context } from '../context';

import styles from './Visit.css';
import { VisitT } from '../typesTS/VisitT';
export default function Visit(visit: VisitT) {
  const { removeVisit } = useContext(Context);

  return (
    <div className={styles.container}>
      <div className={styles.visitblock}>
        <div className={styles.circleBlock}>
          <div className={styles.circle}>
            {visit.clientName.slice(0, 1)}
            {visit.clientSurname.slice(0, 1)}
          </div>
        </div>
        <div className={styles.nametime}>
          <p className={styles.namename}>
            {visit.clientName} {visit.clientSurname}
          </p>{' '}
          <p className={styles.time}>{visit.vtime}</p>
        </div>
        <div className={styles.number}>{visit.clientNumber}</div>
        <div className={styles.buttons}>
          <div className={styles.teachersection}>
            {visit.section} <p className={styles.teachern}>{visit.teacher}</p>
          </div>
          <p className={styles.buttonsthing}>
            <button
              type="button"
              className={styles.buttonsitself}
              onClick={() => removeVisit(visit.clientId)}
            >
              Delete
            </button>

            <button type="button" className={styles.buttonsitself}>
              &nbsp;Edit
            </button>
          </p>
        </div>
      </div>
      <div className={styles.line}></div>
    </div>
  );
}

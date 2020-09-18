import React, { useContext, useState } from 'react';
import { Context } from '../context';

import styles from './Visit.scss';
import { VisitT } from '../typesTS/VisitT';
import { EventT } from '../typesTS/EventT';
export default function Visit(visit: VisitT) {
  const { removeVisit, editVisit } = useContext(Context);

  let editVisibility = false;
  const [visible, setVisible] = useState({
    vis: true,
    visibilityE: styles.editHidden,
    visibilityD: styles.visitblock
  });
  const toggleVisibility = () => {
    editVisibility = !editVisibility;
    setVisible({
      vis: !visible.vis,
      visibilityE: visible.vis ? styles.editMode : styles.editHidden,
      visibilityD: visible.vis ? styles.visithidden : styles.visitblock
    });
  };

  return (
    <div className={styles.container}>
      <div className={visible.visibilityD}>
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
          <p className={styles.time}>
            {visit.vtime.getHours() + ':' + visit.vtime.getMinutes()}
          </p>
        </div>
        <div className={styles.number}>{visit.clientNumber}</div>
        <div className={styles.buttons}>
          <div className={styles.teachersection}>
            {visit.eventChosen.name}{' '}
            <p className={styles.teachern}>{visit.eventChosen.trainerName}</p>
          </div>
          <p className={styles.buttonsthing}>
            <button
              type="button"
              className={styles.buttonsitself}
              onClick={() => removeVisit(visit.visitId)}
            >
              Delete
            </button>

            <button
              type="button"
              className={styles.buttonsitself}
              onClick={() => toggleVisibility()}
            >
              &nbsp;Edit
            </button>
          </p>
        </div>
      </div>

      <div className={visible.visibilityE}>
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
          <p className={styles.time}>
            {visit.vtime.getHours() + ':' + visit.vtime.getMinutes()}
          </p>
        </div>
        <div className={styles.number}>{visit.clientNumber}</div>
        <div className={styles.buttons}>
          <div className={styles.teachersection}>
            <p className={styles.editlabel}>Edit&nbsp;</p>
            {visit.eventChosen.name}{' '}
            <p className={styles.teachern}>{visit.eventChosen.trainerName}</p>
          </div>
          <p className={styles.buttonsthing}>
            <button
              type="button"
              className={styles.buttonsitself}
              onClick={() => removeVisit(visit.visitId)}
            >
              Delete
            </button>

            <button
              type="button"
              className={styles.buttonsitself}
              onClick={() => toggleVisibility()}
            >
              &nbsp;Edit
            </button>
          </p>
        </div>
        <div className={styles.editNode}>
          <div className={styles.editMain}>
            Edit workout:
            <div className={styles.buttonsSection}>
              {visit.possibleEvents.map(item => (
                <button
                  key={item.eventId}
                  onClick={event =>
                    editVisit(visit.visitId, item.eventId, visit.uniqueId)
                  }
                >
                  {item.name}
                </button>
              ))}{' '}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.line}></div>
    </div>
  );
}

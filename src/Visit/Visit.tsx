import React, { useContext, useState } from 'react';
import { Context } from '../context';
import styles from './Visit.scss';
import { VisitT } from '../typesTS/VisitT';
export default function Visit(visit: VisitT) {
  const { removeVisit, editVisit, editVisitCreate } = useContext(Context);
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
  const toDisplayTime = (timeValue: string): string => {
    if (timeValue.length < 2) {
      return '0' + timeValue;
    } else {
      return timeValue;
    }
  };
  if (visit.createMode === true) {
    return (
      <div className={styles.containerC}>
        <div className={styles.createMode}>
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
              {toDisplayTime(visit.vtime.getHours().toString()) +
                ':' +
                toDisplayTime(visit.vtime.getMinutes().toString())}
            </p>
          </div>
          <div className={styles.number}>{visit.clientNumber}</div>
          <div className={styles.buttons}>
            <div className={styles.teachersection}>
              <p className={styles.createlabel}>Add new workout&nbsp;</p>
            </div>
            <div className={styles.buttonsthingC}>
              <button
                type="button"
                className={styles.buttonsitself}
                onClick={() => removeVisit(visit.visitId)}
              >
                Cancel
              </button>

              <button
                type="button"
                className={styles.buttonsitself}
                onClick={() => toggleVisibility()}
              ></button>
            </div>
          </div>
          <div className={styles.editNode}>
            <div className={styles.editWorkoutLabel}>Choose new workout</div>
            {visit.possibleEvents.map(item => (
              <button
                key={item.eventId}
                onClick={() => editVisitCreate(visit.visitId, item.eventId)}
              >
                {item.name}
              </button>
            ))}{' '}
          </div>
        </div>
      </div>
    );
  } else {
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
              {toDisplayTime(visit.vtime.getHours().toString()) +
                ':' +
                toDisplayTime(visit.vtime.getMinutes().toString())}
            </p>
          </div>
          <div className={styles.number}>{visit.clientNumber}</div>
          <div className={styles.buttons}>
            <div className={styles.teachersection}>
              {visit.eventChosen.name}{' '}
              <p className={styles.teachern}>{visit.eventChosen.trainerName}</p>
            </div>
            <div className={styles.buttonsthing}>
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
            </div>
          </div>
        </div>
        <div className={styles.containerE}>
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
                {toDisplayTime(visit.vtime.getHours().toString()) +
                  ':' +
                  toDisplayTime(visit.vtime.getMinutes().toString())}
              </p>
            </div>
            <div className={styles.number}>{visit.clientNumber}</div>
            <div className={styles.buttons}>
              <div className={styles.teachersection}>
                <p className={styles.editlabel}>Edit&nbsp;</p>
                {visit.eventChosen.name}{' '}
                <p className={styles.teachern}>
                  {visit.eventChosen.trainerName}
                </p>
              </div>
              <div className={styles.buttonsthing}>
                <p className={styles.buttonED}>
                  <button
                    type="button"
                    className={styles.buttonsitself}
                    onClick={() => removeVisit(visit.visitId)}
                  >
                    Delete
                  </button>
                </p>
                <button
                  type="button"
                  className={styles.buttonsitself}
                  onClick={() => toggleVisibility()}
                >
                  Edit
                </button>
              </div>
            </div>
            <div className={styles.editNode}>
              <div className={styles.editWorkoutLabel}>Edit workout:</div>
              {visit.possibleEvents.map(item => (
                <button
                  key={item.eventId}
                  className={styles.chooseButton}
                  onClick={() =>
                    editVisit(visit.visitId, item.eventId, toggleVisibility())
                  }
                >
                  {item.name}
                </button>
              ))}{' '}
            </div>
          </div>
        </div>
        <div className={styles.line}></div>
      </div>
    );
  }
}

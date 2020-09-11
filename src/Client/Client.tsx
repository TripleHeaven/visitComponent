import React, { useContext } from 'react';
import { Context } from '../context';
import styles from './Client.css';
import { ClientT } from '../typesTS/ClientT';

export default function Client(Clientt: ClientT) {
  const { removeClient } = useContext(Context);
  return (
    <div className={styles.client}>
      <div className={styles.clientCircle}>
        <div className={styles.clientInitials}>
          {Clientt.clientName.slice(0, 1).toUpperCase()}
          {Clientt.clientSurname.slice(0, 1).toUpperCase()}
        </div>
      </div>
      <div className={styles.clientName}>
        {Clientt.clientName} {Clientt.clientSurname}
      </div>
      <div className={styles.clientNumber}>{Clientt.clientNumber}</div>
      <button
        type="button"
        className={styles.buttons}
        onClick={() => removeClient(Clientt.clientId)}
      >
        {' '}
        Delete
      </button>
      <div className={styles.line}></div>
    </div>
  );
}

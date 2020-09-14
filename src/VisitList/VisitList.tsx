import React, { useState } from 'react';
import Visit from '../Visit/Visit';
import styles from './VisitList.css';
import { VisitT } from '../typesTS/VisitT';

// here we disable console and performance for better production experience
// console.log(process.env.NODE_ENV);
// if (!process || !process.env || process.env.NODE_ENV !== "development") {
//   performance.mark = () => undefined as any;
//   performance.measure = () => undefined as any;
//   console.log = () => undefined as any;
// }

// main window
// client

export default function VisitList({ visits }: { visits: VisitT[] }) {
  function sortByDate() {
    visits.sort((a, b) => {
      return a.vtime - b.vtime;
    });
  }
  sortByDate();

  return (
    <div className={styles.visitcontainer}>
      {visits.map(item => (
        <Visit key={item.clientId} {...item} />
      ))}
      <div className={styles.nomo}>List end. No more visits</div>
    </div>
  );
}

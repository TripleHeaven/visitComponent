import React, { useState } from 'react';
import Visit from '../Visit/Visit';
import styles from './VisitList.css';
import { VisitT } from '../typesTS/VisitT';
import { isArrayBindingPattern } from 'typescript';

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
  let visitDates = new Array<string>();
  sortByDate();
  // getting all possible date days
  for (let i = 0; i < visits.length; i++) {
    const date =
      String(visits[i].vtime.getDate()) + String(visits[i].vtime.getMonth());
    visitDates.push(date);
  }
  visitDates = visitDates.filter((item, index) => {
    return visitDates.indexOf(item) === index;
  });

  console.log(visitDates);
  return (
    <div className={styles.visitcontainer}>
      {visits.map(item => (
        <Visit key={item.clientId} {...item} />
      ))}
      <div className={styles.nomo}>List end. No more visits</div>
    </div>
  );
}

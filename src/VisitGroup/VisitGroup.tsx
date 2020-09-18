import React from 'react';
import Visit from '../Visit/Visit';
import styles from './VisitGroup.css';
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

export default function VisitGroup({ vl }: { vl: VisitT[] }) {
  const monthNames: Array<string> = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  return (
    <div>
      <div className={styles.dcontainer}>
        <div className={styles.dayandmonth}>
          <span className={styles.boldt}>{vl[0].vtime.getDate()} </span>{' '}
          {monthNames[vl[0].vtime.getMonth()]}
        </div>
      </div>
      {vl.map((item, index) => (
        <Visit key={index} {...item} />
      ))}
    </div>
  );
}

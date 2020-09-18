import React from 'react';
import styles from './VisitList.css';
import { VisitT } from '../typesTS/VisitT';
import VisitGroup from '../VisitGroup/VisitGroup';

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
      return Number(a.vtime) - Number(b.vtime);
    });
  }
  let visitDates = new Array<string>();
  sortByDate();
  // getting all possible date days
  for (let i = 0; i < visits.length; i++) {
    const date =
      String(visits[i].vtime.getDate()) +
      ' ' +
      String(visits[i].vtime.getMonth());
    visitDates.push(date);
  }
  visitDates = visitDates.filter((item, index) => {
    return visitDates.indexOf(item) === index;
  });
  const sameDayVisits = Array<Array<VisitT>>();
  for (let i = 0; i < visitDates.length; i++) {
    sameDayVisits.push([]);
    for (let j = 0; j < visits.length; j++) {
      const dateforCheck =
        String(visits[j].vtime.getDate()) +
        ' ' +
        String(visits[j].vtime.getMonth());
      if (visitDates[i] === dateforCheck) {
        sameDayVisits[i].push(visits[j]);
      }
    }
  }
  // console.log(visitDates);
  // console.log(sameDayVisits);
  console.log(' =================== ');
  sameDayVisits.forEach(vla => console.log(vla));

  return (
    <div className={styles.visitcontainer}>
      {sameDayVisits.map((vla, index) => (
        <VisitGroup vl={vla} key={index} />
      ))}
      {/* {visits.map(item => (
        <Visit key={item.clientId} {...item} />
      ))} */}
      <div className={styles.nomo}>List end. No more visits</div>
    </div>
  );
}

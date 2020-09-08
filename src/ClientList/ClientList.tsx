import React from "react";
import Client from "../Client/Client";

import styles from "./ClientList.css";
// here we disable console and performance for better production experience
// console.log(process.env.NODE_ENV);
// if (!process || !process.env || process.env.NODE_ENV !== "development") {
//   performance.mark = () => undefined as any;
//   performance.measure = () => undefined as any;
//   console.log = () => undefined as any;
// }

// main window
// client

export default function ClientList({ clients }) {
  return (
    <div className={styles.clientcontainer}>
      {clients.map((item) => (
        <Client key={item.clientId} {...item} />
      ))}
    </div>
  );
}

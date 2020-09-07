import "./index.scss";

import React, { useState } from "react";
import { render } from "react-dom";

import { register } from "./serviceWorker";
import ClientList from "./clientList";

import VisitList from "./visitList";

import { Context } from "./context";

// here we disable console and performance for better production experience
// console.log(process.env.NODE_ENV);
// if (!process || !process.env || process.env.NODE_ENV !== "development") {
//   performance.mark = () => undefined as any;
//   performance.measure = () => undefined as any;
//   console.log = () => undefined as any;
// }

// main window
// client

export default function App() {
  const sections = ["Box", "Fitness", "Jeff", "Jab"];
  const teachers = ["Jeff Click", "Matt Daimond", "Lev Balaguroff"];
  const removeClient = (clientId) => {
    setClient(
      clients.filter((client) => {
        return client.clientId !== clientId;
      })
    );
  };
  const removeVisit = (clientId) =>
    setVisit(
      visits.filter((visit) => {
        return visit.clientId !== clientId;
      })
    );
  const [clients, setClient] = useState([
    {
      clientId: Date.now(),
      clientName: "Sarah",
      clientSurname: "Connor",
      clientNumber: "+1234566",
    },
  ]);
  const [visits, setVisit] = useState([]);
  // const [visits, setVisit] = useState([
  //   {
  //     clientName: clients[1].clientName,
  //     clientSurname: clients[0].clientSurname,
  //     clientNumber: clients[0].clientNumber,
  //     vtime: Date.now(),
  //     section: "Box",
  //     teacher: "Tyson",
  //   },
  // ]);
  function randomDate(startHour, endHour) {
    const hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    return hour;
  }

  const addRandomVisit = (event) => {
    const radnomIndexCl = Math.floor(Math.random() * clients.length);
    const radnomIndexTeacher = Math.floor(Math.random() * teachers.length);
    const randomIndexSections = Math.floor(Math.random() * sections.length);
    setVisit([
      ...visits,
      {
        clientId: Date.now(),
        clientName: clients[radnomIndexCl].clientName,
        clientSurname: clients[radnomIndexCl].clientSurname,
        clientNumber: clients[radnomIndexCl].clientNumber,
        vtime: randomDate(12, 18),
        section: sections[randomIndexSections],
        teacher: teachers[radnomIndexTeacher],
      },
    ]);
  };
  const [clientNamec, setClientName] = useState("");
  const [clientSurnamec, setClientSurname] = useState("");
  const [clientNumberc, setClientNumber] = useState("");
  const addClient = (event) => {
    setClient([
      ...clients,
      {
        clientId: Date.now(),
        clientName: clientNamec,
        clientSurname: clientSurnamec,
        clientNumber: clientNumberc,
      },
    ]);
    setClientName("");
    setClientSurname("");
    setClientNumber("");
  };
  // Add client thing
  return (
    <Context.Provider value={{ removeClient, removeVisit }}>
      <div styleName="g">
        <div styleName="addclientWindow">
          <div>
            <label>Name</label>
            <input
              type="text"
              value={clientNamec}
              onChange={(event) => setClientName(event.target.value)}
            ></input>
            <label>Surname</label>
            <input
              type="text"
              value={clientSurnamec}
              onChange={(event) => setClientSurname(event.target.value)}
            ></input>
            <label>Number</label>
            <input
              type="text"
              value={clientNumberc}
              onChange={(event) => setClientNumber(event.target.value)}
            ></input>
          </div>
          <button type="button" onClick={addClient}>
            Add a client
          </button>

          <div styleName="clients">
            <ClientList clients={clients} />
          </div>
        </div>
        <div className="secons">
          <button type="button" onClick={addRandomVisit}>
            Add Random Visit
          </button>
        </div>
        <div className="visits">
          <VisitList visits={visits} />
        </div>
      </div>
    </Context.Provider>
  );
}

render(<App />, document.getElementById("root"));

register();

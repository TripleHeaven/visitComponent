import './index.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { register } from './serviceWorker';
import ClientList from './ClientList/ClientList';
import VisitList from './VisitList/VisitList';
import { Context } from './context';
import { ClientT } from './typesTS/ClientT';
import { VisitT } from './typesTS/VisitT';
import styles from './index.css';

// here we disable console and performance for better production experience
// console.log(process.env.NODE_ENV);
// if (!process || !process.env || process.env.NODE_ENV !== "development") {
//   performance.mark = () => undefined as any;
//   performance.measure = () => undefined as any;
//   console.log = () => undefined as any;
// }

export default function App() {
  const sections = ['Box', 'Fitness', 'Jeff', 'Jab'];
  const teachers = ['Jeff Click', 'Matt Daimond', 'Lev Balaguroff'];
  const removeClient = (clientId: number) => {
    setClient(
      clients.filter(client => {
        return client.clientId !== clientId;
      })
    );
  };
  const removeVisit = (clientId: number) =>
    setVisit(
      visits.filter((visit: VisitT) => {
        return visit.clientId !== clientId;
      })
    );

  const [clients, setClient] = useState<ClientT[]>([
    {
      clientId: Date.now(),
      clientName: 'Sarah',
      clientSurname: 'Connor',
      clientNumber: '+1234566'
    }
  ]);
  const [visits, setVisit] = useState<VisitT[]>([]);
  function randomDate(startHour: number, endHour: number): string {
    const hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    return hour.toString();
  }

  const addRandomVisit = () => {
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
        vtime: randomDate(12, 18) + ':' + randomDate(12, 18),
        section: sections[randomIndexSections],
        teacher: teachers[radnomIndexTeacher]
      }
    ]);
  };
  const [clientNamec, setClientName] = useState('');
  const [clientSurnamec, setClientSurname] = useState('');
  const [clientNumberc, setClientNumber] = useState('');
  const addClient = () => {
    setClient([
      ...clients,
      {
        clientId: Date.now(),
        clientName: clientNamec,
        clientSurname: clientSurnamec,
        clientNumber: clientNumberc
      }
    ]);
    setClientName('');
    setClientSurname('');
    setClientNumber('');
  };
  // Add client thing
  return (
    <Context.Provider
      value={{
        removeClient,
        removeVisit
      }}
    >
      <div>
        <div className={styles.addclientContainer}>
          <div className={styles.addclientInfo}>
            <div className={styles.addName}>
              <label>Name</label>
              <input
                type="text"
                value={clientNamec}
                onChange={event => setClientName(event.target.value)}
              ></input>
            </div>
            <div className={styles.addSurname}>
              <label>Surname</label>
              <input
                type="text"
                value={clientSurnamec}
                onChange={event => setClientSurname(event.target.value)}
              ></input>
            </div>
            <div className={styles.addNumber}>
              <label>Number</label>
              <input
                type="text"
                value={clientNumberc}
                onChange={event => setClientNumber(event.target.value)}
              ></input>
            </div>
            <div className={styles.addButton}>
              <button type="button" onClick={addRandomVisit}>
                Add Random Visit
              </button>
              <button type="button" onClick={addClient}>
                Add a client
              </button>
            </div>
          </div>
          <div>
            <ClientList clients={clients} />
          </div>
        </div>
        <div className="visits">
          <VisitList visits={visits} />
        </div>
      </div>
    </Context.Provider>
  );
}

render(<App />, document.getElementById('root'));

register();

import './index.css';
import React, { useState } from 'react';
import { render } from 'react-dom';
import { register } from './serviceWorker';
import ClientList from './ClientList/ClientList';
import VisitList from './VisitList/VisitList';
import { Context } from './context';
import { ClientT } from './typesTS/ClientT';
import { VisitT } from './typesTS/VisitT';
import { EventT } from './typesTS/EventT';
import styles from './index.css';
import { getConstantValue } from 'typescript';

// here we disable console and performance for better production experience
// console.log(process.env.NODE_ENV);
// if (!process || !process.env || process.env.NODE_ENV !== "development") {
//   performance.mark = () => undefined as any;
//   performance.measure = () => undefined as any;
//   console.log = () => undefined as any;
// }

export default function App() {
  const removeClient = (clientId: number) => {
    setClient(
      clients.filter(client => {
        return client.clientId !== clientId;
      })
    );
  };
  const removeVisit = (visitId: number) =>
    setVisit(
      visits.filter(visit => {
        return visit.visitId !== visitId;
      })
    );
  const editVisit = (visitId: number, eventId: number, uniqueId: number) => {
    let newVisit;
    for (let i = 0; i < visits.length; i++) {
      if (visitId === visits[i].visitId) {
        //
        newVisit = visits[i];
        newVisit.possibleEvents.filter(function (item) {
          return item.eventId !== eventId;
        });

        newVisit.possibleEvents.push(visits[i].eventChosen);
        for (let j = 0; j < newVisit.possibleEvents.length; j++) {
          if (newVisit.possibleEvents[j].eventId === eventId) {
            newVisit.eventChosen = newVisit.possibleEvents[j];
            const index = j;
            if (index > -1) {
              newVisit.possibleEvents.splice(index, 1);
            }
          }
        }

        setVisit([
          ...visits.filter(item => {
            return item.visitId !== visitId;
          }),
          newVisit
        ]);

        return null;
      }
    }

    return null;
  };
  const [clients, setClient] = useState<ClientT[]>([
    {
      clientId: Date.now(),
      clientName: 'Sarah',
      clientSurname: 'Connor',
      clientNumber: '+1234566'
    },
    {
      clientId: Date.now() + 5,
      clientName: 'Anjela',
      clientSurname: 'Jolly',
      clientNumber: '+7905323562'
    },
    {
      clientId: Date.now() + 6,
      clientName: 'Alex',
      clientSurname: 'Gone',
      clientNumber: '+79053356562'
    },
    {
      clientId: Date.now() + 7,
      clientName: 'Maxim',
      clientSurname: 'Kurnakov',
      clientNumber: '+79053235632'
    },
    {
      clientId: Date.now() + 8,
      clientName: 'Anjela',
      clientSurname: 'Jolly',
      clientNumber: '+7905323562'
    }
  ]);

  const [visits, setVisit] = useState<VisitT[]>([]);
  function randomDate(startHour: number, endHour: number): string {
    const hour = (startHour + Math.random() * (endHour - startHour)) | 0;
    return hour.toString();
  }
  const events = [
    {
      eventId: Date.now() + getRandomInt(15, 12000),
      name: 'Box',
      trainerName: 'Lev Balaguroff'
    },
    {
      eventId: Date.now() - getRandomInt(40, 1000),
      name: 'Fitness',
      trainerName: 'Lev Tolstoy'
    },
    {
      eventId: Date.now() + getRandomInt(15, 1000),
      name: 'Jab',
      trainerName: 'Alex DarkStalker'
    },
    {
      eventId: Date.now() - getRandomInt(10, -15),
      name: 'Football',
      trainerName: 'Ivan Akinfeev'
    },
    {
      eventId: Date.now() - getRandomInt(15, 30),
      name: 'Basketball',
      trainerName: 'Michael Jordan'
    }
  ];
  const addRandomVisit = () => {
    const radnomIndexCl = Math.floor(Math.random() * clients.length);

    setVisit([
      ...visits,
      {
        uniqueId: getRandomInt(10, 5000),
        visitId: Date.now() + getRandomInt(-100, 100),
        clientId: Date.now(),
        clientName: clients[radnomIndexCl].clientName,
        clientSurname: clients[radnomIndexCl].clientSurname,
        clientNumber: clients[radnomIndexCl].clientNumber,
        vtime: new Date(
          2020,
          3,
          15 + getRandomInt(1, 10),
          2,
          3 + getRandomInt(1, 50)
        ),
        eventChosen: events[events.length - 1],
        possibleEvents: events.slice(0, events.length - 1)
      }
    ]);
  };
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function sortingDate(visit1: VisitT, visit2: VisitT) {
    const dateA = new Date(visit1.vtime.getTime());
    const dateB = new Date(visit2.vtime.getTime());
    return Number(dateA) - Number(dateB);
  }
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
        removeVisit,
        editVisit
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
        <button type="button">Sort</button>
      </div>
    </Context.Provider>
  );
}

render(<App />, document.getElementById('root'));

register();

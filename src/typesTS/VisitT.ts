import { EventT } from './EventT';

export interface VisitT {
  uniqueId: number;
  visitId: number;
  clientId: number;

  clientName: string;
  clientSurname: string;
  clientNumber: string;
  vtime: Date;
  eventChosen: EventT;
  possibleEvents: EventT[];
}

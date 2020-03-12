import  GuestBookEntry  from "./GuestBookEntry";
import { Action } from 'easy-peasy';
export default interface GuestBookModel {
    entries: GuestBookEntry[],
    addEntry: Action<GuestBookModel, GuestBookEntry>;
}
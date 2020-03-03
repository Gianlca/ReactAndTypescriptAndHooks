import {createStore} from 'easy-peasy';
import GuestBookStore from '../interfaces/GuestBookStore';
import GuestBook from './GuestBook';

const store: GuestBookStore = {
    guestbook: GuestBook
}

export default createStore<GuestBookStore>(store);
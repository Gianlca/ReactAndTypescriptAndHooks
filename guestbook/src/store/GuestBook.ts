import GuestBookModel from '../interfaces/GuestBookModel';
import { action } from 'easy-peasy';

const GuestBook: GuestBookModel =  {
    entries: [{
        name:"Gianluca",
        content: "It's raining day",
        submitted: new Date()
    }],
    addEntry: action((state, entry) => {
        entry.submitted = new Date();
        state.entries.unshift(entry);
    })
};

export default GuestBook
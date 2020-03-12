import React from 'react';
import {useStoreState} from '../../hooks';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import Typography from '@material-ui/core/Typography';

import useStyles from './styles';
import GuestBookEntriesForm from '../GuestBookEntriesForm';

const Home: React.FC = () => {
    const classes = useStyles();
    const entries = useStoreState((state) => state.guestbook.entries);
    return (
        <div>
          <GuestBookEntriesForm/>
            {entries.map((entry, i) => (
            <Card className={classes.root} key={`id_${i}`}>
              <CardContent>
                <Typography variant="h2">
                  {entry.name}
                </Typography>
                <Typography variant="body1">
                  {entry.content}
                </Typography>    
                <small>{entry.submitted ? entry.submitted.toLocaleDateString() : null}</small>            
              </CardContent>
            </Card>
            ))
        }
        </div>        
    )
}

export default Home;
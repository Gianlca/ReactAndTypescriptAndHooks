import React from 'react';
import {useStoreState} from '../../hooks';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import useStyles from './styles';

const Home: React.FC= () => {
    const classes = useStyles();
    const entries = useStoreState(state => state.guestbook.entries);
    return (
        <div>
            {entries.map((entry) => (
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h2">
                  {entry.name}
                </Typography>
                <Typography variant="body1">
                  {entry.content}
                </Typography>    
                <small>{entry.submitted.toLocaleDateString()}</small>            
              </CardContent>
            </Card>
            ))
        }
        </div>        
    )
}

export default Home;
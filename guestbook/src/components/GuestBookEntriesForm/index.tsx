import React from 'react';
import { useForm } from 'react-hook-form'
import TextField from '@material-ui/core/TextField';
import useStylesForForm from './styles';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import GuestBookEntry from '../../interfaces/GuestBookEntry';
import * as yup from 'yup';
import { useStoreActions } from '../../hooks'; 

const GuestBookSchema = yup.object().shape({
    name: yup.string().trim().required('Required.'),
    content: yup.string().trim().min(10, 'Must be at least 10 characters').max(200, 'Can no be longer than 200 characters').required(),
})

const GuestBookEntriesForm: React.FC = () => {
    const { register, handleSubmit, errors, reset  } = useForm<GuestBookEntry>({
        validationSchema: GuestBookSchema
    });
    const addEntry = useStoreActions(actions => actions.guestbook.addEntry);
    const onSubmit = (data: GuestBookEntry) : void => { 
        console.log(data);
        addEntry(data); 
        reset()
    }

    const classes = useStylesForForm();
    return (
      <form noValidate className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-basic"
          label="Name"
          name="name"
          variant="outlined"
          fullWidth
          inputRef={register}
          error={!!errors.name}
          helperText={errors.name ? errors.name.message : null}
        />
        <TextField
          id="standard-basic"
          multiline
          rows={3}
          label="Content"
          name="content"
          variant="outlined"
          fullWidth
          inputRef={register}
          error={!!errors.name}
          helperText={errors.content ? errors.content.message : null}
        />
        <Box display="flex" justifyContent="flex-end">
          <Button 
          variant="contained" 
          color="primary"
          type="submit" 
          >
            Add Entry
          </Button>
        </Box>
      </form>
    );
}

export default GuestBookEntriesForm;
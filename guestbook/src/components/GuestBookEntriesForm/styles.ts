import { makeStyles } from '@material-ui/core/styles';

const useStylesForForm = makeStyles({
    formContainer: {
        margin: '1rem',
        '& .MuiTextField-root': {
            marginBottom: '.5rem'
        }
    }
});

export default useStylesForForm;
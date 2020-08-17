import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';


const CssTextField = withStyles({
    root: {
        '& label.Mui-focused': {
            color: '#52c8fa',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#52c8fa',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: '#52c8fa',
            },
        },
    },
})(TextField);

export default CssTextField;
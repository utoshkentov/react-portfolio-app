import {makeStyles, withStyles} from '@material-ui/styles';
import React from 'react'

import {
    TextField,
    Typography,
    Button,
    Grid,
    Box
} from '@material-ui/core'
import {
    SendOutlined
} from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    form: {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button: {
        marginTop: '1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }
}))

const InputField = withStyles({
    root: {
        "& label.Mui-focused": {
            color: 'red'
        },
        '& label': {
            color: 'tan'
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'tan'
            },
            '&:hover fieldset': {
                borderColor: 'tan'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'tan'
            }
        }

    }
})(TextField)


const Contact = () => {
    const classes = useStyles()

    return (
        <Box component='div' style={{background: '#233', height: '100vh'}}>
            <Grid container justify='center'>
                <Box component='form' className={classes.form}>
                    <Typography variant='h5' style={{color: 'tomato', textAlign: 'center', textTransform: 'uppercase'}}>
                        Contact me...
                    </Typography>
                    <InputField
                        fullWidth={true}
                        label='Name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{style: { color: 'white' }}}
                    />
                    <br/>
                    <InputField
                        fullWidth={true}
                        label='Email'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{style: { color: 'white' }}}
                    />
                    <br/>
                    <InputField
                        fullWidth={true}
                        label='Company Name'
                        variant='outlined'
                        margin='dense'
                        size='medium'
                        inputProps={{style: { color: 'white' }}}
                    />
                    <br/>
                    <Button 
                     className={classes.button}
                     variant='outlined' 
                     fullWidth={true} 
                     endIcon={<SendOutlined />}
                    >
                        Contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact

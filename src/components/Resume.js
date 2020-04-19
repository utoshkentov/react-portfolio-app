import {makeStyles} from "@material-ui/core/styles";
import {Box, Button, Grid, TextField, Typography} from "@material-ui/core"
import React, {useState} from "react";
import {ListAltOutlined, PhotoCamera} from "@material-ui/icons";
import {MoreVertOutlined, Favorite, ShareOutlined} from '@material-ui/icons'
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";


const useStyles = makeStyles(theme => ({
            list: {
                '& .MuiListItemText-root': {
                    textAlign: 'center'
                }
            },
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
            },
            root: {
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-around',
                overflow: 'hidden',
                backgroundColor: theme.palette.background.paper,
            },
            gridList: {
                width: 500,
                height: 450,
            },
            mainContainer: {
                background: '#233'
            },
            timeLine: {
                position: "relative",
                padding: '1rem',
                margin: '0 auto',
                "&:before": {
                    content: "''",
                    position: 'absolute',
                    height: '100%',
                    border: '1px solid tan',
                    right: '40px',
                    top: 0
                },
                "&:after": {
                    content: "''",
                    display: 'table',
                    clear: "both"
                },
                [theme.breakpoints.up("md")]: {
                    padding: '2rem',
                    "&:before": {
                        left: 'calc(50% -1px)',
                        right: 'auto'
                    }
                }
            },
            timeLineItem: {
                padding: '1rem',
                borderBottom: 'relative',
                position: 'relative',
                margin: '1rem 3rem 1rem 1rem',
                clear: 'both',
                '&:after': {
                    content: "''",
                    position: 'absolute',
                },
                '&:before': {
                    content: "''",
                    position: "absolute",
                    right: '-0.625rem',
                    top: 'calc(50% - 5px)',
                    borderStyle: 'solid',
                    borderColor: 'tomato tomato transparent transparent'
                }
            },
            timeLineYear: {
                textAlign: 'center',
                maxWidth: '9.375rem',
                margin: '0 3rem 0 auto',
                fontSize: '1.8rem',
                background: 'tomato',
                color: 'white',
                lineHeight: 1,
                padding: '0.5rem 0 1rem',
                "&:before": {
                    display: 'none'
                },
                [theme.breakpoints.up("md")]: {
                    textAlign: 'center',
                    margin: '0 auto',
                    "&:nth-of-type(2n)": {
                        float: 'none',
                        margin: '0 auto'
                    },
                    "&:nth-of-type(2n):before": {
                        display: 'none'
                    }
                }
            }
        }
    )
)
// const InputField = withStyles({
//     root: {
//         "& label.Mui-focused": {
//             color: 'red'
//         },
//         '& label': {
//             color: 'tan'
//         },
//         '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//                 borderColor: 'tan'
//             },
//             '&:hover fieldset': {
//                 borderColor: 'tan'
//             },
//             '&.Mui-focused fieldset': {
//                 borderColor: 'tan'
//             }
//         }
//
//     }
// })(TextField)

const Resume = () => {
    const [input, setInput] = useState('');
    const [password, setPassword] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(``);
    const [notes, setNotes] = useState([
        {password: '', username: '', description: '', image: ''},
    ]);

    const classes = useStyles();

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value)
    }

    const handleImageChange = (e) => {
        e.preventDefault();
        setImage(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const handleDescription = (e) => {
        e.preventDefault();
        setDescription(e.target.value)
    }

    const SubmitHandler = (e, notes, setNotes, input, setInput, password, setPassword, description, setDescription, image, setImage) => {
        console.log(image)
        e.preventDefault();
        setNotes([...notes, {username: input, password: password, description: description, image: image}]);
        setInput('');
        setPassword('')
        setDescription('')
        setImage(``)
    }

    return (
        <>
            <Box component='header' className={classes.mainContainer}>
                <Typography variant="h4" align="center">
                    Working experience
                </Typography>
                <Box component='div' className={classes.timeLine}>
                    <Typography className={classes.timeLineYear} variant='h2'>
                        {new Date().getFullYear()}
                    </Typography>
                </Box>
            </Box>
            <Grid container justify='center' style={{background: 'transparent'}} mx='auto'>
                <form style={{background: 'transparent', marginTop: '20px', width: '30vw'}}
                      onSubmit={e => SubmitHandler(e, notes, setNotes, input, setInput, password, setPassword, description, setDescription, image, setImage)}>
                    <Typography variant='h6'
                                style={{color: 'tomato', textAlign: 'center', textTransform: 'uppercase',}}>
                        Todo List
                    </Typography>
                    <TextField
                        onChange={handleChange}
                        value={input}
                        fullWidth={true}
                        label='Name'
                        margin='dense'
                        size='medium'
                        variant='outlined'
                        color='primary'
                        inputProps={{style: {color: 'white'}}}
                    />
                    <TextField
                        onChange={handlePasswordChange}
                        value={password}
                        fullWidth={true}
                        type='password'
                        label='Password'
                        margin='dense'
                        size='medium'
                        variant='outlined'
                        color='secondary'
                        inputProps={{style: {color: 'white'}}}
                    />
                    <TextField
                        onChange={handleDescription}
                        value={description}
                        fullWidth={true}
                        type='text'
                        label='description'
                        margin='dense'
                        size='medium'
                        variant='outlined'
                        color='secondary'
                        inputProps={{style: {color: 'white'}}}
                    />
                    <input accept="image/*" value={image} color='primary' onChange={handleImageChange} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                    <Button
                        className={classes.button}
                        variant='contained'
                        fullWidth={true}
                        startIcon={<ListAltOutlined/>}
                        type='submit'
                    >
                        Add to List
                    </Button>
                </form>
            </Grid>
            <br/>
            <Grid container spacing={2}>
                <Grid xs={12} item>
                    <Grid container justify="center" spacing={2}>
                        {notes.map(note => {
                                return (
                                    <Grid key={note.password} item>
                                        <Card raised>
                                            <CardHeader
                                                avatar={
                                                    <Avatar aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                action={
                                                    <IconButton aria-label="settings">
                                                        <MoreVertOutlined />
                                                    </IconButton>
                                                }
                                                title="Shrimp and Chorizo Paella"
                                                subheader="September 14, 2016"
                                            />
                                            <CardMedia
                                                image={note.image}
                                                component='item'
                                                title="image"
                                            />
                                            <CardContent>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                    {note.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="add to favorites">
                                                    <Favorite />
                                                </IconButton>
                                                <IconButton aria-label="share">
                                                    <ShareOutlined />
                                                </IconButton>
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                )
                            }
                        )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
};

export default Resume;
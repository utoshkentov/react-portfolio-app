import {Link} from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import MobilRightMenuSlider from '@material-ui/core/Drawer';
import React, {useState} from 'react';

import Footer from './Footer'

import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from '@material-ui/core';
import {
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';
import MenuIcon from '@material-ui/icons/Menu'
import avatar from '../avatar.png';

//CSS Styles
const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: '#d4876a',
        height: '100%'
    },
    avatar: {
        display: 'block',
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)
    },
    listItem: {
        color: 'white'
    }
}));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home',
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: 'Resume',
        listPath: '/resume'
    },
    {
        listIcon: <Apps/>,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Contact',
        listPath: '/contact'
    }
]

const Navbar = (props) => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    }

    const classes = useStyles()

    const slidList = slider => (
        <Box
            className={classes.menuSliderContainer}
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt="Umrzoq"/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>{lsItem.listIcon}</ListItemIcon>
                        <ListItemText className={classes.listItem} primary={lsItem.listText}/>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>

            <Box component="nav">
                <AppBar position='static' style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <MenuIcon style={{color: 'tomato'}}/>
                        </IconButton>
                        <Typography variant='h5' style={{color: 'tan'}}>Portfolio</Typography>
                        <MobilRightMenuSlider
                            anchor='right'
                            open={state.right}
                            onClose={toggleSlider('right', false)}
                        >
                            {slidList('right')}
                            <Footer/>
                        </MobilRightMenuSlider>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

export default Navbar;
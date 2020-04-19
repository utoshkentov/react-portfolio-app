import React from 'react';
import{makeStyles} from '@material-ui/styles';
import {Facebook, Telegram, Instagram} from '@material-ui/icons';
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import {Link} from 'react-router-dom';


const contacts=[
    {
        id: '1',
        link: <Facebook color='secondary' />,
        url: '/https://facebook.com/bmbtradegroup'
    },
    {
        id: '2',
        link: <Telegram color='secondary' />,
        url: '/https://t.me/TUITSTUDENTS'
    },
    {
        id: '3',
        link: <Instagram color='primary' />,
        url: '/https://instagram.com/umrzoq_t'
    },
    // {
    //     id: '4',
    //     link: <Mail />,
    //     url: '/utoshkentov@gmail.com'
    // },
]

const useStyles = makeStyles({
    root: {
        '& .MuiBottomNavigationAction-root': {
            minWidth: 0,
            maxWidth: 250,
        },
        '& .MuiSvgIcon-root': {
            fill: 'tan',
            '&:hover': {
                fill: 'red',
                fontSize: '1.8rem'
            }
        }
    }
})


const Footer = () => {
    const classes = useStyles()
    return (
        <BottomNavigation width='auto' style={{background: '#233'}}>
            {contacts.map((contact) => {
                return(
                    <BottomNavigationAction
                      key={contact.id}
                      style={{padding: 0}}
                      className={classes.root}
                      icon={contact.link}
                    >
                        <Link href={contact.url}>{contact.link}</Link>
                    </BottomNavigationAction>
                )
            })
        }
        </BottomNavigation>
    )
}

export default Footer

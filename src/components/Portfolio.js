import {makeStyles} from '@material-ui/styles';
import React from 'react'

import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core'
import project1 from '../images/html-css-javascript-lg.jpg';
import project2 from '../images/html-css-javascript.jpg';
import project3 from '../images/javascript-fullstack.jpg';
import project4 from '../images/mern-stack.jpg';
import project5 from '../images/react-redux.jpg';
import project6 from '../images/react.png';

const cardItemsMap = [
    {
        id: '1',
        image: project1,
        name: 'Project1'
    },
    {
        id: '2',
        image: project2,
        name: 'Project2'
    },
    {
        id: '3',
        image: project3,
        name: 'Project3'
    },
    {
        id: '4',
        image: project4,
        name: 'Project4'
    },
    {
        id: '5',
        image: project5,
        name: 'Project5'
    },
    {
        id: '6',
        image: project6,
        name: 'Project6'
    },

]

//CSS Styling
const useStyles = makeStyles({
    mainContainer: {
        background: 'rgba(0, 0, 0, 0.4)',
        height: '100%'
    },
    cardContainer: {
        maxWidth: 345,
        margin: '5rem auto'
    }
})

const Portfolio = () => {
    const classes = useStyles();
    return (
        <>
            <Box component='div' className={classes.mainContainer}>
                <Grid container justify='center'>
                        {cardItemsMap.map(card => { 
                                return (
                                    <Grid item xs={12} sm={8} md={4} key={card.id}>
                                        <Card className={classes.cardContainer}>
                                            <CardActionArea>
                                                <CardMedia
                                                    component='img'
                                                    alt={card.name}
                                                    height='140'
                                                    image={card.image}
                                                />
                                                <CardContent>
                                                    <Typography gutterBottom variant='h5'>
                                                        {card.name}
                                                    </Typography>
                                                    <Typography variant='body2' color='textSecondary' component='p'>
                                                        Anim nostrud Lorem cillum laborum nostrud commodo duis. Irure 
                                                        nisi eiusmod non adipisicing. Labore 
                                                        anim ut sint reprehenderit minim pariatur eu aute nisi officia
                                                        ut reprehenderit adipisicing eu. 
                                                        Adipisicing minim anim anim incididunt elit nostrud ipsum incididunt 
                                                        dolore deserunt. Ex enim pariatur fugiat veniam dolore. In anim qui do 
                                                        elit ad.
                                                    </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                                <CardActions>
                                                    <Button size='small' color='secondary'>
                                                        Share
                                                    </Button>
                                                    <Button size='small' color='primary'>
                                                        Live Demo
                                                    </Button>
                                                </CardActions>
                                        </Card>
                                </Grid> 
                                )
                            }
                            )
                        } 
                       
                </Grid> 
            </Box>
        </>
    )
}

export default Portfolio

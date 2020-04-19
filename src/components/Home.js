import React from "react";
import Particles from "react-particles-js";
import Header from "./Header";

import {makeStyles} from "@material-ui/core/styles";

//CSS Styles
const useStyles = makeStyles({
    particlesCanva: {
        position: 'absolute',
        opacity: '0.3'
    }
})
const Home = () => {

    const classes = useStyles();

    return (
        <>
            <Particles
                canvasClassName={classes.particlesCanva}
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 900
                            }
                        },
                        shape: {
                            type: 'circle',
                            stroke: {
                                width: 1,
                                color: 'yellow'
                            }
                        },
                        size: {
                            value: 8,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 6,
                                size_min: 0.1,
                                sync: true
                            }
                        },
                        opacity: {
                            value: 1,
                            random: true,
                            anim: {
                                enable: true,
                                speed: 1,
                                opacity_min: 0.1,
                                sync: true
                            }
                        }
                    }
                }}
            />
            {/*<Navbar/>*/}
            <Header/>
        </>
    )
};

export default Home;
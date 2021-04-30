import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import {makeStyles} from '@material-ui/core/styles';
import carousel from './../img/carousel13.png';
import carousel2 from './../img/carousel21.png';
import carousel3 from './../img/carousel31.png';

const useStyles = makeStyles({

    img:{
        height: 'auto',
        display: 'block',
        width: "100%"
    },

    carousel:{
        marginTop: "9.5vh"
    },
    titulo:{
        textAlign: 'center',
        width: '100%',
        marginTop: '3vh',
        marginBottom: '6vh'
    },
    containerdiv:{
        display: 'flex'
    }

})


export default function Home(){
    const classes = useStyles();

    return(
        <div>
            <Carousel slide={false} fade={false} className={classes.carousel}>
                <Carousel.Item>
                    <img className={classes.img} src={carousel} alt="baterias probats"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={classes.img} src={carousel2} alt="instalaciones a domicilio"/>
                </Carousel.Item>
                <Carousel.Item>
                    <img className={classes.img} src={carousel3} alt="la mejor calidad"/>
                </Carousel.Item>
                </Carousel>
            <div className={classes.containerdiv}>
                <h1 className={classes.titulo}>Baterías Probats</h1>
            </div>
        </div>
    )
    
}
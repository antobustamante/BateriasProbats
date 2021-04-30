import React from 'react';
import ItemListContainer from './ItemListContainer';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    titulo:{
        textAlign: 'center',
        width: '100%',
        marginTop: '12vh',
        marginBottom: '5vh'
    },
    containerdiv:{
        display: 'flex'
    }

});

export default function ProductPageContainer(){

    const classes = useStyles();

    return(
        <div>
            <h1 className={classes.titulo}>Productos</h1>
            <ItemListContainer/>
        </div>
    )
}
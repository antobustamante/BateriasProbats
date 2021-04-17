import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Cards from '../components/Cards'
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({

    titulo:{
        textAlign: 'center',
        width: '100%',
    },
    container:{
        display: 'flex'
    }
});


export default function ItemListContainer(){
    const classes = useStyles();
    return(
        <div>
                <div className={classes.container}>
                <h1 className={classes.titulo}>Baterías Probats</h1>
                </div>
                <div>
                    <Grid container spacing={3}>
                        <Grid item xs={4}>
                            <Cards/>
                        </Grid>
                        <Grid item xs={4}>
                            <Cards/>
                        </Grid>
                        <Grid item xs={4}>
                            <Cards/>
                        </Grid>
                    </Grid>
                </div>
        </div>
    )

}
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '../components/List';
import datajson from '../data.json';

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
    const [data, setData] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setData(datajson);
        }, 2000)
    })

    return(
        <div>
            <div className={classes.container}>
                <h1 className={classes.titulo}>Baterías Probats</h1>
            </div>
            <div>
                <List dataInput={data}/>
            </div>
        </div>
    )

}
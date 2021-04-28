import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Items from '../components/Items';

const { getPosts } = require('../services/postService');


const useStyles = makeStyles({

    titulo:{
        textAlign: 'center',
        width: '100%',
    },
    containerdiv:{
        display: 'flex'
    },
    items:{
        flexWrap: 'wrap'
    }
});


export default function ItemListContainer(){

    const classes = useStyles();
    const [data, setData] = useState([]);

    useEffect(() => {
        getPosts()
            .then(res => setData(res))
    })

    return(
        <div>
            <div className={classes.containerdiv}>
                <h1 className={classes.titulo}>Baterías Probats</h1>
            </div>
            <div>
                <Items dataInput={data} className={classes.items}/>
            </div>
        </div>
    )

}
import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Items from '../components/Items';


const { getPosts } = require('../services/postService');


const useStyles = makeStyles({

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
            <Items key={data.id} dataInput={data} className={classes.items}/>
        </div>
    )

}
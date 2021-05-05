import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({

    titulo:{
        textAlign: 'center',
        width: '100%',
        marginTop: '12vh'
    },
    details:{
        display: 'flex',
        justifyContent: 'center'
    },
    text:{
        textDecoration: 'none'
    },
    button:{
        display: 'flex',
        justifyContent:'center',
        textAlign: 'center'
    }

});

const { getPostById } = require('../services/postService');

export default function ItemDetailContainer() {

    const classes = useStyles();

    let {productsId} = useParams();
    
    const [data, setData] = useState({ nombre: "", tipo: "", precio: "", descripcion: "", img: ""});

    useEffect(() => {
        getPostById(productsId)
            .then(res => setData(res))
    },[productsId])
    
    return(
        <div>
            <h1 className={classes.titulo}>Detalle de Producto</h1>
            <div className={classes.details}>
                <ItemDetail nombre={data.nombre} tipo={data.tipo} precio={data.precio} descripcion={data.descripcion} img={data.img} stock={data.stock}/>
            </div>
            <div className={classes.button}>
            
            </div>
        </div>
    )

}

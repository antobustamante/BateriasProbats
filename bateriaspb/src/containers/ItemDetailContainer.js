import React, {useState, useEffect} from 'react';
import {useParams, Link} from 'react-router-dom';
import ItemDetail from '../components/ItemDetail';

const { getPostById } = require('../services/postService');

export default function ItemDetailContainer() {
    let {itemId} = useParams();
    
    const [data, setData] = useState({ nombre: "", tipo: "", precio: "", descripción: "", img: ""});

    useEffect(() => {
        getPostById(itemId)
            .then(res => setData(res))
    },[itemId])
    
    return(
        <div>
            <h2>Detalle de Producto</h2>
            <div>
                <ItemDetail nombre={data.nombre} tipo={data.tipo} precio={data.precio} descripción={data.descripción} img={data.img}/>
            </div>
            <button type="button">
                <Link to={`/products`}>Volver a productos</Link>
            </button>
        </div>
    )

}

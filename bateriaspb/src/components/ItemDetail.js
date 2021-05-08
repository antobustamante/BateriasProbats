import React, { useState, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CounterContainer from './../containers/CounterContainer';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/cartContext';

export default function ItemDetail({data, img, stock, precio, tipo, nombre}) {

  const { addToCart } = useContext(CartContext);

  const [show, setShow] = useState(true);

  let cantidadCompra;

  function productSelected(){
    const newItem = {
      id: data.id,
      tipo: data.tipo,
      precio: data.precio,
      cantidad: cantidadCompra
    };
    addToCart(newItem);
  }

  function addButton (cantidad){
    setShow({
      hidden: true
    });
    cantidadCompra = cantidad;
    productSelected();
  }

  

  let history = useHistory();

    return (
        <Card style={{ width: '18rem', marginTop: "2.5vh"}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {tipo}
          </Card.Text>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed elementum, orci non porta sollicitudin, urna velit ultrices lectus, at convallis nulla sem ac sem.
          </Card.Text>
          <Card.Text>
          Precio: {precio}
          </Card.Text>
          <CounterContainer finalizar={addButton} stock={stock}/>
          <Button hidden={!show.hidden} onClick={() => history.push(`/cart`)}>
            Ver carrito
          </Button>
          <Link to={`/products`} style={{marginLeft:'3vh'}}>Volver a productos</Link>
        </Card.Body>
      </Card>
    )
  }
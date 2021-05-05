import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CounterContainer from './../containers/CounterContainer';
import {Link} from 'react-router-dom';
import { useHistory } from 'react-router-dom';

export default function ItemDetail({img, nombre, tipo, descripcion, precio, stock}) {

  const sendCarrito= {
    nombre: nombre,
    tipo: tipo,
    descripcion: descripcion,
    precio: precio
  }

  const [show, setShow] = useState(true);

  let cantidadCompra;

  function buttonFinalizar (cantidad){
    setShow({
      hidden: true
    });
    cantidadCompra = cantidad;
    sendCarrito.cantidad = cantidadCompra;
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
          <CounterContainer finalizar={buttonFinalizar} stock={stock}/>
          <Button hidden={!show.hidden} onClick={() => history.push({pathname: `/cart`, state: {cart: {sendCarrito} }})}>
            Finalizar Compra
          </Button>
          <Link to={`/products`} style={{marginLeft:'3vh'}}>Volver a productos</Link>
        </Card.Body>
      </Card>
    )
  }
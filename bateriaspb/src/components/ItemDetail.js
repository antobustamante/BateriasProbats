import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

export default function ItemDetail({img, nombre, tipo, descripcion, precio}) {
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
          <Button variant="primary">Comprar</Button>
          <Link to={`/products`} style={{marginLeft:'3vh'}}>Volver a productos</Link>
        </Card.Body>
      </Card>
    )
  }

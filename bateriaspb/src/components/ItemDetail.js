import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ItemDetail({img, nombre, tipo, descripción, precio}) {
    return (
        <Card style={{ width: '18rem', marginTop: "5vh"}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>
            {tipo}
          </Card.Text>
          <Card.Text>
          Precio: {precio}
          </Card.Text>
          <Button variant="primary">Comprar</Button>
        </Card.Body>
      </Card>
    )
  }

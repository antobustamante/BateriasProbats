import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const useStyles = makeStyles({

    titulo:{
        textAlign: 'center',
        width: '100%',
        marginTop: '12vh',
        marginBottom: '6vh'
    },

    form:{
        width: "45%"
    }

})

export default function ContactPageContainer(){

    const classes = useStyles();

    return(
        <Container>
            <h1 className={classes.titulo}>Contacto</h1>
        
            <Row>
                <Col>
                <Form>
                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Form.Row>
                        <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select" defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Control>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    </Form>
                </Col>
                <Col>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.4999533013174!2d-58.4968448848533!3d-34.566214180469245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb6f721af151f%3A0x3ff0afa199b1e079!2sAvenida%20Triunvirato%20%26%20Manuela%20Pedraza%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1605413943512!5m2!1ses-419!2sar" width="500" height="450" frameBorder="0" style={{border:"0", display:'flex'}} allowFullScreen="" aria-hidden="false" tabIndex="0" title="map"></iframe>
                </Col>
            </Row>
        </Container>

    )
}
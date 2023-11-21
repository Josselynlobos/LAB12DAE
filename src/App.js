import React from 'react';
import { Container } from 'react-bootstrap';
import CssBaseline from '@mui/material/CssBaseline';
import { Row, Col } from 'react-bootstrap';
import CharacterLoader from './CharacterLoader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Container fluid className="bg-dark text-light py-5">
            <CssBaseline />
            <Row className="justify-content-center align-items-center">
                <Col className="text-center">
                    <h1 className="display-3 font-weight-bold text-primary">
                        “Que la fuerza te acompañe”
                    </h1>
                </Col>
            </Row>
            <Row className="justify-content-center mt-5">
                <Col md={8}>
                    <CharacterLoader />
                </Col>
            </Row>
        </Container>
    );
}

export default App;

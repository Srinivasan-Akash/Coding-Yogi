import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Row, Col, Button } from 'react-bootstrap';
import styles from '@/styles/pages/stackoverflow.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

const Killmybug = () => {
    return (
        <Container fluid className={styles.killmybug} >
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <h1 >Welcome to KillMyBug</h1>
                        <p >
                            A community-driven platform for developers to get help and solve bugs.
                        </p>
                        <Button variant="primary" size="lg">
                            Get Started
                        </Button>
                    </Col>
                    <Col md={6} >
                        <FontAwesomeIcon icon={faBug} />

                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default Killmybug;

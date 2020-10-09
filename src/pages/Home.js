import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Home = () => {
    return (
        <>
            <Row className="flex-row justify-content-between mt-3 mb-3">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Dashboard</h3>
                    </div>
                </Col>
            </Row>
            <Jumbotron>
                <h1>Welcome to Project Manager</h1>
                <p>
                    You can add projects, change status on a project, view a project on a single page and add employees.
                </p>
                <p>
                    <Button variant="primary" as={Link} to="/projects">See all projects</Button>
                </p>
            </Jumbotron>
        </>
    );
}

export default Home;
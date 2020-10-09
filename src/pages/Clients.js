import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ClientList from "../components/ClientList";
import PropTypes from "prop-types";


const Clients = (props) => {

    return (
        <>
            <Row className="flex-row justify-content-between mt-3 mb-3">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>Clients</h3>
                    </div>
                </Col>
            </Row>

            <ClientList clients={props.clients}/>
        </>

    )
}

Clients.propTypes = {
    clients: PropTypes.array.isRequired,
}

export default Clients;
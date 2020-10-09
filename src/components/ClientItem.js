import React from 'react';
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";


const ClientItem = (props) => {
    return (
        <Col sm={12} md={6} lg={4} xl={3} className="mb-4 d-flex">
            <Card className="d-flex text-center">
                <Card.Img
                    variant="top"
                    src={require(`../assets/images/clients/${props.image}`)}
                    alt={`Image of ${props.name}`}
                />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>

    )
}

ClientItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
}

ClientItem.defaultProps = {
    name: "Not set",
    image: "1.jpg",
}

export default ClientItem;
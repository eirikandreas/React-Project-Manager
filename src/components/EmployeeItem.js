import React from 'react';
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image';
import Badge from "react-bootstrap/Badge";


const EmployeeItem = (props) => {
    return (
        <Col sm={12} md={6} lg={4} xl={3} className="mb-4">
            <Card className="text-center">
                <Card.Body>
                    <Image
                        style={{height: "170px", width: "170px"}}
                        className="mb-3"
                        src={require(`../assets/images/employees/${props.image}`)}
                        alt={`Image of ${props.name}`}
                        roundedCircle
                    />
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        <Badge
                            pill
                            className="pt-1 pb-1 border border-primary text-primary">
                            {props.position}
                        </Badge>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

    )
}

EmployeeItem.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
}

EmployeeItem.defaultProps = {
    name: "Not set",
    image: "default.png",
    position: "Not set"
}

export default EmployeeItem;
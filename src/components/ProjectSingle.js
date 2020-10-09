import React from 'react';
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

const ProjectSingle = ( props ) => {
    return (
        <Row>
            <Col>
                <Card>
                    <Card.Header as="h5" className={"d-flex justify-content-between"}>
                        <p className="p-0 m-0">{props.title}</p>
                        <Badge
                            pill
                            style={{minWidth: "100px"}}
                            className="p-2"
                            variant={props.complete ? 'success' : 'warning'}>
                            {props.complete ? "Completed" : "Active"}
                        </Badge>

                    </Card.Header>
                    <Card.Img src={require(`../assets/images/projects/${props.image}`)} alt={`Image of ${props.title}`}/>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Client</Card.Subtitle>
                        <Card.Text>
                            {props.client}
                        </Card.Text>
                    </Card.Body>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Project type</Card.Subtitle>
                        <Badge
                            pill
                            className="pt-1 pb-1 border border-primary text-primary">
                            {props.type}
                        </Badge>
                    </Card.Body>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                        <Card.Text>
                            {props.description}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Card.Subtitle className="mb-2 text-muted">Assigned to</Card.Subtitle>
                            <Badge
                                pill
                                className="pt-1 pb-1 border border-secondary text-secondary">
                                {props.employee}
                            </Badge>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>

    )
}

ProjectSingle.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    employee: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool.isRequired,
}

ProjectSingle.defaultProps = {
    title: "Not set",
    image: "default.png",
    client: "Not set",
    type: "Not set",
    description: "Not set",
    employee: "No employee assigned",
    url: "#",
    id: 0,
    complete: false
}


export default ProjectSingle;
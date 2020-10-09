import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge';
import ListGroup from "react-bootstrap/ListGroup";


const ProjectItem = (props) => {


    const handleStatus = () => {
        let projects = [...props.projects]
        let project = {...projects[props.id], complete: true}
        projects[props.id] = project;
        props.setProject([...projects])
    }

    return (
        <Col sm={12} md={6} lg={4} xl={3} className="mb-5 d-flex">
            <Card>
                <Card.Header className={"d-flex justify-content-between"}>
                    <p className="p-0 m-0 font-weight-bold text-muted">ID: {props.id}</p>
                    <Badge
                        pill
                        style={{minWidth: "100px"}}
                        className="p-2"
                        variant={props.complete ? 'success' : 'warning'}>
                        {props.complete ? "Completed" : "Active"}
                    </Badge>
                </Card.Header>
                <Card.Img
                    variant="top"
                    src={require(`../assets/images/projects/${props.image}`)}
                    alt={`Image of ${props.title}`}
                />

                <Card.Body>
                    <Card.Title className="font-weight-bold">{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.client}</Card.Subtitle>

                    <Card.Text>
                        <Badge
                            pill
                            className="pt-1 pb-1 border border-primary text-primary">
                            {props.type}
                        </Badge>
                    </Card.Text>

                    <Card.Text>
                        {props.description}
                    </Card.Text>
                </Card.Body>

                <ListGroup variant="flush">
                    <ListGroup.Item>
                        <Badge
                            pill
                            className="pt-1 pb-1 border border-secondary text-secondary">
                            {props.employee}
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Footer>
                    <Button
                        style={{width: "100%"}}
                        as={Link}
                        to={`${props.url}/${props.id}`}
                        variant="primary"
                        block>View Project</Button>

                    <Button
                        className={props.complete ? 'disabled outline-light' : ''}
                        variant={props.complete ? 'outline-primary' : 'primary'}
                        onClick={handleStatus}
                        block

                        >{props.complete ? 'Done' : 'Finish Project'}</Button>
                </Card.Footer>
            </Card>
        </Col>
    )
}

ProjectItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    employee: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    complete: PropTypes.bool.isRequired,
    projects: PropTypes.array.isRequired,
    setProject: PropTypes.func.isRequired
}

ProjectItem.defaultProps = {
    title: "Not set",
    image: "default.png",
    client: "Not set",
    type: "Not set",
    employee: "Not set",
    description: "Not set",
    url: "#",
    id: 0,
    complete: false,
    setProject: PropTypes.func.isRequired
}


export default ProjectItem;
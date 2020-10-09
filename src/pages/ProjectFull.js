import React from 'react';
import {Link, useParams} from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProjectSingle from "../components/ProjectSingle";
import PropTypes from "prop-types";


const ProjectFull = (props) => {

    let {id} = useParams()

    const handleStatus = () => {
        let projects = [...props.projects]
        let project = {...projects[id], complete: true}
        projects[id] = project;
        props.setProject([...projects])
    }

    return (
        <>
            <Row className="flex-row justify-content-between mt-3 mb-3">
                <Col>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3>ID: {id}</h3>
                        <div className="d-flex">
                            <Button
                                style={{minWidth: "150px"}}
                                className={props.projects[id].complete ? 'disabled outline-light' : ''}
                                variant={props.projects[id].complete ? 'outline-primary' : 'primary'}
                                onClick={handleStatus}
                            >
                                    {props.projects[id].complete ? 'Done' : 'Finish Project'}
                            </Button>
                            <Button
                                style={{minWidth: "150px"}}
                                className={"ml-3"}
                                as={Link}
                                to={"/projects"}
                                variant="primary">
                                Back
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>

            <ProjectSingle
                title={props.projects[id].title}
                client={props.projects[id].client}
                type={props.projects[id].type}
                description={props.projects[id].description}
                employee={props.projects[id].employee}
                image={props.projects[id].image}
                complete={props.projects[id].complete}
            />
        </>
    )
}

ProjectFull.propTypes = {
    projects: PropTypes.array.isRequired,
    setProject: PropTypes.func.isRequired
}

export default ProjectFull;
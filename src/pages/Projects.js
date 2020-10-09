import React, {useState} from 'react';
import {BrowserRouter, Switch, Route, useRouteMatch} from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import ProjectList from '../components/ProjectList';
import NewProjectModal from "../components/NewProjectModal";
import ProjectFull from './ProjectFull';
import PropTypes from "prop-types";


const Projects = (props) => {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    let {url, path} = useRouteMatch();

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/projects">
                        <Row className="flex-row justify-content-between mt-3 mb-3">
                            <Col>
                                <div className="d-flex justify-content-between align-items-center">
                                    <h3>Projects ({props.projects.length})</h3>
                                    <Button style={{minWidth: "150px"}} variant="primary" onClick={handleShow}>New Project</Button>
                                </div>
                            </Col>
                        </Row>

                        <NewProjectModal
                            setProject={props.setProject}
                            projects={props.projects}
                            projectTypes={props.projectTypes}
                            clients={props.clients}
                            employees={props.employees}
                            showModal={show}
                            handleClose={() => handleClose()}
                        />

                        <ProjectList url={url} projects={props.projects} setProject={props.setProject}/>
                    </Route>
                    <Route exact path={`${path}/:id`}>
                        <ProjectFull projects={props.projects} setProject={props.setProject}/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </>
    )
}

Projects.propTypes = {
    projects: PropTypes.array.isRequired,
    projectTypes: PropTypes.array.isRequired,
    clients: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    setProject: PropTypes.func.isRequired
}

export default Projects;
import React from 'react';
import Row from 'react-bootstrap/Row';
import ProjectItem from './ProjectItem';
import PropTypes from "prop-types";


const ProjectList = (props) => {


    const getProjects = () => {
        return props.projects.map((project, i) => {
            return <ProjectItem key={`id-${i}`}
                                id={i}
                                projects={props.projects}
                                setProject={props.setProject}
                                type={project.type}
                                title={project.title}
                                description={project.description}
                                client={project.client}
                                employee={project.employee}
                                complete={project.complete}
                                image={project.image}
                                url={props.url}
            />
        });
    }

    return (
        <Row>
            {getProjects()}
        </Row>
    )
}
ProjectList.propTypes = {
    projects: PropTypes.array.isRequired,
    url: PropTypes.string.isRequired,
}

export default ProjectList;
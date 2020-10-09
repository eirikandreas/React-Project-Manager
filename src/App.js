import React, {useState} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Clients from './pages/Clients';
import Employees from './pages/Employees';

import 'bootstrap/dist/css/bootstrap.min.css';

import {projectsData} from "./data";
import {employeesData} from "./data";
import {clientsData} from "./data";
import {projectTypeData} from "./data";
import {positionsData} from "./data";


function App() {

    const [projects, setProject] = useState(projectsData);
    const [projectTypes] = useState(projectTypeData);
    const [employees, setEmployee] = useState(employeesData);
    const [positions] = useState(positionsData);
    const [clients] = useState(clientsData);

    return (

        <BrowserRouter>
            <div className="bg-light">

                <NavBar/>

                <Container fluid>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects">
                            <Projects
                                projects={projects}
                                projectTypes={projectTypes}
                                setProject={setProject}
                                clients={clients}
                                employees={employees}
                            />

                        </Route>
                        <Route path="/clients">
                            <Clients clients={clientsData}/>
                        </Route>
                        <Route path="/employees">
                            <Employees
                                employees={employees}
                                positions={positions}
                                setEmployee={setEmployee}
                            />
                        </Route>

                    </Switch>

                </Container>

            </div>
        </BrowserRouter>

    );
}


export default App;

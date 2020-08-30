import React from "react";
import wsiblogo from "./images/lab-logo.png";
import unilogo from "./images/unilogo.jpeg";
import {Row,Col,Container} from "reactstrap";

export const WorkExperience = () => {
    return (<Container>
        <h2>Work Experience</h2>
        <Row>
        <img src={wsiblogo} height="30" width="30"/>
        WSIB
        </Row>
        <Row>
        <img src={unilogo} height="50" width="50"/>
        University of Windsor
        </Row>
        </Container>
    );
}
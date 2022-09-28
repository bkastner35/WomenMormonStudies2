import React from "react";

import classes from './Home.module.css'
import WebImage from "../componenet/WebImage";
import { Container } from "@mui/system";




export default function Vision(){
    return(
        <div className={classes.parent}>
            <Container>
            <h1 id="vision"></h1>
            <div className={classes.child}>
                <WebImage alt="a decorative tree"/>
            </div>
            </Container>
            <h2>This page should be about the vision of the websight I guess?</h2>
        </div>
    )
}
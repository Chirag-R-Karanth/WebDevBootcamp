//import React from 'react';
//import Reactdom from 'react-dom/client';
import {createRoot} from "react-dom/client";

const tag=createRoot(document.getElementById("tag"));
tag.render(
    <img src="https://www.w3schools.com/w3css/img_lights.jpg" alt="Lights" style={{width:"100%",height:"100%",padding:0}} />
);

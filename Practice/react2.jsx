import {createRoot} from "react-dom/client";
//import { Fragment } from "react";

const tag=createRoot(document.getElementById("tag"));

function Page(){
    return(
        <>
        <Header/>
        <h1>React the bane of my existence</h1>
        <p>React is a JavaScript library for building user intrfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
        <p>React can be used as a base in the development of single-page or mobile applications.</p>
        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
        <p>React can be used as a base in the development of single-page or mobile applications.</p>

        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
        <p>React can be used as a base in the development of single-page or mobile applications.</p>
        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
        <p>React can be used as a base in the development of single-page or mobile applications.</p>
        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
        <p>React can be used as a base in the development of single-page or mobile applications.</p>
        <p>React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.</p>
        <p>React can be used as a base in the development of single-page or mobile applications.</p>    


        <footer><small>Subjected to copyright @Chirag</small></footer>
        </>
    );
}

function Header(){
    return(
        <header>
            <img src="baklol face.jpeg"></img>
        </header>
    );
}

tag.render(<Page/>);
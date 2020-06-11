import React from "react";

import "./Project.css";

const Project = (props) => {
    const renderDemoLink = () => {
        if (props.deployable === true) {
            return (
                <a
                    href={props.prodLink}
                    // className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neumorphism-1"
                >
                    <i
                        className="fab fa-chrome "
                        style={{ fontSize: "20px" }}
                    />
                    Demo
                </a>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="slide">
            <div className="card neumorphism-1 p-3">
                <video
                    autoPlay
                    loop
                    controls
                    src={require(`../../picture/${props.mediaFile}.webm`)}
                    className="card-img-top neumorphism-2"
                    alt={props.title}
                ></video>

                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <div>{props.description}</div>
                </div>
                <div>
                    <a
                        href={props.gitLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i
                            className="fab fa-github fa-fw neumorphism-1  "
                            style={{ fontSize: "20px" }}
                        />
                    </a>

                    {renderDemoLink()}
                </div>
            </div>
        </div>
    );
};

Project.defaultProps = {
    gitLink: "https://minh997.github.io/SpainWorldCup2018/",
    prodLink: "https://www.youtube.com/",
    description: "Tis is a web App",
    title: "Name of App",
    built: "Cobol, Binary",
    mediaFile: "marvel",
    deployable: true, //for project can deploy or not
};

export default Project;

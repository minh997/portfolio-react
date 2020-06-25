import React from "react";

import "./Project.css";

const Project = (props) => {
    return (
        <div className="slide">
            <div className="card neumorphism-1 p-1 mtop">
                <video
                    loop
                    controls
                    className="card-img-top neumorphism-2"
                    alt={props.title}
                >
                    <source
                        src={require("../../picture/" + props.mediaFile)}
                        type="video/mp4"
                    ></source>
                </video>

                <div className="card-body">
                    <h5 className="card-title">
                        {props.title}{" "}
                        <div
                            style={{
                                display: "inline-block",
                                fontSize: "15px",
                            }}
                        >
                            <a
                                href={props.gitLink}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <i className="fab fa-github fa-fw " /> Source
                                Code
                            </a>
                            {props.deployable && (
                                <a
                                    href={props.prodLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i className="fab fa-chrome " /> Demo
                                </a>
                            )}
                        </div>
                    </h5>

                    <div>{props.description}</div>
                </div>
            </div>
        </div>
    );
};

Project.defaultProps = {
    gitLink: "https://minh997.github.io/SpainWorldCup2018/",
    prodLink: "https://www.youtube.com/",
    // mediaFile: "quiz.mp4",
    title: "Name of App",
    deployable: true, //for project can deploy or not
};

export default Project;

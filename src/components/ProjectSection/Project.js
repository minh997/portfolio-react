import React from "react";

import "./Project.css";

const Project = (props) => {
    return (
        <div className="slide">
            <div className="card neumorphism-1 p-3">
                {/* <video
                    autoPlay
                    loop
                    controls
                    className="card-img-top neumorphism-2"
                    alt={props.title}
                >
                    <source
                        src={require("../../picture/" + props.mediaFile)}
                        type="video/mp4"
                    />
                </video> */}

                <img
                    src={require("../../picture/" + props.mediaFile)}
                    className="card-img-top neumorphism-2"
                    alt={props.title}
                />

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
                            className="fab fa-github fa-fw "
                            style={{ fontSize: "20px" }}
                        />
                    </a>

                    {props.deployable && (
                        <a
                            href={props.prodLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fab fa-chrome "
                                style={{ fontSize: "20px" }}
                            />
                            Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

Project.defaultProps = {
    gitLink: "https://minh997.github.io/SpainWorldCup2018/",
    prodLink: "https://www.youtube.com/",
    mediaFile: "game.gif",
    title: "Name of App",
    deployable: true, //for project can deploy or not
};

export default Project;

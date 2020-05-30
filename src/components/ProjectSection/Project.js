import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
    renderDemoLink = () => {
        if (this.props.deployable === true) {
            return (
                <a
                    href={this.props.prodLink}
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

    render() {
        return (
            <div className="slide">
                <div className="card neumorphism-1 p-3">
                    <img
                        src={require("../../picture/" + this.props.img)}
                        className="card-img-top neumorphism-2"
                        alt={this.props.title}
                    />

                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <div>{this.props.description}</div>
                        <div>
                            <strong>Built with: </strong>
                            {this.props.built}
                        </div>
                    </div>
                    <div className="footer">
                        <a
                            href={this.props.gitLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fab fa-github fa-fw neumorphism-1  "
                                style={{ fontSize: "20px" }}
                            />
                        </a>

                        {this.renderDemoLink()}
                    </div>
                </div>
            </div>
        );
    }
}

Project.defaultProps = {
    gitLink: "https://minh997.github.io/SpainWorldCup2018/",
    prodLink: "https://www.youtube.com/",
    description: "Tis is a web App",
    title: "Name of App",
    built: "Cobol, Binary",
    img: "email.gif",
    deployable: true, //for project can deploy or not
};

export default Project;

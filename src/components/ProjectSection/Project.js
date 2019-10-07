import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
    renderLink = () => {
        if (this.props.deployable === true) {
            return (
                <a
                    href={this.props.prodLink}
                    className="btn btn-primary btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-chrome" style={{ fontSize: "12px" }} />
                    See it Now
                </a>
            );
        } else {
            return (
                <a
                    href={this.props.prodLink}
                    className="btn btn-success btn-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fas fa-book" style={{ fontSize: "12px" }} />
                    Document
                </a>
            );
        }
    };

    render() {
        return (
            <div className="slide">
                <div className="card ">
                    <img
                        src={require("../../picture/" + this.props.img)}
                        className="card-img-top"
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
                            className="btn btn-dark btn-sm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i
                                className="fab fa-github fa-fw"
                                style={{ fontSize: "12px" }}
                            />
                            Source Code
                        </a>
                        {this.renderLink()}
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
    deployable: true //for project can deploy or not
};

export default Project;

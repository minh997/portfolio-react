import React, { Component } from "react";

import Project from "./Project";
import "./Project.css";

class ProjectHolder extends Component {
    renderIntroPage() {
        return (
            <div className="slide">
                <h1>Pet Projects</h1>
                <div
                    className="gradient"
                    onClick={() => {
                        this.props.fullpageApi.moveSlideRight();
                    }}
                >
                    slide or click here to see my projects
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="section">
                {this.renderIntroPage()}
                <Project
                    title="Celebrity Face Recognition"
                    description="Easily identify who is in the picture"
                    built="React-Redux, AWS Regkonition Services"
                    gitLink="https://github.com/minh1609/face-regconition"
                    prodLink="https://minh1609.github.io/face-regconition/"
                    img="face-reg.gif"
                />
                <Project
                    title="Marvel Hero"
                    description="Find information about your favaourite marvel hero
                    "
                    built="React-Redux, Marvel API"
                    gitLink="https://github.com/minh1609/marvell-hero"
                    prodLink="https://minh1609.github.io/marvell-hero/"
                    img="marvel.gif"
                />

                <Project
                    title="Game Store Management"
                    description="Web application helps managing items, employees, ... for a game store"
                    built="SQL database, HTML, CSS, JavaScript, PHP"
                    gitLink="https://github.com/minh1609/gameStore"
                    prodLink="https://mygamestore1609.000webhostapp.com/"
                    img="game.gif"
                />

                <Project
                    title="Online Diary"
                    description="A Website helps users keep all the private diary, image. Data is safety stored on cloud"
                    built="React-Redux, Node-Express, Redis, Amazon S3, Jest, MongoDB, Materialize CSS"
                    gitLink="https://github.com/minh1609/Blogg"
                    prodLink="https://github.com/minh1609/Blogg#technical-document"
                    img="blog.gif"
                    deployable={false}
                />
                <Project
                    title="Social Network"
                    description="An online info board, allow anyone to share everything to the world"
                    built="React-Redux, Node-Express, MongoDB, Semantic UI"
                    gitLink="https://github.com/minh1609/social-network"
                    prodLink="https://matrix-network.herokuapp.com/"
                    img="social.gif"
                />

                {/* <Project
                    title="Portfolio"
                    description="Personal portfolio"
                    built="React(for reuseable component), HTML, CSS"
                    gitLink="https://github.com/minh1609/portfolio"
                    prodLink="https://minh1609.github.io/portfolio/"
                    img="porfolio.gif"
                /> */}

                <Project
                    title="FaceBook"
                    description="FaceBook Demo fishing application, demonstrate how hacker steal password from inexperienced web user
                    "
                    built="HTML, CSS, JavaScript"
                    gitLink="https://github.com/minh1609/facebook-clickjacking"
                    prodLink="https://minh1609.github.io/facebook-clickjacking/"
                    img="facebook.gif"
                />
                {/* <Project
                    title="Email Survey"
                    description="Want to know your client’s opinion about your product, service ? Give this app a list of your client’s email, It will help you to collect all the feedback"
                    built="React-Redux, Node-Express, MongoDB, Materialize CSS"
                    gitLink="https://github.com/minh1609/emailsurvey"
                    prodLink="https://email-survey-react.herokuapp.com/"
                    img="email.gif"
                /> */}
            </div>
        );
    }
}

export default ProjectHolder;

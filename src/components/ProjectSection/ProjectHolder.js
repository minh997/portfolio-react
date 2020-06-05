import React, { Component } from "react";

import Project from "./Project";
import "./Project.css";

class ProjectHolder extends Component {
    renderIntroPage() {
        return (
            <div className="slide">
                <h1>Pet Projects</h1>
                <div
                    className="gradient "
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
                    title="Quiz Maker"
                    description={
                        <div>
                            This website helps users create online quizzes under
                            multiple-choice question format and keep data of who
                            took it and their score. Users profile is safety
                            secured by <strong>Google Oauth</strong> . App is
                            built with
                            <strong>
                                NodeJS, React, MongoDB, and Restful API.
                            </strong>
                        </div>
                    }
                    gitLink="https://github.com/minh1609/question-survey"
                    prodLink="https://question-survey.herokuapp.com/"
                    img="test.gif"
                />
                <Project
                    title="Celebrity Face Recognition"
                    description={
                        <div>
                            By using
                            <strong> Amazon Web Sevice-Regkonition </strong>,
                            this Web App can quickly identify which celebrities
                            appear in the picture in less than 1 seconds
                        </div>
                    }
                    gitLink="https://github.com/minh1609/face-regconition"
                    prodLink="https://minh1609.github.io/face-regconition/"
                    img="face-reg.gif"
                />
                <Project
                    title="Marvel Characters Library"
                    description={
                        <div>
                            A website contains data of more than 1000 characters
                            from Marvel Universe. Data is fetched directly from
                            Marvel database through web API and served on a
                            Single Page Application built with
                            <strong> React</strong>
                        </div>
                    }
                    gitLink="https://github.com/minh1609/marvell-hero"
                    prodLink="https://minh1609.github.io/marvell-hero/"
                    img="marvel.gif"
                />

                <Project
                    title="Real time Chat Application"
                    description="Chat Application can keep track of user status, message in real time"
                    gitLink="https://github.com/minh1609/marvell-hero"
                    img="chat.gif"
                    deployable={false}
                />

                {/* <Project
                    title="Online Diary"
                    description="A Website helps users keep all the private diary, image. Data is safety stored on cloud"
                    built="React-Redux, Node-Express, Redis, Amazon S3, Jest, MongoDB, Materialize CSS"
                    gitLink="https://github.com/minh1609/Blogg"
                    prodLink="https://github.com/minh1609/Blogg#technical-document"
                    img="blog.gif"
                    deployable={false}
                /> */}
                {/* <Project
                    title="Info Board"
                    description="An online info board, allow anyone to share everything to the world"
                    built="React-Redux, Node-Express, MongoDB, Semantic UI"
                    gitLink="https://github.com/minh1609/social-network"
                    prodLink="https://matrix-network.herokuapp.com/"
                    img="social.gif"
                />

                <Project
                    title="Game Store Management"
                    description="Web application helps managing items, employees, ... for a game store"
                    built="SQL database, HTML, CSS, JavaScript, PHP"
                    gitLink="https://github.com/minh1609/gameStore"
                    prodLink="https://mygamestore1609.000webhostapp.com/"
                    img="game.gif"
                /> */}
            </div>
        );
    }
}

export default ProjectHolder;

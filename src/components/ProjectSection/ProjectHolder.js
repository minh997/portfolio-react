import React from "react";

import Project from "./Project";
import "./Project.css";

const ProjectHolder = (props) => {
    const renderIntroPage = () => {
        return (
            <div className="slide">
                <h1>Pet Projects</h1>
                <div
                    className="gradient "
                    onClick={() => {
                        props.fullpageApi.moveSlideRight();
                    }}
                >
                    slide or click here to see my projects
                </div>
            </div>
        );
    };

    return (
        <div className="section">
            {renderIntroPage()}

            <Project
                title="Quiz Maker"
                description={
                    <div>
                        This website helps users create online quizzes under
                        multiple-choice question format and keep data of who
                        took it and their score. Users can use Gmail account to
                        log in. App is built with
                        <strong>
                            NodeJS, React, MongoDB, Google Oauth and Restful
                            API.
                        </strong>
                    </div>
                }
                gitLink="https://github.com/minh1609/question-survey"
                prodLink="https://question-survey.herokuapp.com/"
                mediaFile="quiz.mp4"
            />
            <Project
                title="Celebrity Face Recognition"
                description={
                    <div>
                        By using
                        <strong> Amazon Web Sevice-Regkonition </strong>, this
                        Web App can quickly identify which celebrities appear in
                        the picture in less than 1 seconds
                    </div>
                }
                gitLink="https://github.com/minh1609/face-regconition"
                prodLink="https://minh1609.github.io/face-regconition/"
                mediaFile="facereg.mp4"
            />
            <Project
                title="Marvel Characters Library"
                description={
                    <div>
                        A website contains data of more than 1000 characters
                        from Marvel Universe. Data is fetched directly from
                        Marvel database through web API and served on a Single
                        Page Application built with
                        <strong> React</strong>
                    </div>
                }
                gitLink="https://github.com/minh1609/marvell-hero"
                prodLink="https://minh1609.github.io/marvell-hero/"
                mediaFile="marvel.mp4"
            />

            <Project
                title="Real time Chat Application"
                description="Chat Application can keep track of user status, message in real time"
                gitLink="https://github.com/minh1609/marvell-hero"
                mediaFile="chat.mp4"
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
            {/*

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
};

export default ProjectHolder;

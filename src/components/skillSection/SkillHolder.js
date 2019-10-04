import React, { Component } from "react";
import "./skill.css";

class SkillHolder extends Component {
    //skillType
    //0: mostly work with
    //1: want to learn
    state = { skillType: 0 };
    skills = [
        "React-Redux",
        "Node JS, Express",
        "C#, .Net Core, Entity Framework",
        "AWS Certified Developer - Associate",
        "Mongo DB, Relational Database, Redis",
        "HTML, CSS, SASS",
        "Bootstrap, Semantic UI"
    ];
    skillswantToLearn = [
        " GoLang, Python",
        "Serverless Architecture (API Gateway, Lambda function)"
    ];

    renderBtnStyle = int => {
        if (int === this.state.skillType) {
            return "circle-btn btn-dark";
        } else {
            return "circle-btn btn-light";
        }
    };

    renderSkillList = (list = []) => {
        return list.map(e => <div className="zoom-on-hover">{e}</div>);
    };

    //render content base on state
    renderContent = () => {
        if (this.state.skillType === 0) {
            return (
                <div style={{ lineHeight: "2.0", padding: "5px" }}>
                    <h4>I am working with</h4>
                    <div>{this.renderSkillList(this.skills)}</div>
                </div>
            );
        } else if (this.state.skillType === 1) {
            return (
                <div style={{ lineHeight: "2.0", padding: "5px" }}>
                    <h4>I want to learn</h4>
                    {this.renderSkillList(this.skillswantToLearn)}
                </div>
            );
        }
    };

    render() {
        return (
            <React.Fragment>
                <div className="flex-box">
                    <button
                        onClick={() => this.setState({ skillType: 0 })}
                        className={this.renderBtnStyle(0) + " zoom-on-hover"}
                    >
                        <i className="fas fa-cog fa-spin" />
                    </button>
                    <button
                        onClick={() => this.setState({ skillType: 1 })}
                        className={this.renderBtnStyle(1) + " zoom-on-hover"}
                    >
                        <i className="fas fa-question" />
                    </button>
                </div>

                <div className="skill-detail">{this.renderContent()}</div>
            </React.Fragment>
        );
    }
}

export default SkillHolder;

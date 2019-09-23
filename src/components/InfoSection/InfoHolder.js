import React, { Component } from "react";
import Typist from "react-typist";

export class InfoHolder extends Component {
    render() {
        return (
            <div className="info">
                <div>
                    I am full stack developer developer, currently using Node
                    and React as my main stack
                </div>
                <Typist cursor={{ show: false }} avgTypingDelay={50}>
                    <div>
                        Always learning to solve bigger and better problem
                    </div>
                </Typist>
                <a
                    target="blank"
                    href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2019-09-10&ci=AWS01045729"
                >
                    <img
                        src={require("../../picture/badge.png")}
                        style={{ width: "150px", marginTop: "20px" }}
                        alt="aws-certified"
                        className="zoom-on-hover mt-4"
                    />
                </a>
            </div>
        );
    }
}

export default InfoHolder;

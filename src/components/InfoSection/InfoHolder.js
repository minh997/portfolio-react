import React from "react";
import Typist from "react-typist";

const InfoHolder = () => {
    return (
        <div className="info vertical-align" style={{ height: "600px" }}>
            <div>
                <div>
                    I am full stack developer, curiosity about modern technology
                </div>
                <Typist cursor={{ show: false }} avgTypingDelay={50}>
                    <div>
                        Constantly learning to solve bigger and better problem
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
        </div>
    );
};

export default InfoHolder;

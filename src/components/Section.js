import React from "react";

const Section = (props) => {
    return (
        <div className="section">
            <h1 className="mtop">{props.title}</h1>

            <div className="mtop">{props.content}</div>
        </div>
    );
};

export default Section;

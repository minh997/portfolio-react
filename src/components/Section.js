import React from "react";

const Section = (props) => {
    return (
        <div className="section">
            <h1>{props.title}</h1>

            <div>{props.content}</div>
        </div>
    );
};

export default Section;

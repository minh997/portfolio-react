import React, { Component } from "react";

class Section extends Component {
    render() {
        return (
            <div className="section">
                <h1>{this.props.title}</h1>
                <div>{this.props.content}</div>
            </div>
        );
    }
}

Section.defaultProps = {
    title: "title",
    content: "ABALNDLADNLSDNDnalshflasnpehq;f ajsf;ansf;ajasd;a"
};

export default Section;

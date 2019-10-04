import React, { Component } from "react";

import "./Contact.css";
import ContactCard from "./ContactCard";

export class ContactHolder extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="contact-holder">
                    <p>Feel free to contact me at</p>
                    <div>
                        <ContactCard
                            name="hminh16169@gmail.com"
                            icon="fas fa-envelope"
                            link="hminh16169@gmail.com"
                            action="copy"
                        />
                        <ContactCard
                            name="Phone Number"
                            icon="fas fa-mobile-alt"
                            link="7789557706"
                            action="copy"
                        />
                        {/* <ContactCard
                            name="Resume"
                            icon="fas fa-file"
                            link="https://docs.google.com/document/d/1hHXFBcjzb-gyI4wZIz7l9tpwhOnC5PzkKDZs1QeYk1I/edit?usp=sharing"
                            action="open"
                        /> */}

                        <ContactCard
                            name="Git Hub"
                            icon="fab fa-github"
                            action="open"
                            link="https://github.com/minh1609"
                        />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default ContactHolder;

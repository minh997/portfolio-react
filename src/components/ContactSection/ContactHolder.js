import React, { useEffect } from "react";
import { ses } from "./AWSconfig";
import Swal from "sweetalert2";

import "./Contact.css";
import ContactCard from "./ContactCard";

const ContactHolder = () => {
    const sendEmail = async () => {
        Swal.fire({
            confirmButtonText: "Send",
            cancelButtonText: "May be later",
            input: "textarea",
            inputPlaceholder:
                "Enter your message, your email, I will reply as soon as possible",
            showCancelButton: true,
            allowOutsideClick: false
        }).then(({ value, dismiss }) => {
            console.log(value);

            //configure email
            let params = {
                Destination: {
                    BccAddresses: ["hoangminh160997@gmail.com"]
                },
                Message: {
                    Body: {
                        Text: {
                            Data: value
                        }
                    },
                    Subject: {
                        Data: "New Message send from Portfolio" /* required */
                    }
                },
                Source: "pointman449@gmail.com" /* required */
            };

            if (value && dismiss !== Swal.DismissReason.cancel) {
                ses.sendEmail(params, function(err, data) {
                    if (err) console.log(err, err.stack);
                    else {
                        console.log(data);
                        Swal.fire({
                            type: "success",
                            text: "Your message has been sent"
                        });
                    }
                });
            } else if (dismiss !== Swal.DismissReason.cancel) {
                Swal.fire({
                    type: "warning",
                    text: "Hmm, you forgot to write the content"
                });
            }
        });
    };

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
                    <ContactCard
                        name="Git Hub"
                        icon="fab fa-github"
                        action="open"
                        link="https://github.com/minh1609"
                    />
                    <ContactCard
                        name="Send me a quick message"
                        icon="fas fa-comment-alt"
                        onClick={sendEmail}
                    />
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactHolder;

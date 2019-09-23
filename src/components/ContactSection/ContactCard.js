import React, { Component } from "react";

import Swal from "sweetalert2";

export class ContactCard extends Component {
    handleClick = async () => {
        if (this.props.action === "copy") {
            await navigator.clipboard.writeText(this.props.link);
            Swal.fire({
                type: "success",
                text: ` ${this.props.link} \n saved on your clipboard`,
                timer: 3000,
                toast: true,
                showConfirmButton: false
            });
        } else if (this.props.action === "open") {
            window.open(this.props.link);
        }
    };

    render() {
        return (
            <div className="btn contact-card" onClick={this.handleClick}>
                <i
                    style={{ fontSize: "25px", marginRight: "15px" }}
                    className={this.props.icon}
                />
                {this.props.name}
            </div>
        );
    }
}

export default ContactCard;

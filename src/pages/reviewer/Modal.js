import './modal.css';

import React, { Component } from 'react'

export default class Modal extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

        return (
            <div className={showHideClassName}>
        <section className="modal-main">
        <button style={{float: 'right', padding: '0.25em'}} type="button" onClick={this.props.handleClose}>
              Close
            </button>
            {this.props.children}
        </section>
        </div>
        )
    }
}

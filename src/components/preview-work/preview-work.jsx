import React, { Component } from 'react';
import './preview-work.css';

export default class PreviewWork extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="containerStyle">
                    <div class="overlay">
                        <img src={this.props.imgSrc} alt="kitchin" className="imageStyle" />
                    </div>
                    <div class="centered-text">
                        <p class="text"> {this.props.projectName} </p>
                        <p class="subtext"> {this.props.description} </p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

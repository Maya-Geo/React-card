import React, { Component } from 'react';

class Describe extends Component {
    render() {
        return (
            <div>
                <p className="c_describe">{this.props.describes}</p>
            </div>
        );
    }
}

export default Describe

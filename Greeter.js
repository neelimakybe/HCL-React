import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Greeter extends Component {


    render() {
        return (
            <p className="lead">{this.props.msg}</p>
        )
    }

}

Greeter.propTypes = {
    msg: PropTypes.string.isRequired
};

export default Greeter;

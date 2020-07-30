import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';

class Add extends Component {

    render() {
        return (
            <div className="container">
                <div className="jumbotron py-3">
                    <p className="h4 text-center mb-0">Add Employee</p>
                </div>

                <EmployeeForm />

            </div>
        );
    }
}

export default Add;
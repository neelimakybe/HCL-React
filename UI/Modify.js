import React, { Component } from 'react';
import EmployeeForm from './EmployeeForm';
import axios from 'axios';

class Modify extends Component {

    constructor() {
        super()
        this.state = {
            employeeIds: [],
            employee: undefined
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/get/ids")
            .then(res => {
                this.setState({
                    employeeIds: res.data,
                })
            })
    }

    mapIds() {
        const empIdList = this.state.employeeIds.map((employeeId, index) =>
            <button className="dropdown-item" onClick={() => this.getEmployee(employeeId)} key={index}>{employeeId}</button>
        )
        return empIdList
    }

    getEmployee(employeeId) {
        axios.get("http://localhost:8080/get/employee/" + employeeId)
            .then(res => {
                this.setState({
                    employee: res.data
                })
            })
    }

    render() {
        return (
            <div className="container">

                <div className="jumbotron py-3">
                    <p className="h4 text-center mb-0">Modify Employee</p>
                </div>

                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select Employee Id
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        {this.mapIds()}
                    </div>
                </div>

                <hr />

                <EmployeeForm employee={this.state.employee} />

            </div>
        );
    }
}

export default Modify;
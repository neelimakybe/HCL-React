import React, { Component } from 'react';
import axios from 'axios';

class View extends Component {

    componentDidMount() {
        axios.get("http://localhost:8080/all")
            .then(res => {
                this.setState({
                    employees: res.data,
                    spinnerFlag: false
                })
            })
    }

    constructor() {
        super()
        this.state = {
            employees: [],
            spinnerFlag: true
        }
    }

    mapEmployees() {
        const empList = this.state.employees.map((employee, index) =>
            <tr key={employee.id}>
                <th scope="row">{index + 1}</th>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.address}</td>
                <td>{employee.phone}</td>
                <td>{employee.gender}</td>
                <td>{employee.age}</td>
                <td>
                    <button className="btn" onClick={() => this.deleteEmployee(index)}>
                        <i className="fas fa-times text-danger"></i>
                    </button>
                </td>
            </tr>
        )
        return empList
    }

    deleteEmployee(index) {
        axios.delete("http://localhost:8080/delete/" + this.state.employees[index].id)
            .then(res => {
                if (res.data.queryStatus) {
                    var emps = this.state.employees
                    emps.splice(index, 1)
                    this.setState({
                        employees: emps
                    })
                }
            })
    }

    render() {
        return (
            <div className="container">
                <div className="jumbotron py-3">
                    <p className="h4 text-center mb-0">View Employees</p>
                </div>


                {(this.state.spinnerFlag) ?
                    <div className="d-flex justify-content-center my-3">
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div> : null
                }

                {(!this.state.spinnerFlag) ?
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Address</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Gender</th>
                                <th scope="col">Age</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.mapEmployees()}
                        </tbody>
                    </table>
                    : null
                }

            </div>
        );
    }
}

export default View;
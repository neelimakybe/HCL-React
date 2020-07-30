import React, { Component } from 'react';
import Employee from './model/Employee';
import axios from 'axios';

class EmployeeForm extends Component {

    employee: Employee

    componentDidMount() {
        this.employee = new Employee()
    }

    componentDidUpdate() {
        if (this.props.employee !== this.state.employee && this.props.employee !== undefined) {
            this.employee = this.props.employee
            this.setState({
                employee: this.props.employee
            })
        }
    }

    constructor() {
        super();
        this.employee = new Employee()
        this.state = {
            employee: this.employee,
            successFlag: false
        }
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.employee === undefined)
            axios.post("http://localhost:8080/add", this.state.employee)
                .then(response => {
                    this.setState({
                        successFlag: (response.status === 200) ? true : false
                    })
                    this.employee = new Employee()
                    this.setState({ employee: this.employee })
                })

        else {
            axios.put("http://localhost:8080/save", this.state.employee)
                .then(response => {
                    this.setState({
                        successFlag: (response.status === 200) ? true : false
                    })
                    this.employee = new Employee()
                    this.setState({ employee: this.employee })
                })
        }
    }

    handleEmailChange(event) {
        this.employee.email = event.target.value
        this.setState({
            employee: this.employee
        })
    }

    handleNameChange(event) {
        this.employee.name = event.target.value
        this.setState({
            employee: this.employee
        })
    }

    handleAddressChange(event) {
        this.employee.address = event.target.value
        this.setState({
            employee: this.employee
        })
    }

    handlePhoneChange(event) {
        this.employee.phone = event.target.value
        this.setState({
            employee: this.employee
        })
    }

    handleGenderChange(event) {
        this.employee.gender = event.target.value
        this.setState({
            employee: this.employee
        })
    }

    handleAgeChange(event) {
        this.employee.age = event.target.value
        this.setState({
            employee: this.employee
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <fieldset>
                        <div className="form-group">
                            <label>Email</label>
                            <input type="text" className="form-control" placeholder="Enter email" value={this.state.employee.email} onChange={(event) => this.handleEmailChange(event)} />
                        </div>
                        <div className="form-group">
                            <label>Name</label>
                            <input type="text" className="form-control" placeholder="Enter name" value={this.state.employee.name} onChange={(event) => this.handleNameChange(event)} />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <textarea className="form-control" placeholder="Enter address" value={this.state.employee.address} onChange={(event) => this.handleAddressChange(event)} rows="3" />
                        </div>
                        <div className="form-group">
                            <label>Phone No.</label>
                            <input type="text" className="form-control" placeholder="Enter phone no." value={this.state.employee.phone} onChange={(event) => this.handlePhoneChange(event)} />
                        </div>
                        <div className="form-group">
                            <label>Age</label>
                            <input type="text" className="form-control" placeholder="Enter age" onChange={(event) => this.handleAgeChange(event)} value={this.state.employee.age} />
                        </div>
                        <div className="form-group mb-2">
                            <label>Gender</label>
                        </div>
                        <div className="form-group">
                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={(event) => this.handleGenderChange(event)} value="Male" checked={this.state.employee.gender === "Male"} />
                                <label className="form-check-label" >Male</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name="inlineRadioOptions" onChange={(event) => this.handleGenderChange(event)} value="Female" checked={this.state.employee.gender === "Female"} />
                                <label className="form-check-label">Female</label>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </fieldset>
                </form>
                {
                    (this.state.successFlag && this.props.employee === undefined) ?
                        <div className="alert alert-success mt-3" role="alert">
                            Employee added successfully.
                        </div>
                        : null
                }

                {
                    (this.state.successFlag && this.props.employee !== undefined) ?
                        <div className="alert alert-success mt-3" role="alert">
                            Employee updated successfully.
                        </div>
                        : null
                }
            </div>
        );
    }
}



export default EmployeeForm;
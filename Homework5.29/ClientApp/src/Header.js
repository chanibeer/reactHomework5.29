import React from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-2">
                    <input value={this.props.firstName} onChange={this.props.firstNameTextChange}
                        type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-2">
                    <input value={this.props.lastName} onChange={this.props.lastNameTextChange}
                        type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md-2">
                    <input value={this.props.age} onChange={this.props.ageTextChange}
                        type="text" className="form-control" placeholder="Age" />
                </div>
                <div className="col-md-1">
                    <button onClick={this.props.submitClick} className="btn btn-primary">Add Person</button>
                    <button onClick={this.props.clearTable} className="btn btn-warning">Clear Table</button>
                </div>
            </div>
            );
    }
}
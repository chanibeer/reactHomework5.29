import React from 'react';

export default class PeopleList extends React.Component {

    render() {
        const { people } = this.props;
        return (
            <div>
                <table className='table table-bordered'>
                    <tbody>
                        <tr>
                            <td>First Name</td>
                            <td>Last Name</td>
                            <td>Age</td>
                        </tr>


                        {people.map((p, idx) =>
                            <tr key={idx}>
                                <td>{p.firstName}</td>
                                <td>{p.lastName}</td>
                                <td>{p.age}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}

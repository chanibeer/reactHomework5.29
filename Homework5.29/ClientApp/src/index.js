import react from 'react';
import { render } from 'react-dom';
import Header from './Header';
import PeopleList from './PeopleList';

class App extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    onFirstNameTextChange = e => {
        this.setState({ firstName: e.target.value });
    }

    onLastNameTextChange = e => {
        this.setState({ lastName: e.target.value });
    }

    onAgeTextChange = e => {
        this.setState({ age: e.target.value });
    }

    onSubmitClick = () => {
        const copy = [...this.state.people];
        const { firstName, lastName, age } = thsi.state;
        const person = { firstName, lastName, age };
        copy.push(person);
        this.setState({ people: copy });
        this.clearTextBoxes;
    }

    clearTextBoxes = () => {
        this.setState({ firstName: '', lastName: '', age: '' });
    }

    clearTable = () => {
        this.setState({ people: [] });
    }

    render() {
        return (
            <div className="container" style={{ marginTop: 40 }}>
                <Header
                    firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.lastName} age={this.state.age}
                    firstnameTextChange={this.onFirstNameTextChange} lastNameTextChange={this.onLastNameTextChange} ageTextChange={this.onAgeTextChange}
                    submitClick={this.onSubmitClick} clearTable={this.clearTable} />
                <PeopleList people={this.state.people} />
            </div>
        );
    }
}


render(<App />, document.getElementById('root'));
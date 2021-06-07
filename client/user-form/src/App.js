import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            quantity: 0,
            colors: [],
            'mailing-list': false,
        }
    }

    stateJson = () => {
        return JSON.stringify(this.state);
    };
    
    updateField = (event, value) => {
        const { target } = event;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render () {
        return (
            <div className="App">
                <Input label="Your username" name="username" onChange={this.updateField} />
                <NumericInput label="Quantity" name="quantity" onChange={this.updateField} />
                <ColorsInput label="colors used" name="colors" onChange={this.updateField} />
                <CheckboxInput label="Join our mailing list" name="mailing-list" onChange={this.updateField} />

                <div className="App-field">
                    <button className="App-button">Send</button>
                </div>
                <div className="App-field">
                    <textarea className="App-json" value={this.stateJson()} readOnly></textarea>
                </div>
            </div>
        );
    }
}

class Input extends Component {
    fieldId() {
        return `field-${this.props.name}`;
    }

    field() {
        return (
            <input
            id={this.fieldId()}
            type="text"
            name={this.props.name}
            onChange={this.onChange} />
        );
    }

    onChange = (event) => {
        this.props.onChange(event, this.value(event.target));
    }

    value(target) {
        return target.value;
    }

    render() {
        return (
            <div className="App-field">
                <label
                    className="App-label"
                    htmlFor={this.fieldId()}>
                    {this.props.label}
                </label>
                {this.field()}
            </div>
        );
    }
}

class NumericInput extends Input {
    field() {
        return (
            <input
            id={this.fieldId()}
            type="number"
            name={this.props.name}
            onChange={this.onChange} />
        );
    }

    value(target) {
        return parseInt(target.value, 10);
    }
}

class CheckboxInput extends Input {
    field() {
        return (
            <input
            id={this.fieldId()}
            type="checkbox"
            name={this.props.name}
            onChange={this.onChange} />
        );
    }
    
    value(target) {
        return target.checked;
    }
}

class ColorsInput extends Input {
    field() {
        return (
            <select
                id={this.fieldId()}
                className="App-multi-select"
                name={this.props.name}
                onChange={this.onChange}
                multiple
            >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
            </select>
        );
    }

    value(target) {
        const value = [];
        
        Array.prototype.forEach.call(target.options, options => {
            if (options.selected) value.push(options.value);
        });

        return value;
    }
}

export default App;

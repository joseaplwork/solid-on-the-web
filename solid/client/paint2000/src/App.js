import { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            colorData: []
        };

        this.fetchColorData();
    }

    async fetchColorData() {
        const res = await fetch('http://paintjs2000.com/colors', {
            mode: 'cors', headers: { 'Content-Type': 'application/json' }
        });

        const payload = await res.json();

        this.setState({
            colorData:payload.colors
        });
    }
    
    updateColorCount = async (id, count) => {
        await fetch(`http://paintjs2000.com/colors/${id}`, {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ count })
        });

        this.setState({
            colorData: this.state.colorData.map((origin) => {
                const updatedCount = origin.id === id ? count : origin.count;

                return {
                    id: origin.id,
                    color: origin.color,
                    count: updatedCount
                };
            })
        })
    }

    render () {
        const { colorData } = this.state;
        const hashData = colorData.length > 0;

        return (
            <div className="color-ap">
                { !hashData && <p>Loading data...</p> }
                { hashData && <ColorRowGroup colorData={ colorData } update={this.updateColorCount} /> }
            </div>
        );
    }
}

class ColorRowGroup extends Component {
    render() {
        <div className="color-row-group">
            {this.props.colorData.map(({ id, color, count }) => {
                return <ColorRow id={id} color={color} count={count} update={this.props.update} />;
            })}
        </div>
    }
}

class ColorRow extends Component {
    decrement(num) {
        const newCount = this.props.count - num;
        
        return () => {
            this.props.update(this.props.id, newCount);
        }
    }

    render() {
        const { color, count } = this.props;

        return (
            <div className="color-row">
                <span className="text">{color}: {count}</span>
                {count >= 1 && <button onClick={this.decrement(1)}>Use 1 Paint</button>}
                {count >= 5 && <button onClick={this.decrement(5)}>Use 5 Paint</button>}
            </div>
        )
    }
}

export default App;
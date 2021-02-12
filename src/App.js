import React, {Component} from 'react';
import {Button, Container} from 'reactstrap';

class App extends Component {
    state = {
        counter: 0,
    };

    increaseCounterByOne = () => {
        this.setState({counter: this.state.counter + 1});
    };
    decreaseCounterByOne = () => {
        this.setState({
            counter: this.state.counter - 1,
        });
    };
    increaseCounterByFive = () => {
        this.setState({
            counter: this.state.counter + 5,
        });
    };
    decreaseCounterByFive = () => {
        this.setState({
            counter: this.state.counter - 5,
        });
    };
    multiplyByTen = () => {
        this.setState({
            counter: this.state.counter * 10,
        });
    };
    divideByTen = () => {
        this.setState({
            counter: this.state.counter / 10,
        });
    };
    render() {
        if (this.state.counter <= 0) {
            this.state.counter = 0;
        }
        return (
            <Container className="d-flex flex-lg-wrap justify-content-around text-center mt-2 d-flex justify-content-between">
                <div className="col-12 mt-2">
                    {this.state.counter}
                </div>
                <Button className="col-4 m-2" color="info" onClick={this.increaseCounterByOne}>
                    increase by 1
                </Button>
                <Button className="col-4 m-2" color="danger" onClick={this.decreaseCounterByOne}>
                    decrease by 1
                </Button>
                <Button className="col-4 m-2" color="info" onClick={this.increaseCounterByFive}>
                    increase by 5
                </Button>
                <Button className="col-4 m-2" color="danger" onClick={this.decreaseCounterByFive}>
                    decrease by 5
                </Button>
                <Button className="col-4 m-2" color="info" onClick={this.multiplyByTen}>
                    multiply by 10
                </Button>
                <Button className="col-4 m-2" color="danger" onClick={this.divideByTen}>
                    divide by 10
                </Button>
            </Container>
        );
    }
}

export default App;

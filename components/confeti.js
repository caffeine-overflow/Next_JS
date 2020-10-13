import React, { Component } from 'react'
import Confetti from 'react-dom-confetti';

const config = {
    angle: 90,
    spread: 150,
    startVelocity: 40,
    elementCount: "200",
    dragFriction: 0.12,
    duration: "7000",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#161748", "#DAA520"]
};

class confeti extends Component {

    constructor() {
        super();
        this.state = {
            fire: false
        };
    }

    componentDidMount() {
        this.setState({ fire: true })
    }

    render() {
        let { fire } = this.state;
        return <Confetti active={fire} config={config} />
    }
}

export default confeti;
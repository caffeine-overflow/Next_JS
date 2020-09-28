import React, { Component } from 'react'
import Confetti from 'react-dom-confetti';

const delay = ms => new Promise(res => setTimeout(res, ms));
const config = {
    angle: 90,
    spread: 115,
    startVelocity: 40,
    elementCount: "200",
    dragFriction: 0.12,
    duration: "3000",
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

class confeti extends Component {

    constructor() {
        super();
        this.state = {
            fire: false
        };
    }

    componentDidMount = async () => {
        await delay(2000);
        this.setState({ fire: true })
    }

    render() {
        let { fire } = this.state;
        return <Confetti active={fire} config={config} />
    }
}

export default confeti;
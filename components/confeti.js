import React, { Component } from 'react'
import Confetti from 'react-confetti'

class confeti extends Component {

    constructor() {
        super();
        this.state = {
            width: 0
        };
    }

    componentDidMount() {
        const width = window.innerWidth;
        this.setState({ width })
    }

    render() {
        let { width } = this.state;
        return (
            <div>
                {
                    width > 600 &&
                    <Confetti
                        width={width}
                        height={1500}
                        recycle={false}
                        numberOfPieces={1000}
                        gravity={0.2}
                    />
                }
            </div>
        );
    }
}

export default confeti;
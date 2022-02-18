import React, { Component } from 'react';
import ReactScrollWheelHandler from 'react-scroll-wheel-handler';

class Test extends React.Component {
    state = {
        currentIndex: 0,
        colors: ['red', 'black', 'grey', 'blue', 'green'],
    };
    nextIndex = () => {
        const { colors, currentIndex } = this.state;
        if (currentIndex == colors.length - 1) {
            return this.setState({ currentIndex: 0 });
        }

        return this.setState({
            currentIndex: currentIndex + 1,
        });
    };

    prevIndex = () => {
        const { colors, currentIndex } = this.state;
        if (currentIndex == 0) {
            return this.setState({
                currentIndex: colors.length - 1,
            });
        }

        return this.setState({
            currentIndex: currentIndex - 1,
        });
    };

    render() {
        const { colors, currentIndex } = this.state;
        return (
            <div>
                <ReactScrollWheelHandler
                    upHandler={this.prevIndex}
                    downHandler={this.nextIndex}
                    leftHandler={() => console.log('Left')}
                    rightHandler={() => console.log('right')}
                    style={{
                        width: '100%',
                        height: '100vh',
                        backgroundColor: colors[currentIndex],
                        transition: 'background-color .4s ease-out',
                    }}
                >
                    <h1>SCROLL FOR CHANGE BACKGROUND COLOR</h1>
                </ReactScrollWheelHandler>
            </div>
        );
    }
}
export default Test;

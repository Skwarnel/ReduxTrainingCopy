import React from "react";
/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

function withTimer(WrappedComponent, counter) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                counter: counter,
            };
            this.startTimer = this.startTimer.bind(this);
            this.stopTimer = this.stopTimer.bind(this);
        }

        startTimer() {
            console.log(this);
            this.intervalId = setInterval( () => {
                this.setState(prevState => ({
                    counter: prevState.counter + 1,
                }));
            }, 1000);
        }
        stopTimer() {
            this.setState(prevState => ({
                counter: 0
            }));
            clearInterval(this.intervalId);
        }

        render() {
            return (
                <WrappedComponent startTimer={this.startTimer} stopTimer={this.stopTimer} counter={this.state.counter} {...this.props}
                />
            );
        }
    };
}

export default withTimer;
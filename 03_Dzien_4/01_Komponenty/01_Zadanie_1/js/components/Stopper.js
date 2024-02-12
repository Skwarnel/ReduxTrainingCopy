import React from "react";
import withTimer from "../hoc/withTimer";

// Zamień ciało funkcji tak aby renderowała Stopper wg. treści zadania
const Stopper = ({children, counter, startTimer, stopTimer}) => {
    return (
        <>
            <button onClick={() => startTimer()}>start</button>
            <button onClick={() => stopTimer()}>stop</button>
            <p>{counter}</p>
            <div>{children}</div>
        </>
    );
};

// Zamień deklarację komponentu poniżej tak aby korzystał z wczesniej zamiplementowanego HOC withTimer
const StopperWithTimer = withTimer(Stopper, 0);

export {StopperWithTimer};

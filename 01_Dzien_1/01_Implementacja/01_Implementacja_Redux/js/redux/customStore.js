/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
const createStore = (reducerFunction, initState) => {
    let currentState = initState;
    let listeners = [];
    return {
        dispatch(action) {
            currentState = reducerFunction(currentState, action);

        listeners.forEach( (listenerFunction) => listenerFunction());
        },
        getState() {
            return currentState;
        },
        subscribe(listener) {
            listeners.push(listener);
            return function() {
                listeners = listeners.filter( (currentListener) => currentListener !== listener);
            };
        }
    };
};

export { createStore };

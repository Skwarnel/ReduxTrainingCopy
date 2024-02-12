import { createStore } from "./redux/customStore";
import { increment, decrement } from "./redux/actions/counterActions";
import { counterReducer } from "./redux/reducers/counter";

export default function () {
    const store = createStore(counterReducer, { counter: 0 });

    const listenChanges = () => {
        const state = store.getState();
        console.log(`from subscribe ${state.counter}`);
    };

    store.subscribe(listenChanges);
    store.dispatch(increment(5));
    store.dispatch(decrement(2));
    const unsub = store.subscribe(listenChanges);
    unsub();
    store.dispatch(decrement(2));
    console.log(store.getState().counter);
}
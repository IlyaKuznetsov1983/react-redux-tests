import React from 'react';
import {createRoot} from "react-dom/client";
import {createStore, bindActionCreators} from "redux";
import {counterReducer} from './reducers/reducer';
import Counter from "./components/Counter";
import * as actions from './actions/action';

const store = createStore(counterReducer)
const {dispatch} = store
const {inc, dec, rnd} = bindActionCreators(actions, dispatch)

const payload = Math.floor(Math.random() * 11)

const root = createRoot(document.getElementById('root'));

root.render(<Counter
    counter={store.getState()}
    inc={inc}
    dec={dec}
    rnd={() => rnd(payload)}

/>);

const update = () => {

}

store.subscribe(update)







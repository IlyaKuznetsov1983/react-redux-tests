import React from 'react';
import {createRoot} from "react-dom/client";
import {createStore, bindActionCreators} from "redux";
import {counterReducer} from './reducers/reducer';
import {Provider} from "react-redux";
import Counter from "./components/Counter";


const root = createRoot(document.getElementById('root'));

const store = createStore(counterReducer)



    root.render(
        <Provider store={store}>
            <Counter/>
        </Provider>
    );







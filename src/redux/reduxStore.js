import { combineReducers, legacy_createStore as createStore } from 'redux';
import { profileReducer } from './profileReducer';
import { messageReducer } from './messageReducer';


let reducers = combineReducers({
    profileReducer,
    messageReducer,
});

export let store = createStore(reducers);


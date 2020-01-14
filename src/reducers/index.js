import { combineReducers } from 'redux';

import appInit from './appInit';
import todos from './todos';

const rootReducer = combineReducers({ appInit, todos });

export default rootReducer;

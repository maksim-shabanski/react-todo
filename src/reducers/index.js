import { combineReducers } from 'redux';

import appInit from './appInit';
import tasks from './tasks';

const rootReducer = combineReducers({ appInit, tasks });

export default rootReducer;

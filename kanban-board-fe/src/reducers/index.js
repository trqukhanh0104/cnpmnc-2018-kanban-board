import { combineReducers } from 'redux';
import user from './user'
import tasks from './tasks'
// import LibraryReducer from './LibraryReducer';
// import SelectionReducer from './SelectionReducer';

export default combineReducers({
	user,
	tasks
});

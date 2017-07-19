import { combineReducers } from 'redux';
import reducerButton from './reducerButton';
import reducerInput from './reducerInput';

const rootReducer = combineReducers({
	reducerButton,
	reducerInput
});

export default rootReducer;

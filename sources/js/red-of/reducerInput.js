import {K_DOWN, K_UP} from './Input';

const initialState = {
	kDown: 0,
	kUp: 0
};

function reducerInput(state = initialState, action){
	switch(action.type){
		case K_DOWN:
			return {...state, kDown: state.kDown+1};
		case K_UP:
			return {...state, kUp: state.kUp+1};
		default:
			return state;
	}
}

export default reducerInput;

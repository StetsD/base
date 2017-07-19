import {M_CLICK, M_DOWN, M_UP} from './Button';

const initialState = {
	mCLick: 0,
	mDown: 0,
	mUp: 0
};

function reducerButton(state = initialState, action){
	switch(action.type){
		case M_CLICK:
			return {...state, mCLick: state.mCLick+1};
		case M_DOWN:
			return {...state, mDown: state.mDown+1};
		case M_UP:
			return {...state, mUp: state.mUp+1};
		default:
			return state;
	}
}

export default reducerButton;

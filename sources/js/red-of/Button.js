export const M_CLICK = 'M_CLICK';
export const M_UP = 'M_UP';
export const M_DOWN = 'M_DOWN';

export function mClick(data){
	return {
		type: M_CLICK,
		payload: {
			data
		}
	}
}
export function mDown(data){
	return {
		type: M_DOWN,
		payload: {
			data
		}
	}
}
export function mUp(data){
	return {
		type: M_UP,
		payload: {
			data
		}
	}
}

export class Button {
	constructor(props){
		this.$elem = $(props.elem)
		this.store = props.store;
	}


	_handleMouseDown(){
		this.store.dispatch(mDown('somedata'));
	}

	_handleMouseUp(){
		this.store.dispatch(mUp('somedata'));
	}

	_handleClick(){
		this.store.dispatch(mClick('somedata'));
	}

	init(){
		this.$elem.on('click', ()=>{
			this._handleClick();
		});

		this.$elem.on('mousedown', ()=>{
			this._handleMouseDown();
		});

		this.$elem.on('mouseup', ()=>{
			this._handleMouseUp();
		});
	}
}

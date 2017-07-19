export const K_UP = 'K_UP';
export const K_DOWN = 'K_DOWN';

export function kDown(data){
	return {
		type: K_DOWN,
		payload:{
			data
		}
	}
}
export function kUp(data){
	return {
		type: K_UP,
		payload:{
			data
		}
	}
}

export class Input {
	constructor(props){
		this.$elem = $(props.elem)
		this.store = props.store;
	}


	_handleKeyup(){
		this.store.dispatch(kUp('somedata'));
	}

	_handleKeydown(){
		this.store.dispatch(kDown('somedata'));
	}

	init(){
		this.$elem.on('keydown', ()=>{
			this._handleKeydown();
		});

		this.$elem.on('keyup', ()=>{
			this._handleKeyup();
		});
	}
}

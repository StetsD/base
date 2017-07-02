class Originator {
    constructor() {
        console.log('Originator created')
        this.state = 'a';
        console.log('State= ' + this.state)
    }

    SetMemento (Memento){
        this.state = Memento.GetState()
        console.log('State= ' + this.state)
    }

    CreateMemento (state){
        return new Memento(state);
    }
}

class Memento {
    constructor(state) {
        this.state = state
        console.log('Memento created. State= ' + this.state)
    }

    GetState (){
        return this.state;
    }

    SetState (state){
        this.state = state;
    }
}

class Caretaker {
    constructor() {
        console.log('Caretaker created')
        this.mementos = []
    }

    AddMemento(memento) {
        console.log('Caretaker AddMemento')
        this.mementos.push(memento)
    }

    SetMemento() {
        return this.mementos[this.mementos.length-1]
    }
}

function init_Memento() {
    let caretaker = new Caretaker()
    let originator = new Originator()
    caretaker.AddMemento(originator.CreateMemento('b'))
    originator.SetMemento(caretaker.SetMemento())
    console.log(originator.state)
}

init_Memento();
class Contextt {
    constructor(state) {
        switch(state) {
            case "A":
                this.state = new ConcreteStateA()
                break
            case "B":
                this.state = new ConcreteStateB()
                break
            default:
                this.state = new ConcreteStateA()
        }
    }

    Request (){
        this.state.Handle(this);
    }
}

class State {
    constructor() {
    }

    Handle (){
    }
}

class ConcreteStateA extends State {
    constructor() {
        super()
        console.log('ConcreteStateA created')
    }

    Handle (context){
        console.log('ConcreteStateA handle')
    }
}

class ConcreteStateB extends State {
    constructor() {
        super()
        console.log('ConcreteStateB created')
    }

    Handle (context){
        console.log('ConcreteStateB handle')
    }
}

function init_State() {
    let context = new Contextt("A")
    context.Request()
}

init_State();
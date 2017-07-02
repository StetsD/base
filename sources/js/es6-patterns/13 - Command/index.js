class Invoker {
    constructor() {
        console.log('Invoker created')
    }

    StoreCommand(command) {
        this.command = command
    }
}

class Command {
    constructor() {
    }

    Execute() {
    }
}

class ConcreteCommand extends Command {
    constructor(receiver, state) {
        super()
        this.receiver = receiver
        console.log('ConcreteCommand created')
    }
    
    Execute() {
        console.log('ConcreteCommand Execute')
        this.receiver.Action();
    }
}

class Receiver {
    constructor() {
        console.log('Receiver created')
    }

    Action() {
        console.log('Receiver Action')
    }
}


function init_Command() {
    var invoker = new Invoker()
    var receiver = new Receiver()
    var command = new ConcreteCommand(receiver)
    invoker.StoreCommand(command)
    invoker.command.Execute()
}

init_Command();
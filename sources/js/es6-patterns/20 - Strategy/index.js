class Contexttt {
    constructor(type){
        switch(type) {
            case "A":
                this.strategy = new ConcreteStrategyA()
                break
            case "B":
                this.strategy = new ConcreteStrategyB()
                break
            default:
                this.strategy = new ConcreteStrategyA()
        }
    }

    ContextInterface (){
        this.strategy.AlgorithmInterface()
    }
}

class Strategy {
    constructor() {
    }

    AlgorithmInterface (){
    }
}

class ConcreteStrategyA extends Strategy{
    constructor() {
        super()
        console.log('ConcreteStrategyA created')
    }

    AlgorithmInterface (){
        console.log('ConcreteStrategyA algorithm')
    }
}

class ConcreteStrategyB extends Strategy{
    constructor() {
        super()
        console.log('ConcreteStrategyB created')
    }

    AlgorithmInterface (){
        console.log('ConcreteStrategyB algorithm')
    }
}

function init_Strategy() {
    let contextA = new Contexttt("A")
    contextA.ContextInterface()
    let contextB = new Contexttt("B")
    contextB.ContextInterface()
}

init_Strategy();
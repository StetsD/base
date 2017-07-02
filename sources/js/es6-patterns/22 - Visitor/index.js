class Visitor {
    constructor() {
    }

    VisitConcreteElementA (ConcreteElementA){
    }

    VisitConcreteElementB (ConcreteElementB){
    }  
}

class ConcreteVisitor1 extends Visitor {
    constructor() {
        super()
        console.log("ConcreteVisitor1 created");
    }

    VisitConcreteElementA (ConcreteElementA){
        console.log("ConcreteVisitor1 visited ConcreteElementA");
    }

    VisitConcreteElementB (ConcreteElementB){
        console.log("ConcreteVisitor1 visited ConcreteElementB");
    }  
}

class ConcreteVisitor2 extends Visitor {
    constructor() {
        super()
        console.log("ConcreteVisitor2 created");
    }

    VisitConcreteElementA (ConcreteElementA){
        console.log("ConcreteVisitor2 visited ConcreteElementA");
    }

    VisitConcreteElementB (ConcreteElementB){
        console.log("ConcreteVisitor2 visited ConcreteElementB");
    }  
}

class ObjectStructure {
    constructor() {
        console.log("ObjectStructure created");
    }
}

class Element {
    constructor() {
    }

    Accept (visitor){
    }
}

class ConcreteElementA extends Element {
    constructor() {
        super()
        console.log("ConcreteElementA created");
    }

    Accept (visitor){
        visitor.VisitConcreteElementA(this);
    }

    OperationA (){
        console.log("ConcreteElementA OperationA");  
    }
}

class ConcreteElementB extends Element {
    constructor() {
        super()
        console.log("ConcreteElementB created");
    }

    Accept (visitor){
        visitor.VisitConcreteElementB(this);
    }

    OperationB (){
        console.log("ConcreteElementB OperationB");  
    }
}


function init_Visitor() {
    let visitor1 = new ConcreteVisitor1();
    let visitor2 = new ConcreteVisitor2();
    let elementA = new ConcreteElementA();
    let elementB = new ConcreteElementB();
    elementA.Accept(visitor1);
    elementB.Accept(visitor2);
}

init_Visitor();
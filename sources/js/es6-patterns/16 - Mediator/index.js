//Посредник между частями\компонентами приложения
//Уменьшает между ними прямые связи
//Выполняет ф-ию контроллёра

class Mediator {
    constructor() {
    }

    ColleagueChanged(colleague) {

    }
}

class ConcreteMediator extends Mediator {
    constructor() {
        super()
        console.log('ConcreteMediator created')
        this.colleague1 = new ConcreteColleague1(this)
        this.colleague2 = new ConcreteColleague2(this)
    }

    ColleagueChanged(colleague) {
        switch(colleague) {
            case this.colleague1:
                console.log('ConcreteColleague1 has Changed -> change ConcreteColleague2.feature: ')
                this.colleague2.setFeature('new feature 2')
                break
            case this.colleague2:
                console.log('ConcreteColleague2 has Changed, but do nothing')
                break
            default:
                console.log('Do nothing')
        }
    }
}

class Colleague {
    constructor() {
    }

    Changed() {
        this.mediator.ColleagueChanged(this)
    }
}

class ConcreteColleague1 extends Colleague {
    constructor(mediator) {
        super()
        console.log('ConcreteColleague1 created')
        this.mediator = mediator
        this.feature = "feature 1"
    }

    setFeature(feature) {
        console.log('ConcreteColleague1 Feature has changed from ' + this.feature + ' to ' + feature)
        this.feature = feature
        this.Changed()
    }
}
class ConcreteColleague2 extends Colleague {
    constructor(mediator) {
        super()
        console.log('ConcreteColleague2 created')
        this.mediator = mediator
        this.feature = "feature 2"
    }

    setFeature(feature) {
        console.log('ConcreteColleague2 Feature has changed from ' + this.feature + ' to ' + feature)
        this.feature = feature
        this.Changed()
    }
}


function init_Mediator() {
    var mediator = new ConcreteMediator()
    mediator.colleague1.setFeature("new feature 1")
}

init_Mediator();
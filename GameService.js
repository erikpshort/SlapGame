function GameService() {

    
    this.target = new Targets(150, 'Mario', 150, 1, 5, 10, 30)
    
    this.items = {
        shield: new Obj("Shield", -0.3, "This is an awesome shield!"),
        star: new Obj("Throwing Star", 1, "This is an awesome star!"),
        lightning: new Obj("lightning Bolt", 1.5, "This is an awesome lightning Bolt!"),

    }

    function Targets(health, name, start, slap, punch, kick, special) {
        this.health = health;
        this.name = name;
        this.attacks = {
            'slap': slap,
            'punch': punch,
            'kick': kick,
            'special': special,

        };
        this.hits = 0;
        this.items = [];
        this.start = start;
    };

    function Obj(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    }

this.attack = function(type, target){
    target.health -= target.attacks[type] * this.calcMods(target)
    target.hits += 1

}

this.addMod = function(target, mod) {
    if (this.target.items.length = 0) {
        this.target.items.push(this.items[mod])
    } else if (target.items.length = 1) {
        this.target.items.pop()
        this.target.items.push(this.items[mod])
    }
}

this.calcMods = function(target) {
    var value = 1
    for (var i = 0; i < target.items.length; i++) {
        var mod = target.items[i];
        value += mod.modifier

    } return value
}

this.handleReset = function(target) {
    var health = this.target.health = this.target.start
    var items = this.target.items = []
    var hits = this.target.hits = 0

    return health, hits, items
}

this.getTarget = function(target){
    var copy = Object.assign({}, target);
    return copy
}



}
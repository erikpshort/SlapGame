function GameService() {
    var dataStore = this
    var robot = new Targets(150, 'Mario', 0, 150)

    function Target(health, name, hits, start) {
        this.health = health;
        this.name = name;
        this.hits = 0;
        this.items = [];
        this.start = start;
        this.attacks = {
            'slap': slap,
            'punch': punch,
            'kick': kick
        };
    };

    function Obj(name, modifier, description) {
        this.name = name;
        this.modifier = modifier;
        this.description = description;
    };

    var items = {
        shield: new Obj("Shield", -0.3, "This is an awesome shield!"),
        star: new Obj("Throwing Star", 1, "This is an awesome star!"),
        lightning: new Obj("lightning Bolt", 1.5, "This is an awesome lightning Bolt!"),

    }

}
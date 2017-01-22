
function onSlap(target) {
    target.health = target.health - 1 * this.calcMods(target)
    target.hits = target.hits + 1  
    
    update(target)
}
function onPunch(target) {
    target.health = target.health - 5 * this.calcMods(target)
    target.hits = target.hits + 1
    update(target)
}
function onKick(target) {
    target.health = target.health - 10 * this.calcMods(target)
    target.hits = target.hits + 1
    update(target)
}
function onSpecial(target){
    target.health = target.health - 30 * this.calcMods(target)
    target.hits = target.hits + 1
    update(target)
}
function update(target) {
    if (target.health >= 0/* && target.hits <= 100*/) {
        document.getElementById('hits').innerText = target.hits;
        document.getElementById('health').innerText = target.health.toFixed(1)
        
    } else if (target.health < 0/* && hits > 100*/) {
        document.getElementById('health').innerText = 0;
        document.getElementById('corpse').innerHTML = '<h1>' + target.name + ' is down</h1>'
    }

}



var Targets = function(health, name, hits){
	this.health = health;
	this.name = name;
	this.hits = 0;
    this.items = []
}

var Obj = function(name, modifier,description){
	this.name = name;
	this.modifier = modifier;
	this.description = description;
}
// var health = 100
// var name = 'The Dude'
// var hits = 0

var items = {
	shield:new Obj("Shield",-0.3,"This is an awesome shield!"),
    star:new Obj("Throwing Star",1,"This is an awesome star!"),
    lightning:new Obj("lightning Bolt",1.5,"This is an awesome lightning Bolt!"),

}
var robot = new Targets(100, 'The Dude', 0)
//{items:[items.shield, items.star, items.lightning]}

function addMod(target, mod){
    target.items.push(items[mod])

}

function calcMods(target){
    var value = 1
    for (var i = 0; i < target.items.length; i++) {
        var mod = target.items[i];
        value += mod.modifier
        
    }return value
}

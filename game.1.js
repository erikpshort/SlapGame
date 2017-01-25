
function onSlap(target) {
    target.health = (target.health - Math.floor((Math.random()*3)+ 1)) * this.calcMods(target)
    target.hits = target.hits + 1

    update(target)
    progressBar(target)
}
function onPunch(target) {
    target.health = (target.health - Math.floor((Math.random()*6)+ 1)) * this.calcMods(target)
    target.hits = target.hits + 1
    update(target)
    progressBar(target)
}
function onKick(target) {
    target.health =(target.health - Math.floor((Math.random()*12)+ 1)) * this.calcMods(target)
    target.hits = target.hits + 1
    update(target)
    progressBar(target)
}
function onSpecial(target) {
    target.health = (target.health - Math.floor((Math.random()*25)+ 1)) * this.calcMods(target)
    target.hits = target.hits + 1
    update(target)
    progressBar(target)
}
function update(target) {
    if (target.health > 0/* && target.hits <= 100*/) {
        document.getElementById('hits').innerText = target.hits;
        document.getElementById('health').innerText = target.health.toFixed(1);
        document.getElementById('corpse').innerHTML = "";


    } else if (target.health <= 0/* && hits > 100*/) {
        document.getElementById('health').innerText = 0;
        document.getElementById('corpse').innerHTML = '<h1>' + target.name + ' is down</h1>';
        progressBar(target)
        background(target)
    }

}

function progressBar(target) {
    if (((target.health / target.start) * 100) <= 100 && ((target.health / target.start) * 100) >= 50) {
        document.getElementById('progress').innerHTML = '<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((target.health / target.start) * 100) + '%; height:2.5%;">Life</div>'
        background(target)
    } else if (((target.health / target.start) * 100) < 50 && ((target.health / target.start) * 100) >= 25) {
        document.getElementById('progress').innerHTML = '<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((target.health / target.start) * 100) + '%; height:2.5%;">Life</div>'
        background(target)
    } else if (((target.health / target.start) * 100) < 25) {
        document.getElementById('progress').innerHTML = '<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((target.health / target.start) * 100) + '%; height:2.5%;">Life</div>'
        background(target)
    }
}


var Targets = function (health, name, hits, start) {
    this.health = health;
    this.name = name;
    this.hits = 0;
    this.items = []
    this.start = start
}

var Obj = function (name, modifier, description) {
    this.name = name;
    this.modifier = modifier;
    this.description = description;
}

var items = {
    shield: new Obj("Shield", -0.3, "This is an awesome shield!"),
    star: new Obj("Throwing Star", 1, "This is an awesome star!"),
    lightning: new Obj("lightning Bolt", 1.5, "This is an awesome lightning Bolt!"),

}
var robot = new Targets(150, 'Mario', 0, 150)
//{items:[items.shield, items.star, items.lightning]}

function addMod(target, mod) {
    if (target.items.length = 0){
    target.items.push(items[mod])
    }else if(target.items.length = 1){
        target.items.pop()
        target.items.push(items[mod])
    }
}

function calcMods(target) {
    var value = 1
    for (var i = 0; i < target.items.length; i++) {
        var mod = target.items[i];
        value += mod.modifier

    } return value
}

function handleReset(target) {
    var health = robot.health = robot.start
    var items = robot.items = []
    var hits = robot.hits = 0
    update(target)
    progressBar(target)
    background(target)

    return health, hits, items
}
// function move() {
//     var elem = document.getElementById("myBar");
//     var width = 1;
//     var id = setInterval(frame, 10);
//     function frame() {
//         if (width >= 100) {
//             clearInterval(id);
//         } else {
//             width++;
//             elem.style.width = width + '%';
//         }
//     }
// }

function background(target) {
    if (((target.health / target.start) * 100) <= 100 && ((target.health / target.start) * 100) >= 50) {
        document.getElementById('background').innerHTML = 'body {background:url("mario-gif-start.gif") center;background-repeat:no-repeat;}'
    } else if (((target.health / target.start) * 100) < 50 && ((target.health / target.start) * 100) >= 25) {
        document.getElementById('background').innerHTML = 'body {background:url("mario-2.jpg") center;	background-repeat:no-repeat;}'
    } else if (((target.health / target.start) * 100) < 25) {
        document.getElementById('background').innerHTML = 'body {background:url("beat-up-mario.jpg") center;	background-repeat:no-repeat; background-size: cover; color:white;}'
    }
}
// doument.body.style = {background:url("mario-gif-start.gif") center;background-repeat:no-repeat;}

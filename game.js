
// function onSlap(target) {
//     target.health = (target.health - Math.floor((Math.random() * 3) + 1)) * this.calcMods(target)
//     target.hits = target.hits + 1

//     update(target)
//     progressBar(target)
// }
// function onPunch(target) {
//     target.health = (target.health - Math.floor((Math.random() * 6) + 1)) * this.calcMods(target)
//     target.hits = target.hits + 1
//     update(target)
//     progressBar(target)
// }
// function onKick(target) {
//     target.health = (target.health - Math.floor((Math.random() * 12) + 1)) * this.calcMods(target)
//     target.hits = target.hits + 1
//     update(target)
//     progressBar(target)
// }
// function onSpecial(target) {
//     target.health = (target.health - Math.floor((Math.random() * 25) + 1)) * this.calcMods(target)
//     target.hits = target.hits + 1
//     update(target)
//     progressBar(target)
// }





// function progressBar(target) {
//     if (((target.health / target.start) * 100) <= 100 && ((target.health / target.start) * 100) >= 50) {
//         document.getElementById('progress').innerHTML = '<div class="progress-bar progress-bar-success progress-bar-striped active" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((target.health / target.start) * 100) + '%; height:2.5%;">Life</div>'
//         background(target)
//     } else if (((target.health / target.start) * 100) < 50 && ((target.health / target.start) * 100) >= 25) {
//         document.getElementById('progress').innerHTML = '<div class="progress-bar progress-bar-warning progress-bar-striped active" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((target.health / target.start) * 100) + '%; height:2.5%;">Life</div>'
//         background(target)
//     } else if (((target.health / target.start) * 100) < 25) {
//         document.getElementById('progress').innerHTML = '<div class="progress-bar progress-bar-danger progress-bar-striped active" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100" style="width: ' + ((target.health / target.start) * 100) + '%; height:2.5%;">Life</div>'
//         background(target)
//     }
// }









// function addMod(target, mod) {
//     if (target.items.length = 0) {
//         target.items.push(items[mod])
//     } else if (target.items.length = 1) {
//         target.items.pop()
//         target.items.push(items[mod])
//     }
// }

// function calcMods(target) {
//     var value = 1
//     for (var i = 0; i < target.items.length; i++) {
//         var mod = target.items[i];
//         value += mod.modifier

//     } return value
// }

// function handleReset(target) {
//     var health = robot.health = robot.start
//     var items = robot.items = []
//     var hits = robot.hits = 0
//     update(target)
//     progressBar(target)
//     background(target)

//     return health, hits, items
// }


// function background(target) {
//     if (((target.health / target.start) * 100) <= 100 && ((target.health / target.start) * 100) >= 50) {
//         document.getElementById('background').innerHTML = 'body {background:url("mario-gif-start.gif") center;background-repeat:no-repeat;}'
//     } else if (((target.health / target.start) * 100) < 50 && ((target.health / target.start) * 100) >= 25) {
//         document.getElementById('background').innerHTML = 'body {background:url("mario-2.jpg") center;	background-repeat:no-repeat;}'
//     } else if (((target.health / target.start) * 100) < 25) {
//         document.getElementById('background').innerHTML = 'body {background:url("beat-up-mario.jpg") center;	background-repeat:no-repeat; background-size: cover; color:white;}'
//     }
// }

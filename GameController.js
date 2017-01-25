function GameController(){
    var dataStore = new GameService()

     this.target = dataStore.target

  this.update = function(target) {
      var target = dataStore.getTarget(target)
    if (target.health > 0) {
        document.getElementById('hits').innerText = target.hits;
        document.getElementById('health').innerText = target.health.toFixed(1);
        document.getElementById('corpse').innerHTML = "";


    } else if (target.health <= 0) {
        document.getElementById('health').innerText = 0;
        document.getElementById('corpse').innerHTML = '<h1>' + target.name + ' is down</h1>';

    }
        progressBar(target)
        background(target)
}  


this.attack = function(type, target){
console.log(target)
   dataStore.attack(type, target)
   this.update(target)

}

this.addMod = function(target, mod){
    dataStore.addMod(target, mod)


}


this.handleReset = function(target){
dataStore.handleReset(target)
this.update(target)

}

var progressBar = function(target) {
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


var background =  function(target) {
    if (((target.health / target.start) * 100) <= 100 && ((target.health / target.start) * 100) >= 50) {
        document.getElementById('background').innerHTML = 'body {background:url("mario-gif-start.gif") center;background-repeat:no-repeat;}'
    } else if (((target.health / target.start) * 100) < 50 && ((target.health / target.start) * 100) >= 25) {
        document.getElementById('background').innerHTML = 'body {background:url("mario-2.jpg") center;	background-repeat:no-repeat;}'
    } else if (((target.health / target.start) * 100) < 25) {
        document.getElementById('background').innerHTML = 'body {background:url("beat-up-mario.jpg") center;	background-repeat:no-repeat; background-size: cover; color:white;}'
    }
}



}

var gameCtrl = new GameController()
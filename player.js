var player = function() {
	return {
	"setName": function(name){
	return name
	},
	"weapontype":function(k){
		if (k<5){
			{
				"1": "uzi",
				"2": "machineGun",
				"3": "shotgun"
				"4": "gunther"
					}
		else{
			return -1
		}
	},
	"setMedKit": function(i){
		if(i<100){
			return i;
		} else{
			return -1
		}
	},
	"setLevel":function(j){
		if (j<=5 && j>0){
			return j
		} else{
			return -1
		}
	},
	"shoot": function(){
	console.log(this.setName("querolousMosses ") + "shoot with weapon " + this.weapontype("1"))},
	"health": function(){
	console.log("my health is at " + this.setMedKit(99))},
	"level": function(){
	console.log("my level is at " + this.setLevel(5))}
			
		
	}
	}
p1 = player()
//console.log(p1.weapontype("2"));
p1.setName("machine");
//p1.setMedKit();
//p1.setLevel();
p1.shoot();
p1.health()
p1.level();

player()
var vehicle = function() {
	v1 = {
	start:function(){
		console.log("Vehicle Start")
	},
	stop:function(){
		console.log("Vehicle stop")
	},
	print_details:function(){
		{
			this.Weight = "900KG",
			this.Type = "hatchBack",
			this.Name = "swift"
			console.log(this.Weight)
			console.log(this.Type)
			console.log(this.Name)
			
		}
	}
}
}
vehicle = v1;
v1.start();
v1.stop()
v1.print_details()
//console.log(print_details.Name);

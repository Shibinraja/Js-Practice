

var count = 5;
(
function f1()
{
	while(count > 0)
	{

	console.log("stop me");
	
	count = count-1
	f1();
	}
})();
 

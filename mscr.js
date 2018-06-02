function rundt (){
   var element1 = document.getElementById('d-t');
	var dat = new Date();
    var hours= dat.getHours();
    var min = dat.getMinutes();
    var sec = dat.getSeconds();
    var d = dat.getDate();
    var m = dat.getMonth();
    var y = dat.getFullYear();
	m = m + 1;
	if (Number(m)<10){
	m ='0'+m;
	}
	if (Number(hours)<10){
	hours ='0'+ hours;
	}
	if (Number(sec)<10){
	sec ='0' + sec;
	
	}
	if (Number(min)<10){
	min = '0' + min;
	}
	if (Number(d)<10){
	d='0'+d;
	}
	element1.innerHTML =  (d+"."+m+"."+y+" "+hours+':'+min+':'+sec);
}
setInterval(rundt,1);
function locatl(){
	document.location.href = 'proffcode.besaba.com';
}
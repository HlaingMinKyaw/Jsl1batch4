var getprogressbar = document.getElementById('progress-bar');

window.onscroll = function(){scrollpoint()};

function scrollpoint(){
	// console.log('hi');

	var getscrolltop = document.documentElement.scrollTop;  // 0 to end of scroll bar

	// console.log(getscrolltop);

	var getscrollheight = document.documentElement.scrollHeight;  // screen height

	// console.log(getscrollheight);

	var getclientheight = document.documentElement.clientHeight;  // height of screen size & length of scroll bar

	// console.log(getclientheight);

	var calcheight = getscrollheight - getclientheight;

	// console.log(calcheight);

	// var getfinal = getscrolltop * 100 / calcheight;
	var getfinal = Math.floor((getscrolltop / calcheight) * 100);

	// console.log(getfinal);

	getprogressbar.style.width = `${getfinal}%`;
}

scrollpoint();


function printme(){
	// console.log('hay');

	window.print();
}


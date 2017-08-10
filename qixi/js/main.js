var can1;
var can2;

var ctx1;
var ctx2;

var lastTime;
var deltaTime;


var canWidth =  document.body.clientWidth;
var canHeight =  document.body.clientHeight;
//检测屏幕的宽高，并且赋值给canWidth以及canHeight

//console.log(canWidth);
//console.log(canHeight);

var bgPic = new Image();
var bgPic01 = new Image();

document.body.onload = game;
//body加载完以后把game作为所有的脚本入口
function game()
{
	init();
	lastTime =Date.now();
	deltaTime = 0;
	gameloop();
	drawMoon();
}

function init()
{
	//获得canvas context的
	can1 = document.getElementById("canvas1");
	ctx1 = can1.getContext('2d');
	
	can2 = document.getElementById("canvas2");
	ctx2 = can2.getContext('2d');
	
	bgPic.src = "./img/qixibg-no.jpg";
	bgPic01.src = "./img/qixi-moon.png";
	
	can1.width = canWidth;
	can1.height = canHeight;
	can2.width = canWidth;
	can2.height = canHeight;
}

function gameloop(){
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	drawBackground();
}

//画月亮
function drawMoon()
{
	ctx2.drawImage(bgPic01 , 0 , 0 , canWidth , canWidth);
	console.log("背景画一次");
}
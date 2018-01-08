var musics = ['azxyq','bcgm','ltx','nz','rz','wlgb','wn'];
var index =  0;
	
function stop(){
	comeon.currentTime = 0;
	comeon.pause();
}

function up(){
	if(index == 0){
		index = musics.length-1; 
	} 
	else{
		index--;
	}

	var comeOn = document.getElementById('comeon');
	comeOn.src = "data/" + musics[index] + ".mp3";
	comeOn.play();

	var pickLi = document.getElementsByTagName('li');
	for(var i = 0;i<pickLi.length;i++){
		if(i == index){
			pickLi[i].className = 'chosen';
		} 
		else{
			pickLi[i].className = '';
		}
	}
}

function down(){
	if(index == musics.length-1) {
		index = 0;
	} 
	else{
		index++;
	}

	var comeOn = document.getElementById('comeon');
	comeOn.src = "data/" + musics[index] + ".mp3";
	comeOn.play();
	
	var pickLi = document.getElementsByTagName('li');
	for(var i = 0;i<pickLi.length;i++){	
		if (i == index) {
			pickLi[i].className = 'chosen';
		} else {
			pickLi[i].className = '';
		}
	}
}
	
/*
	暂停/开始按钮：
		如果在播放中，则暂停；如果已经暂停，则播放。
*/
function gorp(){
	var comeOn = document.getElementById('comeon');
	if(comeOn.paused){
		comeOn.play();
	} 
	else{
		comeOn.pause();		
	}
}
	
/*
	可选功能：
		在播放列表中选择歌曲，需要设置参数num表示第几首歌曲和参数event表示超级变量事件——选择的当前的触发事件。
*/
function chosetheone(num,event){
	index = num;
	var li = event.target;
	var pickLi = document.getElementsByTagName('li');

	for(var i = 0; i <pickLi.length; i++){
		pickLi[i].className = '';
	}
	li.className = 'chosen';
	var comeOn = document.getElementById('comeon');
	comeOn.src = "data/" + musics[index] + ".mp3";
	comeOn.play();
}
	
/*
	进度条：
		制作一个额外的进度条，可以看到播放进度。
*/
function nav(){
	var comeOn = document.getElementById('comeon');
	var width = comeOn.currentTime/comeOn.duration;
	var tiao = document.getElementById('tiao');
	tiao.style.width = width*100 + '%';
}
setInterval(nav,100);


/*
	提示音频时长：
		输出整首歌曲的长度，使用“分钟 ：秒数”的格式。
*/	
function ct(){
	var comeOn = document.getElementById('comeon');
	var m = Math.floor(comeOn.duration/60);
	var s = Math.round(comeOn.duration) - m*60;
	alert(m + ':' + s);
}
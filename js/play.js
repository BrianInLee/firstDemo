function go(){
	/*
		1.声明变量comeOn用来获取id值为comeon的元素整体（音频播放器主体）;
		2.获取是否单曲循环的元素，声明变量single用来获取id值为single的元素整体（复选框）;
		3.获取是否随机播放的元素，声明变量random用来获取Id值为random的元素整体（复选框）;
		4.获取所有的歌单，声明变量pickLi用来获取并选中所有li标签的元素;
	*/
	var comeOn = document.getElementById('comeon');
	var single = document.getElementById('single');
	var random = document.getElementById('random');
	var pickLi = document.getElementsByTagName('li');
		
	if(single.checked == true){	
		/*
			1.如果单曲循环被选中了，则重新播放该歌曲；
			2.复选框的功能：判断是否选中，如果选中则在当前音频播放结束后继续播放该音频。
		*/
		comeOn.play();
	}
	else if(random.checked == true){
		/*
			1.如果随机播放被选中了，则随机播放歌曲；
			2.复选框的功能：判断是否选中，如果选中则在当前音频播放结束后继续随机播放。
		*/
		comeOn.rand();
	}
	else{
		/*
			1.若未选中则判断其键值，使其循环播放，即0->1->2->3->4->5->6->0进行循环；
			2.如果已经播放到了最后一首歌曲，重置到第一首，否则下一首。
		*/
		if(index == musics.length-1) {
			/*
				若index的值为musics.length-1则在播放结束时使其改为0
			*/
			index = 0;
		}
		else{
			/*
				若i的值不为musics.length-1，则i的值改为当前i+1
			*/
			index ++;
		}
		/*
			将新的i值赋值给播放器主体的地址属性，前面加上公共的部分
		*/
		comeOn.src = "data/" + musics[index] + ".mp3";
		comeOn.play(); 

		for(var i = 0;i<pickLi.length;i++){
			if(i == index){
				pickLi[i].className = 'chosen';
			}
			else{
				pickLi[i].className = '';
			}
		}
	}
}

function rand(){
	/*
		1.声明变量comeOn用来获取Id值为comeon的元素整体（音频播放器主体）;
		2.获取所有的歌单，声明变量pickLi用来获取并选中所有li标签的元素;
		3.Math.random()是表示在0,1之间的随机一个一位小数;
		4.获取歌曲总数得到m值;
	*/
	var comeOn = document.getElementById('comeon');
	var pickLi = document.getElementsByTagName('li');
	var n = Math.random();
	var m = musics.length;
	index = Math.floor(n*m);
		
	comeOn.src = "data/" + musics[index] + ".mp3";
	comeOn.play();
		
	for(var i = 0;i<pickLi.length;i++){
		if(i == index){
			pickLi[i].className = 'chosen';
		}
		else{
			pickLi[i].className = '';
		}
	}
}

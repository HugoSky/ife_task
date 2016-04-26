var waterFall = function(columnNum){
	this.columnNum = columnNum;
	this.render();
}
waterFall.prototype = {
	render : function(){
		var width = $('#waterfall').clientWidth/this.columnNum,
			i,str='';
		for(i = 1;i <= this.columnNum;i++){
			str += '<div class="column" id="column'+i+'" style="width:'+width+'px;"></div>';
		}
		$('#waterfall').innerHTML+=str;
		this.columns = $('#waterfall').querySelectorAll('.column');
	},
	getRandomUrls : function(){
		var height,i,whArr=[];
		for(i=20;i>0;i--){
			height = Math.ceil(Math.random()*100)+200;
			url = 'http://placehold.it/300X'+height;
			whArr.push(url);
		}
		return whArr;
	},
	insertPhotos : function(){
		var whArr = this.getRandomUrls(),
			  len = whArr.length,
			  i,lowestColumn,str;
		for(i = len-1;i >= 0;i--){
			lowestColumn = this.getLowestColumn();
			str = '<img src='+whArr[i]+' style="height:"'+whArr[i].slice(24)+'px"/>';
			lowestColumn.innerHTML+=str;
		}
	},
	getLowestColumn : function(){
		var lowest = this.columns[0];
		for (i = 1; i < this.columns.length; i++) {
			if(parseInt(getComputedStyle(this.columns[i],null).height)
				< parseInt(getComputedStyle(lowest,null).height)){
				lowest = this.columns[i];
			}
		}
		return lowest;
	}
}

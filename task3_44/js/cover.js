var cover = {
	render : function(url,width){
		var imgBox = document.createElement('div');
		var str = '<div class="img-box" id="img-box" style="width:'+width+'px">'+
		'<img id="large" class="img-large" src="'+url+'"></div>';
		$('#cover').innerHTML = str;
		$('#cover').className = 'cover active';
		EventUtil.addHandler('click', $('#cover'), function(event){
			cover.close();
		});
	},
	close : function(){
		$('#cover').className = 'cover';
	}
}

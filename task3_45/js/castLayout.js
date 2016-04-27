 var CastLayout = function(){
	this.clientWidth = 0
	this.container = document.querySelector('.container')
	this.minHeght = 300
	this.photos = []
	this.init()
}
CastLayout.prototype.init = function(){
	this.clientWidth = this.container.clientWidth
}
CastLayout.prototype.insertPhotos = function(photos){
	//如果上次有剩余图片  则将图片放入最新的队列的头部
	photos = photos.concat(this.photos)
	//存储相对宽度值  当超过容器宽度时 就返回之前的图片
	var contentWidth = 0;
	for(var i=0;i < photos.length;i++){
		contentWidth += (this.minHeght/photos[i].height)*photos[i].width+8
		if(contentWidth >= this.clientWidth){
			var arr = photos.splice(0,i+1)
			this.append(arr,contentWidth/(this.clientWidth))
			i=-1
			contentWidth = 0
		}
	}
	//将剩余的照片添加到this.photos
	this.photos = this.photos.concat(photos)
}
CastLayout.prototype.append = function(rowPhotos,scale){
	var height = 300/scale,
	row = document.createElement('div'),
	str = '';
	row.className = 'container-row';
    for(var i = 0;i < rowPhotos.length;i++){
		str += '<div class="img-wrapper"><img src="http://placehold.it/'+rowPhotos[i].width+'x'+rowPhotos[i].height+'"/></div>'
	}
	row.style.height = height+'px'
	row.innerHTML = str
	this.container.appendChild(row)
}


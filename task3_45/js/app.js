 var App = function(cast){
	this.page = 0
	this.isLoading = false
	this.cast = cast
	window.addEventListener('scroll',this.scroll.bind(this))
	this.load()
}
App.prototype.load = function(){
	if(this.isLoading === false){
		this.isLoading = true
		this.loaded(this.getPhotos())
	}
}
App.prototype.loaded = function(photos){
	this.isLoading = false
	this.cast.insertPhotos(photos)
}
//生成图片随机宽高值
App.prototype.getPhotos = function(){
	var photos = [],width,height,obj={}
	for(var i = 0;i<30;i++){
		width = Math.ceil(Math.random()*300+300)
		height = Math.ceil(Math.random()*30+300)
		obj['width'] = width
		obj['height'] = height
		photos.push(obj)
		obj={}
	}
	return photos
}
App.prototype.scroll = function(){
	var scrollTop = document.body.scrollTop || document.documentElement.scrollTop
	if(scrollTop+innerHeight >= document.body.clientHeight && this.isLoading == false){
		this.load()
	}
}


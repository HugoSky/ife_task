var water = new waterFall(5);
water.insertPhotos();

EventUtil.addHandler('click', $('body'), function(event){
	var event = EventUtil.getEvent(event),
	    target = EventUtil.getTarget(event),
	    width;
	if(typeof target.src === 'string'){
 		url = target.src;
 		width = url.substr(20,3);
		$('#large').src = url;
		$('#img-box').style.width = width+'px';
		cover.render(url,width);
	}
})
window.onscroll = function(){
	if(isScrollLoad.isLoad() == true){
		water.insertPhotos();
	}
}
(function(){
	try {
		var list = document.getElementsByTagName("ol");
		for (var i = 0; i < list.length; i++) {
			if (list[i].getAttribute("start")){
				var start_value = list[i].getAttribute("start") - 1
				list[i].style.counterReset = "section " + start_value.toString()
			}
		}
	} catch (err) {
		console.log(err)
	};

})();

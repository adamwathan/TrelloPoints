chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getPointValues") {
    	var pointValues = localStorage["point_values"];

    	if (pointValues === null) {
    		pointValues = JSON.stringify([1,2,4,8]);
    	}

      	sendResponse({pointValues: localStorage['point_values']});    	
    } else {
      	sendResponse({}); // snub them.
    }
});
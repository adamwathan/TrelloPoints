chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    if (request.method == "getPointValues")
      sendResponse({pointValues: localStorage['point_values']});
    else
      sendResponse({}); // snub them.
});
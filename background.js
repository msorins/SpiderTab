chrome.webRequest.onHeadersReceived.addListener(

    function (details) {
        console.log("SPIDERTAB PARSING: ", details)
        for (var j = 0; j < details.responseHeaders.length; ++j) {
            if (details.responseHeaders[j].name.toLowerCase() == 'x-frame-options') {
                details.responseHeaders.splice(j, 1);

                return {
                    responseHeaders: details.responseHeaders
                };
            }
        }
    }, {
    urls: ["*://*/*spider_tab_iframe"]
}, ["blocking", "responseHeaders"]);
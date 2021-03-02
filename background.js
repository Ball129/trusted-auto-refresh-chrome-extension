// this is the background code...

// listen for our browerAction to be clicked
chrome.tabs.onUpdated.addListener(function(tabId,changeInfo,tab){
	// for the current tab, inject the "inject.js" file & execute it
	if (tab.url.indexOf("https://gist.github.com/") > -1 && 
      changeInfo.url === undefined){  
		chrome.tabs.executeScript(tab.ib, {
			file: 'inject.js'
		});
	}
});

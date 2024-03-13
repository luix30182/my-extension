chrome.tabs.onUpdated.addListener(id => {
	chrome.scripting.executeScript({
		target: { tabId: id },
		func: () => {
			console.warn(window);
		}
	});
});

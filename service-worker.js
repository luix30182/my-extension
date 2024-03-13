chrome.tabs.onUpdated.addListener(function (id, changeInfo, tab) {
	console.warn('Updating data', { id, changeInfo, tab });
	chrome.scripting.executeScript({
		target: { tabId: id },
		func: () => {
			console.warn(window);
		}
	});
});

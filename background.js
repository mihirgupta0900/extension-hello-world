chrome.runtime.onInstalled.addEventListener(() => {
  chrome.storage.sync.set({ color: "#3aa757" }, () => {
    console.log("The color is green");
  });
});

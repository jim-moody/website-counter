const getHistory = () => {
  // var microsecondsPerDay = 1000 * 60 * 60 * 24 * 2;
  // var oneDayAgo = new Date().getTime() - microsecondsPerDay;
  const today = new Date();
  today.setHours(0);
  today.setMinutes(0);
  today.setSeconds(0);

  const searchOptions = {
    text: "", // Return every history item....
    startTime: today.getTime(), // that was accessed less than one week ago.
    maxResults: 1000000000
  };
  chrome.history.search(searchOptions, historyItems => {
    setCounter(historyItems.length);
  });
};

const setCounter = count => {
  document.getElementById("counter").innerText = count;
};

getHistory();

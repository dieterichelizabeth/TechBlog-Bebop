async function timeout() {
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  // If response okay, go to the session-timeout page
  if (response.ok) {
    document.location.replace("/timeout");
  } else {
    alert(response.statusText);
  }
}

// Funciton to track time
let sessionTracker = function () {
  let countDown;

  // If either the window is re-loaded, or the user clicks, start a new timer
  window.onload = newTimer;
  document.onclick = newTimer;

  function newTimer() {
    clearTimeout(countDown);
    countDown = setTimeout(timeout, 30000);
  }
};

sessionTracker();

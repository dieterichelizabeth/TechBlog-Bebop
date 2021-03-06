async function logout() {
  // Post request: user logout
  const response = await fetch("/api/users/logout", {
    method: "post",
    headers: { "Content-Type": "application/json" },
  });

  // If response okay, return to landingpage
  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#logoutButton").addEventListener("click", logout);

async function deletePostHandler(event) {
  // Define the post id
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  // Delete request: destroy one post
  const response = await fetch("/api/posts/" + id, {
    method: "delete",
    body: JSON.stringify({
      id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // If okay, go to dashboard
  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector("#deletePost")
  .addEventListener("click", deletePostHandler);

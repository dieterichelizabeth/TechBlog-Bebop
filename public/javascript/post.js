async function editPostHandler(event) {
  console.log("editing post");
}

async function deletePostHandler(event) {
  // console.log("deleting post");

  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const response = await fetch("/api/posts/" + id, {
    method: "delete",
    body: JSON.stringify({
      id,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/homepage");
  } else {
    alert(response.statusText);
  }
}

document.querySelector("#editPost").addEventListener("click", editPostHandler);

document
  .querySelector("#deletePost")
  .addEventListener("click", deletePostHandler);

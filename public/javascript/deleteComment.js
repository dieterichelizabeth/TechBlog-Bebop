async function deleteCommentHandler(event) {
  // Define the post and comment id (parentId = comment id)
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const parentId = event.target.parentNode.id;

  // Delete Request: destroy one comment
  const response = await fetch("/api/comments/" + parentId, {
    method: "delete",
    body: JSON.stringify({
      parentId,
    }),
    headers: { "Content-Type": "application/json" },
  });

  // If okay, return to single post page
  if (response.ok) {
    document.location.replace("/post/" + post_id);
  } else {
    alert(response.statusText);
  }
}

document.querySelectorAll("#deleteComment").forEach((item) => {
  item.addEventListener("click", deleteCommentHandler);
});

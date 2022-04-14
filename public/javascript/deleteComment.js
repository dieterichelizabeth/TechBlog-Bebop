async function deleteCommentHandler(event) {
  console.log("deleting comment");

  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];

  const parentId = event.target.parentNode.id;
  console.log(parentId);

  const response = await fetch("/api/comments/" + parentId, {
    method: "delete",
    body: JSON.stringify({
      parentId,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/post/" + post_id);
  } else {
    alert(response.statusText);
  }
}

document.querySelectorAll("#deleteComment").forEach((item) => {
  item.addEventListener("click", deleteCommentHandler);
});

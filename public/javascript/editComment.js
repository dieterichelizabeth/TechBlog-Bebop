async function editCommentHandler(event) {
  console.log("editing comment");

  // create the text area, add the save button, hide the edit and delete
  const commentEditor =
    event.target.parentNode.parentNode.parentNode.childNodes[1];
  const previousComment = commentEditor.innerHTML;
  console.log(commentEditor);

  const textarea = document.createElement("textarea");
  textarea.classList.add("w100");
  textarea.innerHTML = previousComment;

  commentEditor.replaceWith(textarea);
  // pass the save button as an argument to the next function
}

// create a function to handle the routes to update the comment w/ event listener
// route will be similar to the new comment route
// re-display the single-post page

document.querySelectorAll("#editComment").forEach((item) => {
  item.addEventListener("click", editCommentHandler);
});

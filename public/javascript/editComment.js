async function editCommentHandler(event) {
  console.log("editing comment");
  const buttonDiv = event.target.parentNode;
  const commentId = event.target.parentNode.id;

  // get the previous comment
  const commentEditor =
    event.target.parentNode.parentNode.parentNode.childNodes[1];
  const previousComment = commentEditor.innerHTML;

  // create the text area
  const textarea = document.createElement("textarea");
  textarea.classList.add("w100");
  textarea.innerHTML = previousComment;
  commentEditor.replaceWith(textarea);

  // disable the edit button
  document.getElementById("editComment").disabled = true;

  // create the save button
  const saveButton = document.createElement("button");
  saveButton.setAttribute("id", "saveComment");
  saveButton.classList.add("editbutton");
  saveButton.innerHTML = "Save";
  buttonDiv.appendChild(saveButton);
  // pass the save button as an argument to the next function
  saveCommentHandler();
}

async function saveCommentHandler(event) {
  const saveButton = document.getElementById("saveComment");
  saveButton.addEventListener("click", () => {
    console.log("Saving comment");
  });
}
// create a function to handle the routes to update the comment w/ event listener
// route will be similar to the new comment route
// re-display the single-post page

document.querySelectorAll("#editComment").forEach((item) => {
  item.addEventListener("click", editCommentHandler);
});
